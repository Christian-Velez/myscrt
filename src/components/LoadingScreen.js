import { Flex, Spinner } from '@chakra-ui/react';
import React from 'react';

const LoadingScreen = () => {
   return (
      <Flex
         w='full'
         justifyContent='center'
         alignItems='center'
         padding={50}
      >
         <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='pink.400'
            size='xl'
         />
      </Flex>
   );
};

export default LoadingScreen;
