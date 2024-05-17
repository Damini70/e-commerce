import "./styles/Cart.css";
import { useEffect, useState } from "react";
function Cart({ items, setItem }) {
  const [coupon, setCoupon] = useState("");
  const [total, setTotal] = useState(null);
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    if (items.length > 0) {
      setTotal(items.length * 3 + 1);
    }
  }, [items]);

  function handleRemove(id) {
    const data = items.filter((item) => item.person.id !== id);
    setItem(data);
    setCoupon("");
    setDiscount(0);
  }
  function handleApply() {
    const amount = total - total * 0.1;
    setDiscount("10%");
    setTotal(amount);
    setCoupon("");
  }
  function handleCoupon(e) {
    setCoupon(e.target.value);
  }
  return (
    <div className="cart">
      <h3>Your Items</h3>
      {items.length > 0 ? (
        <div className="data">
          {items.map((item) => {
            return (
              <div className="cartItem">
                <div className="content">
                  <div className="img">
                    <img
                      src={
                        item.person.image
                          ? item.person.image.original
                          : "https://static.tvmaze.com/images/no-img/no-img-portrait-text.png"
                      }
                      alt="item"
                    />
                  </div>
                  <div className="details">
                    <h3>{item.person.name}</h3>
                    <h4>Price 3$</h4>
                    <button onClick={() => handleRemove(item.person.id)}>
                      Remove item
                    </button>
                  </div>
                </div>
                <div className="price">{/* <h3>Price 3$</h3> */}</div>
              </div>
            );
          })}
          <div className="total">
            <div className="discount">
              <div className="coupon">
                <p>Apply Coupon Code</p>
                <input type="text" onChange={handleCoupon} value={coupon} />
                <button onClick={handleApply}>Apply</button>
              </div>
              <p>5% gst included</p>
              <p>Discount- {discount}</p>

              <div className="amount">
                <h3>Total Amount: {total}$</h3>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h2>Please add items to view in cart</h2>
      )}
    </div>
  );
}

export default Cart;
