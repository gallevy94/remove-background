import "./Header.css";
import { useRef } from "react";
import axios from "axios";

function Header({ color_to_api, imageName, setImageName }) {
  const inputElement = useRef();

  function upload_file() {
    inputElement.current.click();
  }

  function send_file_to_back(e) {
    let data = e.target.files[0];

    if (
      data.type === "image/png" ||
      data.type === "image/jpg" ||
      data.type === "image/jpeg"
    ) {
      const formData = new FormData();

      const config = {
        headers: { "content-type": "multipart/form-data" },
      };

      formData.append("myFile", data, data.name);

      formData.append("color_to_api", color_to_api);

      axios
        .post(`http://localhost:5000/upload_file`, formData, config)
        .then((res) => {
          console.log(res);
          setImageName(res.data.imageName);
        });
    } else {
      alert("file type not suported");
    }
  }

  return (
    <div className="header">
      <span className="header_text"> העלאת תמונה כדי להסיר את הרקע </span>
      <button className="header_btn" onClick={upload_file}>
        {" "}
        העלאת תמונה
      </button>

      <input
        type="file"
        ref={inputElement}
        onChange={send_file_to_back}
        className="input_file"
      />

      <span className="header_subtext"> פורמטים נתמכים png, jpeg</span>
    </div>
  );
}

export default Header;
