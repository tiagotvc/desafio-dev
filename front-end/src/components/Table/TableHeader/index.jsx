import React from 'react';

const ths = ['Nome','Débito','Boleto',
'Financiamento','Crédito','Recebimento Empréstimo',
'Vendas','Recebimento TED','Recebimento DOC','Aluguel'];

export const TableHeader = () => {
    return (
        <tr id='1'>
            {ths.map((name, index) => {
                return (<th key={index}>{name}</th>)
            })}
        </tr>
    )
}