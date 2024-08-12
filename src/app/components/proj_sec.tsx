import ProjectCard from '../components/project_card';
import { Project, projects_list} from '../data/projects/projects_list';
import React from 'react';

export default function Project_Section() {

    return (

      <div className='flex items-center justify-center'>
        <div className="lg:py-28 py-20">
        <h2 className="lg:text-4xl text-3xl font-bold mb-8 text-center">My Projects</h2>
          <div className="relative w-96 sm:w-auto border-2 border-slate-200 rounded-lg p-10">
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