import { useEffect, useState } from 'react';
import { getCommentByAuthorId } from '../services/CommentServices';
import { getRatingByOwnerId } from '../services/RatingServices';

const useGetReviewId = (userId, productId) => {
  const [ratingId, setRatingId] = useState('');
  const [commentId, setCommentId] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const ratingResult = await getRatingByOwnerId(userId);
        ratingResult.ratings.forEach((rating) => {
          if (rating.for === productId) {
            setRatingId(rating._id);
          }
        });
      } catch (error) {
        setError(`Error fetching ratings by owner: ${error.message}`);
      }

      try {
        const commentResult = await getCommentByAuthorId(userId);
        commentResult.comment.forEach((comment) => {
          if (comment.for === productId) {
            setCommentId(comment._id);
          }
        });
      } catch (error) {
        setError(`Error fetching comments by author ID: ${error.message}`);
      }
    };

    fetchReviews();
  }, [userId, productId]);

  return [ratingId, commentId, error];
};

export default useGetReviewId;
