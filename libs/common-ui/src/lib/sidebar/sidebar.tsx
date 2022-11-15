import styles from './sidebar.module.scss';
import { Box, Flex, IconButton, Link, Tooltip } from '@chakra-ui/react';
import {
  EditIcon,
  CopyIcon,
  AtSignIcon,
  CalendarIcon,
  EmailIcon,
} from '@chakra-ui/icons';

/* eslint-disable-next-line */
export interface SidebarProps {}

export function Sidebar(props: SidebarProps) {
  interface LinkItemProps {
    name: string;
    icon: string;
  }

  const LinkItems: Array<LinkItemProps> = [
    { name: 'Summary', icon: 'EditIcon' },
    { name: 'Applicants', icon: 'AtSignIcon' },
    { name: 'Mortgage Details', icon: 'CalendarIcon' },
    { name: 'Commitment Letter', icon: 'EmailIcon' },
    { name: 'Documents', icon: 'CopyIcon' },
    { name: 'QC', icon: 'AtSignIcon' },
    { name: 'Funding', icon: 'AtSignIcon' },
  ];

  return (
    <Flex
      bg="gray.600"
      h="100%"
      w="80px"
      p={4}
      flexDirection={'column'}
      justifyContent={'flex-start'}
      alignItems={'center'}
    >
      {LinkItems.map((link) => {
        const icon = {
          CopyIcon: <CopyIcon />,
          AtSignIcon: <AtSignIcon />,
          CalendarIcon: <CalendarIcon />,
          EditIcon: <EditIcon />,
          EmailIcon: <EmailIcon />,
        }[link.icon];

        return (
          <Tooltip label={link.name} key={link.name}>
            <IconButton
              marginBottom={'30px'}
              aria-label="Search database"
              icon={icon}
            />
          </Tooltip>
        );
      })}
    </Flex>
  );
}

export default Sidebar;
