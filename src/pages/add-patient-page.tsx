import {ResizableHandle, ResizablePanel, ResizablePanelGroup} from "@/components/ui/resizable";
import Sidebar from "@/components/sidebar.tsx";
import {ModeToggle} from "@/components/Theme/mode-toggle";
import {UserNav} from "@/components/user-nav";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Input} from "@/components/ui/input.tsx";
import { z } from "zod"
import {useFieldArray, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from "@/components/ui/form.tsx";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover.tsx";
import {Button} from "@/components/ui/button.tsx";
import {cn} from "@/lib/utils.ts";
import {Command, CommandEmpty, CommandGroup, CommandInput, CommandItem} from "@/components/ui/command.tsx";
import {format} from "date-fns";
import {Calendar} from "@/components/ui/calendar.tsx";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.tsx";
import { Checkbox } from "@/components/ui/checkbox.tsx";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {Textarea} from "@/components/ui/textarea.tsx";



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
	"Essaouira",

];


const PatientFormSchema = z.object({
	firstName: z
		.string({
			required_error: "Le prénom est requis.",
			invalid_type_error: "Le prénom doit être une chaîne de caractères.",
		})
		.min(2, {message:'Le prénom doit contenir au moins 3 caractères.'})
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

	cin: z.string({
		required_error: "CIN est requis.",
	})
		.length(8, {message:'CIN doit contenir 8 caractères.'})
		.regex(new RegExp('^[A-Za-z]+\\d+'), {message: 'CIN ne doit pas contenir de caractères spéciaux.'})
		.toLowerCase(),

	phone: z.string({
		required_error: "Numéro de téléphone est requis.",
	})
		.min(10, {message:'Le numéro de téléphone doit contenir au moins 10 caractères.'})
		.max(13, {message: 'Le numéro de téléphone ne doit pas dépasser 13 caractères.'})
		.regex(new RegExp('^\\+?\\d{1,3}\\d{1,9}$'), {message: 'Le numéro de téléphone est invalid.'}),

	address: z.string({
		required_error: "Numéro de téléphone est requis.",
		invalid_type_error: "Le nom doit être une chaîne de caractères.",
	})
		.min(5, {message:"L'addresse doit contenir au moins 5 caractères."})
		.max(60, {message: "L'addresse ne doit pas dépasser 60 caractères."})
		.toLowerCase(),

	city: z.string({required_error: "La ville est requis."}),
	dateOfBirth: z.date()
		.min(new Date("1900-01-01"), { message: "Too old" })
		.max(new Date(), { message: "Too young!" }),
	gender: z.string(),
	addressedBy: z.string().optional(),
	mutual: z.string(),
	treatingDoctor: z.string().optional(),
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
	comment: z.string().max(160).min(4),
	teeth: z
		.array(
			z.object({
				value: z.number().min(11).max(85),
			})
		)
});

type PatientForm = z.infer<typeof PatientFormSchema>

