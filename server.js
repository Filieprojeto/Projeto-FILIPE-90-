/**
 * Wild Atlantic Madeira 4x4 — Server
 * Auth: JWT · DB: SQLite (better-sqlite3) · Uploads: Multer + Cloudflare R2
 */

const express     = require('express');
const path        = require('path');
const fs          = require('fs');
const compression = require('compression');
const helmet      = require('helmet');
const multer      = require('multer');
const jwt         = require('jsonwebtoken');
const bcrypt      = require('bcryptjs');
const Database    = require('better-sqlite3');
const { S3Client, PutObjectCommand, ListObjectsV2Command, DeleteObjectCommand } = require('@aws-sdk/client-s3');

const app  = express();
const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET || 'wildatlantic_secret_change_in_production';

// ── DIRS
const PUBLIC_DIR  = path.join(__dirname, 'public');
const DATA_DIR    = process.env.DATA_DIR || '/app/data';
const UPLOADS_DIR = path.join(DATA_DIR, 'uploads');
[UPLOADS_DIR, DATA_DIR].forEach(d => fs.mkdirSync(d, { recursive: true }));

// ── CLOUDFLARE R2
const R2 = new S3Client({
  region: 'auto',
  endpoint: `https://${process.env.CF_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId:     process.env.R2_ACCESS_KEY_ID     || '',
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY || '',
  },
});
const R2_BUCKET     = process.env.R2_BUCKET_NAME || '';
const R2_PUBLIC_URL = (process.env.R2_PUBLIC_URL || '').replace(/\/$/, '');

// ── DATABASE
const db = new Database(path.join(DATA_DIR, 'site.db'));
db.pragma('journal_mode = WAL');

db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    created TEXT DEFAULT (datetime('now'))
  );
  CREATE TABLE IF NOT EXISTS content (
    key TEXT PRIMARY KEY,
    value TEXT NOT NULL,
    updated TEXT DEFAULT (datetime('now'))
  );
  CREATE TABLE IF NOT EXISTS passeios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo TEXT NOT NULL,
    descricao TEXT NOT NULL,
    duracao TEXT NOT NULL,
    pax TEXT NOT NULL,
    preco TEXT NOT NULL,
    badge TEXT,
    badge_tipo TEXT DEFAULT 'verde',
    imagem TEXT,
    ordem INTEGER DEFAULT 0,
    ativo INTEGER DEFAULT 1,
    updated TEXT DEFAULT (datetime('now'))
  );
  CREATE TABLE IF NOT EXISTS galeria (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    ficheiro TEXT NOT NULL,
    legenda TEXT,
    largura TEXT DEFAULT 'normal',
    ordem INTEGER DEFAULT 0,
    ativo INTEGER DEFAULT 1,
    updated TEXT DEFAULT (datetime('now'))
  );
  CREATE TABLE IF NOT EXISTS reservas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    email TEXT NOT NULL,
    telefone TEXT,
    data TEXT NOT NULL,
    pessoas TEXT NOT NULL,
    passeio TEXT NOT NULL,
    mensagem TEXT,
    estado TEXT DEFAULT 'pendente',
    created TEXT DEFAULT (datetime('now'))
  );
  CREATE TABLE IF NOT EXISTS videos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo TEXT NOT NULL,
    youtube_url TEXT NOT NULL,
    descricao TEXT,
    ordem INTEGER DEFAULT 0,
    ativo INTEGER DEFAULT 1,
    updated TEXT DEFAULT (datetime('now'))
  );
`);

// SEED admin user
const adminUser = db.prepare('SELECT id FROM users WHERE username = ?').get('admin');
if (!adminUser) {
  const hash = bcrypt.hashSync(process.env.ADMIN_PASSWORD || 'admin123', 10);
  db.prepare('INSERT INTO users (username, password) VALUES (?, ?)').run('admin', hash);
  console.log('Admin user created — user: admin | pass: admin123');
}

// SEED default content
const defaultContent = {
  hero_eyebrow:'Ilha da Madeira · Portugal',
  hero_title1:'A Natureza',hero_title2:'Selvagem',hero_title3:'Espera por Ti',
  hero_sub:'Passeios privados exclusivos em jipe 4×4 pelas montanhas, florestas e levadas da Madeira. Uma aventura autêntica, ao teu ritmo.',
  hero_bg:'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1800&q=85',
  sobre_titulo:'Guias Locais. Paixão Autêntica.',
  sobre_texto1:'Somos uma empresa familiar com raízes profundas na Ilha da Madeira. Conhecemos cada curva de estrada, cada miradouro escondido, cada levada que serpenteia pela floresta laurissilva.',
  sobre_texto2:'Os nossos passeios em jipe 4×4 são totalmente privados — só a sua família ou grupo. Sem multidões, sem pressa. Apenas a Madeira na sua forma mais autêntica.',
  sobre_anos:'10',
  sobre_img1:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
  sobre_img2:'https://images.unsplash.com/photo-1589308454223-2c69d1d4b953?w=400&q=80',
  stat1_n:'500+',stat1_l:'Clientes Felizes',
  stat2_n:'15+',stat2_l:'Rotas Exclusivas',
  stat3_n:'100%',stat3_l:'Privado',
  telefone:'+351 912 345 678',
  email:'info@wildatlanticmadeira4x4.pt',
  whatsapp:'351912345678',
  horario:'Todos os dias · 07:00 – 20:00',
  instagram:'#',facebook:'#',youtube:'#',tripadvisor:'#',
};
const insertContent = db.prepare('INSERT OR IGNORE INTO content (key, value) VALUES (?, ?)');
for (const [k,v] of Object.entries(defaultContent)) insertContent.run(k,v);

// SEED passeios
if (db.prepare('SELECT COUNT(*) as c FROM passeios').get().c === 0) {
  const ins = db.prepare('INSERT INTO passeios (titulo,descricao,duracao,pax,preco,badge,badge_tipo,imagem,ordem) VALUES (?,?,?,?,?,?,?,?,?)');
  [
    ['Picos & Montanhas','Ascenda ao Pico do Arieiro (1818m) e ao Pico Ruivo. Vistas acima das nuvens.','8h','1–8 pax','€120','Mais Popular','verde','https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=600&q=80',1],
    ['Floresta Laurissilva','Mergulhe na floresta primeva Património Mundial UNESCO. Levadas, fetos gigantes e silêncio.','6h','1–8 pax','€95','','verde','https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80',2],
    ['Costa Norte Selvagem','Falésias dramáticas, cascatas que caem para o oceano, aldeias remotas.','7h','1–8 pax','€110','','verde','https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',3],
    ['Santana & Paul da Serra','As casas típicas de Santana e o planalto agreste do Paul da Serra.','9h','1–8 pax','€130','','verde','https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=600&q=80',4],
    ['Sunrise no Pico','Nascer do sol acima das nuvens. Uma experiência inesquecível.','4h','1–6 pax','€150','Exclusivo','gold','https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80',5],
    ['Tour à Medida','Desenhamos o passeio perfeito para si. Totalmente personalizado.','Flexível','1–8 pax','Consulta','','verde','https://images.unsplash.com/photo-1540206395-68808572332f?w=600&q=80',6],
  ].forEach(r => ins.run(...r));
}

// SEED galeria
if (db.prepare('SELECT COUNT(*) as c FROM galeria').get().c === 0) {
  const ins = db.prepare('INSERT INTO galeria (ficheiro,legenda,largura,ordem) VALUES (?,?,?,?)');
  [
    ['https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80','Pico do Arieiro','wide',1],
    ['https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=500&q=80','Floresta Laurissilva','normal',2],
    ['https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80','Off-Road','normal',3],
    ['https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&q=80','Costa Norte','normal',4],
    ['https://images.unsplash.com/photo-1448375240586-882707db888b?w=500&q=80','Levadas','tall',5],
    ['https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=500&q=80','Santana','normal',6],
    ['https://images.unsplash.com/photo-1540206395-68808572332f?w=500&q=80','Pôr do Sol','normal',7],
    ['https://images.unsplash.com/photo-1589308454223-2c69d1d4b953?w=500&q=80','Miradouro','normal',8],
  ].forEach(r => ins.run(...r));
}

// MIDDLEWARE
app.use(helmet({
  contentSecurityPolicy:{directives:{
    defaultSrc:["'self'"],
    scriptSrc:["'self'","'unsafe-inline'","'unsafe-hashes'"],
    scriptSrcAttr:["'unsafe-inline'","'unsafe-hashes'"],
    styleSrc:["'self'","'unsafe-inline'","https://fonts.googleapis.com"],
    fontSrc:["'self'","https://fonts.gstatic.com"],
    imgSrc:["'self'","data:","blob:","https:","http:"],
    frameSrc:["'self'","https://www.openstreetmap.org","https://www.youtube.com","https://www.youtube-nocookie.com"],
    connectSrc:["'self'"],
  }},
}));
app.use(compression());
app.use(express.json({ limit:'2mb' }));
app.use(express.urlencoded({ extended:false, limit:'2mb' }));

// STATIC
app.use(express.static(PUBLIC_DIR, {
  etag:true,
  setHeaders(res,fp){ if(fp.endsWith('.html')) res.setHeader('Cache-Control','no-cache'); },
}));
app.use('/uploads', express.static(UPLOADS_DIR));

// MULTER local (imagens site, máx 8MB)
const storage = multer.diskStorage({
  destination:(_req,_file,cb)=>cb(null,UPLOADS_DIR),
  filename:(_req,file,cb)=>{
    const ext=path.extname(file.originalname).toLowerCase();
    cb(null,`${Date.now()}-${Math.random().toString(36).slice(2)}${ext}`);
  },
});
const upload = multer({ storage, limits:{fileSize:8*1024*1024},
  fileFilter(_req,file,cb){ cb(null,/^image\/(jpeg|jpg|png|webp|gif)$/.test(file.mimetype)); }
});

// MULTER R2 (fotos + vídeos em memória, máx 500MB)
const uploadR2 = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 500 * 1024 * 1024 },
  fileFilter(_req, file, cb) {
    const ok = /^(image\/(jpeg|jpg|png|webp|gif)|video\/(mp4|quicktime|webm|mov))$/.test(file.mimetype);
    cb(null, ok);
  },
});

