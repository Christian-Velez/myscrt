

import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Flex, FormControl, Input, Text, VStack } from '@chakra-ui/react';
import { StoreContext } from 'store/StoreProvider';
import { startCommentPost, startDeletingPost, updatePost } from 'actions/user';
import CommentItem from './CommentItem';
import DeleteButton from './DeleteButton';

const PostItem = ({ post })=> {
   const [store, dispatch] = useContext(StoreContext);
   const { currentUser, auth  } = store;
   const { token } = auth;
   const isMyFeed = currentUser.id === auth.id;

   const [comment, setComment] = useState('');
   const [isCommentInvalid, setIsCommingInvalid ] = useState(false);


   const handleComment = (e) => {
      e.preventDefault();

      if(comment.length === 0 ) {
         return setIsCommingInvalid(true);
      }

      setComment('');

      startCommentPost(post.id, comment)
         .then((newPost) => {
            dispatch(updatePost(newPost));
         })
         .catch(err => console.log(err));
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
                        postId={post.id}
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