export default function AddPatientPage(): JSX.Element {

	const patientForm = useForm<PatientForm>({
		resolver: zodResolver(PatientFormSchema),
		defaultValues: {
			firstName: "",
			lastName: "",
			cin: "",
			phone: "",
			address: "",
			city: "",
		},
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


	function onSubmit(values: PatientForm) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values)
	}

	return (
		<main className="w-full">
			<ResizablePanelGroup direction="horizontal">
				<ResizablePanel defaultSize={20}>
					<Sidebar />
				</ResizablePanel>
				<ResizableHandle withHandle />
				<ResizablePanel  defaultSize={80}>
					<div className="flex-col flex">
						<div className="border-b">
							<div className="flex h-16 items-center px-4">
								<div className="ml-auto flex items-center space-x-4">
									<ModeToggle />
									<UserNav />
								</div>
							</div>
						</div>
						<div className="flex-1 space-y-4 p-8 pt-6">
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

											<div className="grid md:grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-3.5">
												<FormField
													control={patientForm.control}
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
												<FormField
													control={patientForm.control}
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
												<FormField
													control={patientForm.control}
													name="cin"
													render={({ field }) => (
														<FormItem>
															<FormLabel>CIN</FormLabel>
															<FormControl>
																<Input type="text" {...field} />
															</FormControl>
															<FormMessage />
														</FormItem>
													)}
												/>
												<FormField
													control={patientForm.control}
													name="dateOfBirth"
													render={({ field }) => (
														<FormItem>
															<FormLabel>Date de naissance</FormLabel>
															<Popover>
																<PopoverTrigger asChild>
																	<FormControl>
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
																			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-auto h-4 w-4 opacity-50">
																				<path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
																			</svg>

																		</Button>
																	</FormControl>
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
															<FormMessage />
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
															<FormMessage />
														</FormItem>
													)}
												/>
												<FormField
													control={patientForm.control}
													name="city"
													render={({ field }) => (
														<FormItem>
															<FormLabel>Ville</FormLabel>
															<Popover>
																<PopoverTrigger asChild>
																	<FormControl>
																		<Button
																			variant="outline"
																			role="combobox"
																			className={cn(
																				"w-full justify-between font-normal",
																				!field.value && "text-muted-foreground"
																			)}
																		>
																			{field.value
																				? cities.find(
																					(city) => city === field.value
																				)
																				: "Sélectionner la ville"}
																			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-2 h-4 w-4 shrink-0 opacity-50">
																				<path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
																			</svg>

																		</Button>
																	</FormControl>
																</PopoverTrigger>
																<PopoverContent className="w-full p-0">
																	<Command className="w-full">
																		<CommandInput placeholder="Rechercher une ville..." />
																		<CommandEmpty>Aucune ville n'est trouvée.</CommandEmpty>
																		<CommandGroup>
																			{cities.map((city: string, index: number) => {
																				return (
																					<CommandItem
																						value={city}
																						key={index}
																						onSelect={() => {
																							patientForm.setValue("city", city)
																						}}
																					>
																						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={cn(
																							"mr-2 h-4 w-4",
																							city === field.value
																								? "opacity-100"
																								: "opacity-0"
																						)}>
																							<path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
																						</svg>


																						{city}
																					</CommandItem>
																				)
																			})}
																		</CommandGroup>
																	</Command>
																</PopoverContent>
															</Popover>
															<FormMessage />
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
														<FormMessage />
													</FormItem>
												)}
												/>
												<FormField
													control={patientForm.control}
													name="addressedBy"
													render={({ field }) => (
														<FormItem>
															<FormLabel>Adressé par</FormLabel>
															<FormControl>
																<Input type="text" {...field}  />
															</FormControl>
															<FormMessage />
														</FormItem>
													)}
												/>

												<FormField
													control={patientForm.control}
													name="mutual"
													render={({ field }) => (
														<FormItem>
															<FormLabel>Mutuelle</FormLabel>
															<FormControl>
																<Select
																	{...field}
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
															<FormMessage />
														</FormItem>
													)}
												/>

												<FormField
													control={patientForm.control}
													name="treatingDoctor"
													render={({ field }) => (
														<FormItem>
															<FormLabel>Médecin traitant</FormLabel>
															<FormControl>
																<Input type="text" {...field}  />
															</FormControl>
															<FormMessage />
														</FormItem>
													)}
												/>
												<FormField
													control={patientForm.control}
													name="treatingDoctor"
													render={({ field }) => (
														<FormItem>
															<FormLabel>Tuteur</FormLabel>
															<FormControl>
																<Input type="text" {...field}  />
															</FormControl>
															<FormMessage />
														</FormItem>
													)}
												/>
												<FormField
													control={patientForm.control}
													name="treatingDoctor"
													render={({ field }) => (
														<FormItem>
															<FormLabel>Lien</FormLabel>
															<FormControl>
																<Input type="text" {...field}  />
															</FormControl>
															<FormMessage />
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
																		<div className="relative">
																			<Button variant="outline" className="border-0 bg-transparent hover:bg-transparent absolute right-0 focus-visible:ring-0" onClick={() => removePathology(index)}>
																				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
																					<path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
																				</svg>
																			</Button>
																			<Input type="text" {...field} />
																		</div>

																	</FormControl>
																	<FormMessage />
																</FormItem>
															)}
														/>
													))}
													<Button
														type="button"
														variant="outline"
														size="sm"
														className="mt-2 flex flex-nowrap items-center gap-x-1"
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
																		<div className="relative">
																			<Button variant="outline" className="border-0 bg-transparent hover:bg-transparent absolute right-0 focus-visible:ring-0" onClick={() => removeTreatment(index)}>
																				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
																					<path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
																				</svg>
																			</Button>
																			<Input type="text" {...field} />
																		</div>

																	</FormControl>
																	<FormMessage />
																</FormItem>
															)}
														/>
													))}
													<Button
														type="button"
														variant="outline"
														size="sm"
														className="mt-2 flex flex-nowrap items-center gap-x-1"
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
																		<div className="relative">
																			<Button variant="outline" className="border-0 bg-transparent hover:bg-transparent absolute right-0 focus-visible:ring-0" onClick={() => removeAnesthesia(index)}>
																				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
																					<path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
																				</svg>
																			</Button>
																			<Input type="text" {...field} />
																		</div>

																	</FormControl>
																	<FormMessage />
																</FormItem>
															)}
														/>
													))}
													<Button
														type="button"
														variant="outline"
														size="sm"
														className="mt-2 flex flex-nowrap items-center gap-x-1"
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
																		<div className="relative">
																			<Button variant="outline" className="border-0 bg-transparent hover:bg-transparent absolute right-0 focus-visible:ring-0" onClick={() => removeAllergy(index)}>
																				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
																					<path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
																				</svg>
																			</Button>
																			<Input type="text" {...field} />
																		</div>

																	</FormControl>
																	<FormMessage />
																</FormItem>
															)}
														/>
													))}
													<Button
														type="button"
														variant="outline"
														size="sm"
														className="mt-2 flex flex-nowrap items-center gap-x-1"
														onClick={() => appendAllergy({ value: "" })}
													>
														<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
															<path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
														</svg>
														Ajouter une allergie
													</Button>
												</div>
												<FormField
													control={patientForm.control}
													name="gender"
													render={({ field }) => (
														<FormItem className="space-y-3">
															<FormLabel>Sexe</FormLabel>
															<FormControl>
																<RadioGroup
																	onValueChange={field.onChange}
																	defaultValue={field.value}
																	className="flex flex-col space-y-1"
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
															<FormMessage />
														</FormItem>
													)}
												/>
												<div className="items-top flex space-x-2">
													<Checkbox id="terms1" />
													<div className="leading-none space-y-1.5">
														<label
															htmlFor="terms1"
															className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
														>
															Enceinte / Allaitante
														</label>
														<p className="text-sm text-muted-foreground">
															Vérifier si la patiente est enceinte ou si elle allaite.
														</p>
													</div>
												</div>
												<FormField
													control={patientForm.control}
													name="comment"
													render={({ field }) => (
														<FormItem>
															<FormLabel>Commentaire</FormLabel>
															<FormControl>
																<Textarea
																	placeholder="Ajouter un commentaire ou une observation sur le patient"
																	// className="resize-none"
																	{...field}
																/>
															</FormControl>
															<FormMessage />
														</FormItem>
													)}
												/>
												<div>
													{toothFields.map((field, index) => (
														<FormField
															control={patientForm.control}
															key={field.id}
															name={`teeth.${index}.value`}
															render={({ field }) => (
																<FormItem>
																	<FormLabel className={cn(index !== 0 && "sr-only")}>
																		Dents
																	</FormLabel>
																	<FormDescription className={cn(index !== 0 && "sr-only")}>
																		Cliquez sur le bouton Ajouter une allergie s'il y a plusieurs allergies.
																	</FormDescription>
																	<FormControl >
																		<div className="relative">
																			<Button variant="outline" className="border-0 bg-transparent hover:bg-transparent absolute right-5 focus-visible:ring-0" onClick={() => removehooth(index)}>
																				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
																					<path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
																				</svg>
																			</Button>
																			<Input type="number" min={11} max={85} {...field} />
																		</div>

																	</FormControl>
																	<FormMessage />
																</FormItem>
															)}
														/>
													))}
													<Button
														type="button"
														variant="outline"
														size="sm"
														className="mt-2 flex flex-nowrap items-center gap-x-1"
														onClick={() => appendTooth({ value: NaN })}
													>
														<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
															<path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
														</svg>
														Ajouter une dent
													</Button>
												</div>
											</div>
										</form>
									</Form>
								</CardContent>
								<CardFooter></CardFooter>
							</Card>

						</div>
					</div>
				</ResizablePanel>
			</ResizablePanelGroup>
		</main>
	);
}