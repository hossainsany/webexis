'use client';

import CaseStudy from '@/components/CaseStudy';

const ProjectPage = ({ params }) => {
    const slug = params.project;

    return <CaseStudy slug={slug} />;
};

export default ProjectPage;
