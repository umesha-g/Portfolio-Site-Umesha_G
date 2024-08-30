import RSMSimage from './Images/RSMS.jpg'
import PortImage from './Images/portfolio.png'

export interface Project {
  title: string;
  description: string;
  image: typeof RSMSimage;
  projectUrl:[string,string];
  githubUrl: string;
}

export const projects_list: Project[] = [
  {
    title: 'Retail Store Management System',
    description: 'This project developed an integrated software system to enhance retail store management, focusing on customers, stock, and employees. Key features include loyalty programs, real-time stock monitoring, and performance tracking, all within a user-friendly interface. Built primarily in Java, the system offers valuable insights and robust security. It showcases technology\'s potential to transform retail management.',
    image: RSMSimage,
    projectUrl: ['hidden','https://google.com'],
    githubUrl: 'https://github.com/umesha-g/retail-store-MS'
  },
  {
    title: 'My Portfolio Site',
    description: 'This portfolio site showcases my skills and projects as a developer and designer, built with Next.js, Tailwind CSS, TypeScript (TSX), Flowbite, and Framer Motion. It features a responsive design, dynamic content, and interactive animations for an engaging user experience.',
    image: PortImage,
    projectUrl: ['hidden','https://google.com'],
    githubUrl: 'https://github.com/umesha-g/Portfolio-Site-Umesha_G'
  },
 
];