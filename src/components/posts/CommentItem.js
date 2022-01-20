import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { HStack, Text } from '@chakra-ui/react';
import DeleteButton from './DeleteButton';
import { deleteComment, startDeletingComment } from 'actions/user';
import { StoreContext } from 'store/StoreProvider';

const CommentItem = ({ comment, postId, isMyFeed }) => {



   const [ store , dispatch] = useContext(StoreContext); 
   const { token } = store.auth; 

   const { comment: text, _id } = comment;


   const handleDeleteComment = () => {
      startDeletingComment(postId, _id, token)
         .then(status => {
            if(status === 204) {
               dispatch(deleteComment(postId, _id));
            }
         });
   };

   return (
      <HStack
         w='full'
         border='1px solid'
         borderColor='gray.300'
         borderRadius='lg'
         padding={2}
         paddingLeft={5}
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
   isMyFeed: PropTypes.bool,
   postId: PropTypes.string
};

export default CommentItem;
