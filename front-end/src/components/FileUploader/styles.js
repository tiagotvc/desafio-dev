import styled from 'styled-components';

export const Container = styled.div`
    display:block;

    .input_container {
        display:flex ;
        align-items:center ;
        justify-content:center ;
    }
    .drop-file-input {
        position: relative;
        width: 400px;
        height: 200px;
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
        color: var(--txt-second-color);
        font-weight: 600;
        padding: 10px;
    }

    .drop-file-input__label img {
        width: 100px;
    }
`
