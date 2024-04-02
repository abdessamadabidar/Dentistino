type Patient = {
	id: number,
	recordNo: string,
	firstName: string,
	lastName: string,
	status: "served" | "pending",
	gender: "Homme" | "Femme",
	registeredDate: string,
}

export const patients: Patient[] = [
	{
		id: 1,
		recordNo: "20240212a78",
		firstName: "Said",
		lastName: "Elkamali",
		status: "served",
		gender: "Homme",
		registeredDate: "2023-07-12 10:42 AM"
	},
	{
		id: 2,
		recordNo: "20240242ca8",
		firstName: "Rabii",
		lastName: "Ghabouh",
		status: "pending",
		gender: "Homme",
		registeredDate: "2023-07-12 10:42 AM"
	},
	{
		id: 3,
		recordNo: "202402s48a78",
		firstName: "Brahim",
		lastName: "Diaz",
		status: "served",
		gender: "Homme",
		registeredDate: "2023-07-12 10:42 AM"
	},
	{
		id: 4,
		recordNo: "20240212a78",
		firstName: "Meryem",
		lastName: "Ezzyani",
		status: "pending",
		gender: "Femme",
		registeredDate: "2023-07-12 10:42 AM"
	}
]