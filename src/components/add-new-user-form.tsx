import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import {DialogClose} from "@/components/ui/dialog.tsx";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";


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
		.min(8, {message:'Le mot de passe doit contenir au moins 8 caractères.'})
})

type UserFormSchema = z.infer<typeof userFormSechma>;


export default function AddNewUserForm() {

	const userForm = useForm<UserFormSchema>({
		resolver: zodResolver(userFormSechma),
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
			phone: "",
			password: ""
		}
	})

	const onsubmit = (data: UserFormSchema) => {
		console.log(data)
	}

	return (

		<Card className="w-full px-4 border  pt-4 shadow-none space-y-5">
			<CardHeader className="space-y-0 p-0">
				<CardTitle className="text-2xl">Créer un utilisateur</CardTitle>
				<CardDescription>L'utilisateur s'authentifie à l'aide des informations saisies.</CardDescription>
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
							<FormField
								control={userForm.control}
								name="password"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Mot de passe</FormLabel>
										<FormControl>
											<Input  type="text" {...field}/>
										</FormControl>
										<FormMessage className="text-xs font-normal" />
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
	);
}