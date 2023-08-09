import { OrderDetailsCard } from "components";

import { useLocation } from "react-router-dom";
import OrderreturnDetails from "./../../../components/OrderreturnDetails";

export default function OrderDetails() {
  const { state } = useLocation();
  return (
    <div className="order__details">
      <div className="order__details__main">
        <div className="order__details__main__row">
          <OrderDetailsCard label="Order Details" data={state} />
          <OrderreturnDetails label="Product Details" data={state} />
        </div>
      </div>
    </div>
  );
}
