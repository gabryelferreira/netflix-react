import styled from 'styled-components';

export const Header = styled.header`
    position: fixed;
    top: 0; left: 0; right: 0;
    height: 68px;
    background: ${props => props.transparent ? "transparent" : "#202020"};
    transition: background-color 1s;
    padding-left: 60px;
    padding-right: 60px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    z-index: 99;

    img {
        height: 28px;
        margin-right: 25px;
    }

`;

export const ItemsList = styled.ul`
    position: relative;
    display: flex;
    list-style: none;

    li {
        margin-left: 20px;
        

        a {
            font-family: "Ubuntu", sans-serif;
            color: #fff;
            text-decoration: solid;
            :hover {
                opacity: .7;
                transition: .5s;
            }
        }

    }

`;