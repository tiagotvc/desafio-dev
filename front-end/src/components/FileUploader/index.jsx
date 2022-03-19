import React from 'react';
import * as Styled from './styles';

export const FileUploader = (props) => {

    return (
        <Styled.Container>
            <label>Choose File</label>
            <input type="file"/>
        </Styled.Container>
    )
}