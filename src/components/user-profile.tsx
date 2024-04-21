import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem, DropdownMenuSeparator,
	DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.tsx";
import {Button} from "@/components/ui/button.tsx";
import {MoreHorizontal} from "lucide-react";
import {cn} from "@/lib/utils.ts";
import {Badge} from "@/components/ui/badge.tsx";

import {Role} from "@/components/app-users-card.tsx";
import {useState} from "react";
import {Link} from "react-router-dom";


const user = {
	id: 1,
	firstName: 'Mohammed Amine',
	lastName: 'El hanafi',
	email: 'mohamedamine.elhanafi@gmail.com',
	isAccountActive: true,
	password: "amine@12345",
	phone: "+212611379654",
	roles: [{id: 1, type: "ADMIN"}]
};


export default function UserProfile() {

	const [passwordIsVisible, setPasswordVisible] = useState<boolean>(false);
	return (
		<Card className="w-[600px] mx-auto">
			<CardHeader className='border-b flex flex-row items-center justify-between py-2.5'>
				<div className="flex items-center flex-nowrap gap-x-2">
					<CardTitle className="text-lg">Compte</CardTitle>
					<Badge variant="outline" className={cn("text-xs border-0", user.isAccountActive ? "bg-green-200 dark:bg-green-400 text-green-700 dark:text-white" : "bg-red-200 dark:bg-red-400 text-red-700 dark:text-white")}>{user.isAccountActive ? "Activé" : "Disactivé"}</Badge>
				</div>
				<div>
					<DropdownMenu>
						<DropdownMenuTrigger className="focus-visible:ring-1 focus-visible:ring-offset-0" asChild>
							<Button variant="ghost" className="h-8 w-8 p-0">
								<span className="sr-only">Ovrire le menu</span>
								<MoreHorizontal className="h-4 w-4" />
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align="end">
							<DropdownMenuItem >
								<Link to="/edit-user" className="flex flex-nowrap items-center gap-x-2 w-full">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
										<path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
									</svg>
									Modifier
								</Link>
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
							<DropdownMenuSeparator/>
							<DropdownMenuItem className="gap-x-2 text-red-500">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
									<path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"/>
								</svg>
								Supprimer
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</CardHeader>
			<CardContent className="py-6">
				<div className="grid space-y-4">
					<div className="grid grid-cols-2 gap-x-2">
						<div className="text-sm space-y-2 col-span-1">
							<p className="font-medium">Prénom</p>
							<div className="border rounded-lg px-4 py-2.5 text-muted-foreground">{user.firstName}</div>
						</div>
						<div className="text-sm space-y-2 col-span-1">
							<p className="font-medium">Nom</p>
							<div className="border rounded-lg px-4 py-2.5 text-muted-foreground">{user.lastName}</div>
						</div>
					</div>
					<div className="text-sm space-y-2 col-span-1">
						<p className="font-medium">Email</p>
						<div className="border rounded-lg px-4 py-2.5 text-muted-foreground">{user.email}</div>
					</div>
					<div className="text-sm space-y-2 col-span-1">
						<p className="font-medium">Téléphone</p>
						<div className="border rounded-lg px-4 py-2.5 text-muted-foreground">{user.phone}</div>
					</div>
					<div className="text-sm space-y-2 col-span-1">
						<p className="font-medium">Mot de passe</p>
						<div className="relative">
							{
								passwordIsVisible ? (
									<Button variant="outline" className="border-0 bg-transparent hover:bg-transparent absolute right-0 focus-visible:ring-0" onClick={() => setPasswordVisible(!passwordIsVisible)}>
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 hover:scale-95 transition-all duration-500">
											<path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
											<path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
										</svg>
									</Button>
								) : (
									<Button variant="outline" className="border-0 bg-transparent hover:bg-transparent absolute right-0 focus-visible:ring-0" onClick={() => setPasswordVisible(!passwordIsVisible)}>
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 hover:scale-95 transition-all duration-500">
											<path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
										</svg>
									</Button>
								)
							}
							<input type={passwordIsVisible ? "text" : "password"} disabled className="border rounded-lg px-4 py-2.5 text-muted-foreground w-full bg-transparent" value={user.password} />
						</div>
					</div>
				</div>
			</CardContent>
			<CardFooter className="border-t pt-5">
				<div className="space-y-4">
					<h3 className="text-lg font-semibold">Les rôles :</h3>
					<div className="flex gap-x-4 items-center">
						{user.roles.map((role: Role, index: number) => <Badge  key={index} variant="outline" className=" text-primary dark:text-secondary">{role.type}</Badge> )}
					</div>
				</div>

			</CardFooter>
		</Card>
	)
}