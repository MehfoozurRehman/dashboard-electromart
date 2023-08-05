import {
  TableEntryDeleteButton,
  TableEntryText,
  TableEntryViewButton,
} from "components";

import { Search } from "react-feather";

export default function orders() {
  return (
    <div className="container__main__content__listing">
      <div className="container__main__content__listing__header">
        <div className="container__main__content__listing__header__left">
          <form className="container__main__content__listing__header__left__search">
            <input
              type="text"
              placeholder="Search"
              className="container__main__content__listing__header__left__search__field"
            />
            <button className="container__main__content__listing__header__left__search__button">
              <Search size={20} color="currentColor" />
            </button>
          </form>
        </div>
      </div>
      <div className="container__main__content__listing__table">
        <div className="container__main__content__listing__table__header">
          <div className="container__main__content__listing__table__header__entry">
            Actions
          </div>

          <div className="container__main__content__listing__table__header__entry">
            Order ID
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Order Date
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Customer name
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Phone No.
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Status
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Payment
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Card Number
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Card Name
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Card Date
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Card Cvv
          </div>
        </div>
        <div className="container__main__content__listing__table__content">
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />

          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
        </div>
      </div>
    </div>
  );
}

function TableEntry() {
  return (
    <div className="container__main__content__listing__table__content__list">
      <div className="container__main__content__listing__table__content__list__entry">
        <TableEntryViewButton />
        <TableEntryDeleteButton />
      </div>
      <TableEntryText>123456789</TableEntryText>
      <TableEntryText>11/12/22</TableEntryText>
      <TableEntryText>qasim</TableEntryText>
      <TableEntryText>+123234560</TableEntryText>
      <TableEntryText>Delivery Made</TableEntryText>
      <TableEntryText>Payment Pending</TableEntryText>
      <TableEntryText>1233434</TableEntryText>
      <TableEntryText>Arsi</TableEntryText>
      <TableEntryText>11/12/22</TableEntryText>
      <TableEntryText>1002</TableEntryText>
    </div>
  );
}
