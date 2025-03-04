import React from "react";
import styled from "styled-components";
import "next/image";
import AnchorLink from "react-anchor-link-smooth-scroll";

const LogoDue = styled.img`
    width: 126px;
    height: 84px;
    @media (max-width: 768px){
        width: 89px;
        height: 59px;
        position: absolute;
        left: 50px;
        order: 2;
    }
`
const Logo = () => (
    <AnchorLink offset='94' href="#principal" className="logo-due">
        <LogoDue src="/logo_due_studio.png" alt="Logo Due Studio" title="Logo Due Studio" />
    </AnchorLink>
)

export default Logo;