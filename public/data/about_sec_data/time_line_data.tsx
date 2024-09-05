import { IconType } from "react-icons";
import { IoSchool } from "react-icons/io5";
import { LiaSchoolSolid } from "react-icons/lia";
import { IoSchoolOutline } from "react-icons/io5";
import { PiCertificate } from "react-icons/pi";

export interface TimeEvents {
    year: string;
    title: string;
    link: [string,string];
    description: string;
    visibility : string;
    Icon : IconType;
  }

export const time_line_data:TimeEvents[] = [

    {
        year: '2018',
        title: 'G.C.E. Advanced Level',
        link: ['pointer-events-none','#'],
        description: 'Badulla Central College',
        visibility : 'hidden',
        Icon : LiaSchoolSolid,
    },

    {
        year: '2019',
        title: 'Certificate Course in English',
        link: ['pointer-events-none','#'],
        description: 'Uva Wellassa University',
        visibility : 'hidden',
        Icon :PiCertificate,
    },

    {
        year: '2022',
        title: 'Certificate Course in Information Technology',
        link: ['pointer-events-none','#'],
        description: 'University Of Ruhuna',
        visibility : 'hidden',
        Icon : PiCertificate,
    },

    {
        year: '2023',
        title: 'Bachelor of Science Degree',
        link: ['pointer-events-none','#'],
        description: 'University Of Ruhuna',
        visibility : 'hidden',
        Icon :IoSchoolOutline,
    },

    {
        year: '2024',
        title: 'Web Development Fundamentals',
        link: ['pointer-events-auto','https://www.credly.com/badges/19e843f4-98c9-49d0-869c-d74e7c8f0b22/linked_in_profile'],
        description: 'IBM SkillsBuild',
        visibility : 'block',
        Icon :PiCertificate,
    },
]