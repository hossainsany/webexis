import dbConnect from '@/libs/db';
import Review from '@/libs/models/Review';
import { NextResponse } from 'next/server';

export const GET = async (request) => {
    try {
        await dbConnect();
        const reviews = await Review.find({});

        return NextResponse.json(reviews, {
            status: 200,
            OK: true,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (err) {
        console.error('Error in /api/review:', err);
        return NextResponse.json({ error: 'Failed to fetch reviews', OK: false }, { status: 500 });
    }
};
