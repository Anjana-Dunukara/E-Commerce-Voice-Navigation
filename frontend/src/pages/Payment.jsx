// Payment.jsx
import React from "react";
import { Box, Center } from "@chakra-ui/react";
import CheckoutForm from "../components/CheckoutForm";
import "../payment.css";
import { useLocation } from "react-router-dom";

const Payment = () => {
  const { state } = useLocation();

  return (
    <Center>
      <Box className="payment" p={{ base: 0, md: 5 }}>
        <CheckoutForm price={state.price} address={state.address} />
      </Box>
    </Center>
  );
};

export default Payment;
