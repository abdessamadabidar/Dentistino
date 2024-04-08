import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {DataTable} from "@/components/data-table.tsx";
import {columns} from "@/components/data-table-columns/patients-waiting-room-columns.tsx";
import {patients} from "@/data/patients-data.ts";
import SelectPatientDialog from "@/components/select-patient-dialog.tsx";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {Form, FormControl, FormField, FormItem} from "@/components/ui/form.tsx";
import {useEffect} from "react";
import {useToast} from "@/components/ui/use-toast";


const FormSchema = z.object({
	patientId: z.number({
		required_error: "Veuillez sélectionner un patient.",
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
		console.log (data.patientId + " submitted")
	};


	useEffect(() => {
		if (errors.patientId) {
			toast({
				variant: "destructive",
				description: `${errors.patientId?.message}`,
			})
		}

	}, [errors.patientId]);

	const handlePatientSelectionConfirm = (id: number | undefined) => {
		if (id) {
			form.setValue( "patientId", id);
			form.handleSubmit(onSubmit)();
		}
		else {
			form.setError(
				'patientId',
				{
					type: 'required',
					message: 'Veuillez sélectionner un patient.'
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
							name="patientId"
							render={() => (
								<FormItem >
									<FormControl>
										<SelectPatientDialog onConfirm={handlePatientSelectionConfirm} />
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