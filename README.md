# Mecânica Industrial — Site institucional (React + Vite)

Site de uma página (one-page) com menu que rola suavemente até cada seção, carrosséis
interativos, versão para celular, Missão/Visão/Valores, ISO 9001 e mapa de localização.

## Como rodar (primeira vez)

Precisa do [Node.js](https://nodejs.org) instalado (versão 18 ou mais nova).

```bash
npm install      # baixa as dependências (só na primeira vez)
npm run dev      # abre o site em http://localhost:5173 (atualiza sozinho ao salvar)
```

## Como publicar

```bash
npm run build    # gera a pasta "dist" com o site pronto
npm run preview  # (opcional) testa a pasta dist localmente
```

Envie **o conteúdo da pasta `dist`** para o servidor/hospedagem (IIS, Nginx, Apache, Netlify,
Vercel etc.). Os caminhos são relativos, então funciona na raiz do domínio ou em uma subpasta.

---

## Onde mexer para cada coisa

| Quero trocar...                                   | Arquivo                                  |
| ------------------------------------------------- | ---------------------------------------- |
| Logo, endereço, telefone, WhatsApp, e-mail, horário, link do Maps | `src/config/company.js`  |
| Textos e fotos dos 5 serviços                     | `src/data/services.js`                   |
| Números (anos, projetos...), Missão, Visão, Valores, ISO 9001 | `src/data/about.js`          |
| Itens do menu                                     | `src/data/navigation.js`                 |
| Links das redes sociais e texto do rodapé         | `src/components/Footer/Footer.jsx`       |
| Cores, fontes e espaçamentos globais              | `src/styles/global.css` (variáveis `--blue-500`, `--navy-950`...) |
| Ordem das seções da página                        | `src/App.jsx`                            |

### Adicionar as fotos

1. Coloque os arquivos dentro de **`public/images/`** (ex.: `manutencao.jpg`).
2. Em `src/data/services.js`, preencha o campo `photo` de cada serviço:

```js
{ icon: 'wrench', title: 'Manutenção Industrial', desc: '...', photo: 'images/manutencao.jpg' },
```

A mesma foto aparece automaticamente **no carrossel do topo e no card da seção Serviços**.
Se deixar `photo: ''`, o site mostra a ilustração padrão.

Dicas: use nomes sem acento e sem espaço, repare em maiúsculas/minúsculas (`Foto.JPG` ≠ `foto.jpg`
em servidores Linux) e comprima as imagens (ideal: até ~300 KB cada, em JPG ou WebP).

### Trocar a logo (topo e rodapé)

1. Coloque o arquivo em `public/images/` (ex.: `logo.png`).
2. Em `src/config/company.js`, logo abaixo de `name`, preencha:

```js
logo: 'images/logo.png',
```

Quando o campo está preenchido, a engrenagem e o texto provisório "MECÂNICA INDUSTRIAL" somem e a
logo aparece no lugar, no topo e no rodapé. Deixe `logo: ''` para voltar à logo provisória.
O topo e o rodapé são escuros: use PNG com fundo transparente (ou SVG) em versão clara/branca.

### Selo oficial da ISO 9001

Coloque a imagem em `public/images/iso-9001.png` e, em `src/data/about.js`, use
`sealImage: 'images/iso-9001.png'`. Para esconder o bloco inteiro: `enabled: false`.
**Exiba a ISO 9001 somente se a empresa for realmente certificada.**

### Link "Blog" do menu

A seção Blog ainda não existe. Ou crie a seção (com `id="blog"`) ou apague a linha
correspondente em `src/data/navigation.js`.

---

## Estrutura do projeto

```
public/
  images/                 <- coloque as fotos aqui
src/
  main.jsx                <- ponto de entrada
  App.jsx                 <- monta a página (ordem das seções)
  config/company.js       <- dados da empresa e links (Maps, WhatsApp)
  data/                   <- textos e listas (serviços, menu, sobre/missão/ISO)
  hooks/                  <- lógica reutilizável (animação ao rolar, contador, menu ativo)
  styles/                 <- CSS global e animação de entrada
  components/
    ui/                   <- peças reutilizáveis (Button, Icon, Logo, Eyebrow, Reveal)
    Header/  Hero/  Services/  About/  Location/  Footer/   <- uma pasta por seção
                             (cada uma com seu .jsx e seu .css)
```

## O que ainda falta para ficar "padrão" (sugestões)

- Formulário de orçamento (hoje o botão só leva até a seção "Onde estamos").
- Páginas de Política de Privacidade e Termos de Uso (os links do rodapé estão com `#`).
- Links reais das redes sociais, favicon e imagem de pré-visualização (Open Graph).
- Trocar os textos de exemplo (Missão, Visão, Valores, números) pelos reais da empresa.
