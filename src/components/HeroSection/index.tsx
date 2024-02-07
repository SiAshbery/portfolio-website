import React from 'react';
import HeroImage from './HeroImage';
import CTAButtons from './CTAButtons';
import HeroText from './HeroText';

const HeroSection = () => {
    return (
        <section className="grid grid-cols-1 mb-12 md:grid-cols-12">
            <div className="col-span-7 place-self-center text-center md:text-left">
                <HeroText />
                <CTAButtons />
            </div>
            <div className="flex col-span-5 place-self-center mt-4 lg:mt-0">
                <HeroImage />
            </div>
        </section>
    );
};

export default HeroSection;
