
import user from "#/data/Test_sec_data/Images/defaultuser.png"

export interface Testimonial {
  name: string;
  image: typeof user;
  star: [string,string,string,string,string];
  feedback: string;
  from:string;
}

export const test_list: Testimonial[] = [
  {
    name: "client Name",
    image: user,
    star: ['text-yellow-300','text-yellow-300','text-yellow-300','text-yellow-300','text-neutral-400'],
    feedback: "feedback",
    from : "Fiverr"
  },

];