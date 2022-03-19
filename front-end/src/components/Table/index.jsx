import React from 'react';
import * as Styled from './styles';
import { TableData } from './TableData/index';
import { TableHeader } from './TableHeader/index';

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