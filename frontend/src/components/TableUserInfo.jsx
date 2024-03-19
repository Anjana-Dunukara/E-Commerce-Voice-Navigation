import React, { useEffect, useState } from "react";
import { Td } from "@chakra-ui/react";

import { getUserById } from "../services/UserServices";

const TableUserInfo = ({ buyerId }) => {
  const [buyer, setBuyer] = useState(null);

  useEffect(() => {
    getUserById(buyerId).then((result) => {
      setBuyer(result.user);
    });
  }, [buyerId]);

  if (!buyer) {
    return <Td>Loading...</Td>;
  }

  return (
    <>
      <Td>{`${buyer.firstName} ${buyer.lastName}`}</Td>
      <Td>{buyer.email}</Td>
      <Td>{buyer.phone}</Td>
    </>
  );
};

export default TableUserInfo;
