
type Appointment = {
	id: number,
	patientFirstName: string,
	patientLastName: string,
	allocationDate: string,
	appointmentDate: string,
	status: string,
}


export const appointments : Appointment[] = [
	{
		id: 1,
		patientFirstName: "Youssef",
		patientLastName: "en-nesyri",
		status: "reporté",
		allocationDate: "2024-02-3 14:00 PM",
		appointmentDate: "2024-02-3 14:00 PM",
	},
	{
		id: 2,
		patientFirstName: "Hakim",
		patientLastName: "Ziyech",
		status: "en cours",
		allocationDate: "2024-02-3 14:00 PM",
		appointmentDate: "2024-02-3 14:00 PM",
	},
	{
		id: 3,
		patientFirstName: "Brahim",
		patientLastName: "Diaz",
		status: "reporté par le médecin",
		allocationDate: "2024-02-3 14:00 PM",
		appointmentDate: "2024-02-3 14:00 PM",
	},
	{
		id: 4,
		patientFirstName: "Saadia",
		patientLastName: "Abidar",
		status: "Absente",
		allocationDate: "2024-02-3 14:00 PM",
		appointmentDate: "2024-02-3 14:00 PM",
	},
]