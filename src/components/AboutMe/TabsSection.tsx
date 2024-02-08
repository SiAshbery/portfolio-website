'use client';

import React, { useState } from 'react';
import shortid from 'shortid';

type Tab = { title: string; content: string[] | React.ReactNode[] };

const tabs: Tab[] = [
    {
        title: 'Skills',
        content: [
            'ReactJS',
            'React Native',
            'JavaScript',
            'TypeScript',
            'GraphQL',
            'AWS',
            'NodeJS',
            'Ruby',
            'Ruby on Rails',
            'Docker',
            'Unity',
            'C#',
            'Godot',
            'Three JS',
        ],
    },
    {
        title: 'Clients',
        content: [
            'Zen Educate',
            'Red Badger',
            'Victoria and Albert Museum',
            'Mayes Creative',
            'Dlala Games',
            'UCLA',
            'Altered Gene',
            'Bithell Games',
            'Squint/Opera',
            'Powster',
        ],
    },
    {
        title: 'Education',
        content: [
            'Makers Academy Software Engineering Bootcamp',
            'BA(Hons) Animation Production, Arts University Bournemouth',
        ],
    },
    {
        title: 'Public speaking and Publications',
        content: [
            'Develop Conference, “Lessons from the Wilderness”',
            'Guest speaker Makers',
            'Guest lecturer at Arts University Bournemouth',
            <a
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white underline"
                href="https://si-ashbery.medium.com/lessons-from-the-wilderness-positive-outcomes-from-a-failed-project-6a8560778638"
            >
                Blog post “Lessons from the Wilderness, positive outcomes from failed projects.”
            </a>,
            <a
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white underline"
                href="https://si-ashbery.medium.com/using-wave-function-collapse-to-automatically-align-3d-tiles-1c41cc9271ac"
            >
                Using wave function collapse to automatically align 3D tiles.
            </a>,
            <a
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white underline"
                href="https://si-ashbery.medium.com/learning-to-draw-with-a-pencil-made-of-code-aa21b2a7b963"
            >
                Learning to draw with a pencil made of code.
            </a>,
            <a
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white underline"
                href="https://www.vam.ac.uk/blog/digital/moving-backgrounds-the-accessible-way"
            >
                Moving Backgrounds, the Accessible Way.
            </a>,
            'Guest editorials on Gamasutra',
        ],
    },
];

const TabsSection = () => {
    const [currentTab, setCurrentTab] = useState<Tab>();
    return (
        <div className="text-[#ADB7BE] flex flex-col lg:flex-row justify-between">
            {tabs.map((tab) => (
                <div>
                    <div className="m-auto relative">
                        <button
                            key={tab.title}
                            onClick={() => {
                                setCurrentTab(tab);
                            }}
                            className={`mr-4 hover:text-white ${
                                currentTab && currentTab.title === tab.title ? 'border-b-2' : ''
                            } w-full lg:w-auto`}
                        >
                            {tab.title}
                        </button>
                    </div>
                    {currentTab === tab && (
                        <ul className="text-[#ADB7BE]">
                            {currentTab.content.map((item) => (
                                <li key={shortid.generate()}>{item}</li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </div>
    );
};

export default TabsSection;
