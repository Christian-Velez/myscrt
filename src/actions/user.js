import axios from 'axios';
import { sortComments } from 'helpers/sortComments';
import types from 'types/types';

const API_URL = process.env.REACT_APP_API_URL;


export const startGettingUserInfo = async(id, dispatch, setIsLoading, navigate) => {
   try {
      const { data } = await axios.get(`${API_URL}/api/user/${id}`);
      const { user } = data;

      const newPosts = user.posts.map(post => sortComments({ ...post }));
      const userToStore = {
         ...user,
         posts: newPosts
      };
      
      dispatch(setCurrentUserInfo(userToStore));
      setIsLoading(false);
   } catch(err) {
      navigate('/');
   }
};

export const setCurrentUserInfo = (userInfo) => {
   return {
      type: types.setCurrentUserInfo,
      payload: userInfo
   };
};



export const startPostingNew = async (userId, post, dispatch) => {
   try {

      const { data } = await axios.post(`${API_URL}/api/post`, {
         userId,
         mainComment: post
      });


      dispatch(addNewPost(data.savedPost));
   } catch(err) {
      console.log(err);
   }
};

export const addNewPost = (data) => {
   return {
      type: types.addNewPost,
      payload: data
   };
};



export const startDeletingPost = async(postId, token, dispatch) => {
   try {
      // Header de autorizacion
      const config = {
         headers: {
            Authorization: `Bearer ${token}`,
         },
      };


      const { data } = await axios.delete(`${API_URL}/api/post/${postId}`, config);
      dispatch(setCurrentUserInfo(data.updatedUser));
      
   } catch(err) {
      console.log(err);
   }
};




export const startCommentPost = async (postId, comment, dispatch) => {

   try {

      const { data } = await axios.put(`${API_URL}/api/post/comment/${postId}`, { comment });


      const { updatedPost } = data;


      const newPost = sortComments({ ...updatedPost });
      dispatch(updatePost(newPost));

   } catch(err) {

      console.log(err);
   }
};



export const updatePost = (post) => {
   return {
      type: types.updatePost,
      payload: {
         id: post.id,
         post
      }
   };
};
