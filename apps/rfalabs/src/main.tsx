import * as ReactDOM from 'react-dom/client';
import AllApplications from './app/all-applications/all-applications';
import ApplicationDetail from './app/application-detail/application-detail';
import { StrictMode } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from '@rfalabs-test/common-ui';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <AllApplications />,
      },
      {
        path: '/applications/:applicationId',
        element: <ApplicationDetail />,
      },
    ],
  },
]);

root.render(
  <StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </StrictMode>
);
