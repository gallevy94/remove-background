import "./DownloadPopup.css";
import { useState } from "react";

import download_folder from "../assets/Downloads_Folder.png";
import not_robot from "../assets/not_robot.png";
import close from "../assets/close1.png";

function Download_popup(props) {
  const [checkbox_val, setcheckbox_val] = useState(false);

  function checkbox_checked() {
    if (checkbox_val === false) {
      setcheckbox_val(true);
    } else {
      setcheckbox_val(false);
    }
  }

  return (
    <div className="">
      <div className="overlay"> </div>
      <div className="download_image_popup">
        <img src={close} onClick={props.close_popup} className="closeImg" />
        <div className="top_image">
          {" "}
          <img src={download_folder} />
        </div>
        <div className="download_image_popup_text"> אישור להורדת תמונה </div>
        <div className="download_image_popup_subtext">
          האם להוריד את התמונה?
        </div>
        <div className="download_image_popup_btn_cont">
          <input type="checkbox" onChange={checkbox_checked} />
          <span> אני לא רובוט </span>

          <img src={not_robot} />
          <br />

          <button className="cancel" onClick={props.close_popup}>
            {" "}
            ביטול{" "}
          </button>

          <button
            className="aprove"
            style={{
              backgroundColor: checkbox_val == false ? "gray" : "#3f51b5",
            }}
            onClick={props.download_image_func}
          >
            {" "}
            אישור{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Download_popup;
