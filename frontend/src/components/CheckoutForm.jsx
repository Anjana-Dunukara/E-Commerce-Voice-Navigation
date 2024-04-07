import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import {
  Button,
  Box,
  Text,
  useToast,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from '@chakra-ui/react';
import { addOrder } from '../services/OrderServices';
import { useUserContext } from '../contexts/UserContext';
import { useCartContext } from '../contexts/CartContext';
import { useFormik } from 'formik';
import CheckoutDetailsValidation from '../validations/CheckoutValidations';

const CheckoutForm = ({ address }) => {
  const { currentUser } = useUserContext();
  const { cart, setCart } = useCartContext();
  const [cookies, setCookie, removeCookie] = useCookies(['cart']);
  const toast = useToast();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    var productArray = [];
    cart.forEach((product) => {
      productArray.push(product);
    });
    setProducts(productArray);
  }, [cart]);

  const {
    values,
    errors,
    touched,
    handleSubmit,
    handleChange,
    handleBlur,
    isSubmitting,
    isValid,
    resetForm,
  } = useFormik({
    initialValues: {
      cardNumber: '',
      expiry: '',
      cvc: '',
    },
    onSubmit: async (values) => {
      try {
        await addOrder(products, currentUser, address);
        setTimeout(() => {
          toast({
            title: 'Successful!',
            description: 'Thank you for purchasing from V-cart.',
            status: 'success',
            duration: 3000,
            isClosable: true,
          });
          setCart([]);
          removeCookie('cart', { path: '/' });
          resetForm();
        }, 2000);
      } catch (error) {
        toast({
          title: 'An error occurred',
          description: 'An error occurred while processing the order.',
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      }
    },
    validationSchema: CheckoutDetailsValidation,
  });

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100vw"
      mt={5}
    >
      <Box width={{ base: '100vw', sm: '500px' }} p={2}>
        <Text
          textAlign="center"
          color={'facebook.500'}
          fontSize={32}
          fontWeight={600}
          mb={10}
        >
          Payment Details
        </Text>
        <FormControl
          marginBottom="24px"
          isInvalid={touched.cardNumber && errors.cardNumber}
        >
          <FormLabel>Card Number</FormLabel>
          <input
            name="cardNumber"
            type="text"
            placeholder="Enter card number"
            onChange={handleChange}
            value={values.cardNumber}
            onBlur={handleBlur}
            mb={2}
          />
          <FormErrorMessage>{errors.cardNumber}</FormErrorMessage>
        </FormControl>
        <FormControl
          marginBottom="24px"
          isInvalid={touched.expiry && errors.expiry}
        >
          <FormLabel>Expiry</FormLabel>
          <input
            name="expiry"
            type="text"
            placeholder="MM/YY"
            onChange={handleChange}
            value={values.expiry}
            onBlur={handleBlur}
            mb={2}
          />
          <FormErrorMessage>{errors.expiry}</FormErrorMessage>
        </FormControl>
        <FormControl marginBottom="24px" isInvalid={touched.cvc && errors.cvc}>
          <FormLabel>CVC</FormLabel>
          <input
            name="cvc"
            type="text"
            placeholder="CVC"
            onChange={handleChange}
            value={values.cvc}
            onBlur={handleBlur}
            mb={2}
          />
          <FormErrorMessage>{errors.cvc}</FormErrorMessage>
        </FormControl>
        <Button
          onClick={handleSubmit}
          variant="outline"
          colorScheme="facebook"
          disabled={!isValid && isSubmitting}
          loadingText="Processing"
        >
          Pay now
        </Button>
      </Box>
    </Box>
  );
};

export default CheckoutForm;
