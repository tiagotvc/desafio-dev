import React from 'react';
import * as _ from 'lodash';

const TableTr = (props) => {
    const objData = Object.values(props.data);
        return (
            <tr id={props.index}>
                {objData.map((values, index) => {
                    return (
                        <td key={index}>{values}</td>
                    )
                })}
            </tr>
        )
 }

export const TableData = (props) => {
    return (
        <tbody>
            {!_.isEmpty(props.tableData) &&
                props.tableData.map((data, index) =>  {
                    return (
                        <TableTr data={data} index={index}/>
                    )
                })
            }   
        </tbody>
    )
}