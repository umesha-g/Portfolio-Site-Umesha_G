import { Project, projects_list} from '#/data/projects_sec_data/projects_list';
import React from 'react';
import ProjectSwipeableDiv from './project_swipable_card';
import AnimatedDivision from '../animated_div';

export default function Project_Section() {

  return (
      <AnimatedDivision className="lg:pt-28 pt-20 pb-8 lg:pb-10 ">
        <div className='container mx-auto px-8 '>
          <h2 className="lg:text-6xl text-4xl font-bold xl:mb-16 text-center lg:text-left text-red-1">My Projects</h2>
          <div className='mt-10'>
            <ProjectSwipeableDiv projects_list={projects_list}/>
          </div>
        </div>
      </AnimatedDivision>
  );
}