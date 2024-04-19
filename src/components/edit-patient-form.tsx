import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Badge} from "@/components/ui/badge.tsx";
import {z} from "zod";
import {editPatientFormSchema} from "@/zod/schemas/edit-patient-form-schema.ts";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover.tsx";
import {Button} from "@/components/ui/button.tsx";
import {cn} from "@/lib/utils.ts";
import {format} from "date-fns";
import {Calendar} from "@/components/ui/calendar.tsx";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.tsx";
import {CaretSortIcon, CheckIcon} from "@radix-ui/react-icons";
import {Command, CommandEmpty, CommandGroup, CommandInput, CommandItem} from "@/components/ui/command.tsx";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group.tsx";
import {cities} from "@/data/cities.ts";


export type EditPatientForm = z.infer<typeof editPatientFormSchema>
export default function EditPatientForm() {

	const editPatientForm = useForm<EditPatientForm>({
		resolver: zodResolver(editPatientFormSchema),
		defaultValues: {
			firstName:"Abdessamad",
			lastName: "Abidar",
			cin: "JB514457",
			dateOfBirth: new Date("2002-02-02"),
			parent: {
				fullName: "Mohamed Abidar",
				relation: "Père"
			},
			address: "Rue 729 N°7 Tarrast",
			city: "Agadir",
			phone: "0611376395",
			profession: "Etudiant",
			mutual: "Draft",
			gender: "H"
		}
	})


	const onSubmit = (data: EditPatientForm) => {
		console.log(data)
	}

	return <Card className="w-[60%] mx-auto">
		<CardHeader className="border-b flex flex-row items-center justify-between py-4">
			<div className="flex items-center flex-nowrap gap-x-2">
				<CardTitle className="text-lg flex items-center gap-x-2">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
						<path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
					</svg>
					Modifier le patient
				</CardTitle>
				<Badge variant="outline" className="bg-blue-200 dark:bg-blue-400 text-blue-700 dark:text-white">en cours</Badge>
			</div>
		</CardHeader>
		<CardContent className="py-5">
			<Form {...editPatientForm}>
				<form onSubmit={editPatientForm.handleSubmit(onSubmit)}>
					<div className="grid md:grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-3.5">
						<FormField
							control={editPatientForm.control}
							name="firstName"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Prénom</FormLabel>
									<FormControl>
										<Input type="text"  {...field}/>
									</FormControl>
									<FormMessage className="text-xs font-normal" />
								</FormItem>
							)}
						/>
						<FormField
							control={editPatientForm.control}
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
						<FormField
							control={editPatientForm.control}
							name="cin"
							render={({ field }) => (
								<FormItem>
									<FormLabel>CIN</FormLabel>
									<FormControl>
										<Input type="text" {...field} />
									</FormControl>
									<FormMessage className="text-xs font-normal" />
								</FormItem>
							)}
						/>
						<FormField
							control={editPatientForm.control}
							name="dateOfBirth"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Date de naissance</FormLabel>
									<FormControl>
										<Popover>
											<PopoverTrigger asChild>
												<Button
													variant={"outline"}
													className={cn(
														"w-full pl-3 text-left font-normal",
														!field.value && "text-muted-foreground"
													)}
												>
													{field.value ? (
														format(field.value, "PPP")
													) : (
														<span>Sélectionner une date</span>
													)}
													<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-auto h-4 w-4 ">
														<path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
													</svg>

												</Button>
											</PopoverTrigger>
											<PopoverContent className="w-auto p-0" align="start">
												<Calendar
													mode="single"
													selected={field.value}
													onSelect={field.onChange}
													disabled={(date) =>
														date > new Date() || date < new Date("1900-01-01")
													}
													initialFocus
												/>
											</PopoverContent>
										</Popover>
									</FormControl>
									<FormMessage className="text-xs font-normal" />
								</FormItem>
							)}
						/>
						<FormField
							control={editPatientForm.control}
							name={`parent.fullName`}
							render={({ field }) => (
								<FormItem>
									<FormLabel>Tuteur</FormLabel>
									<FormControl>
										<Input placeholder="Nom complet" type="text" {...field}  />
									</FormControl>
									<FormMessage className="text-xs font-normal" />
								</FormItem>
							)}
						/>
						<FormField
							control={editPatientForm.control}
							name={`parent.relation`}
							render={({ field }) => (
								<FormItem>
									<FormLabel>Lien</FormLabel>
									<FormControl>
										<Select
											onValueChange={(value) => editPatientForm.setValue("parent.relation", value)}
										>
											<SelectTrigger className={cn(
												field.value || "text-foreground"

											)}>
												<SelectValue placeholder="Relation"></SelectValue>
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="father">Père</SelectItem>
												<SelectItem value="mother">Mère</SelectItem>
												<SelectItem value="sister">Soeur</SelectItem>
												<SelectItem value="brother">Frère</SelectItem>
											</SelectContent>
										</Select>
									</FormControl>
									<FormMessage className="text-xs font-normal" />
								</FormItem>
							)}
						/>
						<FormField
							control={editPatientForm.control}
							name="address"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Adresse</FormLabel>
									<FormControl>
										<Input type="text" {...field}  />
									</FormControl>
									<FormMessage className="text-xs font-normal" />
								</FormItem>
							)}
						/>
						<FormField
							control={editPatientForm.control}
							name="city"
							render={({ field }) => (
								<FormItem className="flex flex-col justify-end">
									<FormLabel>Ville</FormLabel>
									<Popover>
										<PopoverTrigger asChild>
											<FormControl>
												<Button
													variant="outline"
													role="combobox"
													className={cn(
														"justify-between font-normal",
														!field.value && "text-muted-foreground"
													)}
												>
													{field.value
														? cities.find(
															(city) => city === field.value
														)
														: "Sélectionner une ville"}
													<CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
												</Button>
											</FormControl>
										</PopoverTrigger>
										<PopoverContent className="p-0">
											<Command>
												<CommandInput
													placeholder="Rechercher une ville..."
													className="h-9"
												/>
												<CommandEmpty>Aucune ville trouvée.</CommandEmpty>
												<CommandGroup>
													{cities.map((city, index) => (
														<CommandItem
															value={city}
															key={index}
															onSelect={() => {
																editPatientForm.setValue("city", city)
															}}
														>
															{city}
															<CheckIcon
																className={cn(
																	"ml-auto h-4 w-4",
																	city === field.value
																		? "opacity-100"
																		: "opacity-0"
																)}
															/>
														</CommandItem>
													))}
												</CommandGroup>
											</Command>
										</PopoverContent>
									</Popover>
									<FormMessage className="text-xs font-normal" />
								</FormItem>
							)}
						/>

						<FormField
							control={editPatientForm.control}
							name="phone"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Téléphone</FormLabel>
									<FormControl>
										<Input type="text" {...field}  />
									</FormControl>
									<FormMessage className="text-xs font-normal" />
								</FormItem>
							)}
						/>

						<FormField
							control={editPatientForm.control}
							name="mutual"
							render={() => (
								<FormItem>
									<FormLabel>Mutuelle</FormLabel>
									<FormControl>
										<Select
											onValueChange={(value) => editPatientForm.setValue("mutual", value)}
										>
											<SelectTrigger>
												<SelectValue placeholder="Sélectionner la mutuelle" />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="draft">Draft</SelectItem>
												<SelectItem value="published">Active</SelectItem>
												<SelectItem value="archived">Archived</SelectItem>
											</SelectContent>
										</Select>
									</FormControl>
									<FormMessage className="text-xs font-normal" />
								</FormItem>
							)}
						/>
						<FormField
							control={editPatientForm.control}
							name="profession"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Profession</FormLabel>
									<FormControl>
										<Input type="text"  {...field}/>
									</FormControl>
									<FormMessage className="text-xs font-normal" />
								</FormItem>
							)}
						/>
						<FormField
							control={editPatientForm.control}
							name="gender"
							render={({ field }) => (
								<FormItem className="space-y-3 col-span-2">
									<FormLabel>Sexe</FormLabel>
									<FormControl>
										<RadioGroup
											onValueChange={field.onChange}
											defaultValue={field.value}
											className="flex flex-row items-center gap-x-5 space-y-1"
										>
											<FormItem className="flex items-center space-x-3 space-y-0">
												<FormControl>
													<RadioGroupItem value="H" />
												</FormControl>
												<FormLabel className="font-normal">
													Homme
												</FormLabel>
											</FormItem>
											<FormItem className="flex items-center space-x-3 space-y-0">
												<FormControl>
													<RadioGroupItem value="F" />
												</FormControl>
												<FormLabel className="font-normal">
													Femme
												</FormLabel>
											</FormItem>
										</RadioGroup>
									</FormControl>
									<FormMessage className="text-xs font-normal" />
								</FormItem>
							)}
						/>
					</div>
					<div className="grid justify-end mt-5 ">
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