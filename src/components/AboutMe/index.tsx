'use client';
import React from 'react';
import test from '../../3D/Test';
import ThreeScene from '../ThreeSceen';
import TabsSection from './TabsSection';

const AboutMe = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row mb-12">
            <ThreeScene className="mr-8 flex flex-row justify-center items-center" renderScene={test} height={400} width={400} />

            <div>
                <h2 className="text-[#ADB7BE] text-4xl mb-4">About Me</h2>
                <p className="text-[#ADB7BE]">
                    <span className="block mb-4 text-md">
                        I love nothing more than solving problems and building great features for
                        great products.
                    </span>
                    <span className="block mb-4 text-md">
                        I have experience in a wide range of technologies including:, JavaScript,
                        React JS, React Native, Ruby on Rails, C#, GraphQL, Docker, PostgreSQL, AWS
                        and more.
                    </span>
                    <span className="block mb-4 text-md">
                        I'm a great communicator, facilitated by my experience in both technical and
                        non-technical roles. I'm a firm believer in the importance of accessibility
                        and responsive design.
                    </span>
                    <span className="block mb-4 text-md">
                        Nothing excites me more than working with a great team on difficult problems
                        to deliver fantastic results.
                    </span>
                </p>
                <TabsSection />
            </div>
        </div>
    );
};

export default AboutMe;
