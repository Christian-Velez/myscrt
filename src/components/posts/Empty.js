


import { Heading, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const Empty = () => {
   return (
      <VStack spacing={5}>
         <Image src='/static/empty.png' alt='Empty box' boxSize='xs'/>
         <VStack spacing={0}>
            <Heading fontSize='xl'> NO COMMENT YET.</Heading>
            <Text>Be the first to comment on this feed.</Text>

         </VStack>
      </VStack>
   );
};

export default Empty;
