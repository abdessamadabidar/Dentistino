export type Patient = {
	id: number,
	order: number,
	firstName: string,
	lastName: string,
	phone: string,
	status: "servi" | "en cours",
	registeredDate: string,
	gender: string
}
export const patients: Patient[] = [
	{
		id: 1,
		order: 2,
		firstName: "Youssef",
		lastName: "en-nesyri",
		status: "servi",
		phone: "0611376395",
		registeredDate: "2023-07-12 10:42 AM",
		gender: "H"
	},
	{
		id: 2,
		order: 4,
		firstName: "Hakim",
		lastName: "ziyach",
		status: "en cours",
		phone: "0611376395",
		registeredDate: "2023-07-12 10:42 AM",
		gender: "H"
	},
	{
		id: 3,
		order: 1,
		firstName: "Brahim",
		lastName: "Diaz",
		status: "en cours",
		phone: "0611376395",
		registeredDate: "2023-07-12 10:42 AM",
		gender: "H"
	},
	{
		id: 4,
		order: 3,
		firstName: "Saadia",
		lastName: "Abidar",
		status: "servi",
		phone: "0611376395",
		registeredDate: "2023-07-12 10:42 AM",
		gender: "F"
	}
]