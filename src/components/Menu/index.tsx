import React from "react";
import { slide as BurguerMenu } from 'react-burger-menu'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import styled from 'styled-components';
import Logo from "../Logo";
import ButtonDefault from "../Button";
import Image from 'next/image';
import {Manrope} from '@next/font/google'

const manrope = Manrope({
    weight: ['500', '700', '800'],
    subsets: ['latin'],
    style: ['normal'],
})

const MenuDue = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: calc(100% - 300px);
    
    .navbar-links {
        align-items: center;
        justify-content: space-evenly;
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;
        width: 100%;
        @media (max-width: 768px) {
            display: none;
        }

        li {
            .menu-due-studio-item{
                color: #000;
                font-size: 1em;
                font-weight: bold;
                &:hover{
                    cursor: pointer;
                    text-decoration: underline;
                }
            }
        }
    }
    .bm-burger-button{
        display: none;
    }

    @media (max-width: 768px) {
        display: block;
        .navbar-links {
            display: none;
        }
        .bm-burger-button{
            display: block;
        }
        .bm-item-list{
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            flex-direction: column;
            margin-top: 30px;
            .menu-burguer-topo{
                position: absolute;
                top: 15px;
                width: 100%;
                img{
                    position: relative;
                    left: 0;
                }
                a{
                    position: relative;
                    margin-right: 30px;
                    font-size: 0.825em;
                }
            }
            .menu-burguer-icon-list{
                align-items: center;
                justify-content: space-around;
                width: 100%;
                margin-top: 30px;
                a {
                    cursor: pointer;
                    display: block;
                    height: 46px;
                    width: 46px;

                    img {
                        width: inherit;
                    }
                }
            }
                
            .menu-due-studio-item{
                color: #000;
                font-size: 1em;
                font-weight: bold;
                margin: 20px 0;
            }
        }
    }
    
`

var styles = {
    bmBurgerButton: {
        position: 'relative',
        width: '30px',
        height: '24px',
        left: '0'
    },
    bmBurgerBars: {
        background: '#757095'
    },
    bmBurgerBarsHover: {
        background: '#a90000'
    },
    bmCrossButton: {
        height: '24px',
        width: '24px'
    },
    bmCross: {
        background: '#bdc3c7'
    },
    bmMenuWrap: {
        position: 'fixed',
        height: '100%',
        top: '0',
        left: '0'
    },
    bmMenu: {
        background: '#F7F7F7',
        padding: '2.5em 1.5em 0',
        fontSize: '1.15em'
    },
    bmMorphShape: {
        fill: '#373a47'
    },
    bmItemList: {
        color: '#b8b7ad',
        padding: '0.8em'
    },
    bmItem: {
        display: 'flex'
    },
    bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)',
        top: '0'
    }
}



const Menu = () => {
    
    const [menuOpen, setMenuOpen] = React.useState(false);
    
    const handleStateChange = (state: { isOpen: boolean | ((prevState: boolean) => boolean); }) => {
      setMenuOpen(state.isOpen);
    };
    
    const closeMenu = () => {
      setMenuOpen(false);
    };

    return (
        <MenuDue>
            <ul className="navbar-links">
                <li><AnchorLink style={manrope.style} offset='120' href="#modalidades" className="menu-due-studio-item">Modalidades</AnchorLink></li>
                <li><AnchorLink style={manrope.style} offset='120' href="#estrutura" className="menu-due-studio-item">Estrutura</AnchorLink></li>
                <li><AnchorLink style={manrope.style} offset='120' href="#depoimentos" className="menu-due-studio-item">Depoimentos</AnchorLink></li>
                <li><AnchorLink style={manrope.style} offset='120' href="#localizacao" className="menu-due-studio-item">Localização</AnchorLink></li>
            </ul>
            <BurguerMenu    
                isOpen={menuOpen}
                onStateChange={handleStateChange}
                styles={styles}
            >
                <div className="menu-burguer-topo">
                    <Logo />
                    <ButtonDefault classComponent="fale-conosco" titleButton="Fale Conosco" btnId="fale-conosco-menu"/>
                </div>
                <AnchorLink onClick={closeMenu} style={manrope.style} offset='120' href="#modalidades" className="menu-due-studio-item">Modalidades</AnchorLink>
                <AnchorLink onClick={closeMenu} style={manrope.style} offset='120' href="#estrutura" className="menu-due-studio-item">Estrutura</AnchorLink>
                <AnchorLink onClick={closeMenu} style={manrope.style} offset='120' href="#depoimentos" className="menu-due-studio-item">Depoimentos</AnchorLink>
                <AnchorLink onClick={closeMenu} style={manrope.style} offset='120' href="#localizacao" className="menu-due-studio-item">Localização</AnchorLink>
                <div className="menu-burguer-icon-list">
                    <a  href="https://api.whatsapp.com/send?phone=5541991256464&text=Ol%C3%A1,%20vim%20pelo%20seu%20site!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20uma%20futura%20aula%20experimental." id="btn-menu-whatsapp"><Image src="/icon-whatsapp.svg" alt="Ícone WhatsApp" width={46} height={46} /></a>
                    <a  href="https://www.facebook.com/duepersonal" id="btn-menu-facebook"><Image src="/icon-facebook.svg" alt="Ícone Facebook" width={46} height={46}/></a>
                    <a  href="https://www.instagram.com/due_personal/" id="btn-menu-instagram"><Image src="icon-instagram.svg" alt="Ícone INstagram" width={46} height={46}/></a>
                    <a href="https://www.youtube.com/@due_personal" id="btn-menu-youtube"><Image src="icon-youtube.svg" alt="Ícone YouTube" width={46} height={46} /></a>
                </div>
                
            </BurguerMenu>
        </MenuDue>
    );
};

export default Menu;
