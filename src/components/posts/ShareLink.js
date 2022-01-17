import {
   AlertDialog,
   AlertDialogBody,
   AlertDialogContent,
   AlertDialogFooter,
   AlertDialogHeader,
   AlertDialogOverlay,
   Button,
   Heading,
   HStack,
   Input,
   VStack,
} from '@chakra-ui/react';
import { deleteUserAccont } from 'actions/user';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StoreContext } from 'store/StoreProvider';

const ShareLink = () => {
   const navigate = useNavigate();
   const [ state, dispatch ] = useContext(StoreContext);
   const { id, token } = state.userInfo;

   const link = window.location.href;

   const [text, setText] = useState(link);

   const copyText = () => {
      navigator.clipboard.writeText(text);
   };



   const [isOpen, setIsOpen] = useState(false);
   const onClose = () => setIsOpen(false);


   const handleDeleteAccount = () => {
      onClose();

      deleteUserAccont({ id, token, navigate, dispatch });
   };

   return (

      <>
         <AlertDialog
            isOpen={isOpen}
            onClose={onClose}
         >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Delete my account
            </AlertDialogHeader>

            <AlertDialogBody>
              { 'Are you sure? All your posts and its comments will be deleted' }
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button onClick={onClose}>
                Cancel
              </Button>

              <Button colorScheme='pink' onClick={ handleDeleteAccount } ml={3}>
                Delete
              </Button>
            
            
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>

         <VStack w='full'>
            <Heading fontSize='lg'>
               Make this you Whatsapp / Instagram
               status
            </Heading>
            <Input
               value={text}
               onChange={(e) =>
                  setText(e.target.value)
               }
            />

            <HStack>
               
               <Button
                  colorScheme='pink'
                  variant='outline'
                  onClick={() => setIsOpen(true) }
               >
                  Delete my account
               </Button>

               <Button
                  colorScheme='pink'
                  onClick={copyText}
               >
                  Copy this link
               </Button>
            </HStack>
         </VStack>

      </>

   );
};

export default ShareLink;
