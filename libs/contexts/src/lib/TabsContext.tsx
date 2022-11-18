import { createContext, useState, FC, ReactNode } from 'react';
import { TabInterface, ITabsContext } from '@rfalabs-test/types';

export const TabsContext = createContext<ITabsContext | null>(null);

interface Props {
  children?: ReactNode;
}

export const TabsProvider: FC<Props> = ({ children }) => {
  const [tabs, setTabs] = useState<TabInterface[]>([]);

  function insertTab(tab: TabInterface) {
    setTabs([...tabs, tab]);
  }

  function removeTab(index: number) {
    const tabsAux: TabInterface[] = [...(tabs || [])];
    tabsAux.splice(index - 1, 1);
    setTabs(tabsAux);
  }

  return (
    <TabsContext.Provider value={{ tabs, insertTab, removeTab }}>
      {children}
    </TabsContext.Provider>
  );
};

export default TabsProvider;
