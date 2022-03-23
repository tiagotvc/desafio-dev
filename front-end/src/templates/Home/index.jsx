import React, {useState} from 'react';
import { FileUploader } from '../../components/FileUploader';
import { Heading } from '../../components/Heading';
import { Table } from '../../components/Table';
import * as Styled from './styles';

export default function Home() {
    const [fileCount, setFileCount] = useState(0);
   
    const onFileChange = (count) => {
        setFileCount(count)
    }

    
    return (
        <Styled.Container>
            <div class="heading_container">
                <Heading>Desafio Dev</Heading>
            </div>
            <div class="file_uploader_container">
                <FileUploader
                    onFileChange={(count) => onFileChange(count)}
                    />
            </div>
                <div class="table_container">
                    <Table onAddFile={fileCount}
                       />
                </div>
           
        </Styled.Container>    
    )
}