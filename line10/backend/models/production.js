import mongoose from 'mongoose';

const MaterialConsumptionSchema = mongoose.Schema ({
    rgg: {        
        type: Number,
        required: false,
        default: 0,
    },
    matRgg: {
        type: Number,
        required: false,
        default: 0,
    },
    mg: {
        type: Number,
        required: false,
        default: 0,
    },
    recron: {
        type: Number,
        required: false,
        default: 0,
    },
    garden:{
        type: Number,
        required: false,
        default: 0,
    },
    indorama: {
        type: Number,
        required: false,
        default: 0,
    },
    chinese: {
        type: Number,
        required: false,
        default: 0,
    },
    silica: {
        type: Number,
        required: false,
        default: 0,
    },
    pcr: {
        type: Number,
        required: false,
        default: 0,
    },
    pcrRgg: {
        type: Number,
        required: false,
        default: 0,
    },
});

const productionSchema = mongoose.Schema(
    {
        date: {
            type: Date,
            required: true,
        },
        prodnA: {
            type: Number,
            required: false,
            default: 0,
        },
        mainA: {
            type: Number,
            required: false,
            default: 0,
        },
        coexA: {
            type: Number,
            required: false,
            default: 0,
        },
        eremaA: {
            type: Number,
            required: false,
            default: 0,
        },
        downtimeEremaA: {
            type: Number,
            required: false,
            default: 0,
        },
        intaremaA: {
            type: Number,
            required: false,
            default: 0,
        },
        prodnB: {
            type: Number,
            required: false,
            default: 0,
        },
        mainB: {
            type: Number,
            required: false,
            default: 0,
        },
        coexB: {
            type: Number,
            required: false,
            default: 0,
        },
        eremaB: {
            type: Number,
            required: false,
            default: 0,
        },
        downtimeEremaB: {
            type: Number,
            required: false,
            default: 0,
        },
        intaremaB: {
            type: Number,
            required: false,
            default: 0,
        },
        prodnC: {
            type: Number,
            required: false,
            default: 0,
        },
        mainC: {
            type: Number,
            required: false,
            default: 0,
        },
        coexC: {
            type: Number,
            required: false,
            default: 0,
        },
        eremaC: {
            type: Number,
            required: false,
            default: 0,
        },
        downtimeEremaC: {
            type: Number,
            required: false,
            default: 0,
        },
        intaremaC: {
            type: Number,
            required: false,
            default: 0,
        },
        materialConsumption: MaterialConsumptionSchema,
    },
    {
        timestamps: true,
    }
);

export const Production = mongoose.model('Production', productionSchema);