

import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Flex, FormControl, HStack, IconButton, Input, Text, VStack } from '@chakra-ui/react';
import { StoreContext } from 'store/StoreProvider';
import { SmallCloseIcon } from '@chakra-ui/icons';
import { startCommentPost, startDeletingPost } from 'actions/user';
import CommentItem from './CommentItem';
import DeleteButton from './DeleteButton';

const PostItem = ({ post })=> {
   
   const [store, dispatch] = useContext(StoreContext);
   const { currentUser, userInfo  } = store;

   const { token } = userInfo;
   const isMyFeed = currentUser.id === userInfo.id;


   const [comment, setComment] = useState('');
   const [isCommentInvalid, setIsCommingInvalid ] = useState(false);


   const handleComment = (e) => {
      e.preventDefault();

      if(comment.length === 0 ) {
         return setIsCommingInvalid(true);
      }


      startCommentPost(post.id, comment, dispatch);
      setComment('');
   };


   const handleDeletePost = () => {
      startDeletingPost(post.id, token, dispatch);
   };


   return (
      <VStack 
         w='full'
         alignItems='flex-start'
         borderRadius='lg'
         padding={5}
         border='1px solid'
         borderColor='gray.300'
         spacing={0}
      
      >
         <Flex w='full' justifyContent='flex-end'>
            
            { isMyFeed &&
               <DeleteButton handleDelete={ handleDeletePost } /> 
            }
         </Flex>

         <VStack spacing={5} w='full' alignItems='flex-start'>

            <Text fontWeight='bold'>{ post.mainComment } </Text>


            <form style={{ width: '100%' }} onSubmit={ handleComment }>
               <FormControl isInvalid={isCommentInvalid} >
                  <Input 
                     placeholder='Write a comment'
                     value={comment}
                     onChange={(e) => setComment(e.target.value)}

                  />
               </FormControl>
            </form>


            <VStack w='full' alignItems='flex-start'>
               {
                  post.comments.map(comment => 
                     <CommentItem 
                        key={comment._id} 
                        comment={comment} 
                        isMyFeed={isMyFeed} 
                     />
                  )

               }
            </VStack>
         </VStack>
      </VStack>
   );
};

PostItem.propTypes = {
   post: PropTypes.object
};

export default PostItem;
