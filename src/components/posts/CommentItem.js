import React from 'react';
import PropTypes from 'prop-types';
import { HStack, Text } from '@chakra-ui/react';
import DeleteButton from './DeleteButton';

const CommentItem = ({ comment, isMyFeed }) => {
   const { comment: text } = comment;


   const handleDeleteComment = () => {
      console.log('xd');
   };

   return (
      <HStack
         w='full'
         border='1px solid'
         borderColor='gray.300'
         borderRadius='lg'
         padding={2}
         justifyContent='space-between'
         alignItems='flex-start'

      >
         <Text> { text } </Text>

         {
            isMyFeed 
            && <DeleteButton handleDelete={ handleDeleteComment }/>
         }
      </HStack>
   );
};

CommentItem.propTypes = {
   comment: PropTypes.object,
   isMyFeed: PropTypes.bool
};

export default CommentItem;
