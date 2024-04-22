import React from 'react';
import { Box, Table, Thead, Tbody, Tr, Th, Td, Text } from '@chakra-ui/react';
import moment from 'moment';
import TableStatusInfo from './TableStatusInfo';
import TableProductInfo from './TableProductInfo';
import TableUserInfo from './TableUserInfo';

const OrderReportCard = (props) => {
  const notEdit = false;

  const filterOrdersByWeek = (orders) => {
    const today = moment();
    const startOfWeek = today.clone().startOf('week');
    const endOfWeek = today.clone().endOf('week');

    return orders.filter((order) =>
      moment(order.orderDate).isBetween(startOfWeek, endOfWeek, 'day', '[]')
    );
  };

  const weeklyOrders = filterOrdersByWeek(props.orders);

  return (
    <Box bg="whitesmoke" p={3}>
      {weeklyOrders.length > 0 ? (
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Id</Th>
              <Th>Buyer</Th>
              <Th>Email</Th>
              <Th>Phone</Th>
              <Th>Address</Th>
              <Th>Products</Th>
              <Th>Order Date</Th>
              <Th>status</Th>
            </Tr>
          </Thead>
          <Tbody>
            {weeklyOrders.map((order) => {
              return (
                <Tr key={order._id}>
                  <Td>{order._id}</Td>
                  <TableUserInfo buyerId={order.buyer} />
                  <Td>{order.address}</Td>
                  <TableProductInfo
                    productArray={order.products}
                    refresh={props.refresh}
                  />
                  <Td>{moment(order.orderDate).format('DD.MM.YY')}</Td>
                  <span>
                    <TableStatusInfo
                      prepare={order.prepare}
                      onWay={order.onWay}
                      delivered={order.delivered}
                      canceled={order.cancel}
                      orderId={order._id}
                      refresh={props.refresh}
                      notEdit={notEdit}
                    />
                  </span>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      ) : (
        <Box>
          <Text
            fontSize={{ base: '3xl', md: '4xl' }}
            fontWeight="bold"
            mb={4}
            color="Blue"
            fontFamily="sans-serif"
            textAlign="center"
            textTransform="uppercase"
            borderColor="green.500"
            pb={2}
          >
            No Orders This week
          </Text>
        </Box>
      )}
    </Box>
  );
};

export default OrderReportCard;
