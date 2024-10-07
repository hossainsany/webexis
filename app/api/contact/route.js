import dbConnect from '@/libs/db';
import Contact from '@/libs/models/Contact';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(response) {
    try {
        await dbConnect();
        const contact = await response.json();
        const newContact = new Contact(contact);

        await newContact.save();

        //Nodemailer transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: process.env.GMAIL,
                pass: process.env.GMAIL_PASS,
            },
        });
        // Send email notification
        await transporter.sendMail({
            from: process.env.GMAIL,
            to: process.env.ADMIN_EMAIL,
            subject: 'New message from Webexis.net',
            text: `From: ${newContact.name}. Email: ${newContact.email} Message: ${newContact.message}.`,
        });

        return NextResponse.json(
            { message: 'Message received successfully', OK: true, contact: newContact },
            { status: 201 }
        );
    } catch (err) {
        return NextResponse.json(
            { message: 'Message failed', OK: false, error: err },
            { status: 500 }
        );
    }
}
