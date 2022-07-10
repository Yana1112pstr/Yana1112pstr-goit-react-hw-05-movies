import { fetchMovieReviews } from "api/api";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import s from "./Reviews.module.css";

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
  fetchMovieReviews(movieId).then((res) => {
    if (res.results.length < 1) {
      setStatus("error");
    } else {
      setReviews(res.results);
      setStatus("resolved");
    }
  })
  }, [movieId]);

  console.log(reviews);

  return (
    <div>
      {status === "idle" && <p>Load...</p>}
      {status === "error" && <p>We don't have any reviews for this movies.</p>}
      {status === "resolved" && (
        <ul>
          {reviews.map((review) => {
            const { id, content, author } = review;
            return (
              <li key={id}>
                <p className={s.author}>{`Author: ${author}`}</p>
                <p className={s.content}>{content}</p>
              </li>
            );
          })}
        </ul>
      ) }
    </div>
  );
};

export default Reviews;
