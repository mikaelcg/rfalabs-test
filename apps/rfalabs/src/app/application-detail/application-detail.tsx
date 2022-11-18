import styles from './application-detail.module.scss';
import { useParams } from 'react-router-dom';
import {
  Container,
  Flex,
  Text,
  Divider,
  Center,
  Spinner,
  Grid,
  GridItem,
  Card,
  CardHeader,
  CardBody,
  Heading,
  Tabs,
  Tab,
  TabList,
} from '@chakra-ui/react';
import http from '@rfalabs-test/http';
import { AxiosResponse } from 'axios';
import { useEffect, useState, useContext } from 'react';
import { IApplicationContext } from '@rfalabs-test/types';
import { ApplicationContext } from '@rfalabs-test/contexts';

/* eslint-disable-next-line */
export interface ApplicationDetailProps {}

export interface Application {
  id: number;
  description: string;
  date: string;
}

export function ApplicationDetail(props: ApplicationDetailProps) {
  const { application, toggleApplication } =
    useContext<IApplicationContext>(ApplicationContext);

  const [loading, setLoading] = useState<boolean>(false);
  const { applicationId } = useParams();

  useEffect(() => {
    setLoading(true);

    http
      .get(`applications/${applicationId}`)
      .then((response: AxiosResponse) => {
        toggleApplication?.(response.data);
        setLoading(false);
      });
  }, [applicationId]);

  return (
    <Flex h="100%" w="100%">
      {loading ? (
        <Center h="100%" w="100%" p={6}>
          <Spinner />
        </Center>
      ) : (
        <>
          <Container
            maxW="container.lg"
            bg="gray.300"
            color="#262626"
            h="100%"
            w="100%"
          >
            <Grid templateColumns="repeat(1, 1fr)" gap={6} marginTop={5}>
              <GridItem w="100%">
                <Card bg="white">
                  <CardHeader>
                    <Heading size="md">Broker Submission Notes</Heading>
                  </CardHeader>

                  <CardBody>
                    <Text>{application?.brokerSubmissionNotes ?? '-'}</Text>
                  </CardBody>
                </Card>
              </GridItem>
            </Grid>

            <Grid templateColumns="repeat(4, 1fr)" gap={6} marginTop={5}>
              <GridItem w="100%">
                <Card bg="white">
                  <CardHeader>
                    <Heading size="md">Subject Property</Heading>
                  </CardHeader>

                  <CardBody>
                    <Text>{application?.subjectProperty ?? '-'}</Text>
                  </CardBody>
                </Card>
              </GridItem>

              <GridItem w="100%">
                <Card bg="white">
                  <CardHeader>
                    <Heading size="md">Mortgage Details</Heading>
                  </CardHeader>

                  <CardBody>
                    <Text>{application?.mortgageDetails ?? '-'}</Text>
                  </CardBody>
                </Card>
              </GridItem>

              <GridItem w="100%">
                <Card bg="white">
                  <CardHeader>
                    <Heading size="md">Pooling Broker</Heading>
                  </CardHeader>

                  <CardBody>
                    <Text>{application?.poolingBroker ?? '-'}</Text>
                  </CardBody>
                </Card>
              </GridItem>

              <GridItem w="100%">
                <Card bg="white">
                  <CardHeader>
                    <Heading size="md">Broker</Heading>
                  </CardHeader>

                  <CardBody>
                    <Text>{application?.broker ?? '-'}</Text>
                  </CardBody>
                </Card>
              </GridItem>
            </Grid>
          </Container>

          <Divider orientation="vertical" />

          <Container
            maxW="container.lg"
            bg="gray.300"
            color="#262626"
            h="100%"
            w="100%"
          >
            <Flex
              justify={'start'}
              align={'start'}
              direction="column"
              h="100%"
              w="100%"
            >
              <Tabs size="lg" variant="enclosed" marginTop={5}>
                <TabList>
                  <Tab bg="white">Decisions</Tab>
                  <Tab bg="white">VTR</Tab>
                  <Tab bg="white">Insurance</Tab>
                  <Tab bg="white">Documents</Tab>
                  <Tab bg="white">Conditions</Tab>
                  <Tab bg="white">Tick Sheet</Tab>
                  <Tab bg="white">Credit Burean</Tab>
                  <Tab bg="white">E-Mail</Tab>
                  <Tab bg="white">Notes</Tab>
                  <Tab bg="white">Deal Summary</Tab>
                </TabList>
              </Tabs>
            </Flex>
          </Container>
        </>
      )}
    </Flex>
  );
}

export default ApplicationDetail;
