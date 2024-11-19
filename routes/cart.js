import express from "express"
import { addToCart, getCart, removeFromCart } from "../controllers/cart.js"
import authMiddleware from "../middlewares/auth.js"

const cartRouter = express.Router()

cartRouter.post("/add", authMiddleware, addToCart)
cartRouter.post("/remove", authMiddleware, removeFromCart)
cartRouter.get("/all", authMiddleware, getCart)

export default cartRouter