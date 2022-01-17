import {
   Flex,
   Grid,
   Heading,
   HStack,
   IconButton,
   Image,
   useColorMode,
   VStack,
} from '@chakra-ui/react';
import React from 'react';
import '@fontsource/berkshire-swash';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

const Navbar = () => {
   const { colorMode, toggleColorMode } = useColorMode();

   return (
      <Grid
         w={{ base: 'full', xl: '50%'}}
         gridTemplateColumns='1fr 1fr'
         paddingY={5}
         paddingX={5}
         bgColor='whiteAlpha'
         zIndex={10}
      >
         <Flex w='full' justifyContent='flex-start'>
            <Link to='/'>
               <HStack>
                  <Image src='/static/logo.png' w={{ base: '30px' }}/>
                  <Heading
                     fontSize='3xl'
                     fontFamily='Berkshire Swash'
                  >
                     Mysecrets
                  </Heading>
               </HStack>
            </Link>
         </Flex>


         <HStack justifyContent='flex-end'>
            <IconButton
               onClick={toggleColorMode}
               aria-label='Change theme'
               icon=
               { 
                  colorMode === 'dark'
                  ? <SunIcon />
                  : <MoonIcon />
               }
            />
         </HStack>
      </Grid>
   );
};

export default Navbar;
