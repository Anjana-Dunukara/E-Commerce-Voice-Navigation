import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, IconButton, useBreakpointValue } from '@chakra-ui/react';
import { ArrowForwardIos, ArrowBackIos } from '@mui/icons-material';

import { getAllImages } from '../services/ImageServices';
import { useSearchContext } from '../contexts/SearchContext';

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Carousel = () => {
  const navigate = useNavigate();
  const { setSearch } = useSearchContext();
  const [images, setImages] = useState([]);
  const [slider, setSlider] = useState('');

  const top = useBreakpointValue({ base: '90%', sm: '50%' });
  const side = useBreakpointValue({ base: '30%', sm: '10px', lg: '4%' });

  useEffect(() => {
    getAllImages().then((result) => {
      setImages(result.images);
    });
  }, []);

  const onClickImage = () => {
    setSearch('a');
  };

  return (
    <Box
      position={'relative'}
      mt={0}
      width={{ base: '100vw', md: '100vw' }}
      overflow={'hidden'}
    >
      <IconButton
        colorScheme="facebook"
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider.slickPrev()}
      >
        <ArrowBackIos />
      </IconButton>
      <IconButton
        aria-label="right-arrow"
        colorScheme="facebook"
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider.slickNext()}
      >
        <ArrowForwardIos />
      </IconButton>
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {images &&
          images.map((image, index) => (
            <div key={index} style={{ position: 'relative' }}>
              <Box
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '180px',
                  transform: 'translateY(-50%)',
                  zIndex: 2,
                }}
                display={{ sm: 'none', md: 'none', lg: 'block' }}
              >
                <h1 style={{ fontSize: '3rem', fontWeight: '900' }}>
                  Feel Fresh
                </h1>
                <p
                  style={{
                    cursor: 'pointer',
                    border: 'none',
                    borderRadius: '40px',
                    padding: '20px',
                    width: '70%',
                    textAlign: 'center',
                    fontSize: '1.5rem',
                    backgroundColor: 'greenyellow',
                  }}
                >
                  <Link to="/search"> Shop Now</Link>
                </p>
              </Box>
              <Box
                onClick={onClickImage}
                width={{ lg: '100vw' }}
                height={{ base: '180px', sm: '400px', md: '500px', lg: '90vh' }}
                position="relative"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                backgroundImage={`url(${image.url})`}
              />
            </div>
          ))}
      </Slider>
    </Box>
  );
};

export default Carousel;
