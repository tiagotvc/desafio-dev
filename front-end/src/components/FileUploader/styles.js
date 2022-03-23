import styled from 'styled-components';

export const ContainerUpload = styled.div`
    display:block;
    align-items: center ;
    justify-content:center ;

    .align_divs_center {
        display:flex;
        align-items: center ;
        justify-content:center ;

        > span {
            margin-top:20px;
        }

        > button {
            margin-top:40px;
        }
    }

    .input_container {
        display:flex ;
        align-items:center ;
        justify-content:center ;
    }

    .upload_preview_container {
        padding:20px;
        display: flex ;
    }

    .drop-file-input {
        position: relative;
        width: 280px;
        height: 140px;
        border: 2px dashed black;
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: center;   
    }

    .drop-file-input input {
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        cursor: pointer;
    }

    .drop-file-input:hover,
    .drop-file-input.dragover {
        opacity: 0.6;
    }

    .drop-file-input__label {
        text-align: center;
        color: gray;
        font-weight: 600;
        padding: 10px;
    }

    .drop-file-input__label img {
        width: 100px;
    }

    
`