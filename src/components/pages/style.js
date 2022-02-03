import styled from 'styled-components';

export const Section = styled.section`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Header = styled.h1`
    font-family: 'Anton', sans-serif;
    font-size: clamp(2rem, 12vw, 10rem);
    letter-spacing: clamp(.1rem, 2vw, 1rem);
    text-transform: uppercase;
`;

export const Button = styled.button`
    outline: none;
    border: .1rem solid #333;
    background: transparent;
    padding: 1rem 3rem;
    border-radius: .4rem;
    color: #333;
    text-transform: uppercase;
    letter-spacing: .3rem;
    font-weight: 700;
    transition: .25s ease-in-out;
    &:hover{
        cursor: pointer;
        color: #fff;
        border: .1rem solid #fff;
        background: #333;
    }
`;