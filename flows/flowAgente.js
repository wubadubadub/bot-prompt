const { addKeyword } = require("@bot-whatsapp/bot");

/**
 * Esto se ejecuta cuando la persona escribe "AGENTE"
 */
const flowAgente = addKeyword("AGENTE", { sensitive: true })
  .addAnswer(
   "Estamos desviando tu conversación a nuestro agente"
  )
  .addAction(async (ctx, {provider}) => {
    const nanoid = await import('nanoid')
    const ID_GROUP = nanoid.nanoid(5)
    const refProvider = await provider.getInstance()
    await refProvider.groupCreate(`Media Tech Support (${ID_GROUP})`,[
        `${ctx.from}@s.whatsapp.net`
    ])
  })
  .addAnswer('Creé un grupo y te agregué junto con un vendedor! Gracias')

module.exports = flowAgente;
