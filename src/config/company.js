/* ============================================================
   DADOS DA EMPRESA  ->  troque aqui e o site inteiro se atualiza
   (seção "Onde estamos", mapa, botões e rodapé).

   - address:  endereço completo (o Google Maps usa para marcar o local)
   - mapsUrl:  link do botão "Abrir no Google Maps" (copie do Google Maps)
   - whatsapp: só números, com 55 + DDD + número  (ex: 5585987654321)
   ============================================================ */
export const COMPANY = {
  name: 'Mecânica Industrial',
  // Logo da empresa: coloque o arquivo em public/images/ e escreva o caminho aqui.
  // Exemplo:  logo: 'images/logo.png'
  // Deixe '' (vazio) para usar a logo provisória (engrenagem + texto).
  // Dica: use PNG com fundo transparente, ou SVG, em versão clara (o topo e o rodapé são escuros).
  logo: 'images/logo.png',
  address: 'R. Santa Lúcia do Jari, 1173 - Jari, Maracanaú - CE, 61916-225',
  mapsUrl:
    'https://www.google.com/maps/place/POLIMATEC/@-3.8235553,-38.6491513,15z/data=!4m22!1m15!4m14!1m6!1m2!1s0x7c74d60e8e9150b:0x2c2720f8a1eb5554!2sPOLIMATEC,+Zap+(+85+-+R.+Santa+L%C3%BAcia+do+Jar%C3%AD,+1173+-+92007.3306+-+Jari,+Maracana%C3%BA+-+CE,+61916-225!2m2!1d-38.6301001!2d-3.8235531!1m6!1m2!1s0x7c74d60e8e9150b:0x2c2720f8a1eb5554!2sPOLIMATEC,+Zap+(+85+-+R.+Santa+L%C3%BAcia+do+Jar%C3%AD,+1173+-+92007.3306+-+Jari,+Maracana%C3%BA+-+CE,+61916-225!2m2!1d-38.6301001!2d-3.8235531!3m5!1s0x7c74d60e8e9150b:0x2c2720f8a1eb5554!8m2!3d-3.8236809!4d-38.6300008!16s%2Fg%2F1yfh_j48_?entry=ttu&g_ep=EgoyMDI2MTAxMS4wIKXMDSoASAFQAw%3D%3D',
  phone: '(85) 98880-1998',
  whatsapp: '5585988801998',
  email: 'ti@polimatec.com.br',
  hours: 'Segunda a sexta, das 8h às 18h',
  waMessage: 'Olá! Vim pelo site e gostaria de solicitar um orçamento.',
}

// Links derivados dos dados acima (não precisa editar).
const q = encodeURIComponent(COMPANY.address)

export const LINKS = {
  directions: `https://www.google.com/maps/dir/?api=1&destination=${q}`,
  map: COMPANY.mapsUrl || `https://www.google.com/maps/search/?api=1&query=${q}`,
  mapEmbed: `https://www.google.com/maps?q=${q}&output=embed`,
  whatsapp: `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(COMPANY.waMessage)}`,
}
