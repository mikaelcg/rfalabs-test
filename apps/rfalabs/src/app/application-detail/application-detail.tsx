import styles from './application-detail.module.scss';
import { useParams } from 'react-router-dom';
import { Container, Flex, Text, Divider } from '@chakra-ui/react';
/* eslint-disable-next-line */
export interface ApplicationDetailProps {}

export function ApplicationDetail(props: ApplicationDetailProps) {
  const { applicationId } = useParams();

  return (
    <Flex h="100%" w="100%">
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
          <div className={styles['container']}>
            <h1>Welcome to ApplicationDetail {applicationId}!</h1>
          </div>
          <Text>Primary</Text>
          <Text> Application Data</Text>
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
    </Flex>
  );
}

export default ApplicationDetail;
