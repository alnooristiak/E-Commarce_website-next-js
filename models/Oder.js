const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    userId: { type: String, require: true },
    products: [{
        productId: { type: String },
        quentity: { type: Number, default: 1 }
    }],
    address: { type: String, require: true },
    amount: { type: Number, require: true },
    status: { type: Number, default: 'Pending', require: true },
}, { timestamps: true });

mongoose.models = {}

export default mongoose.model('Order', OrderSchema);