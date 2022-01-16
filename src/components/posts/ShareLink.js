import {
   Button,
   Heading,
   HStack,
   Input,
   VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';

const ShareLink = () => {
   const link = window.location.href;

   const [text, setText] = useState(link);

   const copyText = () => {
      navigator.clipboard.writeText(text);
   };

   return (
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
   );
};

export default ShareLink;
