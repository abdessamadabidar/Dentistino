import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {DataTable} from "@/components/data-table.tsx";
import {columns} from "@/components/data-table-columns/patients-waiting-room-columns.tsx";
import {patients, Patient} from "@/data/patients-data.ts";
import SelectPatientDialog from "@/components/select-patient-dialog.tsx";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {Form, FormControl, FormField, FormItem} from "@/components/ui/form.tsx";
import {useEffect} from "react";
import {useToast} from "@/components/ui/use-toast";
import {Button} from "@/components/ui/button.tsx";


const FormSchema = z.object({
	patient: z.object({
		id: z.number(),
		firstName: z.string(),
		lastName: z.string()
	}),
})

type FormSchemaType = z.infer<typeof FormSchema>
export default function WaitingRoomPage() : JSX.Element {
	const {toast} = useToast()

	const form = useForm<FormSchemaType>({
		resolver: zodResolver(FormSchema),
	})

	const {errors} = form.formState;
	const onSubmit = (data: FormSchemaType) => {
		toast({
			variant: "default",
			description:  <p><span className="font-semibold">{data.patient.firstName} {data.patient.lastName}</span> a été ajouté(e) la salle d'attente</p>,
			className: "bg-green-500 text-white"
		})

	};


	useEffect(() => {
		if (errors.patient) {
			toast({
				variant: "destructive",
				title: "une erreur est survenu !",
				description: `${errors.patient?.message}`,
			})
		}

	}, [errors.patient]);

	const handlePatientSelectionConfirm = (patient: Patient | undefined) => {
		if (patient) {
			form.setValue( "patient", patient);
			form.handleSubmit(onSubmit)();
		}
		else {
			form.setError(
				'patient',
				{
					type: 'required',
					message: 'Veuillez sélectionner un(e) patient(e).'
				}
			)
		}

	}

	return (
		<Card>
			<CardHeader className="flex flex-row flex-nowrap justify-between items-start">
				<div>
					<CardTitle className="flex flex-nowrap items-center gap-x-2">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
							<path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
						</svg>

						Salle d'attente
					</CardTitle>
					<CardDescription className="ml-8 mt-2">Tous les patients qui se trouvent dans la salle d'attente</CardDescription>
				</div>
				<Form {...form}>
					<form>
						<FormField
							control={form.control}
							name="patient"
							render={() => (
								<FormItem >
									<FormControl>
										<SelectPatientDialog trigger={
											<Button size="sm" className="flex items-center text-white flex-nowrap gap-x-2 dark:bg-secondary">
												<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
													<path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
												</svg>
												Ajouter patient
											</Button>
										} onConfirm={handlePatientSelectionConfirm} />
									</FormControl>
								</FormItem>
							)}
						/>
					</form>
				</Form>
			</CardHeader>
			<CardContent className="px-14">
				<DataTable columns={columns} data={patients} />
			</CardContent>
		</Card>
	);
}