import React from 'react';
import * as Styled from './styles';

const ths = ['Type','Date','Value','Cpf','Card','Time','Shop Owner','Shop Name'];

const mock = [
    {  
        type: 1,
        date: '10/07/2021',
        value: 134,
        cpf: '02501729099',
        card: 'visa',
        time: 'GNT -2',
        shop_owner: 'Edu',
        shop_name: 'stambui'
    },
    {  
        type: 10,
        date: '10/07/2021',
        value: 1334,
        cpf: '02501729099',
        card: 'master',
        time: 'GNT -2',
        shop_owner: 'Edu',
        shop_name: 'other'
    },
    {  
        type: 3,
        date: '10/07/2021',
        value: 34,
        cpf: '02501729099',
        card: 'cielo',
        time: 'GNT -2',
        shop_owner: 'Edu',
        shop_name: 'other'
    }
 
]

const TableHeader = () => {
    return (
        <tr>
            {ths.map((name) => {
                return (<th>{name}</th>)
            })}
        </tr>
    )
}

const TableData = () => {
    return (
        <></>
    )
}


export const Table = (props) => {
    return (
        <Styled.Container>
            <table>
                <thead>
                    <TableHeader/>
                </thead>
                <tbody>
                    <TableData/>
                </tbody>
            </table>
        </Styled.Container>
    )
}