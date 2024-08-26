
import user from "#/data/Test_sec_data/Images/defaultuser.png";
import ckumara2 from '#/data/Test_sec_data/Images/asx3exir.bmp';
import { SiFiverr } from "react-icons/si";

export interface Testimonial {
  name: string;
  image: typeof user;
  star: [string,string,string,string,string];
  feedback: string;
  from: typeof SiFiverr;
  link:string;
}

export const test_list: Testimonial[] = [
  {
    name: "mrdouglas852",
    image: user,
    star: ['text-red-1','text-red-1','text-red-1','text-red-1','text-red-1'],
    feedback: "Exceeding expectations. This designer will work with you every step of the way. Extremely responsive and polite and willing to go that extra mile to get the jon done. Highly recommend to anyone looking for a logo or creative design project.",
    from :  SiFiverr,
    link:'https://www.fiverr.com/umesha_g'
  },

  {
    name: "rjwmauldin",
    image: user,
    star: ['text-red-1','text-red-1','text-red-1','text-red-1','text-red-1'],
    feedback: "Very quick work, really looked at my data points and made them come alive. Followed all my requests and created a wonderful piece for my needs.",
    from :  SiFiverr,
    link:'https://www.fiverr.com/umesha_g'
  },

  {
    name: "warren_01",
    image: user,
    star: ['text-red-1','text-red-1','text-red-1','text-red-1','text-red-1'],
    feedback: "Fantastic work. Very quick and responsive to directions. Will work with the seller again.",
    from :  SiFiverr,
    link:'https://www.fiverr.com/umesha_g'
  },

  {
    name: "ckumara2",
    image: ckumara2,
    star: ['text-red-1','text-red-1','text-red-1','text-red-1','text-red-1'],
    feedback: "Great & fast service. Looking forward to connect with more projects Thanks.",
    from :  SiFiverr,
    link:'https://www.fiverr.com/umesha_g'
  },


];