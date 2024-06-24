import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {cn} from "@/lib/utils.ts";

interface NavLinkProps {
    to: string;
    contains: string;
    children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, contains, children }) => {
    const location = useLocation();
    const isActive = location.pathname.includes(contains);

    return (
        <Link to={to} className={cn(isActive ? "bg-primary dark:bg-secondary text-white" : "text-foreground hover:bg-muted", "flex items-center flex-nowrap gap-x-2 transition-colors font-medium text-sm px-3 py-2  rounded-md ")}>
            {children}
        </Link>
    );
};

export default NavLink;