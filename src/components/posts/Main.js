


import React, { useContext } from 'react';
import { StoreContext } from 'store/StoreProvider';
import SendComment from './SendComment';
import ShareLink from './ShareLink';

const Main = () => {
   const [ store ] = useContext(StoreContext);


   const { currentUser, userInfo } = store;


   const isMyFeed = currentUser.id === userInfo.id;



   return (

      isMyFeed
      ? <ShareLink />
      : <SendComment />
   );
};

export default Main;
