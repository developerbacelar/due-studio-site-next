import React from "react";
import Logo from "../Logo";
import Menu from "../Menu";
import ButtonDefault from "../Button";
import styled from "styled-components";

const HeaderDue = styled.header`
    
    background-color: #f7f7f7;
    position: fixed;
    top: 0;
    padding: 15px 20px;
    width: 100%;
    z-index: 100;
    -webkit-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
    -moz-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
    box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
    .nav-due-studio{
        align-items: center;
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        max-width: 1148px;
        position: relative;
    }

`

const Header = () => (
    <HeaderDue>
        <nav className="nav-due-studio">
            <Logo />
            <Menu />
            <ButtonDefault titleButton="Fale Conosco" />
        </nav>
    </HeaderDue>
)

export default Header;