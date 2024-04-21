import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Badge} from "@/components/ui/badge.tsx";
import {z} from "zod";
import {editMedicalFolderFormSechma} from "@/zod/schemas/edit-medical-folder-form-sechma.ts";
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
import {cn} from "@/lib/utils.ts";
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Label} from "@/components/ui/label.tsx";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table.tsx";
import {Checkbox} from "@/components/ui/checkbox.tsx";
import {Textarea} from "@/components/ui/textarea.tsx";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover.tsx";
import {format} from "date-fns";
import {Calendar} from "@/components/ui/calendar.tsx";
import TeethSelection from "@/components/teeth-selection.tsx";
import PriceReceivedRemain from "@/components/price-received-remain.tsx";
import {slides} from "@/data/slides.ts";
import UploadImageDialog from "@/components/upload-image-dialog.tsx";


export type EditMedicalFolderForm = z.infer<typeof editMedicalFolderFormSechma>
export default function EditMedicalFolderForm() {

	const editMedicalFolderForm = useForm<EditMedicalFolderForm>({
		resolver: zodResolver(editMedicalFolderFormSechma),
		defaultValues: {
			pathologies: [{value: "path1"}],
			treatments: [{value: "treat1"}],
			anesthesia: [{value: "anesth1"}],
			allergies: [{value: "alleg1"}],
		}
	})

	const onSubmit = (data: EditMedicalFolderForm) => {
		console.log(data)
	}

	const { fields: pathologyFields , append: appendPathology, remove: removePathology } = useFieldArray({
		name: "pathologies",
		control: editMedicalFolderForm.control,
	})

	const { fields: treatmentFields, append: appendTreatment, remove: removeTreatment } = useFieldArray({
		name: "treatments",
		control: editMedicalFolderForm.control,
	})

	const { fields: anesthesiaFields, append: appendAnesthesia, remove: removeAnesthesia } = useFieldArray({
		name: "anesthesia",
		control: editMedicalFolderForm.control,
	})
	const { fields: allergyFields, append: appendAllergy, remove: removeAllergy } = useFieldArray({
		name: "allergies",
		control: editMedicalFolderForm.control,
	})
	const { fields: toothFields, append: appendTooth, remove: removehooth } = useFieldArray({
		name: "teeth",
		control: editMedicalFolderForm.control,
	})
	const { fields: treatingDoctorField, append: appendTreatingDoctor, remove: removeTreatingDoctor } = useFieldArray({
		name: "treatingDoctors",
		control: editMedicalFolderForm.control,
	})

	return <section className="grid grid-cols-4 gap-5">
		<div className="col-span-3">
			<Card className=" mx-auto">
				<CardHeader className="border-b flex flex-row items-center justify-between py-4">
					<div className="flex items-center flex-nowrap gap-x-4">
						<CardTitle className="text-lg flex items-center gap-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
								<path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
							</svg>
							Modifier le patient
						</CardTitle>
						<Badge variant="outline" className="py-1.5 bg-muted">N° Dossier 2024325468</Badge>
					</div>
				</CardHeader>
				<CardContent className="py-5 px-10">
					<Form {...editMedicalFolderForm}>
						<form onSubmit={editMedicalFolderForm.handleSubmit(onSubmit)}>
							<div className="grid md:grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-3.5">
								<div>
									{pathologyFields.map((field, index) => (
										<FormField
											control={editMedicalFolderForm.control}
											key={field.id}
											name={`pathologies.${index}.value`}
											render={({ field }) => (
												<FormItem>
													<FormLabel className={cn(index !== 0 && "sr-only", "text-primary dark:text-secondary")}>
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
											control={editMedicalFolderForm.control}
											key={field.id}
											name={`treatments.${index}.value`}
											render={({ field }) => (
												<FormItem>
													<FormLabel className={cn(index !== 0 && "sr-only", "text-primary dark:text-secondary")}>
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
											control={editMedicalFolderForm.control}
											key={field.id}
											name={`anesthesia.${index}.value`}
											render={({ field }) => (
												<FormItem>
													<FormLabel className={cn(index !== 0 && "sr-only", "text-primary dark:text-secondary")}>
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
											control={editMedicalFolderForm.control}
											key={field.id}
											name={`allergies.${index}.value`}
											render={({ field }) => (
												<FormItem>
													<FormLabel className={cn(index !== 0 && "sr-only", "text-primary dark:text-secondary")}>
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
									<Card className="rounded-lg">
										<CardContent className="p-0">
											<Table>
												<TableHeader>
													<TableRow>
														<TableHead>Prénom</TableHead>
														<TableHead>Nom</TableHead>
														<TableHead>Téléphone</TableHead>
														<TableHead>Spécialité</TableHead>
														<TableHead>Adréssant</TableHead>
													</TableRow>
												</TableHeader>
												<TableBody>
													{treatingDoctorField.map((field, index) => (
														<TableRow key={field.id}>
															<TableCell>
																<FormField
																	control={editMedicalFolderForm.control}
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
																	control={editMedicalFolderForm.control}
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
																	control={editMedicalFolderForm.control}
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
																<FormField
																	control={editMedicalFolderForm.control}
																	name={`treatingDoctors.${index}.speciality`}
																	render={({field}) => (
																		<FormItem>
																			<FormControl>
																				<Input type="text" {...field} />
																			</FormControl>
																		</FormItem>
																	)}
																/>
															</TableCell>
															<TableCell className="text-center">
																<FormField
																	control={editMedicalFolderForm.control}
																	name={`treatingDoctors.${index}.adressant`}
																	render={({field}) => (
																		<FormItem>
																			<FormControl>
																				<Checkbox
																					checked={field.value}
																					onCheckedChange={field.onChange}
																				/>
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
										<CardFooter className="justify-center border-t-0  p-0">
											<Button type="button"  variant="ghost" className="gap-1 w-full h-full rounded-t-none rounded-b-lg" onClick={() => appendTreatingDoctor({firstName: "", lastName: "", phone: ""})}>
												<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
													<path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
												</svg>
												Ajouter
											</Button>
										</CardFooter>
									</Card>
								</div>
								<FormField
									control={editMedicalFolderForm.control}
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
									control={editMedicalFolderForm.control}
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
									control={editMedicalFolderForm.control}
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
									<Card className="rounded-lg">
										<CardContent className="p-0">
											<Table>
												<TableHeader>
													<TableRow>
														<TableHead className="w-[200px]">Date</TableHead>
														<TableHead>Dent</TableHead>
														<TableHead className="w-[350px]">Observation</TableHead>
														<TableHead>Prix</TableHead>
														<TableHead>Reçu</TableHead>
														<TableHead>Reste</TableHead>
													</TableRow>
												</TableHeader>
												<TableBody>
													{toothFields.map((field, index) => (
														<TableRow key={field.id}>
															<TableCell>
																<FormField
																	control={editMedicalFolderForm.control}
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
																	control={editMedicalFolderForm.control}
																	key={field.id}
																	name={`teeth.${index}.numbers`}
																	render={() => (
																		<FormItem>
																			<FormControl>
																				<TeethSelection fieldIndex={index} form={editMedicalFolderForm} />
																			</FormControl>
																			<FormMessage className="text-xs font-normal" />
																		</FormItem>
																	)}
																/>
															</TableCell>
															<TableCell>
																<FormField
																	control={editMedicalFolderForm.control}
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
															<PriceReceivedRemain rowIndex={index} fieldId={field.id} form={editMedicalFolderForm} />
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
										<CardFooter className="justify-center border-t-0 p-0">
											<Button type="button"  variant="ghost" className="gap-1 w-full h-full rounded-t-none rounded-b-lg" onClick={() => appendTooth({date: new Date(), numbers: [], observation: "", price: 0, received: 0, remain: 0 })}>
												<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
													<path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
												</svg>
												Nouveau
											</Button>
										</CardFooter>
									</Card>
								</div>
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
		</div>
		<div>
			<Card className="overflow-hidden">
				<CardHeader className="space-y-0">
					<CardTitle className="text-lg">Radiologie</CardTitle>
					<CardDescription>
						Lipsum dolor sit amet, consectetur adipiscing elit
					</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="grid gap-2">
						<img
							alt="radio image"
							className="aspect-square w-full rounded-md object-cover"
							height="300"
							src={!slides[0]?.image ? "https://ui.shadcn.com/placeholder.svg" : slides[0].image}
							width="300"/>
						<div className="grid grid-cols-3 gap-2">
							<img
								alt="radio image"
								className="aspect-square w-full rounded-md object-cover"
								height="84"
								src={!slides[1]?.image ? "https://ui.shadcn.com/placeholder.svg" : slides[1].image}
								width="84"/>
							<img
								alt="radio image"
								className="aspect-square w-full rounded-md object-cover"
								height="84"
								src={!slides[2]?.image ? "https://ui.shadcn.com/placeholder.svg" : slides[2].image}
								width="84"/>
							<UploadImageDialog />
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	</section>
}