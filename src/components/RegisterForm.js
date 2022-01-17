import {
   Button,
   FormControl,
   FormLabel,
   HStack,
   Input,
} from '@chakra-ui/react';
import { startRegisterUser } from 'actions/auth';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StoreContext } from 'store/StoreProvider';

const RegisterForm = () => {
   const navigate = useNavigate();
   const [, dispatch ] = useContext(StoreContext);
   const [username, setUsername] = useState('');
   const [isInvalid, setIsInvalid] = useState(false);
   const [isLoading , setIsLoading ] = useState(false);

   const handleSubmit = (e) => {
      e.preventDefault();

      if(username.length === 0 ) {
         return setIsInvalid(true);
      }
      startRegisterUser({username, dispatch, navigate, setIsLoading});
   };


   return (
      <form
         style={{ width: '100%' }}
         onSubmit={ handleSubmit }
      >
         <HStack
            alignItems='flex-end'
            w='full'
         >
            <FormControl isInvalid={isInvalid}>
               <FormLabel>
                  Your name
               </FormLabel>
               <Input
                  type='text'
                  placeholder='e.g: John Doe'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
               />
            </FormControl>

            <Button
               colorScheme='pink'
               type='submit'
               isLoading={isLoading}
            >
               Register
            </Button>
         </HStack>
      </form>
   );
};

export default RegisterForm;
