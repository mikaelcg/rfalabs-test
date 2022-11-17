import styles from './all-applications.module.scss';
import http from '@rfalabs-test/http';
import { AxiosResponse } from 'axios';
import { useEffect, useState, useContext } from 'react';
import { TabsContext } from '@rfalabs-test/contexts';
import { TabInterface, ITabsContext } from '@rfalabs-test/types';
import { AddIcon } from '@chakra-ui/icons';
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
  IconButton,
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
  const tabs = useContext<ITabsContext | null>(TabsContext);

  useEffect(() => {
    setLoading(true);

    http.get('applications').then((response: AxiosResponse) => {
      setApplications(response.data);
      setLoading(false);
    });
  }, []);

  const handleInsertTab = (app: any) => {
    const tabsAux: TabInterface[] = [];

    const tab = {
      id: app.id,
      label: app.description,
    };

    tabsAux.push(tab);

    tabs?.insertTab?.(tabsAux);
  };

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
                    <Td isNumeric>
                      <IconButton
                        onClick={() => handleInsertTab(app)}
                        aria-label="Add"
                        icon={<AddIcon />}
                      />
                    </Td>
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
