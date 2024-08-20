import ProjectCard from '../project_section/project_card';
import { Project, projects_list} from '#/data/projects_data/projects_list';
import React from 'react';
import NoBorderdAnimatedDivision from '../animated_div';

export default function Project_Section() {

    return (

      <div className='flex items-center justify-center'>
        <div className="lg:py-28 py-20">
          <div className='container mx-auto px-4 '>
            <h2 className="lg:text-6xl text-5xl font-bold mb-20 lg:mb-0 text-center lg:text-left text-red-1">My Projects</h2>
            <NoBorderdAnimatedDivision className='mt-20'>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
                {projects_list.map((project: Project, index: number) => (
                  <ProjectCard key={index} {...project} />
                ))}
              </div>
            </NoBorderdAnimatedDivision>
          </div>
        </div>
      </div>
    );
}