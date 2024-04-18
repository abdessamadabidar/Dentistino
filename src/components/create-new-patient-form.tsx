import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from "@/components/ui/form.tsx";
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
import {Label} from "@/components/ui/label.tsx";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table.tsx";
import {Textarea} from "@/components/ui/textarea.tsx";
import {Checkbox} from "@/components/ui/checkbox.tsx";
import {useFieldArray, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import TeethSelection from "@/components/teeth-selection.tsx";
import PriceReceivedRemain from "@/components/price-received-remain.tsx";



const cities: string[] = [
	"Agadir",
	"Casablanca",
	"Marrakech",
	"Tangier",
	"Rabat",
	"Meknes",
	"Essaouira",
	"Chefchaouen",
	"Fes",
	"Ouarzazate",
	"Merzouga",
];


const patientFormSchema = z.object({
	firstName: z
		.string({
			required_error: "Le prénom est requis.",
			invalid_type_error: "Le prénom doit être une chaîne de caractères.",
		})
		.min(2, {message:'Le prénom doit contenir au moins 3 caractères.'})
		.max(50, {message: 'Le prénom ne doit pas dépasser 50 caractères.'})
		.regex(new RegExp('^[A-Za-z\\s]+$'), {message: 'Le prénom ne doit pas contenir de caractères spéciaux.'})
		.toLowerCase(),

	lastName: z.string({
		required_error: "Le nom est requis.",
		invalid_type_error: "Le nom doit être une chaîne de caractères.",
	})
		.min(2, {message:'Le non doit contenir au moins 3 caractères.'})
		.max(50, {message: 'Le nom ne doit pas dépasser 50 caractères.'})
		.regex(new RegExp('^[A-Za-z\\s]+$'), {message: 'Le nom ne doit pas contenir de caractères spéciaux.'})
		.toLowerCase(),

	cin: z.string({
		required_error: "CIN est requis.",
	})
		.length(8, {message:'CIN doit contenir 8 caractères.'})
		.regex(new RegExp('^[A-Za-z]+\\d+'), {message: 'CIN est invalid'})
		.toLowerCase(),

	phone: z.string({
		required_error: "Numéro de téléphone est requis.",
	})
		.min(10, {message:'Le numéro de téléphone doit contenir au moins 10 caractères.'})
		.max(13, {message: 'Le numéro de téléphone ne doit pas dépasser 13 caractères.'})
		.regex(new RegExp('^\\+?\\d{1,3}\\d{1,9}$'), {message: 'Le numéro de téléphone est invalid.'}),

	address: z.string({
		required_error: "L'adresse est requis.",
	})
		.min(5, {message:"L'addresse doit contenir au moins 5 caractères."})
		.max(60, {message: "L'addresse ne doit pas dépasser 60 caractères."})
		.toLowerCase(),

	city: z.string({required_error: "La ville est requis."}),
	dateOfBirth: z.date({
		required_error: "Le date de naissance est requis.",
	}),
	profession: z.string().optional(),
	gender: z.string({
		required_error: "Le genre est requis."
	}),
	mutual: z.string({
		required_error: "La mutuelle est requis."
	}),
	addressedBy: z.object({
		fullName: z.string({
			invalid_type_error: "Le nom complet doit être une chaîne de caractères.",
		})
			.min(2, {message:'Le nom complet doit contenir au moins 3 caractères.'})
			.max(50, {message: 'Le nom complet ne doit pas dépasser 50 caractères.'})
			.regex(new RegExp('^[A-Za-z\\s]+$'), {message: 'Le nom complet ne doit pas contenir de caractères spéciaux.'})
			.toLowerCase().optional(),
		speciality: z.string().optional(),
	}).optional(),
	isPregnantOrlactating: z.boolean().default(false).optional(),
	bleeding: z.boolean().default(false).optional(),
	parent: z.object({
		fullName: z.string({
			invalid_type_error: "Le nom complet doit être une chaîne de caractères.",
		})
			.min(2, {message:'Le nom complet doit contenir au moins 3 caractères.'})
			.max(50, {message: 'Le nom complet ne doit pas dépasser 50 caractères.'})
			.regex(new RegExp('^[A-Za-z\\s]+$'), {message: 'Le nom complet ne doit pas contenir de caractères spéciaux.'})
			.toLowerCase().optional(),

		relation: z.string({
			invalid_type_error: "Le relation doit être significative.",
		}).optional(),
	}).optional(),
	treatingDoctors: z.array(
		z.object({
			firstName: z.string({
				required_error: "Le prénom est requis.",
				invalid_type_error: "Le prénom doit être une chaîne de caractères.",
			})
				.min(2, {message:'Le prénom doit contenir au moins 3 caractères.'})
				.max(50, {message: 'Le prénom ne doit pas dépasser 50 caractères.'})
				.regex(new RegExp('^[A-Za-z\\s]+$'), {message: 'Le prénom ne doit pas contenir de caractères spéciaux.'})
				.toLowerCase(),
			lastName: z.string({
				required_error: "Le nom est requis.",
				invalid_type_error: "Le nom doit être une chaîne de caractères.",
			})
				.min(2, {message:'Le non doit contenir au moins 3 caractères.'})
				.max(50, {message: 'Le nom ne doit pas dépasser 50 caractères.'})
				.regex(new RegExp('^[A-Za-z\\s]+$'), {message: 'Le nom ne doit pas contenir de caractères spéciaux.'})
				.toLowerCase(),
			phone: z.string({
				required_error: "Numéro de téléphone est requis.",
			})
				.min(10, {message:'Le numéro de téléphone doit contenir au moins 10 caractères.'})
				.max(13, {message: 'Le numéro de téléphone ne doit pas dépasser 13 caractères.'})
				.regex(new RegExp('^\\+?\\d{1,3}\\d{1,9}$'), {message: 'Le numéro de téléphone est invalid.'}),
		})
	).optional(),
	pathologies: z
		.array(
			z.object({
				value: z.string(),
			})
		)
		.optional(),
	treatments: z
		.array(
			z.object({
				value: z.string(),
			})
		)
		.optional(),
	anesthesia:  z
		.array(
			z.object({
				value: z.string(),
			})
		)
		.optional(),
	allergies:  z
		.array(
			z.object({
				value: z.string(),
			})
		)
		.optional(),
	comment: z.string().max(160).min(4).optional(),
	teeth: z
		.array(
			z.object({
				date: z.date(),
				numbers: z.array(z.number()).optional(),
				observation: z.string(),
				price: z.number(),
				received: z.number(),
				remain: z.number(),
			})
		).optional()
});

export type PatientForm = z.infer<typeof patientFormSchema>


export default function CreateNewPatientForm() {




	const patientForm = useForm<PatientForm>({
		resolver: zodResolver(patientFormSchema),
		defaultValues: {
			firstName: "",
			lastName: "",
			cin: "",
			address: "",
			phone: "",
			isPregnantOrlactating: false,
			bleeding: false,

		}
	})

	const { fields: pathologyFields , append: appendPathology, remove: removePathology } = useFieldArray({
		name: "pathologies",
		control: patientForm.control,
	})

	const { fields: treatmentFields, append: appendTreatment, remove: removeTreatment } = useFieldArray({
		name: "treatments",
		control: patientForm.control,
	})

	const { fields: anesthesiaFields, append: appendAnesthesia, remove: removeAnesthesia } = useFieldArray({
		name: "anesthesia",
		control: patientForm.control,
	})
	const { fields: allergyFields, append: appendAllergy, remove: removeAllergy } = useFieldArray({
		name: "allergies",
		control: patientForm.control,
	})
	const { fields: toothFields, append: appendTooth, remove: removehooth } = useFieldArray({
		name: "teeth",
		control: patientForm.control,
	})
	const { fields: treatingDoctorField, append: appendTreatingDoctor, remove: removeTreatingDoctor } = useFieldArray({
		name: "treatingDoctors",
		control: patientForm.control,
	})



	function onSubmit(values: PatientForm) {
		console.log(values)
	}

	return (
		<Card className="">
			<CardHeader>
				<CardTitle className="flex flex-nowrap items-center gap-x-2">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
						<path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
					</svg>
					Ajouter patient
				</CardTitle>
				<CardDescription className="ml-8">Saisir avec précision toutes les informations requises sur le patient</CardDescription>
			</CardHeader>
			<CardContent className="px-14">
				<Form {...patientForm}>
					<form onSubmit={patientForm.handleSubmit(onSubmit)}>
						<div className="mb-20">
							<div className="flex flex-nowrap items-center gap-x-4 mb-5">
								<div className="border-b w-[50px]" />
								<span className="text-sm whitespace-nowrap text-foreground/80">Informations personelles</span>
								<div className="border-b w-full" />
							</div>
							<div className="grid md:grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-3.5">
								<FormField
									control={patientForm.control}
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
									control={patientForm.control}
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
									control={patientForm.control}
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
									control={patientForm.control}
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
									control={patientForm.control}
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
									control={patientForm.control}
									name={`parent.relation`}
									render={({ field }) => (
										<FormItem>
											<FormLabel>Lien</FormLabel>
											<FormControl>
												<Select
													onValueChange={(value) => patientForm.setValue("parent.relation", value)}
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
									control={patientForm.control}
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
									control={patientForm.control}
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
																		patientForm.setValue("city", city)
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
									control={patientForm.control}
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
									control={patientForm.control}
									name="mutual"
									render={() => (
										<FormItem>
											<FormLabel>Mutuelle</FormLabel>
											<FormControl>
												<Select
													onValueChange={(value) => patientForm.setValue("mutual", value)}
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
									control={patientForm.control}
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
									control={patientForm.control}
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
						</div>
						<div className="">
							<div className="flex flex-nowrap items-center gap-x-4 mb-5">
								<div className="border-b w-[50px]" />
								<span className="text-sm whitespace-nowrap text-foreground/80">Informations médicales</span>
								<div className="border-b w-full" />
							</div>
							<div className="grid md:grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-3.5">
								<FormField
									control={patientForm.control}
									name={`addressedBy.fullName`}
									render={({ field }) => (
										<FormItem>
											<FormLabel>Adressé par</FormLabel>
											<FormControl>
												<Input type="text" {...field}  />
											</FormControl>
											<FormMessage className="text-xs font-normal" />
										</FormItem>
									)}
								/>
								<FormField
									control={patientForm.control}
									name={`addressedBy.speciality`}
									render={({ field }) => (
										<FormItem>
											<FormLabel>Spécialité</FormLabel>
											<FormControl>
												<Input type="text" {...field}  />
											</FormControl>
											<FormMessage className="text-xs font-normal" />
										</FormItem>
									)}
								/>

								<div>
									{pathologyFields.map((field, index) => (
										<FormField
											control={patientForm.control}
											key={field.id}
											name={`pathologies.${index}.value`}
											render={({ field }) => (
												<FormItem>
													<FormLabel className={cn(index !== 0 && "sr-only")}>
														Pathologie
													</FormLabel>
													<FormDescription className={cn(index !== 0 && "sr-only")}>
														Cliquez sur le bouton Ajouter une pathologie s'il y a plusieurs pathologies.
													</FormDescription>
													<FormControl>
														<div className="flex flex-nowrap gap-x-2">
															<Input type="text" {...field} />
															<Button variant="outline" className="focus-visible:ring-0 px-3 text-destructive hover:text-destructive" onClick={() => removePathology(index)}>
																<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
																	<path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
																</svg>
															</Button>
														</div>

													</FormControl>
													<FormMessage className="text-xs font-normal" />
												</FormItem>
											)}
										/>
									))}
									<Button
										type="button"
										variant="outline"
										size="sm"
										className="mt-2 flex flex-nowrap items-center gap-x-1 w-full py-5"
										onClick={() => appendPathology({ value: "" })}
									>
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
											<path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
										</svg>
										Ajouter une pathologie
									</Button>
								</div>
								<div>
									{treatmentFields.map((field, index) => (
										<FormField
											control={patientForm.control}
											key={field.id}
											name={`treatments.${index}.value`}
											render={({ field }) => (
												<FormItem>
													<FormLabel className={cn(index !== 0 && "sr-only")}>
														Traitements
													</FormLabel>
													<FormDescription className={cn(index !== 0 && "sr-only")}>
														Cliquez sur le bouton Ajouter un traitement s'il y a plusieurs traitements.
													</FormDescription>
													<FormControl>
														<div className="flex flex-nowrap gap-x-1 px-3">
															<Input type="text" {...field} />
															<Button variant="outline" className="focus-visible:ring-0 px-3 text-destructive hover:text-destructive" onClick={() => removeTreatment(index)}>
																<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
																	<path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
																</svg>
															</Button>
														</div>

													</FormControl>
													<FormMessage className="text-xs font-normal" />
												</FormItem>
											)}
										/>
									))}
									<Button
										type="button"
										variant="outline"
										size="sm"
										className="mt-2 flex flex-nowrap items-center gap-x-1 w-full py-5"
										onClick={() => appendTreatment({ value: "" })}
									>
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
											<path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
										</svg>
										Ajouter un traitement
									</Button>
								</div>
								<div>
									{anesthesiaFields.map((field, index) => (
										<FormField
											control={patientForm.control}
											key={field.id}
											name={`anesthesia.${index}.value`}
											render={({ field }) => (
												<FormItem>
													<FormLabel className={cn(index !== 0 && "sr-only")}>
														Anesthésies
													</FormLabel>
													<FormDescription className={cn(index !== 0 && "sr-only")}>
														Cliquez sur le bouton Ajouter une anesthésie s'il y a plusieurs anesthésies.
													</FormDescription>
													<FormControl>
														<div className="flex flex-nowrap gap-x-1 px-3">
															<Input type="text" {...field} />
															<Button variant="outline" className="focus-visible:ring-0 px-3 text-destructive hover:text-destructive" onClick={() => removeAnesthesia(index)}>
																<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
																	<path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
																</svg>
															</Button>
														</div>

													</FormControl>
													<FormMessage className="text-xs font-normal" />
												</FormItem>
											)}
										/>
									))}
									<Button
										type="button"
										variant="outline"
										size="sm"
										className="mt-2 flex flex-nowrap items-center gap-x-1 w-full py-5"
										onClick={() => appendAnesthesia({ value: "" })}
									>
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
											<path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
										</svg>
										Ajouter une anesthésie
									</Button>
								</div>
								<div>
									{allergyFields.map((field, index) => (
										<FormField
											control={patientForm.control}
											key={field.id}
											name={`allergies.${index}.value`}
											render={({ field }) => (
												<FormItem>
													<FormLabel className={cn(index !== 0 && "sr-only")}>
														Allergies
													</FormLabel>
													<FormDescription className={cn(index !== 0 && "sr-only")}>
														Cliquez sur le bouton Ajouter une allergie s'il y a plusieurs allergies.
													</FormDescription>
													<FormControl>
														<div className="flex flex-nowrap gap-x-1 px-3">
															<Input type="text" {...field} />
															<Button variant="outline" className="focus-visible:ring-0 px-3 text-destructive hover:text-destructive" onClick={() => removeAllergy(index)}>
																<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
																	<path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
																</svg>
															</Button>
														</div>

													</FormControl>
													<FormMessage className="text-xs font-normal" />
												</FormItem>
											)}
										/>
									))}
									<Button
										type="button"
										variant="outline"
										size="sm"
										className="mt-2 flex flex-nowrap items-center gap-x-1 w-full py-5"
										onClick={() => appendAllergy({ value: "" })}
									>
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
											<path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
										</svg>
										Ajouter une allergie
									</Button>
								</div>
								<div className="col-span-2 space-y-2">
									<Label>Médecin traitant</Label>
									<Card>
										<CardContent className=" px-0">
											<Table>
												<TableHeader>
													<TableRow>
														<TableHead>Prénom</TableHead>
														<TableHead>Nom</TableHead>
														<TableHead>Téléphone</TableHead>
													</TableRow>
												</TableHeader>
												<TableBody>
													{treatingDoctorField.map((field, index) => (
														<TableRow key={field.id}>
															<TableCell>
																<FormField
																	control={patientForm.control}
																	name={`treatingDoctors.${index}.firstName`}
																	render={({field}) => (
																		<FormItem>
																			<FormControl>
																				<Input type="text" {...field} />
																			</FormControl>
																		</FormItem>
																	)}
																/>
															</TableCell>
															<TableCell>
																<FormField
																	control={patientForm.control}
																	name={`treatingDoctors.${index}.lastName`}
																	render={({field}) => (
																		<FormItem>
																			<FormControl>
																				<Input type="text" {...field} />
																			</FormControl>
																		</FormItem>
																	)}
																/>
															</TableCell>
															<TableCell>
																<FormField
																	control={patientForm.control}
																	name={`treatingDoctors.${index}.phone`}
																	render={({field}) => (
																		<FormItem>
																			<FormControl>
																				<Input type="text" {...field} />
																			</FormControl>
																		</FormItem>
																	)}
																/>
															</TableCell>
															<TableCell>
																<Button type="button" variant="outline" className="focus-visible:ring-0  px-3 text-destructive hover:text-destructive" onClick={() => removeTreatingDoctor(index)}>
																	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
																		<path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
																	</svg>
																</Button>
															</TableCell>
														</TableRow>
													))}
												</TableBody>
											</Table>
										</CardContent>
										<CardFooter className="justify-center border-t py-2">
											<Button type="button"  variant="ghost" className="gap-1" onClick={() => appendTreatingDoctor({firstName: "", lastName: "", phone: ""})}>
												<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
													<path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
												</svg>
												Ajouter
											</Button>
										</CardFooter>
									</Card>
								</div>
								<FormField
									control={patientForm.control}
									name="comment"
									render={({ field }) => (
										<FormItem className="col-span-1 mt-3">
											<FormLabel>Observation ou Motif de Consultation</FormLabel>
											<FormControl>
												<Textarea
													placeholder="Ajouter un motif ou une observation de consultation"
													// className="resize-none"
													{...field}
												/>
											</FormControl>
											<FormMessage className="text-xs font-normal" />
										</FormItem>
									)}
								/>
								<div />
								<FormField
									control={patientForm.control}
									name="isPregnantOrlactating"
									render={({field}) => (
										<FormItem className="col-span-1 my-4">
											<FormControl>
												<div className="items-top flex space-x-2 ">
													<Checkbox
														id="#id1"
														checked={field.value}
														onCheckedChange={field.onChange}
													/>
													<div className="leading-none space-y-1.5">
														<label
															htmlFor="#id1"
															className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
														>
															Enceinte / Allaitante
														</label>
														<p className="text-sm text-muted-foreground">
															cochez la case  si la patiente est enceinte ou si elle allaite.
														</p>
													</div>
												</div>
											</FormControl>
											<FormMessage className="text-xs font-normal" />
										</FormItem>
									)}
								/>
								<FormField
									control={patientForm.control}
									name="bleeding"
									render={({field}) => (
										<FormItem className="col-span-1 my-4">
											<FormControl>
												<div className="items-top flex space-x-2 ">
													<Checkbox
														id="#id2"
														checked={field.value}
														onCheckedChange={field.onChange}
													/>
													<div className="leading-none space-y-1.5">
														<label
															htmlFor="#id2"
															className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
														>
															Saignement
														</label>
														<p className="text-sm text-muted-foreground">
															cochez la case si le patient saigne.
														</p>
													</div>
												</div>
											</FormControl>
											<FormMessage className="text-xs font-normal" />
										</FormItem>
									)}
								/>

								<div className="col-span-2">
									<Card>
										<CardContent className=" px-0">
											<Table>
												<TableHeader>
													<TableRow>
														<TableHead className="w-[200px]">Date</TableHead>
														<TableHead>Dent</TableHead>
														<TableHead className="w-[350px]">Observation</TableHead>
														<TableHead className="">Prix</TableHead>
														<TableHead className="">Reçu</TableHead>
														<TableHead className="">Reste</TableHead>
													</TableRow>
												</TableHeader>
												<TableBody>
													{toothFields.map((field, index) => (
														<TableRow key={field.id}>
															<TableCell>
																<FormField
																	control={patientForm.control}
																	name={`teeth.${index}.date`}
																	render={({ field }) => (
																		<FormItem>
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
																							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-2 h-4 w-4 ">
																								<path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
																							</svg>

																						</Button>
																					</PopoverTrigger>
																					<PopoverContent className="w-auto p-0" align="start">
																						<Calendar
																							mode="single"
																							selected={field.value}
																							onSelect={field.onChange}
																							disabled={(date) => date < new Date("1900-01-01")}
																							initialFocus
																						/>
																					</PopoverContent>
																				</Popover>
																			</FormControl>
																			<FormMessage className="text-xs font-normal" />
																		</FormItem>
																	)}
																/>
															</TableCell>
															<TableCell>
																<FormField
																	control={patientForm.control}
																	key={field.id}
																	name={`teeth.${index}.numbers`}
																	render={() => (
																		<FormItem>
																			<FormControl>
																				<TeethSelection fieldIndex={index} form={patientForm} />
																			</FormControl>
																			<FormMessage className="text-xs font-normal" />
																		</FormItem>
																	)}
																/>
															</TableCell>
															<TableCell>
																<FormField
																	control={patientForm.control}
																	key={field.id}
																	name={`teeth.${index}.observation`}
																	render={({ field }) => (
																		<FormItem>
																			<FormControl>
																				<Textarea placeholder="Ajouter une observation" {...field} />
																			</FormControl>
																			<FormMessage className="text-xs font-normal" />
																		</FormItem>
																	)}
																/>
															</TableCell>
															<PriceReceivedRemain rowIndex={index} fieldId={field.id} form={patientForm} />
															<TableCell>
																<Button type="button" variant="outline" className="focus-visible:ring-0  px-3 text-destructive hover:text-destructive" onClick={() => removehooth(index)}>
																	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
																		<path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
																	</svg>
																</Button>
															</TableCell>
														</TableRow>
													))}
												</TableBody>
											</Table>
										</CardContent>
										<CardFooter className="justify-center border-t p-4">
											<Button type="button"  variant="ghost" className="gap-1" onClick={() => appendTooth({date: new Date(), numbers: [], observation: "", price: 0, received: 0, remain: 0 })}>
												<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
													<path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
												</svg>
												Nouveau
											</Button>
										</CardFooter>
									</Card>
								</div>
							</div>
						</div>
						<div className="justify-end grid mt-10">
							<Button className="dark:bg-secondary w-[150px]">Ajouter</Button>
						</div>
					</form>
				</Form>
			</CardContent>
		</Card>
	);
}