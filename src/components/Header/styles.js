import styled  from "styled-components";

export const Container = styled.div`
    min-width: 1200px;

    .topLine {
        width: 100%;
        height: 5px;
        background-color: #c5c5c5;

        div {
            float: left;
            height: 5px;
            width: 5%;
            opacity: 0.5;
        }

        .item1 { background-color: #ff6348; }
        .item2 { background-color: #03949a; }
        .item3 { background-color: #137e83; }
        .item4 { background-color: #006c71; }
        .item5 { background-color: #f4b936; }
        .item6 { background-color: #f29900; }
        .item7 { background-color: #e96b5a; }
        .item8 { background-color: #ed5741; }
        .item9 { background-color: #cb283e; }
        .item10 { background-color: #a780c4; }
        .item11 { background-color: #8960a7; }
        .item12 { background-color: #ccd600; }
        .item13 { background-color: #668000; }
        .item14 { background-color: #f4cc13; }
        .item15 { background-color: #fa9300; }
        .item16 { background-color: #82b964; }
        .item17 { background-color: #ccc; }
        .item18 { background-color: #66c9ee; }
        .item19 { background-color: #993838; }
        .item20 { background-color: #e73e3e; }
        

    }

`;

export const TopSection = styled.div`
    padding: 0 16%;
    overflow: hidden;

    .topSectionLimits {
        border-right: 1px rgba(0, 0, 0, 0.1) solid;
        overflow: hidden;
    }

    ul { float: left; }
    
    ul:last-child {
        float: right;
        li {
            padding: 22px 32px 22px 0;
        }

        li:last-child {
            padding-left: 24px;
            padding-right: 24px;
            border-left: 1px rgba(0, 0, 0, 0.1) solid;
        }
    }

    .logoSection ul {
        float: left;
        border-right: 1px rgba(0, 0, 0, 0.1) solid;
    }

    ul li {
        color: black;
        vertical-align: middle;
        font-size: 16px;
        display: inline-block;
        padding: 22px 0 22px 24px;
        text-align: center;

        cursor: pointer;
    }

    .logoSection ul li {
        color: black !important;
        padding: 16px 24px;
        font-size: 24px;
        border-left: 1px rgba(0, 0, 0, 0.1) solid;
    }

    li:hover {
        color: rgba(0, 0, 0, 0.38);
    }

`;

export const MenuSection = styled.ul`
    background-image: linear-gradient(to right, #212121 , #43a047);
    color: #fff;
    padding: 0 16%;

    :hover li { opacity: 0.5; }
    :hover li:hover { opacity: 1; }
`;

export const MenuItem = styled.li`
    padding: 20px 16px;
    display: inline-block;

    -webkit-transition: opacity 0.2s ease-in-out;
    -moz-transition: opacity 0.2s ease-in-out;
    -ms-transition: opacity 0.2s ease-in-out;
    -o-transition: opacity 0.2s ease-in-out;
    transition: opacity 0.2s ease-in-out;

    a {
        color: #ffffff;
        text-decoration: none;
    }

`;