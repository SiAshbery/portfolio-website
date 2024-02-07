'use client';
import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/16/solid';
import { navLink } from './';
import NavLink from './NavLink';

const NavMenuMobile = ({ navLinks }: { navLinks: navLink[] }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="mobile-menu block md:hidden relative">
            <button
                onClick={() => {
                    setOpen((prev) => !prev);
                }}
                className="text-slate-200 hover:text-white"
            >
                {open ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
            </button>
            {open && (
                <ul className="flex items-center px-4 py-6 flex-col mt-0 absolute right-0 bg-[#121212] bg-opacity-90">
                    {navLinks.map((link: navLink) => {
                        return (
                            <li key={link.href}>
                                <NavLink href={link.href}>{link.title}</NavLink>
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
};

export default NavMenuMobile;
