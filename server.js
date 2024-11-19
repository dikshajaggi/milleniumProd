import express from 'express';
import { connect } from 'mongoose';
import cors from 'cors';
import cartRouter from './routes/cart.js';
import productRouter from './routes/product.js';
import "dotenv/config"
import userRouter from './routes/user.js';
import orderRouter from './routes/order.js';
import categoryRouter from './routes/category.js';
import searchRouter from './routes/search.js';
import path from "path"
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express();
const PORT = process.env.PORT || 5000;

connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use(express.json());
app.use(cors("http://localhost:3000/"));

app.use("/images", express.static("uploads"))
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);
app.use('/api/category', categoryRouter);
app.use('/api/search', searchRouter);

app.use(express.static(path.join(__dirname, "/client/build")))
app.get("*", (req,res) => res.sendFile(path.join(__dirname, "/client/build/index.html")))

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
