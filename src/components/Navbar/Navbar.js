import { useState } from "react";
import gsap from "gsap";
import { FaBars, FaTimes } from "react-icons/fa"
import { NavToggler, StaggerWrapper, LineContainer, Line, NavLink, LeftArrow } from "./navbar.style";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isActive, setIsActive] = useState(0)

    const handleOpen = () => {
        setIsOpen(isOpen)
        if (window.innerWidth > 629) {
            const tl = gsap.timeline();
            tl.to(".line0", 0, { x: 0 }, 0)
            tl.to("#p0", .8, { x: 120 }, 0)
            tl.to(".line1", 1, { x: 130 }, 0)
            tl.to("#p1", .8, { x: 250 }, 0)
            tl.to('.line2', 1, { x: 260 }, 0)
            tl.to("#p2", .8, { x: 378 }, 0)
            tl.to('.line3', 1, { x: 390 }, 0)
            tl.to("#p3", .8, { x: 510 }, 0)
            tl.to('.line4', 1, { x: 520 }, 0)
            tl.to('.arrow', .8, { x: 0, y: '+6rem', opacity: 1, ease: "back.out(2.3)" }, .6)
        }
    };

    const handleClose = () => {
        setIsOpen(!isOpen)
        const tl = gsap.timeline();
        tl.to(".line", 1, { x: 0 })
        tl.to('#p0, #p1, #p2, #p3', .7, { x: 0 }, 0)
        tl.to('.arrow', 1.2, { x: 0, y: '-6rem', opacity: 0 }, 0.2)
    };

    const handleLinkClick = () => {
        if (window.innerWidth < 630) {
            setIsOpen(!isOpen)
        }
    }

    return (
        <>
            <NavToggler onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </NavToggler>
            <StaggerWrapper isOpen={isOpen}>
                <LineContainer onMouseOver={handleOpen} >
                    <Line className="line0 line" />
                    <NavLink to="/" id="p0" onClick={() => setIsActive(0), handleLinkClick} className={`${0 === isActive && 'active'}`}>home</NavLink>
                    <Line className="line1 line" />
                    <NavLink to="/about" id="p1" onClick={() => setIsActive(1), handleLinkClick} className={`${1 === isActive && 'active'}`}>about</NavLink>
                    <Line className="line2 line" />
                    <NavLink to="/models" id="p2" onClick={() => setIsActive(2), handleLinkClick} className={`${2 === isActive && 'active'}`}>models</NavLink>
                    <Line className="line3 line" />
                    <NavLink to="/contact" id="p3" onClick={() => setIsActive(3), handleLinkClick} className={`${3 === isActive && 'active'}`}>contact</NavLink>
                    <Line className="line4 line" />
                </LineContainer>
                <LeftArrow className="arrow" onClick={handleClose} />
            </StaggerWrapper>
        </>
    )
};

export default Navbar;
