



const types = {

   registerUser: '[Auth] Start register new user in DB',
   setAuth: '[Auth] Set userInfo received from backend ',
   logout: '[Auth] Set userInfo to initialState',

   setCurrentUserInfo: '[userInfo] Set current user (/:id) info',
   addNewPost: '[userInfo] Add new post to stored data',
   updatePost: '[userInfo] Edit post',
   deletePost: '[userInfo] DeletePost',
   deleteComment: '[userInfo] Delete comment from post',
   
};


export default types;