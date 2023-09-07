function doGet()
{
    return HtmlService.createTemplateFromFile('web').evaluate();

}
 function obtenerDatosHTML(nombre)
 {
    return HtmlService.createHtmlOutputFromFile(nombre).getContent();
 }