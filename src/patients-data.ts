type Patient = {
	id: number,
	recordNo: string,
	firstName: string,
	lastName: string,
	status: "servi" | "en cours",
	gender: "Homme" | "Femme",
	registeredDate: string,
}

export const patients: Patient[] = [
	{
		id: 1,
		recordNo: "20240212a78",
		firstName: "Said",
		lastName: "Elkamali",
		status: "servi",
		gender: "Homme",
		registeredDate: "2023-07-12 10:42 AM"
	},
	{
		id: 2,
		recordNo: "20240242ca8",
		firstName: "Rabii",
		lastName: "Ghabouh",
		status: "en cours",
		gender: "Homme",
		registeredDate: "2023-07-12 10:42 AM"
	},
	{
		id: 3,
		recordNo: "202402s48a78",
		firstName: "Brahim",
		lastName: "Diaz",
		status: "en cours",
		gender: "Homme",
		registeredDate: "2023-07-12 10:42 AM"
	},
	{
		id: 4,
		recordNo: "20240212a78",
		firstName: "Meryem",
		lastName: "Ezzyani",
		status: "servi",
		gender: "Femme",
		registeredDate: "2023-07-12 10:42 AM"
	}
]