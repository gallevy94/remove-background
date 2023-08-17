import "./NoBg.css";

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
      <div className="color_div" onClick={choose_color}>
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
            alt=""
            src={"http://localhost:5000/" + props.image_name}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default No_bg;
