import React from 'react';
import { Td, Text } from '@chakra-ui/react';

const TableProductInfo = ({ productArray }) => {
  return (
    <Td>
      {productArray.map((product) => (
        <Text key={product.id}>{product.id}</Text>
      ))}
    </Td>
  );
};

export default TableProductInfo;
