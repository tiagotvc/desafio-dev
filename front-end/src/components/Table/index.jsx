import React from 'react';
import * as Styled from './styles';

const trs = ['Type','Date','Value','Cpf','Card','Time','Shop Owner','Shop Name'];

export const Table = (props) => {

    return (
        <Styled.TableContainer>
            <table>
                <thead>
                    {trs.map((name) => {
                        <tr>{name}</tr>
                    })}
                </thead>
                <tbody>
                    <tr></tr>
                </tbody>
            </table>
        </Styled.TableContainer>
    )
}