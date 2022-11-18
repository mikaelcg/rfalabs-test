import styles from './app-bar.module.scss';
import logo from '../../assets/logo.png';
import { useMemo, useContext } from 'react';
import { TabsContext } from '@rfalabs-test/contexts';
import { TabInterface } from '@rfalabs-test/types';
import { useNavigate } from 'react-router-dom';
import { SmallCloseIcon } from '@chakra-ui/icons';
import {
  Box,
  useColorModeValue,
  Flex,
  Tabs,
  TabList,
  Tab,
  Avatar,
  Image,
  IconButton,
} from '@chakra-ui/react';

/* eslint-disable-next-line */
export interface AppBarProps {}

export function AppBar(props: AppBarProps) {
  const tabsContext = useContext(TabsContext);

  const selectedTabs = useMemo(() => {
    const tabsAux: TabInterface[] = [
      {
        id: 0,
        label: 'All Applications',
        route: '/',
      },
      ...(tabsContext?.tabs || []),
    ];

    return tabsAux;
  }, [tabsContext]);

  const navigate = useNavigate();

  const onChangeTab = (index: number) => {
    const tabPath = selectedTabs?.[index].route;
    navigate(tabPath);
  };

  const removeTab = (e: any, index: number) => {
    e.stopPropagation();
    tabsContext?.removeTab(index);
    navigate('/');
  };

  return (
    <div className={styles['container']}>
      <Flex
        bg={useColorModeValue('gray.100', 'gray.900')}
        w="100%"
        color="grey"
        justify="flex-start"
        align="center"
      >
        <Box paddingLeft={4} paddingRight={4}>
          <Image w={'100px'} objectFit="contain" src={logo} alt="RFA" />
        </Box>

        <Box w="100%">
          <Tabs size="lg" variant="enclosed">
            <TabList>
              {selectedTabs?.map((tab, index) => {
                return (
                  <Tab
                    bg="white"
                    key={tab?.id}
                    onClick={() => onChangeTab(index)}
                  >
                    {tab?.label}

                    {tab.id === 0 ? null : (
                      <div>
                        <IconButton
                          variant={'ghost'}
                          marginLeft={5}
                          aria-label="Close"
                          colorScheme={'red'}
                          onClick={(e) => removeTab(e, index)}
                          icon={<SmallCloseIcon />}
                        />
                      </div>
                    )}
                  </Tab>
                );
              })}
            </TabList>
          </Tabs>
        </Box>

        <Box p={4} marginLeft="auto">
          <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
        </Box>
      </Flex>
    </div>
  );
}

export default AppBar;
