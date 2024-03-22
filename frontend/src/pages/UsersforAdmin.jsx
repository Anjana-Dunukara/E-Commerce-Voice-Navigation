import React, { useEffect, useState } from "react";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  Th,
  TableContainer,
  Button,
  useToast,
  CircularProgress,
} from "@chakra-ui/react";
import { Delete } from "@mui/icons-material";

import { deleteUser, getAllUsers } from "../services/UserServices";

const UsersforAdmin = () => {
  const [users, setUsers] = useState([]);
  const toast = useToast();

  useEffect(() => {
    getAllUsers().then((result) => {
      setUsers(result.allUsers);
    });
  });

  const onClickDelete = (id) => {
    deleteUser(id).then((result) => {
      if (result.status) {
        toast({
          title: "Error!",
          description: "Somethings went wrong.",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Deleted!",
          description: "User succesfully deleted.",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      }
    });
  };

  if (users.length >= 0) {
    return (
      <Box>
        <TableContainer p={3}>
          <Table variant="striped">
            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>First Name</Th>
                <Th>Last Name</Th>
                <Th>Email</Th>
                <Th>Phone Number</Th>
              </Tr>
            </Thead>
            <Tbody>
              {users.map((User) => {
                return (
                  <Tr key={User._id}>
                    <Td>{User._id}</Td>
                    <Td>{User.firstName}</Td>
                    <Td>{User.lastName}</Td>
                    <Td>{User.email}</Td>
                    <Td>{User.phone}</Td>
                    <Td>
                      <Button
                        onClick={() => onClickDelete(User._id)}
                        bg="whitesmoke"
                        color="facebook.500"
                      >
                        <Delete />
                      </Button>
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    );
  } else {
    return (
      <Box
        alignItems="center"
        display="flex"
        justifyContent="center"
        width="100%"
        minHeight="40vh"
      >
        <CircularProgress isIndeterminate color="facebook.500" />
      </Box>
    );
  }
};

export default UsersforAdmin;
