import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, ChevronRight, Bot } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-transparent border-t border-gray-800">
            {/* Upper Footer */}
            <div className="container mx-auto px-6 pt-24 pb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

                    {/* Column 1: Brand & About */}
                    <div className="space-y-8">
                        <Link to="/" className="flex items-center">
                            <div className="p-2 rounded-xl mr-3">
                                <img src="/images/devesh_logo.png" alt="Devesh EdTech" className="h-14 w-auto" />
                            </div>
                        </Link>
                        <p className="text-gray-500 leading-relaxed font-medium text-sm">
                            Empowering global businesses with cutting-edge IT solutions. We use AI-assisted tools in our coding and development to deliver faster, high-quality software. From mobile innovations to scalable web architectures, we deliver excellence at every step of your digital journey.
                        </p>
                    </div>

                    {/* Column 2: Our Services */}
                    <div>
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-8">Our Services</h4>
                        <ul className="space-y-4">
                            {[
                                { name: 'Web Development', path: '/services/web-development' },
                                { name: 'Mobile App Development', path: '/services/mobile-app-development' },
                                { name: 'UI/UX Design', path: '/services/ui-ux-design' },
                                { name: 'IT Consulting', path: '/services/it-consulting' },
                                { name: 'Cloud Solutions', path: '/services/cloud-solutions' },
                                { name: 'Maintenance & Support', path: '/services/maintenance-support' }
                            ].map((service) => (
                                <li key={service.name}>
                                    <Link to={service.path} className="text-gray-400 hover:text-primary font-semibold text-sm transition-colors flex items-center group">
                                        <ChevronRight className="w-4 h-4 mr-2 text-gray-600 group-hover:text-primary transition-colors" />
                                        {service.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Quick Links */}
                    <div>
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-8">Quick Links</h4>
                        <ul className="space-y-4">
                            {['Home', 'About Us', 'Services', 'Contact'].map((link) => (
                                <li key={link}>
                                    <Link
                                        to={link === 'Home' ? '/' : link === 'About Us' ? '/about' : `/${link.toLowerCase().replace(' ', '-')}`}
                                        className="text-gray-400 hover:text-primary font-semibold text-sm transition-colors flex items-center group"
                                    >
                                        <ChevronRight className="w-4 h-4 mr-2 text-gray-600 group-hover:text-primary transition-colors" />
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Contact Info */}
                    <div>
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-8">Get In Touch</h4>
                        <ul className="space-y-6">
                            <li className="flex items-start">
                                <div className="bg-secondary/10 p-2.5 rounded-lg text-gray-400 mr-4 shrink-0 shadow-sm">
                                    <Mail className="w-4 h-4" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Email Us</p>
                                    <a href="mailto:dhaval@deveshedtech.com" className="text-gray-400 font-bold text-sm hover:text-primary transition-colors block">
                                        dhaval@deveshedtech.com
                                    </a>
                                    <a href="mailto:contact@deveshedtech.com" className="text-gray-400 font-bold text-sm hover:text-primary transition-colors block mt-1">
                                        contact@deveshedtech.com
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <div className="bg-secondary/10 p-2.5 rounded-lg text-gray-400 mr-4 shrink-0 shadow-sm">
                                    <MapPin className="w-4 h-4" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Official Address</p>
                                    <span className="text-gray-400 font-bold text-sm">Surat, India</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* Bottom Copyright Bar */}
            <div className="border-t border-gray-800 pt-8 pb-12">
                <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-xs font-bold text-gray-500">
                        © {currentYear} <span className="text-gray-200">Devesh EdTech</span>. All rights reserved.
                    </p>
                    <div className="flex items-center space-x-8 text-xs font-bold text-gray-400">
                        <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                        <div className="flex items-center gap-2">
                            <Bot className="w-4 h-4 text-primary" />
                            <span className="text-xs font-bold text-gray-400">We use AI tools in our coding & development</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                            <span className="text-xs font-bold text-gray-200 uppercase tracking-tighter">System Operational</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
