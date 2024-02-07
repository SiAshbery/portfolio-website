import React from 'react';
import yearsHence from '@/helpers/yearsHence';

const HeroText = () => {
    const yearGraduatedFromMakers = 2017;
    const yearGrautatedFromUni = 2010;
    return (
        <>
            <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">Simon Ashbery</h1>
            <p className="text-[#ADB7BE] text-lg mb-6 md:mr-6 lg:text-xl">
                <span className="block mb-4">
                    I'm a Full Stack Software Engineer with an artistic past. My journey from artist and
                    animator to tech expert emphasises merging creativity with technical know-how.
                </span>
                <span className="block mb-4">
                    With {yearsHence(2017)} years in web and app development and {yearsHence(2010)}{' '}
                    in interactive media, I focus on crafting innovative solutions that are grounded
                    in my artistic roots and problem-solving, aiming to make a positive impact
                    through code, art and storytelling.
                </span>
                <span className="block mb-4">
                    When I am not in front of a computer, you can find me in the sea.
                </span>
            </p>
        </>
    );
};

export default HeroText;
