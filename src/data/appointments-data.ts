
type Appointment = {
	id: number,
	patientFirstName: string,
	patientLastName: string,
	appointmentDate: string,
	appointmentHour: string,
	status: string,
	motif: string,
}


export const appointments : Appointment[] = [
	{
		id: 1,
		patientFirstName: "Youssef",
		patientLastName: "en-nesyri",
		status: "reporté",
		motif: "Extraction dent de sagesse",
		appointmentDate: "03/02/2024",
		appointmentHour: "14:00 PM"
	},
	{
		id: 2,
		patientFirstName: "Hakim",
		patientLastName: "Ziyech",
		status: "en cours",
		motif: "Extraction",
		appointmentDate: "03/02/2024",
		appointmentHour: "14:00 PM"
	},
	{
		id: 3,
		patientFirstName: "Brahim",
		patientLastName: "Diaz",
		status: "reporté par le médecin",
		motif: "Composite",
		appointmentDate: "03/02/2024",
		appointmentHour: "14:00 PM"
	},
	{
		id: 4,
		patientFirstName: "Saadia",
		patientLastName: "Abidar",
		status: "Absente",
		motif: "Prothèse adjointe",
		appointmentDate: "03/02/2024",
		appointmentHour: "14:00 PM"
	},
	{
		id: 5,
		patientFirstName: "Mohamed Amine",
		patientLastName: "Elhanafi",
		status: "Passé",
		motif: "Prothèse adjointe",
		appointmentDate: "03/02/2024",
		appointmentHour: "15:00 PM"
	},
]