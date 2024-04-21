type tryOn = {
    value: string
}

export type Laboratory = {
    id: number,
    idPatient: number,
    patientFullName: string,
    laboratoryName: string,
    sendDate: string,
    shade: string,
    workType: string,
    PEIAndCO: string,
    ICAndPROVISIONAL: string
    tryOn: tryOn[],
}

export const laboratories : Laboratory[] = [
    {
        id: 1,
        idPatient: 2,
        laboratoryName: "Tifan labo",
        patientFullName: "Amine El Hanafi",
        sendDate: "11/12/2024",
        shade: "C2",
        workType: "",
        PEIAndCO: "",
        ICAndPROVISIONAL: "",
        tryOn: []
    },
    {
        id: 2,
        idPatient: 3,
        laboratoryName: "Abidar labo",
        patientFullName: "Abidar Abdessamad",
        sendDate: "11/05/2024",
        shade: "BL2",
        workType: "",
        PEIAndCO: "",
        ICAndPROVISIONAL: "",
        tryOn: []
    },
    {
        id: 3,
        idPatient: 4,
        laboratoryName: "Ahmed labo",
        patientFullName: "Amine Ahmed",
        sendDate: "01/08/2023",
        shade: "D3",
        workType: "",
        PEIAndCO: "",
        ICAndPROVISIONAL: "",
        tryOn: []
    },
]