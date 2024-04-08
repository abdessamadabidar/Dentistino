type Patient = {
	id: number,
	firstName: string,
	lastName: string,
	phone: string,
	status: "servi" | "en cours",
	registeredDate: string,
}
export const patients: Patient[] = [
	{
		id: 1,
		firstName: "Youssef",
		lastName: "en-nesyri",
		status: "servi",
		phone: "0611376395",
		registeredDate: "2023-07-12 10:42 AM"
	},
	{
		id: 2,
		firstName: "Hakim",
		lastName: "ziyach",
		status: "en cours",
		phone: "0611376395",
		registeredDate: "2023-07-12 10:42 AM"
	},
	{
		id: 3,
		firstName: "Brahim",
		lastName: "Diaz",
		status: "en cours",
		phone: "0611376395",
		registeredDate: "2023-07-12 10:42 AM"
	},
	{
		id: 4,
		firstName: "Saadia",
		lastName: "Abidar",
		status: "servi",
		phone: "0611376395",
		registeredDate: "2023-07-12 10:42 AM"
	}
]