import React from 'react';
import PropTypes from 'prop-types';
import { IconButton } from '@chakra-ui/react';
import { SmallCloseIcon } from '@chakra-ui/icons';

const DeleteButton = ({ handleDelete }) => {
   return (
      <IconButton
         variant='ghost'
         colorScheme='pink'
         aria-label='Delete post'
         icon={<SmallCloseIcon />}
         size='sm'
         onClick={handleDelete}
      />
   );
};

DeleteButton.propTypes = {
   handleDelete: PropTypes.func,
};

export default DeleteButton;
