'use client';
import { Table, Checkbox } from '@mantine/core';
import { useEffect, useState } from 'react';

export default function Page() {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [data, setData] = useState<any[]>([]);
  const elements = [
    { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
    { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
    { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
    { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
    { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://onox.cloud/backend/simple_audience.php',
        );
        console.log('response', response);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  });

  const rows = elements.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>
        <Checkbox
          aria-label="Select row"
          checked={selectedRows.includes(element.position)}
          onChange={(event) =>
            setSelectedRows(
              event.currentTarget.checked
                ? [...selectedRows, element.position]
                : selectedRows.filter(
                    (position) => position !== element.position,
                  ),
            )
          }
        />
      </Table.Td>

      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      <div>{JSON.stringify(data)}</div>
      <Table withTableBorder>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>
              <Checkbox />
            </Table.Th>
            <Table.Th>Audience</Table.Th>
            <Table.Th>Tags</Table.Th>
            <Table.Th>Status</Table.Th>
            <Table.Th>Action</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </>
  );
}
