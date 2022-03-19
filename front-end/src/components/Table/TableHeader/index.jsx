import React from 'react';

const ths = ['Type','Date','Value','Cpf','Card','Time','Shop Owner','Shop Name'];

export const TableHeader = () => {
    return (
        <tr>
            {ths.map((name) => {
                return (<th>{name}</th>)
            })}
        </tr>
    )
}