// AUTH MW
function auth(req,res,next){
  const token=(req.headers.authorization||'').replace('Bearer ','');
  if(!token) return res.status(401).json({error:'Token em falta'});
  try { req.user=jwt.verify(token,JWT_SECRET); next(); }
  catch { res.status(401).json({error:'Token inválido'}); }
}

// ── PUBLIC API
app.get('/api/site',(_req,res)=>{
  const content=db.prepare('SELECT key,value FROM content').all().reduce((o,r)=>{o[r.key]=r.value;return o;},{});
  const passeios=db.prepare('SELECT * FROM passeios WHERE ativo=1 ORDER BY ordem').all();
  const galeria=db.prepare('SELECT * FROM galeria WHERE ativo=1 ORDER BY ordem').all();
  const videos=db.prepare('SELECT * FROM videos WHERE ativo=1 ORDER BY ordem').all();
  res.json({content,passeios,galeria,videos});
});

app.post('/api/reserva',(req,res)=>{
  const{nome,email,telefone,data,pessoas,passeio,mensagem}=req.body;
  if(!nome||!email||!data||!pessoas||!passeio)
    return res.status(400).json({success:false,message:'Campos obrigatórios em falta.'});
  db.prepare('INSERT INTO reservas (nome,email,telefone,data,pessoas,passeio,mensagem) VALUES (?,?,?,?,?,?,?)')
    .run(nome,email,telefone||'',data,pessoas,passeio,mensagem||'');
  res.json({success:true,message:'Pedido enviado! Entraremos em contacto em breve.'});
});

