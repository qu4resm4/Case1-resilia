import './App.css'
import React from 'react';
import { useTable } from 'react-table';
import { Table } from 'react-bootstrap';


const data = [
  {
    nome: 'Empresa A',
    cnpj: '12345678900001',
    produtos: ['produto1', 'produto2', 'produto3']
  },
  {
    nome: 'Empresa B',
    cnpj: '12345678900002',
    produtos: ['produto4', 'produto5']
  },
  {
    nome: 'Empresa C',
    cnpj: '12345678900003',
    produtos: ['produto6']
  }
];

const columns = [
  {
    Header: 'Nome',
    accessor: 'nome'
  },
  {
    Header: 'CNPJ',
    accessor: 'cnpj'
  },
  {
    Header: 'Pontos de Coleta',
    accessor: 'Pontos de Coleta',
    Cell: ({ value }) => value.join(', ')
  }
];

function App() {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data
  });

  return (
    <Table striped bordered hover {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default App
