import React from 'react';
import * as Styled from './styles';
import { ImageConfig } from '../../config/ImageConfig'; 
import { AiFillCloseCircle } from 'react-icons/ai';

export const FilePreview = (props) => {
    const fileList = props.fileList;

    const fileRemove = (item) => {
        props.fileRemove(item);
    }

    return (
        <Styled.Container>
            {
                fileList.length > 0 ? (
                    <div className="drop-file-preview">
                        <div class="drop-file-preview__title">
                            <span> Ready to upload</span>
                            <button>Upload</button>
                        </div>
                        {
                            fileList.map((item, index) => (
                                <>
                                <div key={index} className="drop-file-preview__item">
                                    <img src={ImageConfig[item.type.split('/')[1]] || ImageConfig['txt']} alt="" />
                                    <div className="drop-file-preview__item__info">
                                        <p>{item.name}</p>
                                    </div>
                                    <AiFillCloseCircle class="drop-file-preview__item__del" onClick={() => fileRemove(item)}/>
                                </div>
                                
                            </>
                            ))
                        }
                    
                    </div>
                ) : null
            }
        </Styled.Container>
    )   
}