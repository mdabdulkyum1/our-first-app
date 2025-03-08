import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear(); // Get the current year

    return (
        <footer className="bg-[#135276] text-white pt-12 pb-4">
            <div className="container mx-auto px-4">
                <div className="flex flex-col sm:flex-row flex-wrap justify-between space-y-8 sm:space-y-0 sm:space-x-8">
                    {/* Logo & Contact */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold">Learnica</h3>
                        <p className="text-sm">Providing reliable tech since 2024</p>
                        <div className="text-sm space-y-2">
                            <p>Mohammadpur-1200/A, Dhaka, Bangladesh</p>
                            <p>learnicaofficial@gmail.com</p>
                        </div>
                    </div>

                    {/* Top Classes */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold">Top classes</h4>
                        <ul className="text-sm space-y-2">
                            <li>Front-end development</li>
                            <li>Design</li>
                            <li>Digital Marketing</li>
                            <li>Cyber-security</li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold">Company</h4>
                        <ul className="text-sm space-y-2">
                            <li>About us</li>
                            <li>All courses</li>
                            <li>Live-class</li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold">Legal</h4>
                        <ul className="text-sm space-y-2">
                            <li>Terms of use</li>
                            <li>Privacy policy</li>
                            <li>Cookie policy</li>
                        </ul>
                    </div>
                </div>
                <div className="divider"></div>
                {/* Copyright */}
                <div className="text-center mt-4 text-sm">
                    <p>&copy; {currentYear} Learnica. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
