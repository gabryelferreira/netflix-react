import React from 'react';
import { Header as HeaderStyle, ItemsList } from './styles';
import Logo from '../../assets/imgs/logo.png';

const Header = ({ transparent = false }) => (
    <HeaderStyle transparent={transparent}>
        <img src={Logo} alt="Logo"/>
        <ItemsList>
            <li><a href="/#">Início</a></li>
            <li><a href="/#">Séries</a></li>
            <li><a href="/#">Filmes</a></li>
            <li><a href="/#">Mais Recentes</a></li>
            <li><a href="/#">Minha Lista</a></li>
        </ItemsList>
    </HeaderStyle>
)

export default Header;