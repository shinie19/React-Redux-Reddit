import React from "react";
import { useSelector } from "react-redux";
import "./post.css";

function Post(props) {
  const posts = useSelector((state) => state.post.posts);

  const tags = ["None", "NSFW", "Mood", "Quotes", "Shitpost"];

  return (
    <section className="post-container">
      {posts
        .slice(1)
        .slice(0)
        .reverse()
        .map((post, idx) => {
          return (
            <div key={idx} className="post">
              <p className="post-title">{post.title}</p>
              <p className={`post-tag-${tags[post.tag]} post-tag`}>
                {tags[post.tag]}
              </p>
              <p className="post-description">{post.description}</p>
            </div>
          );
        })}
    </section>
  );
}

export default Post;
