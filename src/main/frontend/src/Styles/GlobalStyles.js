import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    li {
        list-style: none;
    }

    /* 전체 페이지 스타일 */
    body {
        font-family: Arial, sans-serif;
        // font-size: 16px;
    }

    /* 제목 스타일 */
    h1 {
        font-size: 2em;
        // color: #333;
    }

    h2 {
        font-size: 1.5em;
        // color: #555;
    }

    h3 {
        font-size: 1.2em;
        // color: #777;
    }

    /* 본문 텍스트 스타일 */
    p {
        // margin-bottom: 15px;
    }

    a:hover {
        // text-decoration: underline;
    }

    /* 목록 스타일 */
    ul, ol {
        padding-left: 20px;
    }
    
    ul > li {
        list-style-type: disc;
    }

    ol > li {
        list-style-type: decimal;
    }


    /* 인용문 스타일 */
    blockquote {
        border-left: 2px solid #999;
        margin: 0 0 15px 15px;
        padding: 0 15px;
        color: #777;
    }

    /* 코드 블록 스타일 */
    pre {
        background-color: #f4f4f4;
        border: 1px solid #ddd;
        padding: 10px;
        overflow: auto;
    }

    code {
        font-family: Monaco, monospace;
        color: #d94844;
    }

    /* 표 스타일 */
    table {
        border-collapse: collapse;
        width: 100%;
        margin-bottom: 15px;
    }

    th, td {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
    }

    th {
        background-color: #f2f2f2;
    }

    /* 이미지 스타일 */
    img {
        max-width: 100%;
        height: auto;
    }
`;

export default GlobalStyles;
