import types from 'types/types';


const initialStore = {
   // Auth -> my id in localstorage, jwt, etc
   auth: {
      isAuthenticated: false,
      id: null,
      token: null
   },

   // baseurl/:id user info -> posts, comments, etc
   currentUser: {
      id: null,
      posts: []
   }
};

const storeReducer = (state, action) => {
   const { currentUser } = state;

   switch(action.type) {
      case types.setAuth:
         return {
            ...state,
            auth: action.payload
         };

      case types.logout: 
         return {
            ...state,
            auth: initialStore.auth
         };


      case types.setCurrentUserInfo:
         return {
            ...state,
            currentUser: action.payload
         };

      case types.addNewPost:
         return {
            ...state,
            currentUser: {
               ...currentUser,
               posts: [
                  action.payload,
                  ...currentUser.posts

               ]
            }
         };

      case types.updatePost:
         return {
            ...state,
            currentUser: {
               ...currentUser,
               posts: currentUser.posts.map(post => (
                  post.id === action.payload.id
                  ? action.payload.post
                  : post
               ))
               
            }
         };


      case types.deletePost: 
         return {
            ...state,
            currentUser: {
               ...currentUser,
               posts: currentUser.posts.filter(post => post.id !== action.payload)
            }
         };
      
      case types.deleteComment:
         return {
            ...state,
            currentUser: {
               ...currentUser,
               
               posts: currentUser.posts.map(post => (
                  post.id === action.payload.postId
                  ? ({
                     ...post,
                     comments: post.comments.filter(comment => comment._id !== action.payload.commentId)
                  })
                  : post
               ))
            }
         };

  
      
      default: 
         return state;
   }

};



export { initialStore };
export default storeReducer;
