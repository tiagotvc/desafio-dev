import React from 'react';
import * as Styled from './styles';
import { ImageConfig } from '../../config/ImageConfig'; 


export const FilePreview = (props) => {
    const fileList = props.fileList;

    const fileRemove = (item) => {
        props.onFileChange(item);
    }

    return (
        <Styled.Container>
            {
                fileList.length > 0 ? (
                    <div className="drop-file-preview">
                        <div class="drop-file-preview__title">
                            <p>
                                Ready to upload
                            </p>
                            <button>Upload</button>
                        </div>
                        
                        <div class="drop-file-preview_items">
                        {
                            fileList.map((item, index) => (
                                <>
                                <div key={index} className="drop-file-preview__item">
                                    <img src={ImageConfig[item.type.split('/')[1]] || ImageConfig['default']} alt="" />
                                    <span className="drop-file-preview__item__del" onClick={() => fileRemove(item)}>x</span>
                                </div>
                                <div className="drop-file-preview__item__info">
                                    <p>{item.name}</p>
                                </div>
                                
                            </>
                            ))
                        }
                        </div>
                        
                    </div>
                ) : null
            }
        </Styled.Container>
    )   
}