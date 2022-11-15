import styles from './app-bar.module.scss';
import { Box,  useColorModeValue, Flex , Select, Tabs, TabList, Tab, Avatar} from '@chakra-ui/react'
/* eslint-disable-next-line */
export interface AppBarProps {}

export function AppBar(props: AppBarProps) {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} w='100%'  color='grey'>
      <Flex justify='flex-start' align='center'>
        <Box p={4}>
          RFA LABS
        </Box>
        <Box p={4}>
          <Select placeholder='Applications' w='300px'>
            <option value='app1'>Application 1</option>
            <option value='app2'>Application 2</option>
            <option value='app3'>Application 3</option>
          </Select>
        </Box>
        <Box w='100%'>
          <Tabs size='lg' variant='enclosed'>
            <TabList>
              <Tab>Client 1</Tab>
              <Tab>Client 2</Tab>
              <Tab>Client 3</Tab>
              <Tab>Client 4</Tab>
            </TabList>
          </Tabs>
        </Box>
        <Box p={4}>
          <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
        </Box>
      </Flex>
    </Box>
  );
}

export default AppBar;
