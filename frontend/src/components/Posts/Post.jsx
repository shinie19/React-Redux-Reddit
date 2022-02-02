import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./post.css";
import { deletePost } from "./PostSlice";

function Post(props) {
  const posts = useSelector((state) => state.post.posts);

  const tags = ["None", "NSFW", "Mood", "Quotes", "Shitpost"];

  const dispatch = useDispatch();

  const handleDeletePost = (id) => {
    dispatch(deletePost(id));
  };

  return (
    <section className="post-container">
      {posts
        .slice(1)
        .slice(0)
        .reverse()
        .map((post, idx) => {
          return (
            <div key={idx} className="post">
              <div className="post-info">
                <p className="post-title">{post.title}</p>
                <p className={`post-tag-${tags[post.tag]} post-tag`}>
                  {tags[post.tag]}
                </p>
                <p className="post-description">{post.description}</p>
              </div>
              <div
                onClick={() => {
                  handleDeletePost(post.id);
                }}
                className="post-action"
              >
                ❌
              </div>
            </div>
          );
        })}
    </section>
  );
}

export default Post;
