import { createContext, useState, FC, ReactNode } from 'react';
import { TabInterface, ITabsContext } from '@rfalabs-test/types';

export const TabsContext = createContext<ITabsContext | null>(null);

interface Props {
  children?: ReactNode;
}

export const TabsProvider: FC<Props> = ({ children }) => {
  const [tabs, setTabs] = useState<TabInterface[]>([]);

  const insertTab = (v: any) => {
    setTabs(v);
  };

  return (
    <TabsContext.Provider value={{ tabs, insertTab }}>
      {children}
    </TabsContext.Provider>
  );
};

export default TabsProvider;
