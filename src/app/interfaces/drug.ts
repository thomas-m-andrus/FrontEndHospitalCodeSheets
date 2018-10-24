export interface IDrug {
    drugName: string,
    drugSubScript: string,
    drugConcentration: number,
    drugConcentrationUOM: string,
    //Only used for Doseage drugs
    drugInitDose: number,
    drugInitDoseUOM: string,
    drugCalculatedDose: number,
    drugCalculatedDoseUOM: string,
    drugVolume: number,
    drugVolumeUOM: string,
    //Only used for Rate drugs
    drugAdminRate: number,
    drugAdminRateUOM: string,
    drugFlowRate: number,
    drugFlowRateUOM: string,
    //Used by both
    drugSuggestion: string,
    drugInstruction: string
}
