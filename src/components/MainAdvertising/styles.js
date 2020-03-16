import styled from 'styled-components';

export const MainAdvertisingContainer = styled.div`
    position: relative;
    width: 100%;
    height: calc(100vh - 200px);

    img {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: calc(100vh + 60px);
        z-index: -1;
    }

`;

export const ContainerInfo = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    padding: 0 60px;
    box-sizing: border-box;

    img {
        position: relative;
        width: 700px;
        height: auto;
    }

`;

export const ContainerInfoButtons = styled.div`
    position: relative;
    display: flex;
    margin-top: 50px;
`;

export const ContainerButton = styled.button`
    position: relative;
    background: rgba(51, 51, 51, .4);
    color: #fff;
    font-size: 24px;
    font-family: 'Ubuntu', sans-serif;
    font-weight: bold;
    box-sizing: border-box;
    padding: 15px 50px;
    border-radius: 4px;
    border: 0;
    margin-right: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: .2s;

    i {
        color: #fff;
        font-size: 34px;
        margin-right: 10px;
    }

    :hover {
        background: rgb(230, 230, 230);
        transform: scale(1.05);
        color: #000;
    }

    :hover i {
        color: #000;
    }

`;