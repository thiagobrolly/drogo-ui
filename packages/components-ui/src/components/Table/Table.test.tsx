import React from 'react';
import { renderWithTheme } from '../../utils/tests/helpers';

import { Table, TableContainer, TBody, Td, Th, THead, Tr } from '.';

describe('<Table />', () => {
  it('should render the table', () => {
    renderWithTheme(
      <TableContainer screen={[600, 480]}>
        <Table role="table">
          <THead>
            <Tr>
              <Th>ID</Th>
              <Th align="left">Usuário</Th>
              <Th>Data de cadastro</Th>
            </Tr>
          </THead>
          <TBody>
            <Tr>
              <Td data-label="ID">1</Td>
              <Td data-label="Usuário" color="yellow" align="left">
                email1@email.com
              </Td>
              <Td data-label="Data de cadastro">01/10/2019</Td>
            </Tr>
            <Tr>
              <Td data-label="ID">2</Td>
              <Td data-label="Usuário" color="yellow" align="left">
                email2@email.com
              </Td>
              <Td data-label="Data de cadastro">02/07/2020</Td>
            </Tr>
            <Tr>
              <Td data-label="ID">3</Td>
              <Td data-label="Usuário" color="yellow" align="left">
                email3@email.com
              </Td>
              <Td data-label="Data de cadastro">03/08/2021</Td>
            </Tr>
          </TBody>
        </Table>
      </TableContainer>,
    );

    // expect(screen.getByRole('heading', { name: /Table/i })).toBeInTheDocument();
  });
});
