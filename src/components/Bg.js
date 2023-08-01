import "./Bg.css";

function Bg() {
  return (
    <div className="Bg">
      <div className="header">
        <span className="header_text"> העלאת תמונה כדי להסיר את הרקע </span>
        <button className="header_btn"> העלאת תמונה</button>
        <span className="header_subtext"> פורמטים נתמכים png, jpeg</span>
      </div>

      <div className="main_div">
        <div className="left_div"> LEFT </div>

        <div className="right_div">
          <div className="right_div_middle_div">
            <div className="right_div_top">
              <div className="right_div_top_text"> תמונה חינם </div>
              <div className="right_div_top_subtext">
                {" "}
                612X408 תצוגה מקדימה של תמונה{" "}
              </div>
              <button className="right_div_top_btn"> הורד </button>
              <div className="right_div_top_sub_sub_text">
                {" "}
                איכות טובה עד 0.25 מגה פיקסל{" "}
              </div>
            </div>
            <div className="right_div_bottom"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bg;
