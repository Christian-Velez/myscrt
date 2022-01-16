

import { Button, FormControl, Heading, Text, Textarea, VStack } from '@chakra-ui/react';
import { startPostingNew } from 'actions/user';
import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { StoreContext } from 'store/StoreProvider';

const SendComment = () => {

   const [store, dispatch] = useContext(StoreContext);
   const { id } = useParams();
   const { currentUser } = store;
   const { username } = currentUser;

   const [comment, setComment] = useState('');
   const [isInvalid, setIsInvalid] = useState(false);

   const handleSubmit = (e) =>{
      e.preventDefault();


      if(comment.replace(/\s/g, '').length === 0){
         return setIsInvalid(true);
      }

      startPostingNew(id, comment, dispatch);
      setComment('');
   };



   return (
      <VStack w='full'>
            <Heading fontSize='lg'>
               Send secret message to { username }
            </Heading>
            <Text> { username} will never know who sent this message</Text>

            <form style={{ width: '100%'}} onSubmit={ handleSubmit } >
               <VStack>
                  <FormControl isInvalid={ isInvalid }>
                     <Textarea
                        type='text'
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder='Write a secret message...'
                     />

                  </FormControl>

                  <Button type='submit' colorScheme='pink' w='full'> Submit</Button>

               </VStack>
            </form>            
         </VStack>
   );
};

export default SendComment;
