import { OrderDetailsCard, OrderProductsCard } from "components";
import { OrderStatus } from "components/OrderStatus";
import OrderreturnDetails from "./../../../components/OrderreturnDetails";

export default function OrderDetails() {
  return (
    <div className="order__details">
      <div className="proved__btn">
        <button className="proved__btn__btn">Approved</button>
      </div>
      {/* <OrderStatus /> */}
      <div className="order__details__main">
        <div className="order__details__main__row">
          <OrderDetailsCard label="Order Details" />
          <OrderreturnDetails label="person Details" />
        </div>
        {/* <div className="order__details__main__row">
          <OrderProductsCard label="Booking" />
        </div> */}
      </div>
    </div>
  );
}
