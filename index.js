import mongoose from 'mongoose';
import express from 'express';
import productRoute from './routes/product.route.js'

//middleware
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use("/api/products", productRoute)

app.get('/', (req, res) => {
  res.end("You Are In the Home Page !!!!!")
});

mongoose
  .connect(
    "mongodb+srv://brandoniticka:MEuf6ztKUhU5Lftp@backenddb.clsqsva.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected!");
    app.listen(3000, () => {
      console.log("Hearing On Port 3000");
    });
  })
  .catch(() => {
    console.log('Connection Failed!');
  })