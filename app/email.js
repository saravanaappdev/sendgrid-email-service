const credential = require('../config/constants');
const sgMail = require('@sendgrid/mail');
const email=require('../services/email.send.service')

const emailer = async (req,res) => {
    if(req.body.email){
        sgMail.setApiKey(credential.SENDGRID_API_KEY);
        // send the from,to,subject,content for setEmailOption
        const message=email.setEmailOption();
    
        sgMail.send(message)
        .then(()=>{
            res.status(200).send('Email sent successfully');
        })
        .catch((e)=>{
            res.status(500).send('Error in email');
            // res.send('Error in email');
        });
    }else{
        res.status(500).send('No email found in requst');
    }
    


}

module.exports = {
    emailer: emailer
}

