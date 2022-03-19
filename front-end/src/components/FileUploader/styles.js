import styled from 'styled-components';

export const ContainerUpload = styled.div`
    display:flex;
    align-items: center ;
    justify-content:center ;

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


export const ContainerPreview = styled.div`
    display:flex;
    align-items: center ;
    justify-content:center ;display:block;

    .drop-file-preview {
        margin-top: 10px;
        display: block ;
    }

    .drop-file-preview__title {
        display:flex;
        align-items: center ;
        justify-content:center ;
    }

    .drop-file-preview_items {
        display:flex ;
        justify-content:center ;
        align-items:center ;
    }

    .drop-file-preview p {
        font-weight: 100;
        font-size: 13px ;
    }

    .drop-file-preview__item {
        display:flex ;
        align-items: center ;
        justify-content: center ;
        
}

    .drop-file-preview__item img {
        height:40px ;
        
    }

    .drop-file-preview__item__info {
      justify-content:center ;
      align-items:center ;
      text-align:center ;
     
    }

    .drop-file-preview__item__del {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        margin-left:350px;
        position: absolute;
        cursor: pointer;
        
    }

    .drop-file-preview__item:hover .drop-file-preview__item__del {
        opacity: 1;
    }
    `