import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const itemSchema = new Schema({
    asin: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    price_string: {
        type: String,
        required: true
    },
    total_reviews: {
        type: String,
        required: true
    },
    stars: {
        type: String,
        required: true
    }
});

export default model('Item', itemSchema);
