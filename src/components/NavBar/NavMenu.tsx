import React from 'react';
import NavLink from './NavLink';
import { navLink } from './';

const NavMenu = ({ navLinks }: { navLinks: navLink[] }) => {
    return (
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
    );
};

export default NavMenu;
