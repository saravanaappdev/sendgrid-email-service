const setEmailOption=function (emailFrom,emailTo,emailSubject,name){

    return {
            from: emailFrom,
            to: emailTo,
            subject: emailSubject,
            html: `<h5>Hello ${name}, <br> This message is from <b>Transition</b> for you made request to get in touch with you.</h2>`
          };
    }

    module.exports={
        setEmailOption
    }