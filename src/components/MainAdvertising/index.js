import React from 'react';
import { MainAdvertisingContainer, ContainerInfo, ContainerInfoButtons, ContainerButton } from './styles';
import ElitePic from '../../assets/imgs/elite.webp';
import EliteLogo from '../../assets/imgs/elite-logo.webp';

const MainAdvertising = ({ advertising }) => (
    <MainAdvertisingContainer>
        <img src={ElitePic} alt="Elite" />
        <ContainerInfo>
            <img src={EliteLogo} alt="Elite logo" />
            <ContainerInfoButtons>
                <ContainerButton>
                    <i className="material-icons">play_arrow</i>
                    Assistir
                </ContainerButton>
                <ContainerButton>
                    <i className="material-icons">info</i>
                    Mais informações
                </ContainerButton>
            </ContainerInfoButtons>
        </ContainerInfo>
    </MainAdvertisingContainer>
);

export default MainAdvertising;