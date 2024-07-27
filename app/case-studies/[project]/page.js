'use client';

import { CaseStudy } from '@/components';

const ProjectPage = ({ params }) => {
    const slug = params.project;

    return <CaseStudy slug={slug} />;
};

export default ProjectPage;
