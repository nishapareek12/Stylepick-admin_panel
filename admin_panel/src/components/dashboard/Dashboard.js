import React, { useEffect, useMemo } from 'react';
import axios from 'axios';
import { useTable } from 'react-table';

const MerchantTable = () => {
  // Define columns for your table
  const columns = [
    {
      Header: 'Merchant Name',
      accessor: 'merchantName',
    },
    {
      Header: 'Merchant ID',
      accessor: 'merchantID',
    },
    {
      Header: 'Location',
      accessor: 'location',
    },
    {
      Header: 'Updated Date',
      accessor: 'updatedDate',
    },
    {
      Header: 'Created Date',
      accessor: 'createdDate',
    },
    {
      Header: 'Plan Status',
      accessor: 'planStatus',
    },
    {
      Header: 'Catalogue Upload',
      accessor: 'catalogueUpload',
    },
  ];

  // Define a function to fetch merchant data from an API
  const fetchMerchantData = async () => {
    try {
      const response = await axios.get('YOUR_API_ENDPOINT');
      return response.data; // Assuming the API returns an array of merchant objects
    } catch (error) {
      console.error('Error fetching merchant data:', error);
      return [];
    }
  };

  // Use useMemo to memoize the table data
  const data = useMemo(() => fetchMerchantData(), []);

  // Initialize the table instance
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  return (
    <div>
      <table {...getTableProps()} className="table">
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
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MerchantTable;