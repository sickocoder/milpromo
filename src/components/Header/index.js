import React from "react";

import { Container, TopSection, MenuSection, MenuItem } from "./styles";
import { FaHome, FaSearch, FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";

export default function Header() {

    return(
        <Container>
            <div className="topLine">
                <div className="item1" />
                <div className="item2" />
                <div className="item3" />
                <div className="item4" />
                <div className="item5" />
                <div className="item6" />
                <div className="item7" />
                <div className="item8" />
                <div className="item9" />
                <div className="item10" />
                <div className="item11" />
                <div className="item12" />
                <div className="item13" />
                <div className="item14" />
                <div className="item15" />
                <div className="item16" />
                <div className="item17" />
                <div className="item18" />
                <div className="item19" />
                <div className="item20" />
            </div>
            <TopSection>
                <div className="topSectionLimits">
                    <div className="logoSection">
                        <ul>
                            <li><FaHome size="27"/></li>
                            <li>Portal | Mil Promo</li>
                        </ul>
                    </div>
                    <ul>
                        <li>Ajuda</li>
                        <li>Contacto</li>
                    </ul>
                    <ul>
                        <li><FaFacebookF color="#3C5A99" /></li>
                        <li><FaYoutube color="#ff0000" /></li>
                        <li><FaInstagram color="#800080" /></li>
                        <li><FaSearch /></li>
                    </ul>
                </div>
            </TopSection>
            <MenuSection>
                <MenuItem><a href="/">Últimos Lançamentos</a></MenuItem>
                <MenuItem><a href="/topmensal">Top Mensal</a></MenuItem>
                <MenuItem><a href="/instrumentais">Instrumentais</a></MenuItem>
                <MenuItem><a href="/albuns">Albuns</a></MenuItem>
                <MenuItem><a href="mixtapes">Mixtapes</a></MenuItem>
                <MenuItem><a href="singles">Singles</a></MenuItem>
                <MenuItem><a href="videos">Vídeos</a></MenuItem>
            </MenuSection>
        </Container>
    );
}