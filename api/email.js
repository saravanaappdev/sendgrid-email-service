const {
  SENDGRID_API_KEY,
  EMAIL_FROM,
  EMAIL_SUBJECT,
  NO_EMAIL_FOUND,
  EMAIL_ERROR,
  EMAIL_SUCCESS,
} = require("../config/constants");
const sendgridMail = require("@sendgrid/mail");
const emailService = require("../services/email.send.service");

const emailer = async (req, res) => {
  if (req.body.email) {
    sendgridMail.setApiKey(SENDGRID_API_KEY);
    let emailTo = req.body.email;
    let name = req.body.name;
    const message = emailService.setEmailOption(
      EMAIL_FROM,
      emailTo,
      EMAIL_SUBJECT,
      name
    );
    sendgridMail
      .send(message)
      .then(() => {
        res.status(200).send(EMAIL_SUCCESS);
      })
      .catch((err) => {
        console.log("err--->", err);
        return res.status(500).send(EMAIL_ERROR);
      });
  } else {
    res.status(500).send(NO_EMAIL_FOUND);
  }
};

module.exports = {
  emailer: emailer,
};
