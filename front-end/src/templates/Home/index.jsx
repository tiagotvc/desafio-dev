import React from 'react';
import { FileUploader } from '../../components/FileUploader';
import { Table } from '../../components/Table';
import * as Styled from './styles';

export default function Home() {
    return (
        <Styled.Wrapper>
            <FileUploader/>
            <Table/>
        </Styled.Wrapper>    
    )
}