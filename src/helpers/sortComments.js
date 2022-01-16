



export const sortComments = (post) => {
   const { comments } = post;


   comments.sort((a, b) => b.created_at.localeCompare(a.created_at));

   
   return post;
};