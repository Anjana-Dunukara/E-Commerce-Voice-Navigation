// CheckoutForm.jsx
import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { Button, Box, Text } from "@chakra-ui/react";
import { addOrder } from "../services/OrderServices";
import { useUserContext } from "../contexts/UserContext";
import { useCartContext } from "../contexts/CartContext";

const CheckoutForm = ({ address }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCVC] = useState("");
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const { currentUser } = useUserContext();
  const { cart, setCart } = useCartContext();
  const [cookies, removeCookie] = useCookies(["cart"]);

  useEffect(() => {
    var productArray = [];
    cart.forEach((product) => {
      productArray.push(product);
    });
    setProducts(productArray);
  }, [cart, cookies]);

  const handlePaymentSubmit = async (e) => {
    console.log(products);
    e.preventDefault();
    setIsLoading(true);

    // Simulate adding order
    addOrder(products, currentUser, address)
      .then((result) => {})
      .catch((error) => {
        setMessage("An error occurred while processing the order.");
        setIsLoading(false);
      });

    // Simulate successful payment
    setTimeout(() => {
      setIsLoading(false);
      setMessage("Payment successful!");
      setCart([]);
      removeCookie("cart", { path: "/" });
    }, 2000); // Simulate 2 seconds of processing time
  };

  return (
    <form onSubmit={handlePaymentSubmit}>
      <Box marginBottom="24px">
        <Text mb={2}>Card Number</Text>
        <input
          type="text"
          placeholder="Enter card number"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          mb={2}
        />
      </Box>
      <Box marginBottom="24px">
        <Text mb={2}>Expiry</Text>
        <input
          type="text"
          placeholder="MM/YY"
          value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
          mb={2}
        />
      </Box>
      <Box marginBottom="24px">
        <Text mb={2}>CVC</Text>
        <input
          type="text"
          placeholder="CVC"
          value={cvc}
          onChange={(e) => setCVC(e.target.value)}
          mb={2}
        />
      </Box>
      <Button type="submit" isLoading={isLoading} loadingText="Processing">
        Pay now
      </Button>
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
};

export default CheckoutForm;
