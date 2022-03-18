import React from 'react';
import { FileUploader } from '../../components/FileUploader';
import { Table } from '../../components/Table';

export default function Home() {
    return (
        <Styled.Wrapper>
            <FileUploader/>
            <Table/>
        </Styled.Wrapper>    
    )
}