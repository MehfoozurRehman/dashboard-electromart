import {
  Avatar,
  TableEntryDeleteButton,
  TableEntryEditButton,
  TableEntryImage,
  TableEntryStatus,
  TableEntryText,
} from "components";

import { Link } from "router";
import { Search } from "react-feather";
import { useLocation } from "react-router-dom";

export default function Products() {
  const location = useLocation();
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
        <div className="container__main__content__listing__header__right">
          <Link
            to={location.pathname.toLowerCase() + "/add"}
            className="container__main__content__listing__header__right__button"
          >
            Add
          </Link>
        </div>
      </div>
      <div className="container__main__content__listing__table">
        <div className="container__main__content__listing__table__header">
          <div className="container__main__content__listing__table__header__entry">
            Actions
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Status
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Name
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Supplier
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Brand
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Category
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Sub-Category
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Tag
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Cost of unit
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Selling price
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Discounted price
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Variants
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Images
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
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
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
        <TableEntryEditButton />
        <TableEntryDeleteButton />
      </div>
      <TableEntryStatus />
      <TableEntryText className="container__main__content__listing__table__content__list__entry">
        john
      </TableEntryText>
      <TableEntryText className="container__main__content__listing__table__content__list__entry">
        Deved
      </TableEntryText>
      <TableEntryText className="container__main__content__listing__table__content__list__entry">
        stylo
      </TableEntryText>
      <TableEntryText className="container__main__content__listing__table__content__list__entry">
        knitted cloths
      </TableEntryText>
      <TableEntryText className="container__main__content__listing__table__content__list__entry">
        kindom
      </TableEntryText>
      <TableEntryText className="container__main__content__listing__table__content__list__entry">
        absd
      </TableEntryText>
      <TableEntryText className="container__main__content__listing__table__content__list__entry">
        34000
      </TableEntryText>
      <TableEntryText className="container__main__content__listing__table__content__list__entry">
        12356
      </TableEntryText>
      <TableEntryText className="container__main__content__listing__table__content__list__entry">
        20
      </TableEntryText>
      <TableEntryText className="container__main__content__listing__table__content__list__entry">
        30
      </TableEntryText>
      <TableEntryImage
        className="container__main__content__listing__table__content__list__entry"
        style={{ gap: 10, flexWrap: "wrap" }}
      >
        <Avatar className="container__main__content__listing__table__content__list__entry__img" />
        <Avatar className="container__main__content__listing__table__content__list__entry__img" />
        <Avatar className="container__main__content__listing__table__content__list__entry__img" />
      </TableEntryImage>
    </div>
  );
}
