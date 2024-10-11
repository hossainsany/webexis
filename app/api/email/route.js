import dbConnect from '@/libs/db';
import Email from '@/libs/models/Email';
import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        await dbConnect();
        const { email } = await request.json();

        const existingEmail = await Email.findOne({ email: email });

        if (existingEmail) {
            return NextResponse.json(
                { message: 'Email already exists', OK: false },
                { status: 409 }
            );
        }

        const newEmail = new Email({
            email: email,
        });

        await newEmail.save();

        return NextResponse.json(
            { message: `Email saved successfully.`, OK: true, email: newEmail },
            { status: 201 }
        );
    } catch (err) {
        return NextResponse.json({ error: 'Failed to save the email', OK: false }, { status: 500 });
    }
}
