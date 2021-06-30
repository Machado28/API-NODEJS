import Mail from '../lib/Mail'

export default {
   async store (req,res){
       const { name, email,password } = req.body;

       const user = {
          name,
          email,
          password,
       } 
       await  Mail.sendMail({
          from:'DLine-Code <auroradasilva@gmail.com',
          to:`${name} <${email}>`,
          subject:'TESTE DE ENVIO DE MENSAGEM POR EMAIL',
          html:`ola, ${name}, voce conseguiu usar os nossos serviços! parabéns!`
       }) 
       return res.send({user})

   }
}