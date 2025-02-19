import mongoose from 'mongoose';

const productionSchema = mongoose.Schema(
    {
        //Date//
        date: {
            type: Date,
            required: true,
        },
        //Per Shift Data//
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
        //Supervisors//
        supA: {
            type: String,
            required: false,
        },
        supB: {
            type: String,
            required: false,
        },
        supC: {
            type: String,
            required: false,
        },
        //Absolute Totals//
        rggA: {        
            type: Number,
            required: false,
            default: 0,
        },
        matRggA: {
            type: Number,
            required: false,
            default: 0,
        },
        mgA: {
            type: Number,
            required: false,
            default: 0,
        },
        recronA: {
            type: Number,
            required: false,
            default: 0,
        },
        gardenA:{
            type: Number,
            required: false,
            default: 0,
        },
        indoramaA: {
            type: Number,
            required: false,
            default: 0,
        },
        chineseA: {
            type: Number,
            required: false,
            default: 0,
        },
        silicaA: {
            type: Number,
            required: false,
            default: 0,
        },
        pcrA: {
            type: Number,
            required: false,
            default: 0,
        },
        pcrRggA: {
            type: Number,
            required: false,
            default: 0,
        },
        embosA: {
            type: Number,
            required: false,
            default: 0,
        },
        p3k1A: {
            type: Number,
            required: false,
            default: 0,
        },
        rggB: {        
            type: Number,
            required: false,
            default: 0,
        },
        matRggB: {
            type: Number,
            required: false,
            default: 0,
        },
        mgB: {
            type: Number,
            required: false,
            default: 0,
        },
        recronB: {
            type: Number,
            required: false,
            default: 0,
        },
        gardenB:{
            type: Number,
            required: false,
            default: 0,
        },
        indoramaB: {
            type: Number,
            required: false,
            default: 0,
        },
        chineseB: {
            type: Number,
            required: false,
            default: 0,
        },
        silicaB: {
            type: Number,
            required: false,
            default: 0,
        },
        pcrB: {
            type: Number,
            required: false,
            default: 0,
        },
        pcrRggB: {
            type: Number,
            required: false,
            default: 0,
        },
        embosB: {
            type: Number,
            required: false,
            default: 0,
        },
        p3k1B: {
            type: Number,
            required: false,
            default: 0,
        },
        rggC: {        
            type: Number,
            required: false,
            default: 0,
        },
        matRggC: {
            type: Number,
            required: false,
            default: 0,
        },
        mgC: {
            type: Number,
            required: false,
            default: 0,
        },
        recronC: {
            type: Number,
            required: false,
            default: 0,
        },
        gardenC:{
            type: Number,
            required: false,
            default: 0,
        },
        indoramaC: {
            type: Number,
            required: false,
            default: 0,
        },
        chineseC: {
            type: Number,
            required: false,
            default: 0,
        },
        silicaC: {
            type: Number,
            required: false,
            default: 0,
        },
        pcrC: {
            type: Number,
            required: false,
            default: 0,
        },
        pcrRggC: {
            type: Number,
            required: false,
            default: 0,
        },
        embosC: {
            type: Number,
            required: false,
            default: 0,
        },
        p3k1C: {
            type: Number,
            required: false,
            default: 0,
        },
        // MAIN Recipes //
        // RGG //
        mainRgg1A: {
            type: Number,
            required: false,
            default: 0,
        },
        mainRgg2A: {
            type: Number,
            required: false,
            default: 0,
        },
        mainRgg3A: {
            type: Number,
            required: false,
            default: 0,
        },
        mainRgg1B: {
            type: Number,
            required: false,
            default: 0,
        },
        mainRgg2B: {
            type: Number,
            required: false,
            default: 0,
        },
        mainRgg3B: {
            type: Number,
            required: false,
            default: 0,
        },
        mainRgg1C: {
            type: Number,
            required: false,
            default: 0,
        },
        mainRgg2C: {
            type: Number,
            required: false,
            default: 0,
        },
        mainRgg3C: {
            type: Number,
            required: false,
            default: 0,
        },
        // Mg //
        mainMg1A: {
            type: Number,
            required: false,
            default: 0,
        },
        mainMg2A: {
            type: Number,
            required: false,
            default: 0,
        },
        mainMg3A: {
            type: Number,
            required: false,
            default: 0,
        },
        mainMg1B: {
            type: Number,
            required: false,
            default: 0,
        },
        mainMg2B: {
            type: Number,
            required: false,
            default: 0,
        },
        mainMg3B: {
            type: Number,
            required: false,
            default: 0,
        },
        mainMg1C: {
            type: Number,
            required: false,
            default: 0,
        },
        mainMg2C: {
            type: Number,
            required: false,
            default: 0,
        },
        mainMg3C: {
            type: Number,
            required: false,
            default: 0,
        },
        //Recorn//
        mainRecron1A: {
            type: Number,
            required: false,
            default: 0,
        },
        mainRecron2A: {
            type: Number,
            required: false,
            default: 0,
        },
        mainRecron3A: {
            type: Number,
            required: false,
            default: 0,
        },
        mainRecron1B: {
            type: Number,
            required: false,
            default: 0,
        },
        mainRecron2B: {
            type: Number,
            required: false,
            default: 0,
        },
        mainRecron3B: {
            type: Number,
            required: false,
            default: 0,
        },
        mainRecron1C: {
            type: Number,
            required: false,
            default: 0,
        },
        mainRecron2C: {
            type: Number,
            required: false,
            default: 0,
        },
        mainRecron3C: {
            type: Number,
            required: false,
            default: 0,
        },
        //Garden//
        mainGarden1A: {
            type: Number,
            required: false,
            default: 0,
        },
        mainGarden2A: {
            type: Number,
            required: false,
            default: 0,
        },
        mainGarden3A: {
            type: Number,
            required: false,
            default: 0,
        },
        mainGarden1B: {
            type: Number,
            required: false,
            default: 0,
        },
        mainGarden2B: {
            type: Number,
            required: false,
            default: 0,
        },
        mainGarden3B: {
            type: Number,
            required: false,
            default: 0,
        },
        mainGarden1C: {
            type: Number,
            required: false,
            default: 0,
        },
        mainGarden2C: {
            type: Number,
            required: false,
            default: 0,
        },
        mainGarden3C: {
            type: Number,
            required: false,
            default: 0,
        },
        //Silica//
        mainSilica1A: {
            type: Number,
            required: false,
            default: 0,
        },
        mainSilica2A: {
            type: Number,
            required: false,
            default: 0,
        },
        mainSilica3A: {
            type: Number,
            required: false,
            default: 0,
        },
        mainSilica1B: {
            type: Number,
            required: false,
            default: 0,
        },
        mainSilica2B: {
            type: Number,
            required: false,
            default: 0,
        },
        mainSilica3C: {
            type: Number,
            required: false,
            default: 0,
        },
        mainSilica1C: {
            type: Number,
            required: false,
            default: 0,
        },
        mainSilica2C: {
            type: Number,
            required: false,
            default: 0,
        },
        mainSilica3C: {
            type: Number,
            required: false,
            default: 0,
        },
        //Pcr//
        mainPCR1A: {
            type: Number,
            required: false,
            default: 0,
        },
        mainPCR2A: {
            type: Number,
            required: false,
            default: 0,
        },
        mainPCR3A: {
            type: Number,
            required: false,
            default: 0,
        },
        mainPCR1B: {
            type: Number,
            required: false,
            default: 0,
        },
        mainPCR2B: {
            type: Number,
            required: false,
            default: 0,
        },
        mainPCR3B: {
            type: Number,
            required: false,
            default: 0,
        },
        mainPCR1C: {
            type: Number,
            required: false,
            default: 0,
        },
        mainPCR2C: {
            type: Number,
            required: false,
            default: 0,
        },
        mainPCR3C: {
            type: Number,
            required: false,
            default: 0,
        },
        //RggPcr//
        mainRggPcr1A: {
            type: Number,
            required: false,
            default: 0,
        },
        mainRggPcr2A: {
            type: Number,
            required: false,
            default: 0,
        },
        mainRggPcr3A: {
            type: Number,
            required: false,
            default: 0,
        },
        mainRggPcr1B: {
            type: Number,
            required: false,
            default: 0,
        },
        mainRggPcr2B: {
            type: Number,
            required: false,
            default: 0,
        },
        mainRggPcr3B: {
            type: Number,
            required: false,
            default: 0,
        },
        mainRggPcr1C: {
            type: Number,
            required: false,
            default: 0,
        },
        mainRggPcr2C: {
            type: Number,
            required: false,
            default: 0,
        },
        mainRggPcr3C: {
            type: Number,
            required: false,
            default: 0,
        },
        //RggMat//
        mainRggMat1A: {
            type: Number,
            required: false,
            defualt: 0,
        },
        mainRggMat2A: {
            type: Number,
            required: false,
            defualt: 0,
        },
        mainRggMat3A: {
            type: Number,
            required: false,
            defualt: 0,
        },
        mainRggMat1B: {
            type: Number,
            required: false,
            defualt: 0,
        },
        mainRggMat2B: {
            type: Number,
            required: false,
            defualt: 0,
        },
        mainRggMat3B: {
            type: Number,
            required: false,
            defualt: 0,
        },
        mainRggMat1C: {
            type: Number,
            required: false,
            defualt: 0,
        },
        mainRggMat2C: {
            type: Number,
            required: false,
            defualt: 0,
        },
        mainRggMat3C: {
            type: Number,
            required: false,
            defualt: 0,
        },
        //COEX//
        //Mg//
        coexMg1A: {
            type: Number,
            required: false,
            default: 0,
        },
        coexMg2A: {
            type: Number,
            required: false,
            default: 0,
        },
        coexMg3A: {
            type: Number,
            required: false,
            default: 0,
        },
        coexMg1B: {
            type: Number,
            required: false,
            default: 0,
        },
        coexMg2B: {
            type: Number,
            required: false,
            default: 0,
        },
        coexMg3B: {
            type: Number,
            required: false,
            default: 0,
        },
        coexMg1C: {
            type: Number,
            required: false,
            default: 0,
        },
        coexMg2C: {
            type: Number,
            required: false,
            default: 0,
        },
        coexMg3C: {
            type: Number,
            required: false,
            default: 0,
        },
        //Recron//
        coexRecron1A: {
            type: Number,
            required: false,
            default: 0,
        },
        coexRecron2A: {
            type: Number,
            required: false,
            default: 0,
        },
        coexRecron3A: {
            type: Number,
            required: false,
            default: 0,
        },
        coexRecron1B: {
            type: Number,
            required: false,
            default: 0,
        },
        coexRecron2B: {
            type: Number,
            required: false,
            default: 0,
        },
        coexRecron3B: {
            type: Number,
            required: false,
            default: 0,
        },
        coexRecron1C: {
            type: Number,
            required: false,
            default: 0,
        },
        coexRecron2C: {
            type: Number,
            required: false,
            default: 0,
        },
        coexRecron3C: {
            type: Number,
            required: false,
            default: 0,
        },
        //Garden//
        coexGarden1A: {
            type: Number, 
            required: false,
            default: 0,
        },
        coexGarden2A: {
            type: Number, 
            required: false,
            default: 0,
        },
        coexGarden3A: {
            type: Number, 
            required: false,
            default: 0,
        },
        coexGarden1B: {
            type: Number, 
            required: false,
            default: 0,
        },
        coexGarden2B: {
            type: Number, 
            required: false,
            default: 0,
        },
        coexGarden3B: {
            type: Number, 
            required: false,
            default: 0,
        },
        coexGarden1C: {
            type: Number, 
            required: false,
            default: 0,
        },
        coexGarden2C: {
            type: Number, 
            required: false,
            default: 0,
        },
        coexGarden3C: {
            type: Number, 
            required: false,
            default: 0,
        },
        //Silica//
        coexSilica1A: {
            type: Number,
            required: false,
            default: 0,
        },
        coexSilica2A: {
            type: Number,
            required: false,
            default: 0,
        },
        coexSilica3A: {
            type: Number,
            required: false,
            default: 0,
        },
        coexSilica1B: {
            type: Number,
            required: false,
            default: 0,
        },
        coexSilica2B: {
            type: Number,
            required: false,
            default: 0,
        },
        coexSilica3B: {
            type: Number,
            required: false,
            default: 0,
        },
        coexSilica1C: {
            type: Number,
            required: false,
            default: 0,
        },
        coexSilica2C: {
            type: Number,
            required: false,
            default: 0,
        },
        coexSilica3C: {
            type: Number,
            required: false,
            default: 0,
        },
        //p3k1//
        coexP3k11A: {
            type: Number,
            required: false,
            default: 0,
        },
        coexP3k12A: {
            type: Number,
            required: false,
            default: 0,
        },
        coexP3k13A: {
            type: Number,
            required: false,
            default: 0,
        },
        coexP3k11B: {
            type: Number,
            required: false,
            default: 0,
        },
        coexP3k12B: {
            type: Number,
            required: false,
            default: 0,
        },
        coexP3k13B: {
            type: Number,
            required: false,
            default: 0,
        },
        coexP3k11C: {
            type: Number,
            required: false,
            default: 0,
        },
        coexP3k12C: {
            type: Number,
            required: false,
            default: 0,
        },
        coexP3k13C: {
            type: Number,
            required: false,
            default: 0,
        },
        //Embos//
        coexEmbos1A: {
            type: Number,
            required: false,
            default: 0,
        },
        coexEmbos2A: {
            type: Number,
            required: false,
            default: 0,
        },
        coexEmbos3A: {
            type: Number,
            required: false,
            default: 0,
        },
        coexEmbos1B: {
            type: Number,
            required: false,
            default: 0,
        },
        coexEmbos2B: {
            type: Number,
            required: false,
            default: 0,
        },
        coexEmbos3B: {
            type: Number,
            required: false,
            default: 0,
        },
        coexEmbos1C: {
            type: Number,
            required: false,
            default: 0,
        },
        coexEmbos2C: {
            type: Number,
            required: false,
            default: 0,
        },
        coexEmbos3C: {
            type: Number,
            required: false,
            default: 0,
        },
    },
    {
        timestamps: true,
    }
);

export const Production = mongoose.model('Production', productionSchema);