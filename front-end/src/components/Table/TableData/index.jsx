
import React from 'react';
import { mock } from './data-mock';

const TableTr = (props) => {
    const objData = Object.values(props.data);
        return (
            <tr>
                {objData.map((values) => {
                    return (
                        <td>{values}</td>
                    )
                })}
            </tr>
        )
}

export const TableData = () => {
    return (
        <tbody>
            {mock.map((data) =>  {
                return (
                    <TableTr data={data}/>
                )
            }           
        )}
        </tbody>
    )
}