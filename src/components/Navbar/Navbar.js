import { useState } from "react";
import gsap from "gsap";
import { StaggerWrapper, LineContainer, Line, NavLink, LeftArrow } from "./navbar.style";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(isOpen)
        if (window.innerWidth > 1000) {
            const tl = gsap.timeline();
            tl.to(".line0", 0, { x: 0 }, 0)
            tl.to(".p0", 1, { x: 124 }, 0)
            tl.to(".line1", 1, { x: 130 }, 0)
            tl.to(".p1", 1, { x: 256 }, 0)
            tl.to('.line2', 1, { x: 260 }, 0)
            tl.to(".p2", 1, { x: 388 }, 0)
            tl.to('.line3', 1, { x: 390 }, 0)
            tl.to(".p3", 1, { x: 510 }, 0)
            tl.to('.line4', 1, { x: 520 }, 0)
            tl.to('.arrow', 1.2, { x: 0, opacity: 1 }, 1)
        }
    };

    const handleClose = () => {
        setIsOpen(!isOpen)
        const tl = gsap.timeline();
        tl.to(".line", 1, { x: 0 })
        tl.to('.p', 1, { x: 0 }, 0)
        tl.to('.arrow', .8, { x: 0, opacity: 0 }, 0.2)
    };

    return (
        <>
            <StaggerWrapper >
                <LineContainer onClick={handleOpen} >
                    <Line className="line0 line" />
                    <NavLink to="/" className="p0 p">home</NavLink>
                    <Line className="line1 line" />
                    <NavLink to="/about" className="p1 p">about</NavLink>
                    <Line className="line2 line" />
                    <NavLink to="/models" className="p2 p">models</NavLink>
                    <Line className="line3 line" />
                    <NavLink to="/contact" className="p3 p">contact</NavLink>
                    <Line className="line4 line" />
                </LineContainer>
                <LeftArrow className="arrow" onClick={handleClose} />
            </StaggerWrapper>
        </>
    )
};

export default Navbar;
