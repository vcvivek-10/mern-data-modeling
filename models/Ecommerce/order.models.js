import mongoose from 'mongoose';

// mini model for product details with id and quantity

const orderItemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
    },
    quantity: {
        type: Number,
        required: true,
    },
});

const orderSchema = new mongoose.Schema(
    {
        orederPrice: {
            type: Number,
            required: true,
        },
        customer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        orderItems: {
            type: [orderItemSchema],
        },
        address: {
            // we can also define address schema like orderItem for pincode,state,city etc
            type: String,
            required: true,
        },
        status: {
            // status for identify the order updates for that we specifies enum then it will resitricted no one can change we can select only inside enum option array
            type: String,
            enum: ['PENDING', 'CANCELLED', 'DELIVERED'],
            default: 'PENDING',
        },
    },
    {
        timestamps: true,
    }
);

export const Order = mongoose.model('Order', orderSchema);
