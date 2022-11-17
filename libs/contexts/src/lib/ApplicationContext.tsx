import { createContext, useState } from 'react';
import { ApplicationInterface, IApplicationContext } from '@rfalabs-test/types';

export const ApplicationContext = createContext<Partial<IApplicationContext>>(
  {}
);

export function ApplicationProvider(props: any) {
  const [application, setApplication] = useState({});

  const toggleApplication = (v: any) => {
    setApplication(v);
  };

  return (
    <ApplicationContext.Provider value={{ application, toggleApplication }}>
      {props.children}
    </ApplicationContext.Provider>
  );
}

export default ApplicationProvider;
