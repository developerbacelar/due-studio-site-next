import React from "react";
import styled from "styled-components";
import "next/image";

const LogoDue = styled.img`
    width: 60px;
    height: 60px;
    @media (max-width: 768px){
        width: 45px;
        height: 45px;
        position: absolute;
        left: 50px;
        order: 2;
    }
`
const Logo = () => (
    <LogoDue src="/D-icon.svg" alt="Logo Due Studio" title="Logo Due Studio" />
)

export default Logo;