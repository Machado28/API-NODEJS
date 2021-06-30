import Mail from '../lib/Mail'

export default {
   key: 'RegistrationMailer',
   optiions:{
      delay: 5000,
      priority: 3
   },
   async handle({ data }){
      const { user: {name,email} } = data;
       
      await  Mail.sendMail({
         from:'DLine-Code <auroradasilva@gmail.com',
         to:`${name} <${email}>`,
         subject:'TESTE DE ENVIO DE MENSAGEM POR EMAIL',
         html:`ola, ${name}, voce conseguiu usar os nossos serviços! parabéns!`
      }) 
   }
}