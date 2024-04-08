
type User = {
	id: number,
	firstName: string,
	lastName: string,
	email: string
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
		roles: []
	},
	{
		id: 2,
		firstName: 'Mina',
		lastName: 'Abidar',
		email: 'mina.abidar@gmail.com',
		roles: [],
	},
	{
		id: 3,
		firstName: 'Zakaria',
		lastName: 'ezzeglali',
		email: 'zakaria.ezzeglali@gmail.com',
		roles: []
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