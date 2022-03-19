import React from 'react';
import * as Styled from './styles';
import { TableData } from './TableData/index';

const ths = ['Type','Date','Value','Cpf','Card','Time','Shop Owner','Shop Name'];

const TableHeader = () => {
    return (
        <tr>
            {ths.map((name) => {
                return (<th>{name}</th>)
            })}
        </tr>
    )
}

export const Table = () => {
    return (
        <Styled.Container>
            <table>
                <thead>
                    <TableHeader/>
                </thead>
                    <TableData/>
            </table>
        </Styled.Container>
    )
}