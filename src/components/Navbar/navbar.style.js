import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { HiArrowNarrowLeft } from "react-icons/hi";

export const StaggerWrapper = styled.div`
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 6rem;
    width: 97%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const LineContainer = styled.div`
    width: 2.3rem;
    height: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:hover{
        cursor: pointer;
    }
`;

export const Line = styled.div`
    height: 2.4rem;
    width: .1rem;
    background: #333;
    &.line1{
        left: .5rem;
    }   
    &.line2{
        left: 1rem;
    }  
    &.line3{
        left: 1.5rem;
    } 
`;

export const NavLink = styled(Link)`
    position: absolute;
    left: -8rem;
    text-transform: uppercase;
    letter-spacing: .3rem;
    font-size: 1.2rem;
    color: #333;
`;

export const Icon = styled.div`
    border: .1rem solid red;
`;

export const LeftArrow = styled(HiArrowNarrowLeft)`
    position: absolute;
    font-size: 2rem;
    left: 56rem;
    opacity: 0;
    &:hover{
        cursor: pointer;
    }
`;