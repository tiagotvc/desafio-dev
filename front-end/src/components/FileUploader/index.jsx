import React, { useRef, useState } from 'react';
import * as Styled from './styles';
import uploadImg from '../../assets/cloud-upload-regular-240.png';
import { fileDataParse } from '../../api/fileParse/index';

export const FileUploader = (props) => {
    const [message, setMessage] = useState('');

    const [isLoading, setIsLoading] = useState(false);

    const wrapperRef = useRef(null);

    const [fileCount, setFileCount] = useState(10);

    const onDragEnter = () => wrapperRef.current.classList.add('dragover');

    const onDragLeave = () => wrapperRef.current.classList.remove('dragover');

    const onDrop = () => wrapperRef.current.classList.remove('dragover');

    const onFileDrop = async (e) => {
        const newFile = e.target.files[0];
        if (newFile) {
            setMessage('Loading.........');
            setIsLoading(true);
            const response = await fileDataParse(newFile);  
            if (response){
                const add = fileCount + 1;
                setFileCount(add);
                props.onFileChange(fileCount);
            } 
            setMessage('') 
        }
    }
    
    return (
      <>
        <Styled.ContainerUpload>
            <div className="align_divs_center">
                <div class="input_container"
                        ref={wrapperRef}
                        className="drop-file-input"
                        onDragEnter={onDragEnter}
                        onDragLeave={onDragLeave}
                        onDrop={onDrop}
                >
                    <div class="drop-file-input__label">
                        <img src={uploadImg} alt="" />
                        <p>Drag & Drop your files here</p>
                    </div>
                    <input type="file" value="" onChange={onFileDrop}/>
                </div>
            </div>
            {isLoading?
                <div className="align_divs_center">
                    <span>{message}</span>
                </div>
            :
            <></>

            }
        </Styled.ContainerUpload>
        </>
    )
}

export default FileUploader;