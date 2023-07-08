import { Plus, X } from "react-feather";

import { Widget } from "react-cloudinary-upload-widget";
import axios from "../../utils/axios";
import fetcher from "../../utils/fetcher";
import useSWR from "swr";
import { useState } from "react";

export default function Banners() {
  const { data, mutate } = useSWR("/banners", fetcher, {
    suspense: true,
  });
  const [images, setImages] = useState(data?.images || []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (images.length === 0) {
      alert("Please upload images");
      return;
    } else if (
      data === undefined ||
      data === null ||
      data === "" ||
      data.length === 0
    ) {
      axios
        .post("/banners", {
          images,
        })
        .then((res) => {
          if (res.data) {
            alert("Banners updated successfully");
            mutate();
          } else {
            alert("Banners not updated");
          }
        });
    } else {
      axios
        .put("/banners/" + data._id, {
          images,
        })
        .then((res) => {
          if (res.data) {
            alert("Banners updated successfully");
            mutate();
          } else {
            alert("Banners not updated");
          }
        });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="container__main__content__details">
      <div className="container__main__content__details__main container__main__content__details__main__special">
        <div className="container__main__content__details__main__input">
          <label className="container__main__content__details__main__input__label">
            Upload Images
          </label>
          <div className="container__main__content__details__main__input__field__wrapper__image__wrapper">
            <Widget
              sources={["local", "url"]}
              resourceType="image"
              cloudName="dsxbqyjwo"
              uploadPreset="wlhpwksu"
              buttonText={
                <div>
                  <Plus size={20} color="var(--color)" />
                </div>
              }
              style={{
                color: "var(--color)",
                width: "100%",
                backgroundColor: "var(--backgroundColor)",
                border: "1px solid var(--backgroundColor)",
                borderRadius: 10,
                fontSize: 50,
                height: "120px",
                cursor: "pointer",
                padding: 0,
              }}
              folder="shopping"
              cropping={false}
              multiple={false}
              autoClose={false}
              onSuccess={(e) => {
                setImages([...images, e.info.path]);
                document.body.style.overflowY = "unset";
              }}
              onFailure={(err) => {
                console.error(err);
              }}
              logging={false}
              use_filename={false}
              destroy={true}
              apiKey={import.meta.env.VITE_CLOUDINARY_API_KEY}
            />
            {images.map((image, index) => (
              <div
                className="container__main__content__details__main__input__field__wrapper__image"
                key={index}
                style={{
                  width: "100%",
                  marginTop: 20,
                  height: "fit-content",
                }}
              >
                <button
                  className="container__main__content__details__main__input__field__wrapper__image__delete"
                  onClick={() =>
                    setImages(images.filter((_img, i) => i !== index))
                  }
                >
                  <X size={20} color="currentColor" />
                </button>
                <img
                  loading="lazy"
                  src={(
                    import.meta.env.VITE_CLOUDNAIRY_API_URL +
                    "q_90/" +
                    image
                  )
                    ?.replace(".jpg", ".webp")
                    .replace(".png", ".webp")
                    .replace(".jpeg", ".webp")}
                  alt={image?.name}
                  style={{
                    width: "100%",
                  }}
                  className="container__main__content__details__main__input__field__wrapper__image__content__img"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container__main__content__details__buttons">
        <button className="container__main__content__details__buttons__button container__main__content__details__buttons__primary">
          Save
        </button>
      </div>
    </form>
  );
}
