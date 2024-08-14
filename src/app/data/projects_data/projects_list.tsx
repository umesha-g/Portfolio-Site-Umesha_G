
export interface Project {
  title: string;
  description: string;
  //imageUrl: string;
  projectUrl: string;
  githubUrl: string;
}

export const projects_list: Project[] = [
  {
    title: "Next.js Blog",
    description: "A responsive blog built with Next.js and Tailwind CSS",
   // imageUrl: "/images/blog-project.jpg",
    projectUrl: "https://myblog.com",
    githubUrl: "https://github.com/yourusername/nextjs-blog"
  },
  {
    title: "React Weather App",
    description: "Real-time weather application using React and OpenWeather API",
    //imageUrl: "/images/weather-app.jpg",
    projectUrl: "https://myweatherapp.com",
    githubUrl: "https://github.com/yourusername/react-weather-app"
  },
  {
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with Next.js, MongoDB, and Stripe",
   // imageUrl: "/images/ecommerce-project.jpg",
    projectUrl: "https://myshop.com",
    githubUrl: "https://github.com/yourusername/nextjs-ecommerce"
  },
  {
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with Next.js, MongoDB, and Stripe",
   // imageUrl: "/images/ecommerce-project.jpg",
    projectUrl: "",
    githubUrl: "https://github.com/yourusername/nextjs-ecommerce"
  }
];