import styles from './layout.module.scss';
import { AppBar, InsightsBar, Sidebar } from '@rfalabs-test/common-ui';
import { Outlet } from 'react-router-dom';
import { Flex, useColorModeValue } from '@chakra-ui/react';

/* eslint-disable-next-line */
export interface LayoutProps {}

export function Layout(props: LayoutProps) {
  return (
    <Flex direction="column" grow="1" shrink="1" basis="auto" h="100vh">
      <AppBar />
      <InsightsBar />

      <Flex h="100%" w="100%" bg={useColorModeValue('gray.100', 'gray.900')}>
        <Sidebar />

        <Flex h="100%" w="100%">
          <Outlet />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Layout;
