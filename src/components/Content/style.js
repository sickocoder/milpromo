import styled from "styled-components";

export const Container = styled.div`
    width: 68%;
    min-width: 920px;
    margin: auto;
`;

export const ThreandingSection = styled.ul`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
`;

export const ThreandingItem = styled.li`
    /* height: 300px; */
    height: 17vw;
    background-image: url(${props => props.image});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: 50% 50%;

    position: relative;

    cursor: pointer;

    :hover footer { opacity: 1; }

    footer {
        width: 100%;
        height: 100%;
        position: absolute;

        color: #fff;
        background-color: rgba(0, 0, 0, 0.6);
        opacity: 0.3;

        -webkit-transition: all 0.4s ease-in-out;
        -moz-transition: all 0.4s ease-in-out;
        -o-transition: all 0.4s ease-in-out;
        transition: all 0.4s ease-in-out;

        div {
            width: 100%;
            position: absolute;
            bottom: 0;
            padding: 32px;
        }

        strong {
            width: 100%;
            float: left;
            font-size: 26px;
            margin-bottom: 14px;
        }

        span {
            font-weight: 600;
            font-size: 12px;
        }
    }
`;

export const AllMusicSection = styled.ul`
    width: 100%;
    padding-top: 16px;

    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 16px;
`;

export const Music = styled.li`
    display: flex;
    flex-direction: column;

    cursor: pointer;

    img {
        max-width: 100%;
        border-radius: 6px 6px 0 0;
    }

    footer {
        flex: 1;
        padding: 8px;
        background-color: #fff;
        border: 1px solid #eee;
        border-radius: 0 0 6px 6px;

        strong {
            width: 100%;
            float: left;
            margin-bottom: 8px;
            color: #000 !important;
        }

        span {
            font-weight: 100;
            font-size: 12px;
            color: #666 !important;
            text-decoration: none !important;
        }
    }
`;

export const Pages = styled.ul`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    margin: 16px auto;
    text-align: center;
    border: 1px solid rgba(0, 0, 0, 0.4);
    border-radius: 8px;
    overflow: hidden;

    * {
        padding: 8px 16px;
        display: inline-block;
        font-size: 12px;
        font-weight: normal;
        color: #cccccc;
    }
`;

export const PageItem = styled.li`
    height: 100%;
    /* float: left; */
    border-left: 1px solid rgba(0, 0, 0, 0.4);
`;

export const PageLastItem = styled.li`
    background-color: transparent;
    border-left: 1px solid rgba(0, 0, 0, 0.4);
    border-right: 1px solid rgba(0, 0, 0, 0.4);
`;

export const PageButton = styled.button`
    color: #000;
    background-color: transparent;
    border: none;
    cursor: pointer;

    :hover {
        background-color: rgba(0, 0, 0, 0.2) !important;
    }
`;