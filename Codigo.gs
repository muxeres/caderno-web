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
 * Función que recibe los datos desde el HTML (google.script.run.guardarRespuesta)
 * y los inserta en Google Sheets.
 */
function guardarRespuesta(datos) {
  try {
    // Tu ID real del Google Sheet
    var SHEET_ID = "1P46f3zwNCRIQGtqsAKjEa2c9PIHgqOwvxc60WKBya5M"; 
    var sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();
    
    // Armamos la fila que se va a guardar
    var fila = [
      new Date(),                 // Columna A: Fecha y hora exacta del envío
      datos.worker_name,          // Columna B: Nome
      datos.worker_role,          // Columna C: Função
      datos.worker_sector,        // Columna D: Setor
      datos.worker_shift,         // Columna E: Turno
      datos.worker_supervisor,    // Columna F: Supervisor
      datos.worker_start_date     // Columna G: Data de Início
    ];
    
    // Como tienes 25 días de notas (notes_day_1 a notes_day_25),
    // los agregamos automáticamente a las siguientes columnas (H en adelante)
    for (var i = 1; i <= 25; i++) {
      var nota = datos["notes_day_" + i] ? datos["notes_day_" + i] : "";
      fila.push(nota);
    }
    
    // Insertamos toda la fila en la hoja de cálculo
    sheet.appendRow(fila);
    
    // Le decimos al HTML que todo fue un éxito
    return { status: "SUCCESS" };
    
  } catch (error) {
    // Si algo falla, le enviamos el error al HTML para que muestre el alert rojo
    return { status: "ERROR", message: error.toString() };
  }
}