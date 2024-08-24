import { IconType } from "react-icons";
import { IoSchool } from "react-icons/io5";
import { LiaSchoolSolid } from "react-icons/lia";
import { IoSchoolOutline } from "react-icons/io5";
import { PiCertificate } from "react-icons/pi";

export interface TimeEvents {
    year: string;
    title: string;
    description: string;
    visibility : string;
    Icon : IconType;
  }

export const time_line_data:TimeEvents[] = [

    {
        year: '2018',
        title: 'G.C.E. Advanced Level',
        description: 'Badulla Central College',
        visibility : 'hidden',
        Icon : LiaSchoolSolid,
    },

    {
        year: '2019',
        title: 'Certificate Course in English',
        description: 'Uva Wellassa University',
        visibility : 'hidden',
        Icon :PiCertificate,
    },

    {
        year: '2022',
        title: 'Certificate Course in Information Technology',
        description: 'University Of Ruhuna',
        visibility : 'hidden',
        Icon : PiCertificate,
    },

    {
        year: '2024',
        title: 'Bachelor of Science Degree',
        description: 'University Of Ruhuna',
        visibility : 'block',
        Icon :IoSchoolOutline,
    },
]