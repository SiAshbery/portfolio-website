import { StaticImageData } from 'next/image';
import FractusImage01 from '/public/images/projects/fractus/01.png';
import IDEImage01 from '/public/images/projects/ide/01.png';

export type Project = {
    title: string;
    image: StaticImageData;
    imageAlt: string;
    description: string;
    technologies: string;
    url: string;
    githubUrl?: string;
};

export default [
    {
        title: 'Fractus',
        image: FractusImage01,
        description: `Fractus is an interactive short that uses the lens of infinitely intricate fractal shapes 
        to explore the relationship between parent and child, as well as the ever-repeating pattern 
        of life and death.Throughout the course of the immersive VR experience, Melody, a 
        fifteen-year-old, must confront and come to terms with the death of a Fractus, an eternal 
        fractal being and the only parent she has ever known.Through this journey she faces the 
        sundering of all she has known, and the liminal space between childhood and adulthood.`,
        imageAlt:
            'An abstract fractal Mandelbulb floating in a dark void, let from the bottom by red light',
        technologies: 'Unity, C#, Signed Distance Functions, Raymarching, VR',
        url: 'https://www.youtube.com/watch?v=pWv1ORnyg4o',
    },
    {
        title: 'ReactJs IDE',
        image: IDEImage01,
        description: `A React JS based IDE done as an exercise to practice handling complex nested data structures. 
        Data for files are provided as a flat array which must be processed into a arbitrarily complex nested folder 
        structure that differentiates between folders and files.`,
        imageAlt:
            'An code editor or IDE, with a folder structure on the left and a code editing area on the right',
        technologies: 'ReactJS, TypeScript, Jest, Recursive Algorithms',
        url: 'https://react-ide-0f5c5fe565e6.herokuapp.com/',
        githubUrl: 'https://github.com/SiAshbery/reactjs-ide',
    },
] as Project[];