// ── AUTH API
app.post('/api/auth/login',(req,res)=>{
  const{username,password}=req.body;
  const user=db.prepare('SELECT * FROM users WHERE username=?').get(username);
  if(!user||!bcrypt.compareSync(password,user.password))
    return res.status(401).json({error:'Credenciais inválidas'});
  const token=jwt.sign({id:user.id,username:user.username},JWT_SECRET,{expiresIn:'12h'});
  res.json({token,username:user.username});
});

app.post('/api/auth/change-password',auth,(req,res)=>{
  const{currentPassword,newPassword}=req.body;
  if(!newPassword||newPassword.length<6) return res.status(400).json({error:'Mínimo 6 caracteres'});
  const user=db.prepare('SELECT * FROM users WHERE id=?').get(req.user.id);
  if(!bcrypt.compareSync(currentPassword,user.password)) return res.status(401).json({error:'Password atual incorreta'});
  db.prepare('UPDATE users SET password=? WHERE id=?').run(bcrypt.hashSync(newPassword,10),req.user.id);
  res.json({success:true});
});

// ── ADMIN: Content
app.get('/api/admin/content',auth,(_req,res)=>{
  res.json(db.prepare('SELECT key,value FROM content').all().reduce((o,r)=>{o[r.key]=r.value;return o;},{}));
});
app.put('/api/admin/content',auth,(req,res)=>{
  const upsert=db.prepare("INSERT INTO content(key,value,updated)VALUES(?,?,datetime('now'))ON CONFLICT(key)DO UPDATE SET value=excluded.value,updated=excluded.updated");
  db.transaction(u=>{for(const[k,v]of Object.entries(u))upsert.run(k,String(v));})(req.body);
  res.json({success:true});
});

