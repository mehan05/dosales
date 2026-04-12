"use client";

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { IoCloseOutline, IoChevronDown } from 'react-icons/io5';
import { motion, AnimatePresence } from 'framer-motion';
import { NavbarData } from '@/types/strapi';
import { getStrapiMedia } from '@/lib/strapi';

interface NavbarProps {
    data?: NavbarData;
}

const Navbar = ({ data }: NavbarProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOverWaterfall, setIsOverWaterfall] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setIsScrolled(scrollY > 20);

            const waterfallSection = document.getElementById('waterfall-section');
            if (waterfallSection) {
                const rect = waterfallSection.getBoundingClientRect();
                const isOver = rect.top <= 20 && rect.bottom >= 0;
                setIsOverWaterfall(isOver);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = data?.navlinks || [
        { name: 'FEATURES', href: '#', hasDropdown: true },
        { name: 'ABOUT', href: '#' },
        { name: 'PRICING', href: '#' },
    ];

    const ctaText = data?.ctaButton?.content || "Schedule a Demo";
    const ctaUrl = data?.ctaButton?.url || "#";
    const logoUrl = getStrapiMedia(data?.logo?.url) || "/assets/svg/logo.svg";

    return (
        <nav className={`
            fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between px-8 py-3 mx-auto w-full transition-all duration-300
            ${isScrolled ? 'backdrop-blur-[44px]' : ''}
            ${isOverWaterfall ? 'text-white' : 'text-text-main'}
        `}>
            <div className="flex items-center gap-2">
                <Image
                    src={logoUrl}
                    alt="Logo"
                    width={32}
                    height={32}
                    className="w-8 h-8"
                />
                <span className={`text-[22px] font-bold ${isOverWaterfall ? 'text-white' : 'text-text-main'}`}>
                    {data?.pageName || "DoSales"}
                </span>
            </div>

            <div className="hidden md:flex items-center gap-8">
                {navLinks.map((link: any) => {
                    const hasSubLinks = link.children && link.children.length > 0;
                    return (
                        <div key={link.id || link.name || link.content} className="relative group">
                            <a
                                href={link.url || link.href}
                                className={`
                                    flex items-center gap-1 cursor-pointer text-[16px] font-medium transition-colors group
                                    ${isOverWaterfall ? 'text-white hover:text-blue-300' : 'text-text-main hover:text-primary-blue'}
                                `}
                            >
                                {link.content || link.label || link.name}
                                {(link.hasDropdown || hasSubLinks) && <IoChevronDown className="transition-transform duration-200" size={14} />}
                            </a>

                            {/* Simple Dropdown for sub-links */}
                            {hasSubLinks && (
                                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100 overflow-hidden">
                                    <div className="py-2">
                                        {link.children.map((subLink: any) => (
                                            <a 
                                                key={subLink.id} 
                                                href={subLink.url} 
                                                className="block px-4 py-2 text-sm text-text-main hover:bg-slate-50 hover:text-primary-blue transition-colors"
                                            >
                                                {subLink.content}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            <a 
                href={ctaUrl}
                className={`
                    hidden sm:flex relative z-50 px-6 h-[51px] items-center justify-center gap-2.5 rounded-[10px] font-semibold transition-all duration-300 text-[14px]
                    ${isOverWaterfall 
                        ? 'bg-white text-text-main hover:bg-gray-100' 
                        : 'bg-text-main text-white hover:bg-slate-800'}
                `}
            >
                {ctaText}
            </a>

            <button onClick={toggleMenu} className="md:hidden relative z-50 p-1 cursor-pointer">
                {isOpen ? (
                    <IoCloseOutline size={32} className={isOverWaterfall ? 'text-white' : 'text-text-main'} />
                ) : (
                    <Image
                        src="/assets/svg/hamburgerIcon.svg"
                        alt="Menu"
                        width={30}
                        height={30}
                        className={`w-8 h-8 ${isOverWaterfall ? 'brightness-0 invert' : ''}`}
                    />
                )}
            </button>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-18 left-0 right-0 z-110 bg-white shadow-2xl flex flex-col md:hidden border-t border-gray-100"
                    >
                        <div className="flex-1 flex flex-col px-8 py-6 gap-8">
                            {navLinks.map((link: any) => (
                                <div key={link.id || link.name || link.label} className="flex items-center justify-between w-full">
                                    <a 
                                        href={link.url || link.href}
                                        className="text-[16px] font-medium text-text-main tracking-wide"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.label || link.name}
                                    </a>
                                    {link.hasDropdown && (
                                        <IoChevronDown className="text-gray-400" size={20} />
                                    )}
                                </div>
                            ))}

                            <div className="mt-4">
                                <a 
                                    href={ctaUrl}
                                    className="flex w-full bg-text-main text-white h-14.5 items-center justify-center rounded-xl font-bold text-[16px] hover:bg-slate-800 transition-all active:scale-95 shadow-lg"
                                >
                                    {ctaText}
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
