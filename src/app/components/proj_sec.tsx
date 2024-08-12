import ProjectCard from '../components/project_card';
import { Project, projects_list} from '../data/projects/projects_list';
import React from 'react';

export default function Project_Section() {

    return (

      <div className='wrap relative border-2 rounded-lg p-10'>
        <div className="lg:py-28 py-20">
        <h2 className="lg:text-4xl text-3xl font-bold mb-8 text-center">My Projects</h2>
          <div className="container mx-auto px-10 py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
              {projects_list.map((project: Project, index: number) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
}