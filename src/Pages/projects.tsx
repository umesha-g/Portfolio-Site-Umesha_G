import React from 'react';
import ProjectCard from '../app/components/project_section/project_card';
import { Project, projects_list} from '../app/data/projects/projects_list';

const ProjectsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-10 py-20">
      <h1 className="text-4xl font-bold mb-8 text-center">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects_list.map((project: Project, index: number) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;