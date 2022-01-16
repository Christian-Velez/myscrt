import {
   Grid,
   Heading,
   HStack,
   IconButton,
   useColorMode,
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
         <HStack>
            <Link to='/'>

               <Heading
                  fontSize='3xl'
                  fontFamily='Berkshire Swash'
               >
                  Mysecrets
               </Heading>
            </Link>
         </HStack>


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
