"use client";

import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { links } from "@/data";
import logo from "@/assets/logo.svg";
import Image from "next/image";

function Navbar() {
    const [showLinks, setShowLinks] = useState(false);

    const toggleLinks = () => {
        setShowLinks(!showLinks);
    };

    return (
        <nav>
            <div className="nav-center">
                <div className="nav-header">
                    <Image src={logo} alt="logo" className="logo" />
                    <button className="nav-toggle" onClick={toggleLinks}>
                        <FaBars />
                    </button>
                </div>
                {showLinks && (
                    <div className="links-container">
                        <ul className="links">
                            {links.map((link) => {
                                const { id, url, text } = link;
                                return (
                                    <li key={id}>
                                        <a href={url}>{text}</a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
}
export default Navbar;
