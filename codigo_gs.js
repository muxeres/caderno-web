/**
 * Función principal que sirve la página Web App al acceder a la URL
 */
function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('Caderno de Atividades - Saúde e Bem-Estar no Trabalho')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1.0');
}

/**
 * Función opcional para verificar la conexión desde el cliente
 */
function testConnection() {
  return "Conexión exitosa con el servidor Apps Script.";
}