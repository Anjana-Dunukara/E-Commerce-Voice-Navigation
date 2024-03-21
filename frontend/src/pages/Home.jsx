import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Flex,
  Text,
  Container,
  SimpleGrid,
  Image,
  CircularProgress,
} from '@chakra-ui/react';

import Carousel from '../components/Carousel';
import { useSearchContext } from '../contexts/SearchContext';
import { getAllMiniImages } from '../services/ImageServices';

import Voice from '../components/Voice';

const Home = () => {
  useEffect(() => {
    getAllMiniImages().then((result) => {
      setMiniImages(result.miniImages);
    });
  }, []);
  const navigate = useNavigate();
  const { setSearch } = useSearchContext();
  const [miniImages, setMiniImages] = useState([]);

  const onClickImage = () => {
    setSearch('a');
    navigate('/search');
  };

  return (
    <Box>
      <Box bg="green.200" py={4} mb={8}>
        <Text
          fontSize="2xl"
          fontWeight="bold"
          textAlign="center"
          color="green.900"
        >
          Fresh Produce and Groceries Delivered to Your Door
        </Text>
      </Box>

      <Flex justifyContent="center" mb={8}>
        <Carousel className="carousel" />
      </Flex>

      <Flex justifyContent="center" mb={8}>
        <Voice />
      </Flex>

      <Box textAlign="center">
        <Text
          fontSize={{ base: '3xl', md: '4xl' }}
          fontWeight="bold"
          mb={4}
          color="green.800"
          fontFamily="sans-serif"
          textAlign="center"
          textTransform="uppercase"
          borderBottom="4px solid"
          borderColor="green.500"
          pb={2}
        >
          Our Categories
        </Text>

        <SimpleGrid
          columns={{ base: 1, sm: 2 }}
          spacing={{ base: 3, md: 5 }}
          px={{ base: 3, md: 0 }}
          py={{ base: 3, md: 5 }}
          mt={5}
          maxWidth={1200}
          mx="auto"
        >
          {miniImages &&
            miniImages.map((image, index) => {
              return (
                <Image
                  key={index}
                  cursor="pointer"
                  onClick={onClickImage}
                  src={image.url}
                />
              );
            })}
          {miniImages.length === 0 && (
            <>
              <Box my={20} display="flex" justifyContent="center" width="100%">
                <CircularProgress isIndeterminate color="facebook.500" />
              </Box>
              <Box my={20} display="flex" justifyContent="center" width="100%">
                <CircularProgress isIndeterminate color="facebook.500" />
              </Box>
            </>
          )}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Home;
