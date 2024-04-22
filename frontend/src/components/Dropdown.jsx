import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  useDisclosure,
  MenuItem,
  Menu,
  MenuButton,
  MenuList,
  Box,
} from '@chakra-ui/react';

import { getCategoryByGenre } from '../services/CategoryServices';

const Dropdown = ({ title, genreId }) => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategoryByGenre(genreId).then((result) => {
      setCategories(result.category);
    });
  }, [genreId]);

  const handleClick = (categoryId) => {
    navigate('/search', { state: { categoryId: categoryId } });
  };

  return (
    categories.length !== 0 && (
      <Box pe={{ base: 2, md: 10 }}>
        <Menu isOpen={isOpen} onClose={onClose}>
          <MenuButton
            color="blackAlpha.700"
            fontSize={20}
            fontWeight={500}
            variant="outline"
            onClick={isOpen ? onClose : onOpen} // Toggles menu open/close on click
            borderBottom="3px solid white"
            transition={0.5}
            _hover={{
              color: 'facebook.500',
              borderBottom: '3px solid #385898',
            }}
          >
            {title}
          </MenuButton>
          <MenuList>
            {categories &&
              categories.map((category) => {
                return (
                  category.status && (
                    <div>
                      <MenuItem
                        key={category._id}
                        onClick={() => handleClick(category._id)}
                      >
                        {category.name}
                      </MenuItem>
                    </div>
                  )
                );
              })}
          </MenuList>
        </Menu>
      </Box>
    )
  );
};

export default Dropdown;
