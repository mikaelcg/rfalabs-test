import styles from './all-applications.module.scss';
import http from '@rfalabs-test/http';
import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
/* eslint-disable-next-line */
export interface AllApplicationsProps {}

export interface Applications {
  id: number;
  description: string;
}

export function AllApplications(props: AllApplicationsProps) {
  const [applications, setApplications] = useState<Applications[]>([]);

  useEffect(() => {
    http.get('applications').then((response: AxiosResponse) => {
      setApplications(response.data);
    });
  }, []);

  return (
    <div className={styles['container']}>
      <h1>Welcome to AllApplications!</h1>
      {applications.map((app) => {
        return <p key={app.id}>{app.description}</p>;
      })}
    </div>
  );
}

export default AllApplications;
