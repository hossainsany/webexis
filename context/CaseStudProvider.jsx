'use client';

import { useEffect, useState } from 'react';
import CaseStudyContext from './CaseStudyContext';
import axios from 'axios';

const CaseStudyProvider = ({ children }) => {
    const [projects, setProjects] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsPending(true);
                const res = await axios.get('/api/case-study');
                const data = res.data;

                setProjects(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsPending(false);
            }
        };

        fetchData();
    }, []);

    return (
        <CaseStudyContext.Provider
            value={{ projects, setProjects, isPending, setIsPending, error, setError }}
        >
            {children}
        </CaseStudyContext.Provider>
    );
};

export default CaseStudyProvider;
