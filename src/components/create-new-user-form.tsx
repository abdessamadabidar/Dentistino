import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {useState} from "react";
import {userFormSechma} from "@/zod/schemas/create-user-form-schema.ts";



type UserFormSchema = z.infer<typeof userFormSechma>;


export default function CreateNewUserForm() {

	const [passwordIsVisible, setPasswordIsVisible] = useState<boolean>(false);
	const [passwordConfirmationIsVisible, setPasswordConfirmationIsVisible] = useState<boolean>(false);


	const userForm = useForm<UserFormSchema>({
		resolver: zodResolver(userFormSechma),
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
			phone: "",
			password: "",
			passwordConfirmation: "",
		}
	})

	const onsubmit = (data: UserFormSchema) => {
		console.log(data)
	}

	return (

		<Card className="w-[600px] mx-auto">
			<CardHeader className="border-b">
				<CardTitle className="text-2xl flex items-center gap-x-1">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
						<path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
					</svg>
					Créer un utilisateur
				</CardTitle>
				<CardDescription className="ml-3">L'utilisateur s'authentifie à l'aide des informations saisies.</CardDescription>
			</CardHeader>
			<CardContent className="py-6">
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
												<FormMessage className="text-xs font-normal" />
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
												<FormMessage className="text-xs font-normal" />
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
										<FormMessage className="text-xs font-normal" />
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
										<FormMessage className="text-xs font-normal" />
									</FormItem>
								)}
							/>
							<div className="w-full flex flex-nowrap items-center gap-x-2">
								<FormField
									control={userForm.control}
									name="password"
									render={({ field }) => (
										<FormItem className="flex-1">
											<FormLabel>Mot de passe</FormLabel>
											<FormControl>
												<div className="relative">
													{
														passwordIsVisible ? (
															<Button type="button" variant="outline" className="border-0 bg-transparent hover:bg-transparent absolute right-0 focus-visible:ring-0" onClick={() => setPasswordIsVisible(!passwordIsVisible)}>
																<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 hover:scale-95 transition-all duration-500">
																	<path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
																	<path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
																</svg>
															</Button>
														) : (
															<Button type="button" variant="outline" className="border-0 bg-transparent hover:bg-transparent absolute right-0 focus-visible:ring-0" onClick={() => setPasswordIsVisible(!passwordIsVisible)}>
																<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 hover:scale-95 transition-all duration-500">
																	<path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
																</svg>
															</Button>
														)
													}
													<Input {...field} type={passwordIsVisible ? "text" : "password"} />
												</div>
											</FormControl>
											<FormMessage className="text-xs font-normal" />
										</FormItem>
									)}
								/>
								<FormField
									control={userForm.control}
									name="passwordConfirmation"
									render={({ field }) => (
										<FormItem className="flex-1">
											<FormLabel>Confirmation de mot de passe</FormLabel>
											<FormControl>
												<div className="relative">
													{
														passwordConfirmationIsVisible ? (
															<Button type="button" variant="outline" className="border-0 bg-transparent hover:bg-transparent absolute right-0 focus-visible:ring-0" onClick={() => setPasswordConfirmationIsVisible(!passwordConfirmationIsVisible)}>
																<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 hover:scale-95 transition-all duration-500">
																	<path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
																	<path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
																</svg>
															</Button>
														) : (
															<Button type="button" variant="outline" className="border-0 bg-transparent hover:bg-transparent absolute right-0 focus-visible:ring-0" onClick={() => {setPasswordConfirmationIsVisible(!passwordConfirmationIsVisible)}}>
																<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 hover:scale-95 transition-all duration-500">
																	<path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
																</svg>
															</Button>
														)
													}
													<Input {...field} type={passwordConfirmationIsVisible ? "text" : "password"} />
												</div>
											</FormControl>
											<FormMessage className="text-xs font-normal" />
										</FormItem>
									)}
								/>
							</div>

						</div>
						<div className="grid justify-end pt-8">
							<Button type="submit" className="dark:bg-secondary">Créer</Button>
						</div>

					</form>
				</Form>
			</CardContent>
		</Card>
	);
}