import React from 'react';
import NavLink from './NavLink';
import Link from 'next/link';

type navLink = { title: string; href: string };

const navLinks: navLink[] = [
    { title: 'About', href: '#about' },
    { title: 'Projects', href: '#projects' },
    { title: 'Contact', href: '#contact' },
];

export const NavBar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90">
            <div className="flex flex-wrap items-center justify-between mx-auto py-4 px-8">
                <Link href="/" className="text-2xl md:text-5xl text-white font-semibold">
                    Logo
                </Link>
                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                        {navLinks.map((link: navLink) => {
                            return (
                                <li key={link.href}>
                                    <NavLink href={link.href}>{link.title}</NavLink>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    );
};
