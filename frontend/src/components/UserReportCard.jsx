import React from 'react';
import { Box, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';

const UserReportCard = (props) => {
  return (
    <Box bg="whitesmoke" p={3}>
      {props.users && (
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>No</Th>
              <Th>User ID</Th>
              <Th>Firstname</Th>
              <Th>Lastname</Th>
              <Th>Contact</Th>
            </Tr>
          </Thead>
          <Tbody>
            {props.users.map((user, index) => (
              <Tr key={user._id}>
                <Td>{index + 1}</Td>
                <Td>{user._id}</Td>
                <Td>{user.firstName}</Td>
                <Td>{user.lastName}</Td>
                <Td>{user.email + ' - ' + user.phone}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      )}
    </Box>
  );
};

export default UserReportCard;
