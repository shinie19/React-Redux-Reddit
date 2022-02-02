import React, { useState } from "react";
import Input from "../InputFields/Input";
import "./edit.css";

EditPage.propTypes = {};

function EditPage(props) {
  const avatarUrl = [
    "https://i.redd.it/mozfkrjpoa261.png",
    "https://i.redd.it/0whvv494dfo61.png",
    "https://preview.redd.it/33suwtxvjrv51.png?width=471&format=png&auto=webp&s=49c80899f80714c898eb303bb87794a63e42d904",
    "https://preview.redd.it/fbtoo37rimv51.png?auto=webp&s=e834ad0597f4cee4b3b82201a3b695ae369e6acc",
    "https://i.redd.it/zx8xf594dfo61.png",
    "https://preview.redd.it/8lhmmwdcx4381.png?auto=webp&s=b48595300f0f71629fd64b9cd9dcfaceb1047f50",
    "https://preview.redd.it/le5c84d18vv61.jpg?width=497&format=pjpg&auto=webp&s=97c8dcdbdc91e9d5569a24ffef21ed2a6693e2d1",
    "https://preview.redd.it/j4clkwtw5jv51.png?auto=webp&s=0d46c1ad5667f147056f2696833bd385b5bbc1c0",
    "https://preview.redd.it/oiynpcmqqow61.png?auto=webp&s=231a94f63382c22994f899d7ca1f5ce2068e08a0",
  ];

  const [name, setName] = useState("Shinie");
  const [age, setAge] = useState(20);
  const [about, setAbout] = useState("I'm a software developer");
  const [image, setImage] = useState("https://i.redd.it/mozfkrjpoa261.png");
  const [theme, setTheme] = useState("#e69138");

  const { setEdit } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    setEdit(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <section className="edit-container">
          <button className="close">SAVE</button>
          <div className="edit-profile">Edit Profile</div>
          <div className="input-container">
            <Input label="Display Name" data={name} setData={setName} />
            <Input label="Age" data={age} setData={setAge} />
            <Input
              inputType="textarea"
              classStyle="input-about"
              label="About"
              data={about}
              setData={setAbout}
            />

            <label>Profile Picture</label>
            <div className="input-image-container">
              {avatarUrl.map((url, index) => {
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
