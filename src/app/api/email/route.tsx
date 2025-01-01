import {type NextRequest, NextResponse} from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(request: NextRequest) {
    const {email, name, message} = await request.json();

    const transport = nodemailer.createTransport({
        host: "hugoflsilva.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.PRIVATE_FORM_EMAIL,
            pass: process.env.PRIVATE_FORM_EMAIL_PASSWORD,
        },
    });

    const mailOptions: Mail.Options = {
        from: process.env.PRIVATE_FORM_EMAIL,
        to: process.env.PRIVATE_FORM_EMAIL,
        subject: `Contact form filled by: ${name} ( ${email} )`,
        text: message,
    };

    const sendMailPromise = () =>
        new Promise<string>((resolve, reject) => {
            transport.sendMail(mailOptions, function (err) {
                if (!err) {
                    resolve('Email sent');
                } else {
                    reject(err.message);
                }
            });
        });

    try {
        await sendMailPromise();
        return NextResponse.json({message: 'Email sent'});
    } catch (err) {

        return NextResponse.json({error: err}, {status: 500});
    }
}
