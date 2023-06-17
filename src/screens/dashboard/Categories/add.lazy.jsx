import { Input, Select, Textarea } from "components";

import { Link } from "router";
import { useBackLocation } from "global";
import { useState } from "react";
import { ImageUploaderSingle } from "../../../components/ImageUploaderSingle";

export default function CategorieAdd() {
  const [image, setImage] = useState(null);
  const backLocation = useBackLocation();
  return (
    <div className="container__main__content__details">
      <div className="container__main__content__details__main container__main__content__details__main__special">
        <Input type="text" label="Name" placeholder="Enter name" />

        <ImageUploaderSingle label="Image" image={image} setImage={setImage} />
      </div>

      <div className="container__main__content__details__buttons">
        <Link
          to={backLocation}
          className="container__main__content__details__buttons__button container__main__content__details__buttons__primary"
        >
          Add
        </Link>
        <Link
          to={backLocation}
          className="container__main__content__details__buttons__button container__main__content__details__buttons__secondary"
        >
          Delect
        </Link>
      </div>
    </div>
  );
}
