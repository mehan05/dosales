"use client";
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { IoCloseOutline, IoChevronDown } from 'react-icons/io5';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOverDark, setIsOverDark] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'FEATURES', href: '#', hasDropdown: true },
        { name: 'ABOUT', href: '#' },
        { name: 'PRICING', href: '#' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const waterfall = document.getElementById('waterfall-section');
            const navbar = document.getElementById('main-navbar');
            if (waterfall && navbar) {
                const navRect = navbar.getBoundingClientRect();
                const waterfallRect = waterfall.getBoundingClientRect();

                // Check overlap between navbar and waterfall section
                const isTouching = 
                    navRect.bottom > waterfallRect.top && 
                    navRect.top < waterfallRect.bottom;

                setIsOverDark(isTouching);
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Initial check
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const textColor = isOverDark ? 'text-white' : 'text-text-main';
    const btnClass = isOverDark 
        ? 'bg-white text-text-main' 
        : 'bg-text-main text-white';

    return (
        <nav 
            id="main-navbar"
            className={`fixed top-4 left-1/2 -translate-x-1/2 z-100 flex items-center justify-between px-8 py-2 w-[92%] lg:w-[96%] max-w-[1580px] rounded-2xl transition-all duration-300 ${
                isOverDark 
                    ? 'bg-dark-navy/40 backdrop-blur-md border-2 border-white/30' 
                    : 'bg-white backdrop-blur-md border-2 border-gray-100/10'
            } shadow-lg`}
        >
            <div className="flex items-center gap-2">
                <Image
                    src={isOverDark ? "/assets/svg/logo.svg" : "/assets/svg/logo.svg"} // Assuming logo is same for now, or adapt if needed
                    alt="Logo"
                    width={32}
                    height={32}
                    className="w-8 h-8"
                />
                <span className={`text-[22px] font-bold ${textColor} transition-colors duration-300`}>DoSales</span>
            </div>

            <div className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className={`flex items-center gap-1 cursor-pointer text-[16px] font-medium hover:text-primary-blue transition-colors group ${textColor}`}
                    >
                        {link.name}
                        {link.hasDropdown && <IoChevronDown className="transition-transform duration-200" size={14} />}
                    </a>
                ))}
            </div>

            <button className={`hidden sm:flex relative z-50 ${btnClass} w-40 h-[51px] items-center justify-center gap-2.5 p-5 rounded-[12px] font-semibold transition-all duration-300 text-[14px] hover:scale-105 active:scale-95`}>
                Schedule a Demo
            </button>

            <button onClick={toggleMenu} className={`md:hidden relative z-50 p-1 cursor-pointer ${textColor}`}>
                {isOpen ? (
                    <IoCloseOutline size={32} />
                ) : (
                    <Image
                        src={isOverDark ? "/assets/svg/hamburgerIcon.svg" : "/assets/svg/hamburgerIcon.svg"}
                        alt="Menu"
                        width={30}
                        height={30}
                        className={`w-8 h-8 ${isOverDark ? 'invert' : ''}`}
                    />
                )}
            </button>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-20 left-0 right-0 z-110 bg-white/90 backdrop-blur-xl shadow-2xl flex flex-col md:hidden rounded-2xl border border-gray-100 mx-4 overflow-hidden"
                    >
                        {/* Menu Items */}
                        <div className="flex-1 flex flex-col px-8 py-6 gap-8">
                            {navLinks.map((link) => (
                                <div key={link.name} className="flex items-center justify-between w-full">
                                    <a 
                                        href={link.href}
                                        className="text-[16px] font-medium text-text-main tracking-wide"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </a>
                                    {link.hasDropdown && (
                                        <IoChevronDown className="text-gray-400" size={20} />
                                    )}
                                </div>
                            ))}

                            {/* CTA Button in Menu */}
                            <div className="mt-4">
                                <button className="w-full bg-text-main text-white h-14.5 rounded-xl font-bold text-[16px] hover:bg-slate-800 transition-all active:scale-95 shadow-lg">
                                    Schedule a Demo
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;

