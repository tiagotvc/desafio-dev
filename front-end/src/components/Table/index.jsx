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
    },
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
        <tbody>
            {mock.map((data) => {
                return (
                    <tr>
                        <td>{data.type}</td>
                        <td>{data.date}</td>
                        <td>{data.value}</td>
                        <td>{data.cpf}</td>
                        <td>{data.card}</td>
                        <td>{data.time}</td>
                        <td>{data.shop_owner}</td>
                        <td>{data.shop_name}</td>
                    </tr>
                )
            })}
        </tbody>
    )
}


export const Table = (props) => {
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