import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from "@/components/ui/dialog.tsx";
import {Button} from "@/components/ui/button.tsx";

import {ScrollArea} from "@/components/ui/scroll-area.tsx";
import {ToggleGroup, ToggleGroupItem} from "@/components/ui/toggle-group.tsx";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.tsx";
import {CheckIcon} from "lucide-react";
import {cn} from "@/lib/utils.ts";
import Search from "@/components/search.tsx";
import {ReactNode, useState} from "react";
import {patients, Patient} from "@/data/patients-data.ts";

interface SelectPatientDialogProps {
	trigger: ReactNode,
	onConfirm: (patient: Patient | undefined) => void
}

export default function SelectPatientDialog({onConfirm, trigger}: SelectPatientDialogProps) {

	const [selectedPatient, setSelectedPatient] = useState<Patient | undefined>(undefined)
	const [filteredPatients, setFilteredPatients] = useState(patients);
	const handleModalSearchInputChange = (query: string) => {
		setFilteredPatients(patients
			.filter((patient) =>
				patient.firstName.toLowerCase().includes(query.toLowerCase()) ||
				patient.lastName.toLowerCase().includes(query.toLowerCase())
			)
		)
	}



	return (
		<Dialog>
			<DialogTrigger asChild>
				{trigger}
			</DialogTrigger>
			<DialogContent className="sm:max-w-md">
				<DialogHeader>
					<DialogTitle>Sélectionner un(e) patient(e)</DialogTitle>
					<DialogDescription>
						Vous pouvez chercher un patient par son nom
					</DialogDescription>
				</DialogHeader>
				<Search placeholder="Recherche patient..." onChange={handleModalSearchInputChange} />
				<div >
					<ScrollArea className="max-h-[400px]">
						<ToggleGroup
							className="w-full block space-y-2" type="single"
							onValueChange={(value) => {
								if(value) {
									setSelectedPatient(JSON.parse(value))
								}
							}}
						>
							{filteredPatients.map((patient) => (
								<ToggleGroupItem
									variant="outline"
									className="w-full h-full"
									key={patient.id}
									value={JSON.stringify(patient!)}
									aria-label={`Toggle ${patient.id}`}
								>
									<div className="w-full flex items-center py-3">
										<Avatar className="size-9">
											<AvatarImage src="/avatars/04.png" alt="Avatar" />
											<AvatarFallback>
												{patient.firstName.charAt(0).toUpperCase()}{patient.lastName.charAt(0).toUpperCase()}
											</AvatarFallback>
										</Avatar>
										<div className="ml-4 space-y-1">
											<p className="text-sm text-start font-medium leading-none">{patient.firstName} {patient.lastName}</p>
											<p className="text-xs text-start text-muted-foreground">
												{patient.registeredDate}
											</p>
										</div>
									</div>
									<CheckIcon
										className={cn(
											"ml-auto h-4 w-4",
											selectedPatient?.id === patient.id ? "opacity-100" : "opacity-0"
										)}
									/>
								</ToggleGroupItem>
							))}
						</ToggleGroup>
					</ScrollArea>
				</div>
				<DialogFooter className="justify-end mt-5">
					<DialogClose asChild>
						<div className="items-center space-x-2">
							<Button size="sm" variant="outline" type="button">Close</Button>
							<Button size="sm" type="button" className="dark:bg-secondary dark:text-white" onClick={() => {
								onConfirm(selectedPatient)
								setSelectedPatient(undefined)
							}}>
								Confirmer
							</Button>
						</div>
					</DialogClose>
				</DialogFooter>

			</DialogContent>
		</Dialog>
	)
}