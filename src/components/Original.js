import "./Original.css";


function Original(props) {
  return (
    <div className="original_tab">
      {props.image_name ? (
        <div className="image_bo_bg_div image_no_Original_div">
          <img
            className="image_no_bg image_no_Original"
            src={"http://localhost:5000/" + props.image_name}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Original;
