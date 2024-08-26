import { Project, projects_list} from '#/data/projects_sec_data/projects_list';
import React from 'react';
import ProjectSwipeableDiv from './project_swipable_card';

export default function Project_Section() {

  return (
      <div className="lg:pt-28 pt-20 pb-10 lg:pb-20 ">
        <div className='container mx-auto px-8 '>
          <h2 className="lg:text-6xl text-4xl font-bold mb-10 xl:mb-28 text-center lg:text-left text-red-1">My Projects</h2>
          {/* <AnimatedDivision className='mt-20'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
              {projects_list.map((project: Project, index: number) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </AnimatedDivision> */}
          <div className='mt-20'>
            <ProjectSwipeableDiv projects_list={projects_list}/>
          </div>
        </div>
      </div>
  );
}