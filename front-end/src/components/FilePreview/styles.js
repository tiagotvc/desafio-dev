import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    align-items: center ;
    justify-content:center;

    .drop-file-preview {
        margin-top: 30px;
    }

    .drop-file-preview p {
        font-weight: 500;
        font-size:12px ;
    }

    .drop-file-preview__title {
        margin-bottom: 20px;
    }

    .drop-file-preview__item {
        position: relative;
        display: flex;
        margin-bottom: 10px;
        padding: 6px;
        border-radius: 10px;
        border:1px solid black;
        height:40px;
        width: 220px ;
    }

    .drop-file-preview__item img {
        height: 40px;
        margin-right: 6px;
    }

    .drop-file-preview__item__info {
        display: flex;   
        align-items:center ;
        justify-content:center ;
    }

    .drop-file-preview__item__del {
        width: 20px;
        height: 20px;
        position: absolute;
        right: 2px;
        top: 5%;
        cursor: pointer;
    }

    .drop-file-preview__item:hover .drop-file-preview__item__del {
        opacity: 1;
    }
`

