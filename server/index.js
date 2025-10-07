const express = require("express");
const app = express();
const cores = require("cors");
const bodyparser = require("body-parser");
const Stripe = require("stripe");
app.use(cores());
app.use(bodyparser.urlencoded());
app.use(bodyparser.json());
require('dotenv').config();

const stripe = Stripe(
  process.env.STRIPE_SECRET_KEY
);
const mongoose = require("mongoose");
const OrderModel = require("./model/OrderModel");

mongoose.connect('mongodb+srv://adityajainghetal_db_user:uLXzBJ49pFdV4Hpx@cluster0.6k0m1z3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('Connection error:', err));


app.post("/stripe-payment", async (req, res) => {
  try {
    console.log(req.body);
    const { Product, User } = req.body;
    console.log(Product);

    const line_items = Product.map((item) => ({
      price_data: {
        currency: "inr",
        product_data: {
          name: item.name,
          images: item.image,
        },
        unit_amount: item.price * 100,
      },
      quantity: item.qnty,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items,
      mode: "payment",
      success_url: "http://localhost:5173/success",
      cancel_url: "http://localhost:5173/cancel",
    });

    const totalAmount = Product.reduce(
      (acc, item) => acc + item.price * item.qnty,
      0
    );

    const data = await OrderModel.create({
      name: User.name,
      email: User.email,
      address: User.address,
      city: User.city,
      state: User.state,
      pincode: User.pincode,
      Product: Product,
      totalamount: totalAmount,
      OrderId: session.id,
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error("Stripe Error:", error.message);
    res.status(500).json({ error: "Failed to create checkout session" });
  }
});

app.listen(8000, console.log("server run at 8000"));

