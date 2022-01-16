import {
   Flex,
   Heading,
   Image,
   Stack,
   Text,
   VStack,
} from '@chakra-ui/react';
import RegisterForm from './RegisterForm';

const HomePage = () => {
   return (
      <VStack
         alignItems='center'
         justifyContent='flex-start'
         padding={5}
         spacing={5}
         w={{ base: 'full', xl: '50%' }}
         paddingBottom={50}
      >
         <Stack
            direction={{
               base: 'column',
               xl: 'row',
            }}
            w='full'
            justifyContent='flex-start'
            alignItems={{
               base: 'center',
               xl: 'flex-start',
            }}
            spacing={5}
         >
            {/*Text */}
            <VStack
               w='full'
               alignItems={{ base: 'center', xl: 'flex-start'}}
               textAlign={{ base: 'center', xl: 'initial'}}
               spacing={10}
            >
               <Heading fontSize='xl'>
                  Secret message book
               </Heading>

               <Text>
                  Enter your name, get a link and
                  start receiving anonymous
                  comments about yourself.
               </Text>


               <Flex display={{ base: 'none', xl: 'flex'}}>
                  <RegisterForm />
               </Flex>
            </VStack>


            {/*Image*/}
            <Flex 
               w='full' 
               justifyContent='center'
            >
               <Image
                  boxSize='xs'
                  src='/static/casual-life.png'
                  alt='3D Cartoon'

               />
            </Flex>
         </Stack>


         {/*  ..... */}

         <Flex display={{ base: 'flex', xl: 'none'}}>
            <RegisterForm />
         </Flex>  


      </VStack>
   );
};

export default HomePage;
