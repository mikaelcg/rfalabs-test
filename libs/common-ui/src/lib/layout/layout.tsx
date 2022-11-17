import { AppBar, InsightsBar, Sidebar } from '@rfalabs-test/common-ui';
import { Outlet, useLocation } from 'react-router-dom';
import { Flex, useColorModeValue } from '@chakra-ui/react';

/* eslint-disable-next-line */
export interface LayoutProps {}

export function Layout(props: LayoutProps) {
  const showInsightbarAndSidebar: boolean = useLocation().pathname !== '/';

  return (
    <Flex direction="column" grow="1" shrink="1" basis="auto" h="100vh">
      <AppBar />

      {showInsightbarAndSidebar && <InsightsBar />}

      <Flex h="100%" w="100%" bg={useColorModeValue('gray.100', 'gray.900')}>
        {showInsightbarAndSidebar && <Sidebar />}

        <Flex h="100%" w="100%">
          <Outlet />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Layout;
