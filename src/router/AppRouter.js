



import { VStack } from '@chakra-ui/react';
import React, { useContext, useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Navbar from 'components/Navbar';
import HomePage from 'components/HomePage';
import LoadingScreen from 'components/LoadingScreen';
import PublicRouter from './PublicRouter';
import { StoreContext } from 'store/StoreProvider';
import { setUserInfo } from 'actions/auth';
import PostsScreen from 'components/posts/PostsScreen';


const AppRouter = () => {
   const [, dispatch] = useContext(StoreContext);
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      const user = JSON.parse(localStorage.getItem('userAuth'));

      if(user) {
         dispatch(setUserInfo({
            ...user,
            isAuthenticated: true
         }));
      }

      setIsLoading(false);
   }, []); 


   return (
      isLoading
      ? <LoadingScreen />
      : <>
         <VStack 
            w='full' 
            margin={0}
            alignItems='center'
            wordBreak='break-word'  
         >
            <Navbar />
            <Routes>

               <Route 
                  exact path='/' 
                  element={
                     <PublicRouter>
                        <HomePage />
                     </PublicRouter>
                  } />
               
               <Route path='/:id' element={<PostsScreen />} />

               <Route path='/*' element={ <Navigate to='/' />} />

            </Routes>  
         </VStack>

      </>      

   );
};

export default AppRouter;
