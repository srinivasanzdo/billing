const nodemailer = require('nodemailer');
export class BaseMailer {

    constructor() {

    }

    // create reusable transporter object using the default SMTP transport
    private transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        secure: false, // secure:true for port 465, secure:false for port 587
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD
        }
    });

    async SendMail(mailOpt): Promise<Boolean> {
        try {
            // setup email data with unicode symbols
            let mailOptions = {
                from: process.env.EMAIL_FROM,
                to: mailOpt.to,
                subject: mailOpt.subject ? mailOpt.subject : null,
                text: mailOpt.text ? mailOpt.text : null,
                html: mailOpt.html ? mailOpt.html : null
            };
            let sendmail = await this.transporter.sendMail(mailOptions);
            if (sendmail.accepted.length) {
                return true;
            }
            return false;
        } catch (e) {
            return false;
        }
    }

}