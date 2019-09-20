const nodemailer = require("nodemailer");
const {email} = require("../config/development.json")

const sendToMail = ()=>{
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: email.user,
        pass: email.pass
    }
})

const optionsAnalytics = {
    from: email.user,
    to: "tristanna1302@gmail.com",
    subject: 'Sending Email using Node.js',
    text: 'That was easy'
};

transporter.sendMail(optionsAnalytics, (error, info) => {
    if(error) {
        console.log(error);
    }
    else{
        console.log("email info: " + info.responce);
    }
})
}

module.exports = sendToMail;