// ── ADMIN: Passeios
app.get('/api/admin/passeios',auth,(_req,res)=>res.json(db.prepare('SELECT * FROM passeios ORDER BY ordem').all()));
app.post('/api/admin/passeios',auth,(req,res)=>{
  const{titulo,descricao,duracao,pax,preco,badge,badge_tipo,imagem,ordem}=req.body;
  const r=db.prepare('INSERT INTO passeios(titulo,descricao,duracao,pax,preco,badge,badge_tipo,imagem,ordem)VALUES(?,?,?,?,?,?,?,?,?)')
    .run(titulo,descricao,duracao,pax,preco,badge||'',badge_tipo||'verde',imagem||'',ordem||99);
  res.json({id:r.lastInsertRowid});
});
app.put('/api/admin/passeios/:id',auth,(req,res)=>{
  const{titulo,descricao,duracao,pax,preco,badge,badge_tipo,imagem,ordem,ativo}=req.body;
  db.prepare("UPDATE passeios SET titulo=?,descricao=?,duracao=?,pax=?,preco=?,badge=?,badge_tipo=?,imagem=?,ordem=?,ativo=?,updated=datetime('now') WHERE id=?")
    .run(titulo,descricao,duracao,pax,preco,badge||'',badge_tipo||'verde',imagem||'',ordem||0,ativo??1,req.params.id);
  res.json({success:true});
});
app.delete('/api/admin/passeios/:id',auth,(req,res)=>{
  db.prepare('DELETE FROM passeios WHERE id=?').run(req.params.id);
  res.json({success:true});
});

// ── ADMIN: Galeria
app.get('/api/admin/galeria',auth,(_req,res)=>res.json(db.prepare('SELECT * FROM galeria ORDER BY ordem').all()));
app.post('/api/admin/galeria',auth,upload.single('imagem'),(req,res)=>{
  const ficheiro=req.file?`/uploads/${req.file.filename}`:req.body.url;
  if(!ficheiro) return res.status(400).json({error:'Ficheiro ou URL em falta'});
  const{legenda,largura,ordem}=req.body;
  const r=db.prepare('INSERT INTO galeria(ficheiro,legenda,largura,ordem)VALUES(?,?,?,?)')
    .run(ficheiro,legenda||'',largura||'normal',ordem||99);
  res.json({id:r.lastInsertRowid,ficheiro});
});
app.put('/api/admin/galeria/:id',auth,(req,res)=>{
  const{legenda,largura,ordem,ativo}=req.body;
  db.prepare("UPDATE galeria SET legenda=?,largura=?,ordem=?,ativo=?,updated=datetime('now') WHERE id=?")
    .run(legenda||'',largura||'normal',ordem||0,ativo??1,req.params.id);
  res.json({success:true});
});
app.delete('/api/admin/galeria/:id',auth,(req,res)=>{
  const row=db.prepare('SELECT ficheiro FROM galeria WHERE id=?').get(req.params.id);
  if(row?.ficheiro?.startsWith('/uploads/')){
    const fp=path.join(UPLOADS_DIR,path.basename(row.ficheiro));
    if(fs.existsSync(fp))fs.unlinkSync(fp);
  }
  db.prepare('DELETE FROM galeria WHERE id=?').run(req.params.id);
  res.json({success:true});
});

// ── ADMIN: Upload genérico local
app.post('/api/admin/upload',auth,upload.single('imagem'),(req,res)=>{
  if(!req.file) return res.status(400).json({error:'Nenhum ficheiro recebido'});
  res.json({url:`/uploads/${req.file.filename}`});
});

// ── ADMIN: Reservas
app.get('/api/admin/reservas',auth,(_req,res)=>res.json(db.prepare('SELECT * FROM reservas ORDER BY created DESC').all()));
app.put('/api/admin/reservas/:id/estado',auth,(req,res)=>{
  db.prepare('UPDATE reservas SET estado=? WHERE id=?').run(req.body.estado,req.params.id);
  res.json({success:true});
});
app.delete('/api/admin/reservas/:id',auth,(req,res)=>{
  db.prepare('DELETE FROM reservas WHERE id=?').run(req.params.id);
  res.json({success:true});
});

