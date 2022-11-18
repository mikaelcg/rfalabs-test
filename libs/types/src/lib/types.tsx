export interface ApplicationInterface {
  id?: number;
  description?: string;
  date?: boolean;
  brokerSubmissionNotes?: string;
  address?: string;
}

export interface IApplicationContext {
  application?: ApplicationInterface;
  toggleApplication?: (v: ApplicationInterface) => void;
}

export interface TabInterface {
  id: number;
  label: string;
  route: string;
}

export interface ITabsContext {
  tabs: TabInterface[];
  insertTab(tab: TabInterface): void;
}
