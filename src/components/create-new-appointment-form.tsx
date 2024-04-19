import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form.tsx";
import {Input} from "@/components/ui/input.tsx";
import SelectPatientDialog from "@/components/select-patient-dialog.tsx";
import {useEffect, useState} from "react";
import {cn} from "@/lib/utils.ts";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover.tsx";
import {Button} from "@/components/ui/button.tsx";
import {CaretSortIcon, CheckIcon} from "@radix-ui/react-icons";
import {Command, CommandEmpty, CommandGroup, CommandInput, CommandItem} from "@/components/ui/command.tsx";
import {format} from "date-fns";
import {Calendar} from "@/components/ui/calendar.tsx";
import {TimePickerDemo} from "@/components/time-picker-demo.tsx";
import {toast} from "@/components/ui/use-toast.ts";
import {Patient} from "@/data/patients-data.ts"


const motifs: string[] = [
	"Détartrage 1s",
	"Détartrage 2s",
	"Extraction dent de sagesse",
	"Extraction chirurgicale",
	"Extraction",
	"Consultation",
	"Contrôle",
	"Composite",
	"Pulpotomie",
	"Traitement canalaire",
	"Prothèse conjointe",
	"Prothèse adjointe"
]

const appointmentFormSchema = z.object({
	patient: z.object({
		id: z.number({
			required_error: "Veuillez sélectionner un(e) patient(e)."
		}),
	}).required(),

	motif: z.string({
		required_error: "Motif de rendez-vous est requis."
	}),
	dateTime: z.date({
		required_error: "Date de rendez-vous est requis."
	})
})

type AppointmentForm = z.infer<typeof appointmentFormSchema>;

export default function CreateNewAppointmentForm() {

	const appointmentForm = useForm<AppointmentForm>({
		resolver: zodResolver(appointmentFormSchema),

	})

	const {errors} = appointmentForm.formState;

	useEffect(() => {
		if (errors.patient) {
			toast({
				variant: "destructive",
				description: `${errors.patient.message}`,
			})
		}


	}, [errors.patient]);


	const [selectedPatient, setSelectedPatient] = useState<Patient | undefined>();
	const handlePatientSelectionConfirm = (patient: Patient | undefined) => {
		if(patient) {
			setSelectedPatient(patient)
			appointmentForm.setValue( "patient", patient);
		}
		else {
			appointmentForm.setError(
				'patient',
				{
					type: 'required',
					message: 'Veuillez sélectionner un(e) patient(e).'
				}
			)
		}

	}
	const onSubmit = (data: AppointmentForm) => {
		console.log(data)
	}

	return (
		<Card className="w-[600px] mx-auto">
			<CardHeader>
				<CardTitle className="flex flex-nowrap items-center gap-x-2">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-6">
						<path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 9v10a2 2 0 0 0 2 2h6M4 9V7a2 2 0 0 1 2-2h2M4 9h16m0 0V7a2 2 0 0 0-2-2h-2m4 4v3m-4-7V3m0 2H8m0-2v2m11 11v3m0 3v-3m0 0h3m-3 0h-3"></path>
					</svg>
					Créer un rendez-vous
				</CardTitle>
				<CardDescription>
				</CardDescription>
			</CardHeader>
			<CardContent>
				<Form {...appointmentForm}>
					<form onSubmit={appointmentForm.handleSubmit(onSubmit)}>
						<div className="grid space-y-6">
							<FormField
								control={appointmentForm.control}
								name="patient"
								render={() => (
									<FormItem className="">
										<FormLabel>Patient(e)</FormLabel>
										<FormControl>
											<SelectPatientDialog
												trigger={
													<Input
														type="text"
														className="cursor-pointer hover:bg-muted focus-visible:ring-0"
														onInput={(event) => event.defaultPrevented}
														placeholder="Sélectionner un(e) patient(e)"
														value={selectedPatient && selectedPatient?.firstName + " " + selectedPatient?.lastName} />
												}
												onConfirm={handlePatientSelectionConfirm} />
										</FormControl>
										<FormMessage className="text-xs font-normal" />
									</FormItem>
								)}
							/>
							<FormField
								control={appointmentForm.control}
								name="motif"
								render={({ field }) => (
									<FormItem className="flex flex-col justify-end">
										<FormLabel>Motif de rendez-vous</FormLabel>
										<Popover>
											<PopoverTrigger asChild>
												<FormControl>
													<Button
														variant="outline"
														role="combobox"
														className={cn(
															"justify-between font-normal ",
															!field.value && "text-muted-foreground"
														)}
													>
														{field.value
															? motifs.find(
																(motif) => motif === field.value
															)
															: "Sélectionner un motif"}
														<CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
													</Button>
												</FormControl>
											</PopoverTrigger>
											<PopoverContent className="p-0">
												<Command>
													<CommandInput
														placeholder="Recherche..."
														className="h-9"
													/>
													<CommandEmpty>Aucune ville trouvée.</CommandEmpty>
													<CommandGroup>
														{motifs.map((motif, index) => (
															<CommandItem
																value={motif}
																key={index}
																onSelect={() => {
																	appointmentForm.setValue("motif", motif)
																}}
															>
																{motif}
																<CheckIcon
																	className={cn(
																		"ml-auto h-4 w-4",
																		motif === field.value
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
								control={appointmentForm.control}
								name="dateTime"
								render={({ field }) => (
									<FormItem className="flex flex-col">
										<FormLabel className="text-left">Date de rendez-vous</FormLabel>
										<Popover>
											<FormControl>
												<PopoverTrigger asChild>
													<Button
														variant="outline"
														className={cn(
															" justify-start text-left font-normal",
															!field.value && "text-muted-foreground"
														)}
													>
														<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-2 h-4 w-4">
															<path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
														</svg>

														{field.value ? (
															format(field.value, "PPP HH:mm:ss")
														) : (
															<span>Sélectionner une date</span>
														)}
													</Button>
												</PopoverTrigger>
											</FormControl>
											<PopoverContent className="w-auto p-0 px-3 flex items-center gap-x-2">
												<Calendar
													mode="single"
													selected={field.value}
													onSelect={field.onChange}
													initialFocus
												/>
												<div className="p-3">
													<TimePickerDemo
														setDate={field.onChange}
														date={field.value}
													/>
												</div>
											</PopoverContent>
										</Popover>
										<FormMessage className="text-xs font-normal" />
									</FormItem>
								)}
							/>
						</div>
						<div className="grid justify-end">
							<Button type="submit" variant="default" className="mt-10 w-[150px]">Créer</Button>
						</div>
					</form>
				</Form>
			</CardContent>
		</Card>

	);
}