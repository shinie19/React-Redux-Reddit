import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Input from "../InputFields/Input";
import "./post.css";
import { createPost } from "./PostSlice";

function MakePost(props) {
  const { setOpenPost } = props;

  const [title, setTitle] = useState("Set a title");
  const [desc, setDesc] = useState("Add some description");
  const [selectedIdx, setSelectedIdx] = useState(0);

  const dispatch = useDispatch();

  const tags = ["None", "NSFW", "Mood", "Quotes", "Shitpost"];

  const handlePost = () => {
    setOpenPost(false);

    const newPost = {
      id: Math.floor(Math.random() * 10000) + 1,
      title,
      description: desc,
      tag: selectedIdx,
    };

    dispatch(createPost(newPost));
  };

  const handleCancel = () => {
    setOpenPost(false);
  };

  return (
    <section className="makepost-container">
      <div className="makepost-navigation">
        <p className="makepost-cancel" onClick={handleCancel}>
          Cancel
        </p>
        <p className="makepost-save" onClick={handlePost}>
          Post
        </p>
      </div>
      <Input
        label="Title"
        data={title}
        inputType="textarea"
        setData={setTitle}
        classStyle="makepost-title"
      />
      <Input
        label="Description"
        data={desc}
        inputType="textarea"
        setData={setDesc}
        classStyle="makepost-desc"
      />
      <label>Tags</label>
      <div className="makepost-tags">
        {tags.map((tag, idx) => {
          return (
            <button
              key={idx}
              className={`${
                selectedIdx === idx
                  ? "makepost-tags-selected"
                  : `makepost-tags-${tag}`
              }`}
              onClick={() => setSelectedIdx(idx)}
            >
              {tag}
            </button>
          );
        })}
      </div>
    </section>
  );
}

export default MakePost;
