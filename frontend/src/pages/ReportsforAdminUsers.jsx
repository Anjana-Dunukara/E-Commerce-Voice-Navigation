import React, { useEffect, useState } from 'react';
import { Box, Text, SimpleGrid, Icon, Heading } from '@chakra-ui/react';

import UserReportCard from '../components/UserReportCard';
import { getAllUsers } from '../services/UserServices';
import { Construction } from '@mui/icons-material';

const ReportsforAdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [adminUsers, setAdminUsers] = useState([]);

  useEffect(() => {
    getAllUsers()
      .then((result) => {
        const allUsersInTable = result.allUsers;
        const normalUsers = [];
        const adminUsers = [];
        for (let i = 0; i < allUsersInTable.length; i++) {
          if (allUsersInTable[i].admin === false) {
            normalUsers.push(allUsersInTable[i]);
          } else {
            adminUsers.push(allUsersInTable[i]);
          }
        }
        setUsers(normalUsers);
        setAdminUsers(adminUsers);
      })
      .catch((err) => console.log(err));
  }, [users, adminUsers]);

  return (
    <Box
      px={{ base: 3, md: 5 }}
      py={10}
      display="flex"
      width="100%"
      flexDirection="column"
    >
      <Text
        fontSize="32"
        my={5}
        fontWeight={600}
        color="facebook.500"
        textAlign="center"
      >
        Users Report
      </Text>
      <SimpleGrid spacing={3}>
        {users.length > 0 && (
          <UserReportCard users={users} adminUsers={adminUsers} />
        )}
      </SimpleGrid>
      {users.length === 0 && (
        <Box display="flex" justifyContent="center">
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            mt={10}
            p={3}
          >
            <Icon color="#314E89" fontSize={100} as={Construction} />
            <Heading textAlign="center" fontSize={30} mt={8}>
              No Users
            </Heading>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default ReportsforAdminUsers;
