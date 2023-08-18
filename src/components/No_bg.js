import "./No_bg.css";

import { useState, useRef } from "react";

function No_bg(props) {
  const [color, setcolor] = useState("#000");

  const inputElement = useRef();

  function choose_color() {
    inputElement.current.click();
  }

  function change_color(e) {
    setcolor(e.target.value);
    props.send_color_func(color);
  }

  return (
    <div className="no_bg_tab">
      <span className="no_bg_tab_text">
        {" "}
        אל תשכח להוריד את הקבצים שלך. הם ימחקו אוטומטית כשתצא מהדף
      </span>

      <div
        className="color_div"
        onClick={choose_color}
        style={{
          visibility: props.image_name ? "hidden" : "",
        }}
      >
        <span className="display_text"> צבע רקע </span>

        <span className="display_color" style={{ backgroundColor: color }}>
          {" "}
        </span>
      </div>

      <input
        type="color"
        className="input_color"
        onChange={change_color}
        ref={inputElement}
      />

      {props.image_name ? (
        <div className="image_bo_bg_div">
          <img
            className="image_no_bg"
            src={"http://localhost:5000/no_bg_" + props.image_name}
          />
        </div>
      ) : (
        ""
      )}
      {/* 
        <div className="loading"> 
            <div className='loading_inner'>
                 
            </div>
        </div> */}
    </div>
  );
}

export default No_bg;
