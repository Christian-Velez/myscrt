import types from 'types/types';


const initialStore = {
   // My info -> my id in localstorage, jwt, etc
   userInfo: {
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

      case types.setUserInfo: 
         return {
            ...state,
            userInfo: action.payload
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

      case types.logout: 
         return {
            ...state,
            userInfo: initialStore.userInfo
         };

      
      default: 
         return state;
   }

};



export { initialStore };
export default storeReducer;