import styles from './all-applications.module.scss';
import http from '@rfalabs-test/http';
import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Container,
  Text,
  Center,
  Spinner,
} from '@chakra-ui/react';

/* eslint-disable-next-line */
export interface AllApplicationsProps {}

export interface Applications {
  id: number;
  description: string;
  date: string;
}

export function AllApplications(props: AllApplicationsProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [applications, setApplications] = useState<Applications[]>([]);

  useEffect(() => {
    setLoading(true);

    http.get('applications').then((response: AxiosResponse) => {
      setApplications(response.data);
      setLoading(false);
    });
  }, []);

  return (
    <Container
      maxW="container.lg"
      bg="gray.300"
      color="#262626"
      h="100%"
      w="100%"
    >
      <Center>
        <Text fontSize="4xl">All Applications</Text>
      </Center>

      {loading ? (
        <Center p={6}>
          <Spinner />
        </Center>
      ) : (
        <TableContainer>
          <Table variant="striped" colorScheme="blackAlpha">
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>Description</Th>
                <Th>Date</Th>
                <Th isNumeric>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {applications.map((app) => {
                return (
                  <Tr key={app.id}>
                    <Td>{app.id}</Td>
                    <Td>{app.description}</Td>
                    <Td>{app.date}</Td>
                    <Td isNumeric>+</Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      )}
    </Container>
  );
}

export default AllApplications;
