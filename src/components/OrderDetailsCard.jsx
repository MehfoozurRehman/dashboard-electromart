export default function OrderDetailsCard({ label, buttonLabel }) {
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
            Card Name
          </div>
          <div className="order__details__main__details__card__content__row__value">
            Arsiii
          </div>
        </div>
        <div className="order__details__main__details__card__content__row">
          <div className="order__details__main__details__card__content__row__label">
            Card Number
          </div>
          <div className="order__details__main__details__card__content__row__value">
            33430909090
          </div>
        </div>

        <div className="order__details__main__details__card__content__row">
          <div className="order__details__main__details__card__content__row__label">
            Card Date
          </div>
          <div className="order__details__main__details__card__content__row__value">
            01/02/23
          </div>
        </div>
        <div className="order__details__main__details__card__content__row">
          <div className="order__details__main__details__card__content__row__label">
            Card Cvv
          </div>
          <div className="order__details__main__details__card__content__row__value">
            9797
          </div>
        </div>
      </div>
    </div>
  );
}
