import styles from './application-detail.module.scss';
import { useParams } from 'react-router-dom';
import {
  Container,
  Flex,
  Text,
  Divider,
  Center,
  Spinner,
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
            <Flex
              justify={'center'}
              align={'center'}
              direction="column"
              h="100%"
              w="100%"
            >
              {application?.description}
              <div className={styles['container']}>
                <h1>Welcome to ApplicationDetail {applicationId}!</h1>
              </div>
              <Text>Primary</Text>
              <Text>Application Data</Text>
              <Text>Working Area</Text>
            </Flex>
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
              justify={'center'}
              align={'center'}
              direction="column"
              h="100%"
              w="100%"
            >
              <Text> Supplementary Data</Text>
              <Text>Working Area</Text>
            </Flex>
          </Container>
        </>
      )}
    </Flex>
  );
}

export default ApplicationDetail;
