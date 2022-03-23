import React, { useEffect, useState } from 'react';
import * as Styled from './styles';
import { TableData } from './TableData/index';
import { TableHeader } from './TableHeader/index';
import { getTest } from '../../api/fileParse/index';

export const Table = (props) => {
    const [tableData, setTableData] = useState([]);
    const fileCount = props.onAddFile;
    let response;

    useEffect(() => {
        async function getDataFromDatabase(){
            response = await getTest();
            if (response)
             setTableData(response.data.response);
        }
        getDataFromDatabase(); 
    },[fileCount])

    return (
        <Styled.Container>
            <table>
                <thead>
                    {tableData.length > 0 && <TableHeader/>}
                </thead>
                    <TableData 
                        tableData={tableData} 
                    />
            </table>
        </Styled.Container>
    )
}

export default Table;