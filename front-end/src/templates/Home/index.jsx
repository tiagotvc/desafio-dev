import React from 'react';
import { FileUploader } from '../../components/FileUploader';
import { Heading } from '../../components/Heading';
import { Table } from '../../components/Table';
import * as Styled from './styles';

export default function Home() {

    const onFileChange = (files) => {
        console.log(files);
    }
    return (
        <Styled.container>
            <div class="heading_container">
                <Heading>Desafio Dev</Heading>
            </div>
            <div class="file_uploader_container">
                <FileUploader
                    onFileChange={(files) => onFileChange(files)}
                    />
            </div>
            {/* <div class="table_container">
                <Table/>
            </div> */}
        </Styled.container>    
    )
}