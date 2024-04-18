import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {
	DropdownMenu, DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {Button} from "@/components/ui/button.tsx";
import {medicineTypes, Medicine, MedicineType} from "@/data/medicines.ts";
import {useMedicine} from "@/hooks/useMedicine.ts";
import {format} from "date-fns";

export default function CreateNewPrescriptionForm() {
	const {selectedMedicines, appendItem, removeItem, posologieIsChecked} = useMedicine()

	return (
		<Card className="w-[800px] mx-auto">
			<CardHeader>
				<CardTitle className="flex items-center flex-nowrap gap-x-2">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
						<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
					</svg>
					Générer une ordonnance
				</CardTitle>
				<CardDescription className="ml-1">Une fois la prescription créée, vous pourrez la retrouver dans le dossier médical du patient.</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="text-sm text-end italic">Chichaoua, Le {format(new Date(), 'd/MM/yyyy')}</div>
				<div>
					<DropdownMenu>
						<DropdownMenuTrigger className="focus-visible:outline-none">
							<Button variant="outline" className="flex items-center gap-x-1">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
									<path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
								</svg>
								Ajouter un médicament
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align={"start"} className="w-[300px]">
							<DropdownMenuLabel>Types de médicaments</DropdownMenuLabel>
							<DropdownMenuSeparator />
							{medicineTypes.map((medicineType: MedicineType, index: number) => (
								<DropdownMenuSub key={index}>
									<DropdownMenuSubTrigger>{medicineType.type}</DropdownMenuSubTrigger>
									<DropdownMenuSubContent className="w-[180px]">
										<DropdownMenuLabel>Médicaments</DropdownMenuLabel>
										{medicineType.medicines.map((medicine: Medicine, key: number) => (
											<DropdownMenuSub key={key}>
												<DropdownMenuSubTrigger>{medicine.name}</DropdownMenuSubTrigger>
												<DropdownMenuSubContent>
													<DropdownMenuLabel>Posologies</DropdownMenuLabel>
													{medicine.posologies.map((posologie: string, subKey: number) => (
														<DropdownMenuCheckboxItem
															key={subKey}
															checked={posologieIsChecked(medicine, posologie)}
															onCheckedChange={(checked) => checked ? appendItem(medicine.name, posologie) : removeItem(medicine.name, posologie)}
														>
															{posologie}
														</DropdownMenuCheckboxItem>
													))}
												</DropdownMenuSubContent>
											</DropdownMenuSub>
										))}
									</DropdownMenuSubContent>
								</DropdownMenuSub>
							))}

						</DropdownMenuContent>
					</DropdownMenu>
					<div className="mt-6 px-5 grid space-y-3 justify-center">
						{selectedMedicines.map((medicine: Medicine, key: number) => (
							medicine.posologies.map((posologie: string, subKey: number) => (
								<div key={key*subKey} className="grid grid-cols-6 text-sm gap-x-2">
									<div className="col-span-2 border rounded-lg px-3 py-2">{medicine.name}</div>
									<div className="col-span-3 border rounded-lg px-3 py-2">{posologie}</div>
									<Button  variant="outline" size="icon" className="col-span-1 dark:bg-secondary" onClick={() => {removeItem(medicine.name, posologie)}}>
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-destructive">
											<path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
										</svg>
									</Button>
								</div>
							))
						))}
					</div>
				</div>
				<div className="grid justify-end mt-5">
					<Button size="sm" className="shadow-none w-28 flex flex-nowrap items-center gap-x-1">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
							<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
						</svg>
						Générer
					</Button>
				</div>
			</CardContent>
		</Card>
	);
}