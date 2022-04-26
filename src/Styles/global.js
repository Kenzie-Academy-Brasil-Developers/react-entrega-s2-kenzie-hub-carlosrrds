import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`::after

    * {
        padding:0;
        margin:0;
        vertical-align:baseline;
        list-style:none;
        border:0;  
    }

    body{
        background-color: #121214;
        display: flex;
        justify-content: center;
        min-height: 100vh;
        font-family: 'Inter', sans-serif;
    }

    button{
        cursor: pointer;
    }

    textarea:focus, input:focus {
        box-shadow: 0 0 0 0;
        outline: 0;
    }

    :root{
        --White: #fff;
        --Color-primary: #FF577F;
        --Color-primary-Focus: #FF427F;
        --Color-primary-Negative: #59323F;
        --Grey-4: #121214;
        --Grey-3: #212529;
        --Grey-2: #343B41;
        --Grey-1: #868E96;
        --Grey-0: #F8F9FA;
        --Sucess: #3FE864;
        --Negative: #E83F5B;
    }
`;

export default GlobalStyles;
