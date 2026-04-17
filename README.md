# 🌿 Wild Atlantic Madeira 4×4

Website profissional para passeios privados em jipe 4×4 na Ilha da Madeira.

**URL:** [www.wildatlanticmadeira4x4.pt](https://www.wildatlanticmadeira4x4.pt)

---

## 🚀 Stack Tecnológico

| Camada       | Tecnologia                         |
|--------------|------------------------------------|
| Frontend     | HTML5, CSS3 (vanilla), JavaScript  |
| Backend      | Node.js + Express                  |
| Hosting      | Railway                            |
| CDN/DNS/SSL  | Cloudflare                         |
| Domínio      | .pt via registo PTNIC              |

---

## 📁 Estrutura do Projeto

```
wild-atlantic-madeira/
├── index.html          # Página principal
├── css/
│   └── style.css       # Estilos principais
├── js/
│   └── main.js         # JavaScript do frontend
├── public/             # Ficheiros servidos (gerado pelo build)
├── scripts/
│   └── build.js        # Script de build
├── server.js           # Servidor Express
├── package.json
├── railway.toml        # Configuração Railway
├── _headers            # Headers Cloudflare
└── .gitignore
```

---

## ⚙️ Desenvolvimento Local

```bash
# 1. Clonar o repositório
git clone https://github.com/SEU_USER/wild-atlantic-madeira-4x4.git
cd wild-atlantic-madeira-4x4

# 2. Instalar dependências
npm install

# 3. Build (copia ficheiros para /public)
npm run build

# 4. Iniciar servidor de desenvolvimento
npm run dev
# → http://localhost:3000
```

---

## 🚂 Deploy no Railway

### Passo 1 — Criar conta Railway
1. Aceder a [railway.app](https://railway.app)
2. Criar conta (pode usar GitHub)

### Passo 2 — Criar novo projeto
1. Clicar em **New Project**
2. Seleccionar **Deploy from GitHub repo**
3. Autorizar Railway no GitHub e seleccionar o repositório

### Passo 3 — Configurar variáveis de ambiente
No painel Railway → **Variables**, adicionar:
```
NODE_ENV=production
PORT=3000
# (opcional) RESEND_API_KEY=re_xxxx  ← para envio de emails
```

### Passo 4 — Deploy automático
Railway detecta o `railway.toml` e faz deploy automaticamente em cada `git push`.

---

## 🌐 Configuração Cloudflare

### Passo 1 — Adicionar domínio
1. Em [cloudflare.com](https://cloudflare.com), clicar **Add a Site**
2. Inserir `wildatlanticmadeira4x4.pt`
3. Escolher plano **Free**

### Passo 2 — Apontar DNS para Railway
No painel Cloudflare → DNS, adicionar:
```
Tipo    Nome    Conteúdo                    Proxy
CNAME   @       xxxxxxx.up.railway.app      ✅ (orange cloud)
CNAME   www     wildatlanticmadeira4x4.pt   ✅ (orange cloud)
```
*(substituir `xxxxxxx.up.railway.app` pelo URL dado pelo Railway)*

### Passo 3 — SSL
- SSL/TLS → **Full (strict)**
- Edge Certificates → Enable **Always Use HTTPS**
- Enable **HSTS** (opcional, após confirmar que HTTPS funciona)

### Passo 4 — Performance
- Speed → Optimization → Enable **Auto Minify** (JS, CSS, HTML)
- Caching → **Standard**

### Passo 5 — Regras de Page (opcional)
```
*wildatlanticmadeira4x4.pt/*
  → Cache Level: Cache Everything
  → Edge Cache TTL: 1 month
```

---

## 📧 Integração de Email (Reservas)

Para activar o envio de emails das reservas, instalar o **Resend**:

```bash
npm install resend
```

E em `server.js`, no endpoint `/api/reserva`:
```js
const { Resend } = require('resend');
const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: 'reservas@wildatlanticmadeira4x4.pt',
  to:   'info@wildatlanticmadeira4x4.pt',
  subject: `Nova Reserva — ${nome} · ${data}`,
  html: `
    <h2>Nova Reserva Recebida</h2>
    <p><strong>Nome:</strong> ${nome}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Telefone:</strong> ${telefone}</p>
    <p><strong>Data:</strong> ${data}</p>
    <p><strong>Pessoas:</strong> ${pessoas}</p>
    <p><strong>Passeio:</strong> ${passeio}</p>
    <p><strong>Notas:</strong> ${mensagem}</p>
  `,
});
```

---

## 🔮 Próximos Passos

- [ ] Integrar sistema de calendário real (e.g. Calendly API ou Cal.com)
- [ ] Adicionar painel de administração para gerir reservas
- [ ] Integrar avaliações (Google Reviews API ou Trustpilot)
- [ ] Adicionar blog/SEO content
- [ ] Implementar pagamentos online (Stripe)
- [ ] Criar versões em EN, DE, FR

---

## 📞 Contacto Técnico

Para questões técnicas sobre o website, abrir um **Issue** no GitHub.

---

*Feito com ❤️ na Madeira* 🌿
