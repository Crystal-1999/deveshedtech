import React, { useState } from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomeFAQ = ({ className = "" }) => {
    const [activeFaqIndex, setActiveFaqIndex] = useState(null);

    const faqs = [
        {
            q: "What industries do you specialize in?",
            a: "We work across diverse sectors including Fintech, Healthcare, E-commerce, Logistics, and EdTech. Our adaptive team brings technical excellence to any complex business challenge."
        },
        {
            q: "How long does a typical project take?",
            a: "Project timelines vary based on complexity. A standard MVP typically takes 8-12 weeks, while larger enterprise platforms may range from 4-8 months. We follow agile methodologies to ensure regular delivery of value."
        },
        {
            q: "Do you offer post-launch support and maintenance?",
            a: "Absolutely. We provide dedicated support packages ranging from 24/7 monitoring and security updates to ongoing feature development and performance optimization."
        },
        {
            q: "What tech stack do you recommend for high-scale applications?",
            a: "For scalability, we often recommend React/Next.js for the frontend and Node.js (NestJS) or Laravel for the backend, combined with AWS or Docker-based cloud infrastructure. However, we tailor the stack to your specific needs."
        },
        {
            q: "How do you ensure the security of my data and IP?",
            a: "Security is baked into our DNA. We sign strict Non-Disclosure Agreements (NDAs), follow industry-standard encryption protocols (OWASP), and conduct regular security audits of all our codebases."
        }
    ];

    return (
        <section className={`py-24 md:py-32 bg-[#121212] relative overflow-hidden ${className}`}>
            <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-home-accent/10 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                    {/* Header side */}
                    <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit">
                        <div className="inline-flex items-center px-4 py-2 bg-[#1a1a1a] border border-home-accent/20 text-home-accent rounded-full text-xs font-bold tracking-widest uppercase mb-8 shadow-sm">
                            <span className="flex h-2 w-2 rounded-full bg-home-accent mr-2"></span>
                            Support & Help
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-[1.1]">
                            Frequently Asked <br />
                            <span className="text-home-accent">Questions.</span>
                        </h2>
                        <p className="text-lg text-gray-400 leading-relaxed font-medium mb-10">
                            Have questions? We're here to help. Find answers to common queries about our process, technology, and services.
                        </p>
                        <Link to="/contact" className="inline-flex items-center text-home-accent font-bold hover:gap-3 transition-all">
                            Still have questions? Contact Us <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </div>

                    {/* FAQ side */}
                    <div className="lg:w-2/3 space-y-4">
                        {faqs.map((faq, index) => {
                            const isOpen = activeFaqIndex === index;
                            return (
                                <div
                                    key={index}
                                    className={`group bg-[#1a1a1a] rounded-2xl border transition-all duration-300 ${isOpen ? 'border-home-accent shadow-xl shadow-home-accent/5' : 'border-gray-800 hover:border-home-accent/20'}`}
                                >
                                    <button
                                        onClick={() => setActiveFaqIndex(isOpen ? null : index)}
                                        className="w-full text-left p-6 md:p-8 flex items-center justify-between gap-4"
                                    >
                                        <span className={`text-lg md:text-xl font-bold transition-colors ${isOpen ? 'text-home-accent' : 'text-white group-hover:text-home-accent'}`}>
                                            {faq.q}
                                        </span>
                                        <div className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all ${isOpen ? 'bg-home-accent border-home-accent text-black rotate-180' : 'border-gray-700 text-gray-400 group-hover:border-home-accent group-hover:text-home-accent'}`}>
                                            <ChevronRight className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-90' : ''}`} />
                                        </div>
                                    </button>
                                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                                        <div className="px-6 md:px-8 pb-8 text-gray-400 text-base md:text-lg leading-relaxed font-medium">
                                            <div className="pt-4 border-t border-gray-800">
                                                {faq.a}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeFAQ;
