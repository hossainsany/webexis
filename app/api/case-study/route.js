import { NextResponse } from 'next/server';
import dbConnect from '@/libs/db';
import CaseStudy from '@/libs/models/CaseStudy';

export async function GET(request) {
    try {
        await dbConnect();

        const caseStudies = await CaseStudy.find({});

        return NextResponse.json(caseStudies, {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (err) {
        console.error('Error in /api/case-study:', err);
        return NextResponse({ error: 'Failed to fetch case studies' }, { status: 500 });
    }
}

// post route
// export async function POST(request) {
//     try {
//         await dbConnect();
//         const data = await request.json();

//         if (typeof data.tags === 'string') {
//             data.tags = data.tags.split(',').map((tag) => tag.trim());
//         }

//         const newCaseStudy = new CaseStudy(data);
//         await newCaseStudy.save();

//         return NextResponse.json(
//             { message: 'Case Study Added Successfully', caseStudy: newCaseStudy },
//             { status: 201 }
//         );
//     } catch (err) {
//         console.error('Error in POST /api/case-study:', err);
//         return NextResponse.json({ error: 'Failed to add case study' }, { status: 500 });
//     }
// }
