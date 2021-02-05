import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';
//import { Link as LinkR } from 'react-router-dom';
import {FaTimes} from 'react-icons/fa';

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #14171F;
    color: #f1f1f1;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
    color: #f1f1f1;
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const SidebarWrapper = styled.div`
    color: #fff;
`;

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 150px);
    text-align: center;
    text-decoration: none;
    list-style: none;
    padding: 0px 0px;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(3, 90px);
    }
`;

export const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.8rem;
    letter-spacing: 3px;
    font-family: 'Poppins', sans-serif;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #F1F1F1;
    cursor: pointer;

    &:hover {
        color: #fff;
        transform: scale(1.05);
        background-color: #1B202C;
        transition: 0.2s ease-in-out;
    }
`;

