import styled, { keyframes } from 'styled-components';

const transform = keyframes`
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(100%);
  }
`;

export const MovieListTitle = styled.h2`
    font-family: 'Ubuntu', sans-serif;
    font-weight: bold;
    font-size: 30px;
    color: #fff;
    margin: 20px 0;
`;

export const MovieListContainer = styled.div`
    position: relative;
    width: 100%;
    padding-left: 60px;
    padding-right: 60px;
    box-sizing: border-box;
    margin: auto;
`;

export const ArrowLeftButton = styled.button`
    position: absolute;
    left: 0; top: 0;
    width: 60px;
    height: 100%;
    z-index: 2;
    outline: none;
    background: transparent;
    border: 0;
    visibility: hidden;
    cursor: pointer;

    i {
        color: #fff;
        font-size: 40px;
    }

    :hover {
        background: rgba(0, 0, 0, .4) !important;
    }
`;

export const ArrowRightButton = styled.button`
    position: absolute;
    right: 0; top: 0;
    width: 56px;
    height: 100%;
    z-index: 2;
    outline: none;
    background: transparent;
    border: 0;
    visibility: hidden;
    cursor: pointer;

    i {
        color: #fff;
        font-size: 40px;
    }

    :hover {
        background: rgba(0, 0, 0, .4) !important;
    }
`;

export const MovieListSectionsContainer = styled.div`
    position: relative;
    
    display: block;
    white-space: nowrap;
    width: calc(100% + 120px);
    margin-right: -60px;
    margin-left: -60px;
    overflow-x: visible;
    transition: 1s;
    height: 190px;
    margin-bottom: 60px;

    ::-webkit-scrollbar {
        width: 0 !important;
    }
    
    :hover ${ArrowLeftButton}, :hover ${ArrowRightButton} {
        background: rgba(0, 0, 0, .2);
        visibility: visible;
    }

`;

export const MovieSectionContainer = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
`;

export const MovieSection = styled.div`
    position: relative;
    width: calc(100% - 120px);
    height: 100%;
    transition: ${props => props.animating ? `transform ${props.animationTime}ms` : 'none'};
    transform: translateX(${props => props.animating ? (props.animatingTo === "PREVIOUS" ? '60px' : 'calc(-200% + 60px)') : 'calc(-100% + 60px)' });
    display: inline-block;
    white-space: normal;
`;

export const MovieSectionWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: nowrap;
`;

export const MovieCard = styled.div`
    position: relative;
    width: 16.6666667%;
    height: 100%;
    box-sizing: border-box;
    padding: 0 2px;

    section {
        position: relative;
        width: 100%;
        height: 100%;
        cursor: pointer;
        background-image: url(${props => props.thumbnail});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        transition: .5s;
    }

`;