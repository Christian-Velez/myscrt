import {
   Heading,
   VStack,
} from '@chakra-ui/react';
import { setCurrentUserInfo, startGettingCurrentUserInfo } from 'actions/user';
import LoadingScreen from 'components/LoadingScreen';
import React, {
   useContext,
   useEffect,
   useState,
} from 'react';
import {
   useNavigate,
   useParams,
} from 'react-router-dom';
import { StoreContext } from 'store/StoreProvider';
import Empty from './Empty';
import Main from './Main';
import PostItem from './PostItem';


const PostsScreen = () => {
   const { id } = useParams();
   const navigate = useNavigate();
   const [isLoading, setIsLoading] = useState(true);

   const [store, dispatch] = useContext(StoreContext);
   const user = store.currentUser;
   const { username, posts } = user || {};
   
   
   useEffect(() => {
      startGettingCurrentUserInfo(id)
         .then(user => {
            dispatch(setCurrentUserInfo(user));
            setIsLoading(false);   
         })
         .catch(err => {
            console.log(err);
            navigate('/');
         });
   }, []);

   return isLoading ? (
      <LoadingScreen />
   ) : (
      <VStack
         alignItems='center'
         justifyContent='flex-start'
         padding={5}
         spacing={20}
         w={{ base: 'full', xl: '50%' }}
         paddingBottom={50}

         
      >
         <Main/>

         <Heading fontSize='xl'>Timeline of { username }</Heading>


         <VStack w='full' spacing={10}>

         {
            posts.length === 0 
            ? <Empty />
            : posts.map(post => <PostItem key={post.id} post={post}/>)
         }

         </VStack>

      </VStack>
   );
};

export default PostsScreen;
