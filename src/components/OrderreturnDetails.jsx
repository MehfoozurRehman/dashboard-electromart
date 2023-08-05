export default function OrderreturnDetails({ label, buttonLabel }) {
  return (
    <div className="order__details__main__details__card">
      <div className="order__details__main__details__card__header">
        <div className="order__details__main__details__card__header__title">
          {label}
        </div>
      </div>
      <div className="order__details__main__details__card__content">
        <div className="order__details__main__details__card__content__row">
          <div className="order__details__main__details__card__content__row__label">
            Name
          </div>
          <div className="order__details__main__details__card__content__row__value">
            asim
          </div>
        </div>
        <div className="order__details__main__details__card__content__row">
          <div className="order__details__main__details__card__content__row__label">
            Phone Number
          </div>
          <div className="order__details__main__details__card__content__row__value">
            +92-3000121212
          </div>
        </div>
        <div className="order__details__main__details__card__content__row">
          <div className="order__details__main__details__card__content__row__label">
            Email Addess
          </div>
          <div className="order__details__main__details__card__content__row__value">
            arsi@gmail.com
          </div>
        </div>
        <div className="order__details__main__details__card__content__row">
          <div className="order__details__main__details__card__content__row__label">
            Address
          </div>
          <div className="order__details__main__details__card__content__row__value">
            zam zam hotel
          </div>
        </div>
      </div>
    </div>
  );
}
