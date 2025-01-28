import React, { useState } from "react";

function MyComponent() {
    const comments = document.querySelectorAll(".comment-thing");

    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("");

    function handleNameChange(e) {
        setName(e.target.value);
    }
    function handleQuantityChange(e) {
        setQuantity(e.target.value);
    }
    function handleCommentChange(e) {
        setComment(e.target.value);
    }
    function handlePaymentChange(e) {
        setPayment(e.target.value);
    }
    function handleShippingChange(e) {
        setShipping(e.target.value);
        e.target.value === "Pick Up" ? 
        comments.forEach(comment => comment.style.display = "none") : 
        comments.forEach(comment => comment.style.display = "block");
    }

    return (
        <div>
            <input value={name} onChange={handleNameChange} />
            <p>Name: {name}</p>

            <input value={quantity} onChange={handleQuantityChange} type="number" />
            <p>Quantity: {quantity}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="MasterCard">MasterCard</option>
                <option value="GiftCard">GiftCard</option>
            </select>
            <p>Payment: {payment}</p>

            <label>
                <input type="radio" value="Pick Up" checked={shipping === "Pick Up"} onChange={handleShippingChange} />
                Pick Up
            </label>
            <label>
                <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleShippingChange} />
                Delivery
            </label>
            <p>Shipping: {shipping}</p>


            <textarea className="comment-thing" value={comment} onChange={handleCommentChange} placeholder="Enter delivery instructions here..." />
            <p className="comment-thing">Comment: {comment}</p>
        </div>
    );
}

export default MyComponent;