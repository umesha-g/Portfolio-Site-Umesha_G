import ProjectCard from '../project_section/project_card';
import { Project, projects_list} from '../../data/projects_data/projects_list';
import React from 'react';
import BorderdDivision from '@/app/components/bordered_animated_div';

export default function Project_Section() {

    return (

      <div className='flex items-center justify-center'>
        <div className="lg:py-28 py-20">
          <div className='container mx-auto px-4 overflow-hidden'>
            <h2 className="lg:text-4xl text-3xl text-thatch-green-500 font-bold mb-8 text-center">My Projects</h2>
            <BorderdDivision>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
                {projects_list.map((project: Project, index: number) => (
                  <ProjectCard key={index} {...project} />
                ))}
              </div>
            </BorderdDivision>
          </div>
        </div>
      </div>
    );
}