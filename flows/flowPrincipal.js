const { addKeyword, EVENTS } = require("@bot-whatsapp/bot");

const flowPrincipal = addKeyword(EVENTS.WELCOME)
  .addAnswer(
    "Bivenido a *Car Outlet*",
    "Compra tu Auto Seminuevo desde la comodidad de tu casa"
  )
  .addAnswer(
    [
        "¿Como puedo ayudarte?",
        "",
        "*1* Consultar sobre un vehículo",
        "*2* Información sobre el financiamiento",
        "*3* Agendar visita presencial",
    ]
  )  
  .addAnswer('Responda con el numero de la opcion.')

module.exports = flowPrincipal;