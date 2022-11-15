import { AppBar, InsightsBar, Sidebar } from '@rfalabs-test/common-ui';
import {
  Flex,
  Text,
  Container,
  useColorModeValue,
  Divider,
} from '@chakra-ui/react';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function App() {
  return (
    <Flex direction="column" grow="1" shrink="1" basis="auto" h="100vh">
      <AppBar />

      <InsightsBar />

      <Flex h="100%" w="100%" bg={useColorModeValue('gray.100', 'gray.900')}>
        <Sidebar />

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
      </Flex>
    </Flex>
  );
}

export default App;
