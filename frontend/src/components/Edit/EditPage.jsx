import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "../InputFields/Input";
import { updateUser } from "../../api/apiRequests";
import "./edit.css";

EditPage.propTypes = {};

function EditPage(props) {
  const avatarUrls = [
    "https://i.redd.it/mozfkrjpoa261.png",
    "https://i.redd.it/0whvv494dfo61.png",
    "https://i.redd.it/awxgvk20n1261.png",
    "https://i.redd.it/8kpsg65jc9j61.png",
    "https://preview.redd.it/rrz3hmsxcll71.png?width=640&crop=smart&auto=webp&s=87cc5ed38d8f088ef9fffef7a4c5756b64309d6a",
    "https://i.redd.it/zx8xf594dfo61.png",
    "https://preview.redd.it/5es1lne1du261.png?width=640&crop=smart&auto=webp&s=e6eb0ee5710710000e4fbace119112de63324a38",
    "https://preview.redd.it/mkemq6sqf7261.png?auto=webp&s=314cb48d9de13f542a9e39f54b9991e219c53d79",
    "https://preview.redd.it/n9nnnionfu361.png?auto=webp&s=c010326282ec4b19b9b6340d7cdb1616b5c70968",
  ];

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [name, setName] = useState(user.name);
  const [age, setAge] = useState(user.age);
  const [about, setAbout] = useState(user.about);
  const [image, setImage] = useState(user.avatarUrl);
  const [theme, setTheme] = useState("#e69138");

  const { setEdit } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    setEdit(false);

    const updatedUser = {
      name,
      age,
      about,
      avatarUrl: image,
      themeColor: theme,
    };

    // Call api updateUser
    updateUser(updatedUser, dispatch);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <section className="edit-container">
          <button className="close">SAVE</button>
          <div className="edit-profile">Edit Profile</div>
          <div className="input-container">
            <Input label="Display Name" data={user.name} setData={setName} />
            <Input label="Age" data={user.age} setData={setAge} />
            <Input
              inputType="textarea"
              classStyle="input-about"
              label="About"
              data={user.about}
              setData={setAbout}
            />

            <label>Profile Picture</label>
            <div className="input-image-container">
              {avatarUrls.map((url, index) => {
                return (
                  <div key={index}>
                    <img
                      onClick={(e) => setImage(e.target.src)}
                      src={url}
                      className="input-image"
                      alt=""
                    />
                  </div>
                );
              })}
            </div>

            <div className="theme-container">
              <label>Theme</label>
              <input
                type="color"
                className="theme-color"
                onChange={(e) => setTheme(e.target.value)}
              />
            </div>
          </div>
        </section>
      </form>
    </div>
  );
}

export default EditPage;
