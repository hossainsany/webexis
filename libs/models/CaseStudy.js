import mongoose from 'mongoose';

const testimonialSchema = new mongoose.Schema({
    body: String,
    author: String,
    position: String,
    img: String,
});

const optionSchema = new mongoose.Schema({
    title: String,
    body: String,
});

const contentSchema = new mongoose.Schema({
    overview: String,
    challenges: String,
    solutions: [
        {
            body: String,
            options: [optionSchema],
        },
    ],
    results: [
        {
            body: String,
            options: [optionSchema],
        },
    ],
    testomonial: [testimonialSchema],
    conclution: String,
    aboutWebexis: String,
    img1: String,
    img2: String,
    img3: String,
    srcCode: {
        liveUrl: String,
        githubUrl: String,
    },
});

const caseStudySchema = new mongoose.Schema({
    title: String,
    pageTitle: String,
    slug: String,
    id: Number,
    name: String,
    tags: [String],
    content: [contentSchema],
});

const CaseStudy = mongoose.models.CaseStudy || mongoose.model('CaseStudy', caseStudySchema);

export default CaseStudy;
