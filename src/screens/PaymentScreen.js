import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { savePayment } from "../state/actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";

function PaymentScreen() {
  let navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePayment(paymentMethod));
    navigate("/placeoreder");
  };

  return (
    <div>
      <CheckoutSteps step1 step2 step3></CheckoutSteps>

      <div className="form">
        <form onSubmit={submitHandler}>
          <ul className="form-container">
            <li>
              <h2>Payment</h2>
            </li>

            <li>
              <input
                type="radio"
                name="paymentMethod"
                id="paymentMethod"
                value="paypal"
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <label htmlFor="paymentMethod">Paypal</label>
            </li>

            <li>
              <button type="submit" className="button primary">
                Continue
              </button>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
}
export default PaymentScreen;
