import styles from './application-detail.module.scss';
import { useParams } from 'react-router-dom';

/* eslint-disable-next-line */
export interface ApplicationDetailProps {}

export function ApplicationDetail(props: ApplicationDetailProps) {
  const { applicationId } = useParams();

  return (
    <div className={styles['container']}>
      <h1>Welcome to ApplicationDetail {applicationId}!</h1>
    </div>
  );
}

export default ApplicationDetail;
