import { useContext } from 'react';
import { ApplicationContext } from '@rfalabs-test/contexts';
import { Flex, Box, Text, Badge, Select } from '@chakra-ui/react';
import { SmallCloseIcon, WarningIcon } from '@chakra-ui/icons';
import { IApplicationContext } from '@rfalabs-test/types';

/* eslint-disable-next-line */
export interface InsightsBarProps {}

export function InsightsBar(props: InsightsBarProps) {
  const { application } = useContext<IApplicationContext>(ApplicationContext);

  return (
    <Flex bg="white" w="100%" color="gray" justify="flex-start" align="center">
      <Box p={4}>
        <Select placeholder="Status" w="300px">
          <option value="review">In Review</option>
          <option value="awaiting">Awaiting</option>
          <option value="done">Done</option>
        </Select>
      </Box>

      <Box>
        <Flex p={4}>
          <Box ml="3">
            <Text fontWeight="bold">{application?.description}</Text>
            <Text fontSize="sm">1 Main Street Miltons, ONT</Text>
            <Text fontSize="sm">Dec 1, 2022</Text>
          </Box>
        </Flex>
      </Box>

      <Box>
        <Flex p={4}>
          <Box p={4}>
            <Badge colorScheme="red">
              <Flex align={'center'}>
                <Text p={1}>Warning</Text>
                <SmallCloseIcon />
              </Flex>
            </Badge>
          </Box>
          <Box p={4}>
            <Badge colorScheme="red">
              <Flex align={'center'}>
                <Text p={1}>Warning</Text>
                <SmallCloseIcon />
              </Flex>
            </Badge>
          </Box>
          <Box p={4}>
            <Badge colorScheme="orange">
              <Flex align={'center'}>
                <Text p={1}>Alert</Text>
                <WarningIcon />
              </Flex>
            </Badge>
          </Box>
          <Box p={4}>
            <Badge colorScheme="orange">
              <Flex align={'center'}>
                <Text p={1}>Alert</Text>
                <WarningIcon />
              </Flex>
            </Badge>
          </Box>
        </Flex>
      </Box>

      <div style={{ marginLeft: 'auto' }}>
        <Box>
          <Flex p={4}>
            <Box ml="3">
              <Text fontWeight="bold" align={'right'}>
                LTV: 79.89
              </Text>
            </Box>
            <Box ml="3">
              <Text fontWeight="bold" align={'right'}>
                GDS: 42.34
              </Text>
              <Text fontWeight="bold" align={'right'}>
                QGDS: 45.78
              </Text>
            </Box>
            <Box ml="3">
              <Text fontWeight="bold" align={'right'}>
                TDS: 42.34
              </Text>
              <Text fontWeight="bold" align={'right'}>
                QTDS: 45.78
              </Text>
            </Box>
          </Flex>
        </Box>
      </div>
    </Flex>
  );
}

export default InsightsBar;
