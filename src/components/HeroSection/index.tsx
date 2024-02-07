import React from 'react';
import Image from 'next/image';
import DivingImg from '/public/images/diving.jpg';

const HeroSection = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-12">
            <div className="col-span-7 place-self-center text-center md:text-left">
                <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
                    Portfolio Website
                </h1>
                <p className="text-[#ADB7BE] text-lg mb-6 md:mr-6 lg:text-xl">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem
                    voluptas maxime, eos dolore dicta illo mollitia nesciunt consequatur nihil hic
                    recusandae minima doloremque explicabo itaque ullam quae. Nisi, eveniet animi?
                </p>
                <div>
                    <button className="w-full sm:w-fit px-6 py-3 rounded-full mr-4 mb-4 bg-white hover:bg-slate-200 text-black">
                        Hire Me!
                    </button>
                    <button className="w-full sm:w-fit px-6 py-3 rounded-full bg-transparent hover:bg-slate-800 text-white border border-white ">
                        Download CV/Résumé
                    </button>
                </div>
            </div>

            <div className="flex col-span-5 place-self-center mt-4 lg:mt-0">
                <div className="rounded-full w-[200px] h-[200px] md:w-[300px] md:h-[300px] relative overflow-hidden m-auto">
                    <Image
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        src={DivingImg}
                        alt="a man freediving underwater surrounded by kelp, wearing a wetsuit and weight belt, finning away from the camera with a speargun"
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
