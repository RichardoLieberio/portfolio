'use server';

import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import { actionReturn } from './types';

export async function sendEmail(name: string, email: string, phone: string | undefined, message: string): Promise<actionReturn> {
    try {
        const transporter: nodemailer.Transporter<SMTPTransport.SentMessageInfo, SMTPTransport.Options> = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.FROM_EMAIL_ADDRESS,
                pass: process.env.FROM_EMAIL_PWD,
            },
        });

        await transporter.sendMail({
            from: `Portfolio Website <${process.env.FROM_EMAIL_ADDRESS}>`,
            to: process.env.TO_EMAIL_ADDRESS,
            subject: 'Message From Client',
            html: `
                <div style="font-family: Arial, sans-serif; padding: 20px; color: #212529;">
                    <h2 style="color: #6A0DAD;">New Portfolio Inquiry</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone:</strong> ${phone || '-'}</p>
                    <p><strong>Message:</strong></p>
                    <p style="background: #F8F9FA; padding: 10px; border-radius: 5px;">${message.replace(/\n/g, '<br>')}</p>
                    <hr style="margin-top: 30px;">
                    <small>This message was sent from your portfolio website hire me form.</small>
                </div>
            `,
        });

        return { status: 1, msg: 'Message sent!' };
    } catch (error) {
        console.error(error);
        return { status: 0, msg: 'Failed to sent message!' };
    }
}