// ── ADMIN: Vídeos YouTube
app.get('/api/admin/videos',auth,(_req,res)=>res.json(db.prepare('SELECT * FROM videos ORDER BY ordem').all()));
app.post('/api/admin/videos',auth,(req,res)=>{
  const{titulo,youtube_url,descricao,ordem}=req.body;
  if(!titulo||!youtube_url) return res.status(400).json({error:'Título e URL obrigatórios'});
  const r=db.prepare('INSERT INTO videos(titulo,youtube_url,descricao,ordem)VALUES(?,?,?,?)')
    .run(titulo,youtube_url,descricao||'',ordem||99);
  res.json({id:r.lastInsertRowid});
});
app.put('/api/admin/videos/:id',auth,(req,res)=>{
  const{titulo,youtube_url,descricao,ordem,ativo}=req.body;
  db.prepare("UPDATE videos SET titulo=?,youtube_url=?,descricao=?,ordem=?,ativo=?,updated=datetime('now') WHERE id=?")
    .run(titulo,youtube_url,descricao||'',ordem||0,ativo??1,req.params.id);
  res.json({success:true});
});
app.delete('/api/admin/videos/:id',auth,(req,res)=>{
  db.prepare('DELETE FROM videos WHERE id=?').run(req.params.id);
  res.json({success:true});
});

// ══ R2 PÚBLICO ══
// GET /api/r2/media — sem auth
app.get(`/api/r2/media`, async (req, res) => {
  try {
    if (!R2_BUCKET) return res.json({ files: [] });
    const data = await R2.send(new ListObjectsV2Command({ Bucket: R2_BUCKET }));
    const files = (data.Contents || [])
      .sort((a, b) => new Date(b.LastModified) - new Date(a.LastModified))
      .map(obj => ({ key: obj.Key, url: `${R2_PUBLIC_URL}/${obj.Key}`, name: path.basename(obj.Key), type: obj.Key.startsWith(`videos/`) ? `video` : `image` }));
    res.json({ files });
  } catch { res.json({ files: [] }); }
});

// ══ R2 ADMIN ══

// POST /api/admin/r2/upload
app.post('/api/admin/r2/upload', auth, uploadR2.single('file'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: 'Nenhum ficheiro enviado' });
    if (!R2_BUCKET) return res.status(500).json({ error: 'R2_BUCKET_NAME não configurado nas variáveis de ambiente' });

    const { originalname, mimetype, buffer } = req.file;
    const isVideo  = mimetype.startsWith('video/');
    const folder   = isVideo ? 'videos' : 'fotos';
    const ts       = Date.now();
    const safeName = originalname.replace(/[^a-zA-Z0-9._-]/g, '_');
    const key      = `${folder}/${ts}_${safeName}`;

    await R2.send(new PutObjectCommand({
      Bucket:      R2_BUCKET,
      Key:         key,
      Body:        buffer,
      ContentType: mimetype,
    }));

    res.json({ success: true, key, url: `${R2_PUBLIC_URL}/${key}`, name: originalname, type: mimetype, folder });
  } catch (err) {
    console.error('R2 upload error:', err);
    res.status(500).json({ error: 'Erro ao fazer upload para R2', details: err.message });
  }
});

// GET /api/admin/r2/media?folder=fotos|videos
app.get('/api/admin/r2/media', auth, async (req, res) => {
  try {
    if (!R2_BUCKET) return res.status(500).json({ error: 'R2 não configurado' });
    const prefix = req.query.folder || '';
    const data   = await R2.send(new ListObjectsV2Command({ Bucket: R2_BUCKET, Prefix: prefix }));
    const files  = (data.Contents || [])
      .sort((a, b) => new Date(b.LastModified) - new Date(a.LastModified))
      .map(obj => ({
        key: obj.Key, size: obj.Size, lastModified: obj.LastModified,
        url: `${R2_PUBLIC_URL}/${obj.Key}`,
        name: path.basename(obj.Key),
        type: obj.Key.startsWith('videos/') ? 'video' : 'image',
      }));
    res.json({ files });
  } catch (err) {
    console.error('R2 list error:', err);
    res.status(500).json({ error: 'Erro ao listar R2', details: err.message });
  }
});

// DELETE /api/admin/r2/media  { key }
app.delete('/api/admin/r2/media', auth, async (req, res) => {
  try {
    if (!R2_BUCKET) return res.status(500).json({ error: 'R2 não configurado' });
    const { key } = req.body;
    if (!key) return res.status(400).json({ error: 'Key obrigatória' });
    await R2.send(new DeleteObjectCommand({ Bucket: R2_BUCKET, Key: key }));
    res.json({ success: true });
  } catch (err) {
    console.error('R2 delete error:', err);
    res.status(500).json({ error: 'Erro ao apagar do R2', details: err.message });
  }
});

// ══════════════════════════════════════════════════════════════

app.get('/health',(_req,res)=>res.json({status:'ok'}));
app.get('*',(_req,res)=>res.sendFile(path.join(PUBLIC_DIR,'index.html')));

app.listen(PORT,()=>console.log(`Wild Atlantic Madeira 4x4 — port ${PORT}`));
module.exports=app;
