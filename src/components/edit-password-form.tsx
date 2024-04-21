import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {z} from "zod";
import {editPasswordFormSchema} from "@/zod/schemas/edit-password-form-schema.ts"
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Input} from "@/components/ui/input.tsx";
import {useState} from "react";

type EditPasswordFormSchema = z.infer<typeof editPasswordFormSchema>;
export default function EditPasswordForm() {

	const editPasswordForm = useForm<EditPasswordFormSchema>({
		resolver: zodResolver(editPasswordFormSchema)
	})

	const onSubmit = (data: EditPasswordFormSchema) => {
		console.log(data)
	}

	const [passwordIsVisible, setPasswordIsVisible] = useState<boolean>(false);
	const [passwordConfirmationIsVisible, setPasswordConfirmationIsVisible] = useState<boolean>(false);


	return <Card className="w-[600px] mx-auto">
		<CardHeader className="border-b py-4">
			<CardTitle className="flex flex-nowrap items-center gap-x-2 text-lg">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
					<path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
				</svg>
				Modifer votre mot de passe
			</CardTitle>
		</CardHeader>
		<CardContent className="py-5">
			<Form {...editPasswordForm}>
				<form onSubmit={editPasswordForm.handleSubmit(onSubmit)}>
					<div className="grid grid-cols-1 space-y-4">
						<FormField
							control={editPasswordForm.control}
							name="oldPassword"
							render={({ field }) => (
								<FormItem className="flex-1">
									<FormLabel>Ancien mot de passe</FormLabel>
									<FormControl>
										<Input {...field} type="password" />
									</FormControl>
									<FormMessage className="text-xs font-normal" />
								</FormItem>
							)}
						/>
						<FormField
							control={editPasswordForm.control}
							name="newPassword"
							render={({ field }) => (
								<FormItem className="flex-1">
									<FormLabel>Nouveau mot de passe</FormLabel>
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
							control={editPasswordForm.control}
							name="newPasswordConfirmation"
							render={({ field }) => (
								<FormItem className="flex-1">
									<FormLabel>Confirmer nouveau mot de passe</FormLabel>
									<FormControl>
										<div className="relative">
											{
												passwordConfirmationIsVisible ? (
													<Button type="button" variant="outline" className="border-0 bg-transparent hover:bg-transparent absolute right-0 focus-visible:ring-0" onClick={() => setPasswordIsVisible(!passwordIsVisible)}>
														<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 hover:scale-95 transition-all duration-500">
															<path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
															<path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
														</svg>
													</Button>
												) : (
													<Button type="button" variant="outline" className="border-0 bg-transparent hover:bg-transparent absolute right-0 focus-visible:ring-0" onClick={() => setPasswordConfirmationIsVisible(!passwordConfirmationIsVisible)}>
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
					<div className="grid justify-end mt-10 ">
						<Button size="sm" className="dark:bg-secondary text-white flex flex-nowrap items-center gap-x-1">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
								<path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
							</svg>
							Mettre à jour
						</Button>
					</div>
				</form>
			</Form>
		</CardContent>
	</Card>
}