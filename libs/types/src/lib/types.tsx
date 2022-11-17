export interface ApplicationInterface {
  id?: number;
  description?: string;
  date?: boolean;
}

export interface IApplicationContext {
  application?: ApplicationInterface;
  toggleApplication?: (v: any) => void;
}

export interface TabInterface {
  id?: number;
  label?: string;
}

export interface ITabsContext {
  tabs?: TabInterface[];
  insertTab?: (tab: TabInterface[]) => void;
}
