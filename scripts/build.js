const fs   = require('fs');
const path = require('path');
const src  = path.join(__dirname, '..');
const dest = path.join(__dirname, '..', 'public');

function mkdirp(d) { if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true }); }
function copy(from, to) { mkdirp(path.dirname(to)); fs.copyFileSync(from, to); console.log(`  ✓ ${path.relative(src,from)}`); }
function copyDir(f, t) { if (!fs.existsSync(f)) return; mkdirp(t); fs.readdirSync(f).forEach(file => { const a=path.join(f,file),b=path.join(t,file); fs.statSync(a).isDirectory()?copyDir(a,b):copy(a,b); }); }

console.log('\n🔨 Building Wild Atlantic Madeira 4x4...\n');
mkdirp(dest);
copy(path.join(src,'index.html'), path.join(dest,'index.html'));
copy(path.join(src,'admin.html'), path.join(dest,'admin.html'));
copyDir(path.join(src,'css'), path.join(dest,'css'));
copyDir(path.join(src,'js'),  path.join(dest,'js'));
if (fs.existsSync(path.join(src,'assets'))) copyDir(path.join(src,'assets'), path.join(dest,'assets'));
console.log('\n✅ Build complete! Files ready in /public\n');
