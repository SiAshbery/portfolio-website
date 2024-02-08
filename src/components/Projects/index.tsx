import React from 'react';
import ProjectCard from './ProjectCard';
import projects from './projects';

const Projects = () => {
    return (
        <div>
            <h2 className="text-[#ADB7BE] text-4xl mb-4">Projects</h2>
            <div className="flex flex-row flex-wrap justify-between">
                {projects.map((project) => {
                    return (
                        <ProjectCard
                            key={project.title}
                            title={project.title}
                            image={project.image}
                            imageAlt={project.imageAlt}
                            description={project.description}
                            technologies={project.technologies}
                            url={project.url}
                            githubUrl={project.githubUrl}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Projects;
