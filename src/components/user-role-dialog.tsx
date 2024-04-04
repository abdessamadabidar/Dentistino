import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs.tsx";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "./ui/card";
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Dialog, DialogContent, DialogTrigger, DialogClose} from "@/components/ui/dialog.tsx";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form.tsx";
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";


const userFormSechma = z.object({
	firstName: z.string(),
	lastName: z.string(),
	email: z.string(),
	phone: z.string(),
	password: z.string()
})

type UserFormSchema = z.infer<typeof userFormSechma>;

export default function UserRoleDialog() {

	const userForm = useForm<UserFormSchema>({
		resolver: zodResolver(userFormSechma)
	})

	const onsubmit = (data: UserFormSchema) => {
		console.log(data)
	}

	return (
		<div>
			<Dialog>
				<DialogTrigger>
					<a className="flex items-center flex-nowrap gap-x-2 font-medium text-sm px-3 py-2 rounded-md hover:bg-muted cursor-pointer">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" className="size-5">
							<path fill="currentColor" d="M17.254 11a2.25 2.25 0 0 1 2.25 2.25v6.249a5.501 5.501 0 0 1-11.002 0V13.25a2.25 2.25 0 0 1 2.25-2.25zm0 1.5h-6.502a.75.75 0 0 0-.75.75v6.249a4.001 4.001 0 0 0 8.002 0V13.25a.75.75 0 0 0-.75-.75M4.25 11h4.156a3.243 3.243 0 0 0-.817 1.5H4.25a.75.75 0 0 0-.75.75v5.249a3.001 3.001 0 0 0 4.238 2.735c.133.49.324.956.564 1.392A4.501 4.501 0 0 1 2 18.499V13.25A2.25 2.25 0 0 1 4.25 11m19.5 0A2.25 2.25 0 0 1 26 13.25v5.25a4.5 4.5 0 0 1-6.298 4.127l.056-.102c.214-.406.387-.837.511-1.289A3 3 0 0 0 24.5 18.5v-5.25a.75.75 0 0 0-.749-.75h-3.333A3.242 3.242 0 0 0 19.6 11zM14 3a3.5 3.5 0 1 1 0 7a3.5 3.5 0 0 1 0-7m8.003 1a3 3 0 1 1 0 6a3 3 0 0 1 0-6M5.997 4a3 3 0 1 1 0 6a3 3 0 0 1 0-6M14 4.5a2 2 0 1 0 0 4a2 2 0 0 0 0-4m8.003 1a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m-16.006 0a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3"></path>
						</svg>
						<p className="hidden md:block">Utilisateurs</p>
					</a>
				</DialogTrigger>
				<DialogContent>
					<Tabs>
						<TabsList>
							<TabsTrigger value="users" >Utilisateurs</TabsTrigger>
							<TabsTrigger value="create">Créer un utilisateur</TabsTrigger>
						</TabsList>
						<TabsContent value="users">

						</TabsContent>
						<TabsContent value="create">
							<Card className="w-full px-4 border  pt-4 shadow-none space-y-5">
								<CardHeader className="space-y-0 p-0">
									<CardTitle className="text-2xl">Créer un utilisateur</CardTitle>
									<CardDescription>Enter your email below to login to your account.</CardDescription>
								</CardHeader>
								<CardContent className="grid gap-4 p-0">
									<Form {...userForm}>
										<form onSubmit={userForm.handleSubmit(onsubmit)}>
											<div className="space-y-2.5">
												<div className="w-full flex flex-nowrap items-center gap-x-2">
													<div className="flex-1">
														<FormField
															control={userForm.control}
															name="firstName"
															render={({ field }) => (
																<FormItem>
																	<FormLabel>Prénom</FormLabel>
																	<FormControl>
																		<Input  type="text" {...field}/>
																	</FormControl>
																	<FormMessage />
																</FormItem>
															)}
														/>
													</div>
													<div className="flex-1">
														<FormField
															control={userForm.control}
															name="lastName"
															render={({ field }) => (
																<FormItem>
																	<FormLabel>Nom</FormLabel>
																	<FormControl>
																		<Input  type="text" {...field}/>
																	</FormControl>
																	<FormMessage />
																</FormItem>
															)}
														/>
													</div>
												</div>
												<FormField
													control={userForm.control}
													name="email"
													render={({ field }) => (
														<FormItem>
															<FormLabel>Email</FormLabel>
															<FormControl>
																<Input  type="text" {...field}/>
															</FormControl>
															<FormMessage />
														</FormItem>
													)}
												/>
												<FormField
													control={userForm.control}
													name="phone"
													render={({ field }) => (
														<FormItem>
															<FormLabel>Téléphone</FormLabel>
															<FormControl>
																<Input  type="text" {...field}/>
															</FormControl>
															<FormMessage />
														</FormItem>
													)}
												/>
												<FormField
													control={userForm.control}
													name="password"
													render={({ field }) => (
														<FormItem>
															<FormLabel>Mot de passe</FormLabel>
															<FormControl>
																<Input  type="text" {...field}/>
															</FormControl>
															<FormMessage />
														</FormItem>
													)}
												/>
											</div>
											<div className="flex flex-nowrap items-center gap-x-2 justify-end">
												<Button type="submit" className="dark:bg-secondary">Créer</Button>
												<DialogClose >
													<Button variant="outline" type="button" className="dark:bg-secondary my-4">Annuler</Button>
												</DialogClose>
											</div>

										</form>
									</Form>
								</CardContent>
							</Card>
						</TabsContent>
					</Tabs>
				</DialogContent>
			</Dialog>

		</div>
	)
}