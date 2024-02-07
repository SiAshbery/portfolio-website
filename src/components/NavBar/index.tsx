import React from 'react';

import Link from 'next/link';
import NavMenu from './NavMenu';
import NavMenuMobile from './NavMenuMobile';

export type navLink = { title: string; href: string };

const navLinks: navLink[] = [
    { title: 'About', href: '#about' },
    { title: 'Projects', href: '#projects' },
    { title: 'Contact', href: '#contact' },
];

const NavBar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90">
            <div className="flex flex-wrap items-center justify-between mx-auto py-4 px-8">
                <Link href="/" className="text-2xl md:text-5xl text-white font-semibold">
                    Logo
                </Link>
                <NavMenuMobile navLinks={navLinks} />
                <NavMenu navLinks={navLinks} />
            </div>
        </nav>
    );
};

export default NavBar;
