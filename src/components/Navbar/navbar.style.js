import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { HiArrowNarrowLeft } from "react-icons/hi";

export const NavToggler = styled.div`
    position: absolute;
    display: block;
    color: ${({ isOpen }) => (isOpen ? "#fff" : "#000")};
    top: 3rem;
    left: 2rem;
    font-size: 2rem;
    transition: .4s ease-out;
    z-index: 2000;
    &:hover {
        cursor: pointer;
        color: ${({ isOpen }) => (isOpen ? "#555" : "#ececec")};
    }
    @media (min-width: 629px){
        display: none;
    }
`;

export const StaggerWrapper = styled.div`
    position: fixed;
    top: ${({ isOpen }) => (isOpen ? '0' : '-100vh')};
    left: 0;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({ isOpen }) => (isOpen ? "#222" : "#fff")};
    transition: .8s;
    z-index: 1000;

    @media (min-width: 629px){
        overflow: hidden;    
        top: 0;
        left: 3rem;
        height: 6rem;
        padding-top: 1.4rem;
        background: #fff;
        width: 60rem;  
        display: flex;  
        justify-content: flex-start;
        align-items: center;        
    }
`;

export const LineContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 50vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    @media (min-width: 629px){
        position: relative;
        width: 2.3rem;
        height: 3rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        &:hover{
            cursor: pointer;
        }
     }
`;

export const Line = styled.div`    
    display: none;
       
    @media (min-width: 629px){
        position: absolute;
        display: block;
        left: 0;
        height: 2.4rem;
        width: .2rem;
        background: #333;
        &.line3{
            left: 1rem;
        }
        &.line4{
            left: 2rem;   
        } 
    }
`;

export const NavLink = styled(Link)`
    text-transform: uppercase;
    letter-spacing: .3rem;
    font-size: 2.2rem;
    color: #fff;
    &:hover{
        cursor: pointer;
        color: #555;
    }
    &.active{
        font-weight: 800;
        letter-spacing: .5rem;
    }

    @media (min-width: 629px){
        position: absolute;
        top: .5rem;
        left: -8rem;        
        font-size: 1.2rem;
        color: #333;      
        transition: .25s ease-out;  
        &:hover{
            color: #ececec;
            cursor: pointer;
        }
        &.active{
            font-weight: 800;
            letter-spacing: .4rem;
            font-size: 1.1rem;
        }  
     } 
`;

export const LeftArrow = styled(HiArrowNarrowLeft)`
    position: absolute;
    font-size: 2rem;
    top: -3.5rem;
    left: 57rem;
    opacity: 0;
    &:hover{
        cursor: pointer;
        color: #ececec;
    }
`;