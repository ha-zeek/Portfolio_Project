import "./index.scss";
import GifA from "../../../assets/images/working.gif";

const Gif = () => {
  return (
    <div className="gif-container">
      <img className="gif" src={GifA} />
    </div>
  );
};

export default Gif;
