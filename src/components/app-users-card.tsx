
import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from "@/components/ui/avatar"

import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import RolesSelection from "@/components/roles-selection.tsx";




export type User = {
	id: number,
	firstName: string,
	lastName: string,
	email: string,
	roles: Role[]
}

export type Role = {
	id: number,
	type: string
}

interface AppUsersProps {
	users: User[],
	roles: Role[],
}

export function AppUsersCard({users, roles}: AppUsersProps) {





	return (
		<Card>
			<CardHeader>
				<CardTitle>Les utilisateurs</CardTitle>
				<CardDescription>Gérer les rôles des utilisateurs</CardDescription>
			</CardHeader>
			<CardContent className="grid gap-6">
				<div className="grid gap-6">
					{users.map((user: User, index: number) => (
						<div key={index} className="flex items-center justify-between space-x-4">
							<div className="flex items-center space-x-4">
								<Avatar>
									<AvatarImage src="/avatars/03.png" />
									<AvatarFallback>
										{user.firstName.charAt(0).toUpperCase()}{user.lastName.charAt(0).toUpperCase()}
									</AvatarFallback>
								</Avatar>
								<div>
									<p className="text-sm font-medium leading-none">{user.firstName} {user.lastName}</p>
									<p className="text-sm text-muted-foreground">{user.email}</p>
								</div>
							</div>
							<RolesSelection user={user} roles={roles} />
						</div>
					))}
				</div>
			</CardContent>
		</Card>
	)
}
