import React from 'react';
import Image from 'next/image';
import { Project } from './projects';

const ProjectCard = ({
    title,
    image,
    imageAlt,
    description,
    technologies,
    url,
    githubUrl,
}: Project) => {
    return (
        <a
            href={url}
            className="border border-white rounded-xl w-full max-w-[420px] p-4 my-4"
            target="_blank"
            rel="noopener noreferrer"
        >
            <h3 className="mb-4 text-2xl">{title}</h3>
            <div className="overflow-hidden h-56 w-full relative mb-4">
                <Image
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    src={image}
                    alt={imageAlt}
                />
            </div>
            <p className="mb-4">{description}</p>
            {githubUrl && (
                <a href={githubUrl} className="mb-4 underline block" target="_blank" rel="noopener noreferrer">
                    View source on GitHub
                </a>
            )}
            <p className="text-slate-400">{technologies}</p>
        </a>
    );
};

export default ProjectCard;
