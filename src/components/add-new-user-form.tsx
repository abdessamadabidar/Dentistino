import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {useState} from "react";


const userFormSechma = z.object({
	firstName: z.string({
		required_error: "Le prénom est requis.",
		invalid_type_error: "Le prénom doit être une chaîne de caractères.",
	}).min(2, {message:'Le prénom doit contenir au moins 3 caractères.'})
		.max(50, {message: 'Le prénom ne doit pas dépasser 50 caractères.'})
		.regex(new RegExp('^[A-Za-z]+$'), {message: 'Le prénom ne doit pas contenir de caractères spéciaux.'})
		.toLowerCase(),


	lastName: z.string({
		required_error: "Le nom est requis.",
		invalid_type_error: "Le nom doit être une chaîne de caractères.",
	})
		.min(2, {message:'Le non doit contenir au moins 3 caractères.'})
		.max(50, {message: 'Le nom ne doit pas dépasser 50 caractères.'})
		.regex(new RegExp('^[A-Za-z]+$'), {message: 'Le nom ne doit pas contenir de caractères spéciaux.'})
		.toLowerCase(),

	email: z.string({
		required_error: "L'adresse email est requis.",
	}),

	phone: z.string({
		required_error: "Numéro de téléphone est requis.",
	})
		.min(10, {message:'Le numéro de téléphone doit contenir au moins 10 caractères.'})
		.max(13, {message: 'Le numéro de téléphone ne doit pas dépasser 13 caractères.'})
		.regex(new RegExp('^\\+?\\d{1,3}\\d{1,9}$'), {message: 'Le numéro de téléphone est invalid.'}),

	password: z.string({
		required_error: "Mot de passe est requis.",
	})
		.min(8, {message:'Le mot de passe doit contenir au moins 8 caractères.'}),

	passwordConfirmation: z.string({
		required_error: "Mot de passe est requis.",
	})
		.min(8, {message:'Le mot de passe doit contenir au moins 8 caractères.'})
})

type UserFormSchema = z.infer<typeof userFormSechma>;


export default function AddNewUserForm() {

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
			<CardHeader className="">
				<CardTitle className="text-2xl">Créer un utilisateur</CardTitle>
				<CardDescription>L'utilisateur s'authentifie à l'aide des informations saisies.</CardDescription>
			</CardHeader>
			<CardContent className="">
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