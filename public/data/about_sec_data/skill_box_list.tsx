export interface Skill {
    name: string;
    description: string;
    bgcolor : string;
  }

export const skills_list: Skill[] = [
    {
        name: 'JavaScript',
        description:
            ' I build dynamic, user-friendly interfaces using React, Next.js and Back-end using Node.js, Express.js creating seamless multi-page applications that enhance user engagement.',
            bgcolor :'border-neutral-600 '
    },

    {
        name: 'Java',
        description:
            'I develop robust enterprise applications with Java and Spring Boot, crafting secure RESTful APIs and scalable back-end solutions.',
        bgcolor :'border-red-1'
    },

    {
        name: 'Python',
        description:
            'I leverage Python and Django to create feature-rich web applications, emphasizing clean code and rapid development for optimal user experiences.',
            bgcolor :'border-neutral-600'
        },

    {
        name: 'MySQL',
        description:
            ' I design and optimize MySQL databases for efficient data management, ensuring fast access and secure storage for data-driven applications.',
            bgcolor :'border-neutral-600'
    },
  ];