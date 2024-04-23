import React, { useEffect, useState } from 'react';
import { Box, Text, SimpleGrid, Icon, Heading } from '@chakra-ui/react';

import OrderReportCard from '../components/OrderReportCard';
import { Construction } from '@mui/icons-material';
import { getAllOrders, getOrdersByStatus } from '../services/OrderServices';

const ReportsforAdminOrders = () => {
  const [orders, setOrders] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    getAllOrders()
      .then((result) => {
        setOrders(result.allOrders);
      })
      .catch((err) => console.log(err));
  }, [refresh, orders]);

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
        Orders Report
      </Text>
      <SimpleGrid spacing={3}>
        {orders.length > 0 && (
          <OrderReportCard orders={orders} refresh={refresh} />
        )}
      </SimpleGrid>
      {orders.length === 0 && (
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
              No Orders
            </Heading>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default ReportsforAdminOrders;
