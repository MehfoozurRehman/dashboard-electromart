export default function OrderreturnDetails({ label, data }) {
  return (
    <div className="order__details__main__details__card">
      <div className="order__details__main__details__card__header">
        <div className="order__details__main__details__card__header__title">
          {label}
        </div>
      </div>
      {data.products.map((item, index) => (
        <div
          className="order__details__main__details__card__content"
          style={{
            height: "fit-content",
            borderTop: index === 0 ? "none" : "1px solid #e0e0e0",
            marginTop: index === 0 ? "0rem" : "1rem",
            paddingTop: "1rem",
            paddingRight: "0rem",
          }}
          key={item._id}
        >
          <div className="order__details__main__details__card__content__row">
            <div className="order__details__main__details__card__content__row__label">
              Name
            </div>
            <div className="order__details__main__details__card__content__row__value">
              {item.name}
            </div>
          </div>
          <div className="order__details__main__details__card__content__row">
            <div className="order__details__main__details__card__content__row__label">
              Price
            </div>
            <div className="order__details__main__details__card__content__row__value">
              {item.price}
            </div>
          </div>
          <div className="order__details__main__details__card__content__row">
            <div className="order__details__main__details__card__content__row__label">
              Brand
            </div>
            <div className="order__details__main__details__card__content__row__value">
              {item.brand}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
