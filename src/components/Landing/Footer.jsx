import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-6 rounded-t-md">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="col-span-1">
                        <h2 className="text-xl font-semibold mb-2">Department of Computer</h2>
                        <p className="text-sm">Central Jail Rd, Kurigram</p>
                        <p className="text-sm">Phone: +88019373847293</p>
                        <p className="text-sm">Email: info@kuricmt.com</p>
                    </div>
                    <div className="col-span-1">
                        <h2 className="text-xl font-semibold mb-2">Useful Links</h2>
                        <ul className="text-sm">
                            <li><a href="/#" className="hover:text-gray-400">About Us</a></li>
                            <li><a href="/#" className="hover:text-gray-400">Programs</a></li>
                            <li><a href="/#" className="hover:text-gray-400">Faculty</a></li>
                            <li><a href="/#" className="hover:text-gray-400">Admissions</a></li>
                        </ul>
                    </div>
                    <div className="col-span-1">
                        <h2 className="text-xl font-semibold mb-2">Follow Us</h2>
                        <div className="flex space-x-2">
                            <a href="/#" className="text-lg hover:text-gray-400"><FaFacebook /></a>
                            <a href="/#" className="text-lg hover:text-gray-400"><FaTwitter /></a>
                            <a href="/#" className="text-lg hover:text-gray-400"><FaInstagram /></a>
                            <a href="/#" className="text-lg hover:text-gray-400"><FaLinkedin /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-6 border-t border-gray-800 pt-4 text-center">
                <p className="text-sm">&copy; 2024 Department of Computer Science. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
