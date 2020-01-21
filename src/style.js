import { createGlobalStyle } from "styled-components";

 export default createGlobalStyle`
    
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, border-style, #root {
        height: 100%;
    }

    body {
        font: 14px 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 700;
        background: #ffffff;
        -webkit-font-smoothing: antialiased !important;
    }

    ul {
        list-style: none;
    }

    .sectionTitle {
        text-align: left;
        font-size: 26px;
        padding: 16px 0;
        float: left;
        width: 100%;
        margin-top: 24px;
        border-bottom: 1px rgba(0, 0, 0, 0.1) solid;
    }

    .selectedPageItem {
        font-weight: bold !important;
        color: #000 !important;
    }

    .musicDesc {
        width: 500px;
        margin: 32px auto;
        text-align: justify;
    }

 `;