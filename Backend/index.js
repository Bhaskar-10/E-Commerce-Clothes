import 'dotenv/config';
import express from 'express';
import cors from 'cors'
import bodyParser  from 'body-parser';
import cartRouter from './routes/cart.js';
import productRouter from './routes/product.js'
import { connect} from 'mongoose';

//express
const app = express();

//Cross-origin resource sharing (CORS) - pull data from external APIs that are public or authorized.
app.use(cors())

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//routes
app.use('/api', cartRouter);
app.use('/api', productRouter);

connect(process.env.MONGO_URI).then(() => {
    console.log('Mongoose connect success.')
}).catch((err) => {
    console.log(err)
    console.error('Mongoose connect failed.');
});

app.listen(process.env.PORT, () => console.log(`Server started on port ${process.env.PORT}`));