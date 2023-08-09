import dayjs from "dayjs";

export default function OrderDetailsCard({ label, data }) {
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
            Total Price
          </div>
          <div className="order__details__main__details__card__content__row__value">
            {data.total}
          </div>
        </div>
        <div className="order__details__main__details__card__content__row">
          <div className="order__details__main__details__card__content__row__label">
            Card Name
          </div>
          <div className="order__details__main__details__card__content__row__value">
            {data.cardName}
          </div>
        </div>
        <div className="order__details__main__details__card__content__row">
          <div className="order__details__main__details__card__content__row__label">
            Card Number
          </div>
          <div className="order__details__main__details__card__content__row__value">
            {data.cardNumber}
          </div>
        </div>
        <div className="order__details__main__details__card__content__row">
          <div className="order__details__main__details__card__content__row__label">
            Card Date
          </div>
          <div className="order__details__main__details__card__content__row__value">
            {dayjs(data.cardDate).format("DD/MM/YYYY")}
          </div>
        </div>
        <div className="order__details__main__details__card__content__row">
          <div className="order__details__main__details__card__content__row__label">
            Card Cvv
          </div>
          <div className="order__details__main__details__card__content__row__value">
            {data.cardCvv}
          </div>
        </div>
      </div>
    </div>
  );
}
