import React from "react";
import Link from "next/link";
import "./Footer.scss";

const Footer = () => {
    return (
        <footer id="footer" className="footer w-full flex flex-col items-center justify-center overflow-hidden">
            <div className="footer-container flex flex-col md:gap-16 justify-center items-center w-full">
                <div className="section-1 flex justify-between items-start w-full">
                    <div className="logo">
                        <Link href="/">
                            <img src="/images/socialMedia/svg/Logo-2.svg" alt="Logo" />
                        </Link>
                    </div>
                    <div className="social-media flex items-center gap-5">
                        <h6>Follow Us On Social Media</h6>
                        <div className="icons flex items-center gap-4">
                            <Link href="https://www.linkedin.com/company/cozech/" target="_blank" rel="noopener noreferrer">
                                <img src="/images/socialMedia/svg/LinkedIn.svg" alt="LinkedIn" />
                            </Link>
                            <Link
                                href="https://www.instagram.com/team.cozech?igsh=bHM2dmpncXB1MG5zZjA="
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src="/images/socialMedia/svg/Instagram.svg" alt="Instagram" />
                            </Link>
                            <Link href="/#home">
                                <img src="/images/socialMedia/svg/Twitter.svg" alt="Twitter" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="section-2 flex justify-center items-center w-full py-6">
                    <div className="copy-rights flex justify-start items-center">
                        <p>@2025 COZECH. All Rights Reserved.</p>
                    </div>

                    <div aria-hidden="false">
                        <Link href="/" className="sr-only">
                            Home (hidden)
                        </Link>
                        <Link href="/#services" className="sr-only">
                            Services (hidden)
                        </Link>
                        <Link href="/#projects" className="sr-only">
                            Projects (hidden)
                        </Link>
                        <Link href="/#about" className="sr-only">
                            About (hidden)
                        </Link>
                        <Link href="/#contact" className="sr-only">
                            Contact (hidden)
                        </Link>
                        <Link href="/sitemap.xml" className="sr-only">
                            Sitemap (hidden)
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
