import mongoose, { Document, Schema } from "mongoose";

export interface IPurchasedItem{
    productId: mongoose.Types.ObjectId;
    qty: number;
}

export interface ITransaction extends Document{
    paymentProof: string;
    status: "pending" | "paid" | "rejected";
    purchasedItems: IPurchasedItem[];
    totalPayment: number;
    customerName: number;
    customerContact: string;
    customerAddress: string;
}

const PurchasedItemShcema: Schema = new Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
    },
    qty: { type: Number, required: true, min: 1}
}, {_id: false}
);

const TransactionShema: Schema = new Schema({
    paymentProof: {type: String, required: true},
    status: {
        type: String,
        enum: ["pending", "paid", "rejected"],
        default: "pending",
        required: true,
    },
    purchaseItems: {type: [PurchasedItemShcema], required: true},
    totalPayment: {type: Number, required: true},
    customerName: {type: String, required: true},
    customerContact: {type: String, required: true},
    customerAddres: {type: String, required: true},
}, {timestamps: true});

export default mongoose.model<ITransaction>("Transaction", TransactionShema);