import React from 'react';
import { FileUploader } from '../../components/FileUploader';
import { Heading } from '../../components/Heading';
import { Table } from '../../components/Table';
import * as Styled from './styles';

export default function Home() {
    return (
        <Styled.Wrapper>
            <Heading>Desafio Dev</Heading>
            <FileUploader/>
            <Table/>
        </Styled.Wrapper>    
    )
}