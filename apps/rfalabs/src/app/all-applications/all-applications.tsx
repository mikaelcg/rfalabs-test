import http from '@rfalabs-test/http';
import { AxiosResponse } from 'axios';
import { useEffect, useState, useContext } from 'react';
import { TabsContext } from '@rfalabs-test/contexts';
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
  Center,
  Spinner,
  IconButton,
  Heading,
} from '@chakra-ui/react';

/* eslint-disable-next-line */
export interface AllApplicationsProps {}

export interface Application {
  id: number;
  description: string;
  date: string;
}

export function AllApplications(props: AllApplicationsProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [applications, setApplications] = useState<Application[]>([]);
  const tabsContext = useContext(TabsContext);

  useEffect(() => {
    setLoading(true);

    http.get('applications').then((response: AxiosResponse) => {
      setApplications(response.data);
      setLoading(false);
    });
  }, []);

  const handleInsertTab = (app: Application) => {
    const tab = {
      id: app.id,
      label: app.description,
      route: `applications/${app.id}`,
    };

    const hasTab: boolean =
      tabsContext?.tabs?.some((tabAux) => tabAux.id === tab.id) || false;

    if (hasTab) {
      alert('Tab already selected!');
      return;
    }

    tabsContext?.insertTab?.(tab);
  };

  return (
    <Container
      maxW="container.lg"
      bg="gray.200"
      color="#262626"
      h="100%"
      w="100%"
    >
      <Center p={4}>
        <Heading>All Applications</Heading>
      </Center>

      {loading ? (
        <Center p={6}>
          <Spinner />
        </Center>
      ) : (
        <TableContainer marginTop={'50px'}>
          <Table size="sm" variant="striped" colorScheme="blackAlpha">
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
