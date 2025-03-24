import RSMSimage from '#/assets/project_section/RSMS.jpg'
import PortImage from '#/assets/project_section/portfolio.png'
import CliqueImage from '#/assets/project_section/clique.png'

export interface Project {
  title: string;
  description: string;
  image: typeof RSMSimage;
  projectUrl:[string,string];
  githubUrl: string;
}

export const projects_list: Project[] = [
  {
    title: 'The Clique',
    description: 'The Clique is a modern e-commerce platform built with Next.js, Spring Boot, and MySQL to showcase full-stack development skills. Featuring user-friendly shopping experiences, admin management tools, and an elegant design with ShadCN components, it highlights innovation and attention to detail',
    image: CliqueImage,
    projectUrl: ['hidden','http://34.41.111.151/'],
    githubUrl: 'https://github.com/umesha-g/The-Clique-EcomSite'
  },
  {
    title: 'Retail Store Management System',
    description: 'This project developed an integrated software system to enhance retail store management, focusing on customers, stock, and employees. Key features include loyalty programs, real-time stock monitoring, and performance tracking. Built primarily in Java.',
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
