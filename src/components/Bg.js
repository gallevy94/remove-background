import "./Bg.css";
import { useState, useRef } from "react";
import axios from "axios";

import logo from "../assets/logo.png";
import banner from "../assets/banner.png";

import Original from "./Original";

import No_bg from "./No_bg";

import Eula from "./Eula";

import download_folder from "../assets/Downloads_Folder.png";
import not_robot from "../assets/not_robot.png";

import close from "../assets/close1.png";

function Bg() {
  const inputElement = useRef();

  const [display_no_bg_tab, setdisplay_no_bg_tab] = useState("no");

  const [show_eula, setshow_eula] = useState(false);

  const [image_name, setimage_name] = useState("");

  const [color_to_api, setcolor_to_api] = useState("");

  const [show_popup, setshow_popup] = useState(false);

  const [checkbox_val, setcheckbox_val] = useState(false);

  function change_tab(e) {
    if (e.target.classList.value == "no_bg") {
      setdisplay_no_bg_tab("no");
    } else {
      setdisplay_no_bg_tab("yes");
    }
  }

  function upload_file() {
    inputElement.current.click();
  }

  function open_eula() {
    setshow_eula(true);
  }

  function close_popup_fun() {
    setshow_eula(false);
  }

  function send_file_to_back(e) {
    let data = e.target.files[0];

    if (
      data.type == "image/png" ||
      data.type == "image/jpg" ||
      data.type == "image/jpeg"
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
          setimage_name(res.data.imageName);
        });
    } else {
      alert("file type not suported");
    }
  }

  function send_color(color) {
    console.log(color);

    setcolor_to_api(color);
  }

  function download_image_func() {
    fetch("http://localhost:5000/no_bg_" + image_name).then((response) => {
      response.blob().then((blob) => {
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement("a");
        a.href = url;
        a.download = '"http://localhost:5000/"+image_name';
        a.click();
      });
    });
  }

  function close_popup(e) {
    if (
      e.target.classList.value == "cancel" ||
      e.target.classList.value == "closeImg"
    ) {
      setshow_popup(false);
    } else {
      setshow_popup(true);
    }
  }

  function checkbox_checked() {
    if (checkbox_val == false) {
      setcheckbox_val(true);
    } else {
      setcheckbox_val(false);
    }
  }

  return (
    <div className="Bg">
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

      <div className="main_div">
        <div className="left_div">
          <div className="main_div_tabs_header">
            <span
              onClick={change_tab}
              className="no_bg"
              style={{
                borderBottom:
                  display_no_bg_tab == "yes" ? "" : "3px solid #9C27B0",
              }}
            >
              {" "}
              הסר רקע
            </span>
            <span
              onClick={change_tab}
              className="original"
              style={{
                borderBottom:
                  display_no_bg_tab == "yes" ? "3px solid #9C27B0" : "",
              }}
            >
              {" "}
              מקורי{" "}
            </span>
          </div>

          {display_no_bg_tab == "yes" ? (
            <Original image_name={image_name} />
          ) : (
            <No_bg image_name={image_name} send_color_func={send_color} />
          )}

          <div className="left_div_footer">
            <button className="eula_btn" onClick={open_eula}>
              תקנון החברה
            </button>
            <span className="eula_text">
              {" "}
              על ידי העלאת תמונה אתה מסכים לתנאים וההגבלות{" "}
            </span>
            {show_eula ? (
              <Eula close_popup={close_popup_fun} />
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="right_div">
          <div className="right_div_middle_div">
            <div className="right_div_top">
              <div className="right_div_top_text"> תמונה חינם </div>
              <div className="right_div_top_subtext">
                {" "}
                612x408 תצוגה מקדימה של תמונה{" "}
              </div>

              <button className="right_div_top_btn" onClick={close_popup}>
                {" "}
                הורד{" "}
              </button>
              <div className="right_div_top_sub_sub_text">
                {" "}
                איכות טובה עד 0.25 מגה פיקסל{" "}
              </div>
            </div>

            <div className="right_div_bottom">
              <div className="right_div_bottom_text">Pro</div>
              <div className="right_div_bottom_subtext">
                {" "}
                תמונה מלאה 1280x1920
              </div>
              <button className="right_div_top_btn">HD הורד </button>
              <div className="right_div_top_sub_sub_text">
                {" "}
                האיכות הטובה ביותר עד 25 מגה פיקסל
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <img src={logo} className="logo_img" />

        <img src={banner} className="banner_img" />
      </div>

      {show_popup ? (
        <>
          <div className="overlay"> </div>
          <div className="download_image_popup">
            <img src={close} onClick={close_popup} className="closeImg" />
            <div className="top_image">
              {" "}
              <img src={download_folder} />
            </div>
            <div className="download_image_popup_text">
              {" "}
              אישור להורדת תמונה{" "}
            </div>
            <div className="download_image_popup_subtext">
              האם להוריד את התמונה?
            </div>
            <div className="download_image_popup_btn_cont">
              <input
                type="checkbox"
                className="checkbox"
                onChange={checkbox_checked}
              />
              <span> אני לא רובוט </span>

              <img src={not_robot} />
              <br />

              <button className="cancel" onClick={close_popup}>
                {" "}
                ביטול{" "}
              </button>

              <button
                className="aprove"
                style={{
                  backgroundColor: checkbox_val == false ? "gray" : "#3f51b5",
                }}
                onClick={download_image_func}
              >
                {" "}
                אישור{" "}
              </button>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default Bg;
