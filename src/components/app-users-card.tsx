import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from "@/components/ui/avatar"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.tsx";
import {Button} from "@/components/ui/button.tsx";
import {MoreHorizontal} from "lucide-react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Badge} from "@/components/ui/badge.tsx";
import {cn} from "@/lib/utils.ts";
import {Link} from "react-router-dom";
import RolesSelection from "@/components/roles-selection.tsx";






export type User = {
	id: number,
	firstName: string,
	lastName: string,
	email: string,
	isAccountActive: boolean,
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
			<CardHeader className="mb-4 flex flex-row justify-between items-center">
				<div>
					<CardTitle>
						<div className="flex items-center gap-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
								<path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"/>
							</svg>
							<span className="text-lg">Les utilisateurs</span>
						</div>
					</CardTitle>
					<CardDescription className="mt-1.5">Gérer les rôles des utilisateurs</CardDescription>
				</div>
				<Link to="/create-new-user">
					<Button size="sm"
							className="flex items-center text-white flex-nowrap gap-x-2 dark:bg-secondary rounded-lg px-4">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
							<path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"/>
						</svg>
						Nouveau utilisateur
					</Button>
				</Link>
			</CardHeader>
			<CardContent className="">
				<div className="flex gap-4 flex-col justify-between w-full">
					{users.map((user: User, index: number) => (
						<div key={index} className="flex space-x-4 justify-between items-center w-full border rounded-xl p-4">
							<div className="flex items-center space-x-4 flex-1">
								<Avatar className="rounded-xl">
									<AvatarImage src="/avatars/03.png"/>
									<AvatarFallback className="text-white bg-gradient-to-l from-violet-400 to-violet-500 rounded-xl">
										{user.firstName.charAt(0).toUpperCase()}{user.lastName.charAt(0).toUpperCase()}
									</AvatarFallback>
								</Avatar>
								<div className="flex flex-col gap-y-1">
									<div className="flex flex-nowrap items-center gap-x-2">
										<p className="text-sm font-medium leading-none whitespace-nowrap">{user.firstName} {user.lastName}</p>
										<div className="flex flex-nowrap gap-x-1 items-center">
											{user.roles.map((role: Role, index: number) => <Badge  key={index} variant="outline" className=" text-primary dark:text-secondary">{role.type}</Badge> )}
										</div>
									</div>
									<div className="text-xs text-muted-foreground">{user.email}</div>
								</div>
							</div>

							<span className="flex-1 grid justify-center w-fit">
								<Badge variant="outline" className={cn("text-xs border-0", user.isAccountActive ? "bg-green-200 dark:bg-green-400 text-green-700 dark:text-white" : "bg-red-200 dark:bg-red-400 text-red-700 dark:text-white")}>{user.isAccountActive ? "Activé" : "Disactivé"}</Badge>
							</span>
							<div className="flex items-center justify-end gap-x-4 flex-1">
								<DropdownMenu>
									<DropdownMenuTrigger asChild>
										<Button variant="ghost" className="h-8 w-8 p-0">
											<span className="sr-only">Ovrire le menu</span>
											<MoreHorizontal className="h-4 w-4" />
										</Button>
									</DropdownMenuTrigger>
									<DropdownMenuContent align="end">
										<DropdownMenuItem className="gap-x-2">
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
												<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
											</svg>
											Profile
										</DropdownMenuItem>
										<DropdownMenuItem className="gap-x-2">
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
												<path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
											</svg>
											Modifier
										</DropdownMenuItem>
										<DropdownMenuItem className="gap-x-2">
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
												<path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
											</svg>
											Activer
										</DropdownMenuItem>
										<DropdownMenuItem className="gap-x-2">
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
												<path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
											</svg>
											Désactiver
										</DropdownMenuItem>
										<RolesSelection user={user} roles={roles} />
										<DropdownMenuSeparator/>
										<DropdownMenuItem className="gap-x-2 text-red-500 focus:text-red-500">
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
												<path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"/>
											</svg>
											Supprimer
										</DropdownMenuItem>
									</DropdownMenuContent>
								</DropdownMenu>
							</div>
						</div>
					))}
				</div>
			</CardContent>
		</Card>
	)
}
