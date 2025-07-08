import { Link } from "react-router-dom";

function ButtonPreview() {
  return (
    <div>
      <Link to="/">
        <button className="btn_atras">Volver hacia atras</button>
      </Link>
    </div>
  );
}

export default ButtonPreview;
