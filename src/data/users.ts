
type User = {
	id: number,
	firstName: string,
	lastName: string,
	email: string,
	isAccountActive: boolean,
	roles: Role[]
}

type Role = {
	id: number,
	type: string
}


export const users: User[] = [
	{
		id: 1,
		firstName: 'Abdessamad',
		lastName: 'Abidar',
		email: 'abdessamad.abidar@gmail.com',
		isAccountActive: true,
		roles: [{id: 1, type: "ADMIN"}]
	},
	{
		id: 1,
		firstName: 'Mohammed Amine',
		lastName: 'El hanafi',
		email: 'mohamedamine.elhanafi@gmail.com',
		isAccountActive: true,
		roles: [{id: 1, type: "ADMIN"}]
	},
	{
		id: 2,
		firstName: 'Mina',
		lastName: 'Abidar',
		email: 'mina.abidar@gmail.com',
		isAccountActive: true,
		roles: [{id: 2, type: "PRATICIAN"}]
	},
	{
		id: 3,
		firstName: 'Zakaria',
		lastName: 'ezzeglali',
		email: 'zakaria.ezzeglali@gmail.com',
		isAccountActive: false,
		roles: [{id: 1, type: "ADMIN"}, {id: 2, type: "PRATICIAN"}]
	},

]

export const roles: Role[] = [
	{
		id: 1,
		type: 'ADMIN'
	},
	{
		id: 2,
		type: 'PRATICIAN'
	},
	{
		id: 3,
		type: 'ASSISTANT'
	}
]