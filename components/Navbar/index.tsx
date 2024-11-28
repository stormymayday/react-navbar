"use client";

import { useState, useRef } from "react";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { links, social } from "@/data";

function Navbar() {
    const [showLinks, setShowLinks] = useState(false);
    const linksContainerRef = useRef<HTMLDivElement>(null);
    const linksRef = useRef<HTMLUListElement>(null);

    const toggleLinks = () => {
        setShowLinks(!showLinks);
    };

    const linkStyles = {
        height:
            showLinks && linksRef.current
                ? `${linksRef.current.getBoundingClientRect().height}px`
                : "0px",
    };

    return (
        <nav>
            <div className="nav-center">
                <div className="nav-header">
                    <h4 className="logo">
                        Your <span> Logo</span>
                    </h4>
                    <button className="nav-toggle" onClick={toggleLinks}>
                        {showLinks ? <ImCross /> : <FaBars />}
                    </button>
                </div>

                <div
                    className="links-container"
                    ref={linksContainerRef}
                    style={linkStyles}
                >
                    <ul className="links" ref={linksRef}>
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

                <ul className="social-icons">
                    {social.map((socialItem) => {
                        const { id, url, icon: Icon } = socialItem;
                        return (
                            <li key={id}>
                                <a href={url} target="_blank">
                                    <Icon />
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
}
export default Navbar;
