import React from 'react';
import Image from 'next/image';
import DivingImg from '/public/images/diving.jpg';

const HeroImage = () => {
    return (
        <div className="rounded-full w-[200px] h-[200px] md:w-[300px] md:h-[300px] relative overflow-hidden m-auto">
            <Image
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                src={DivingImg}
                alt="a man freediving underwater surrounded by kelp, wearing a wetsuit and weight belt, finning away from the camera with a speargun"
            />
        </div>
    );
};

export default HeroImage;
