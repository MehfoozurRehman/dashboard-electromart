import ImageUploaderSingle from "../../components/ImageUploaderSingle";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../utils/axios";
import { useBackLocation } from "global";
import { useState } from "react";
export default function Banners() {
  const navigate = useNavigate();
  const backLocation = useBackLocation();
  const [image, setImage] = useState("");
  function handleSubmit(e) {
    axios
      .post("banners", {
        img: image,
      })
      .then((res) => {
        alert("Product added successfully");
        navigate(backLocation);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  return (
    <div className="product__form__col__panel">
      <button
        onClick={handleSubmit}
        className="container__main__content__details__buttons__button container__main__content__details__buttons__primary"
      >
        Add New Banner
      </button>
      <div className="product__form__col__panel__heading">Image</div>
      <ImageUploaderSingle
        label="Image"
        value={image}
        onChange={(e) => setImage(e)}
      />
    </div>
  );
}
