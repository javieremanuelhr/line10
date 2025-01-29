import mongoose from 'mongoose';

const bagsSchema = mongoose.Schema(
    {
        time: {
            type: String,
            required: true,
        },
        date: {
            type: Date,
            required: true,
        },
        shift: {
            type: String,
            required: true,
        },
        material: {
            type: String,
            required: true,
        },
        provider: {
            type: String,
            required: true,
        },
        flexLot: {
            type: String,
            required: true,
        },
        providerLot: {
            type: String,
            required: true,
        },
        bagNumber: {
            type: String,
            required: true,
        },
        weight: {
            type: Number,
            required: true,
        },
        hopper: {
            type: String,
            required: true,
        },
        silo: {
            type: String,
            required: true,
        },
        operator: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
    }
);

export const Bag = mongoose.model('Bag', bagsSchema);