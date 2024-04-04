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
import {useState} from "react";
import {patients} from "@/data/patients-data.ts";

interface SelectPatientDialogProps {
	onConfirm: (id: number | undefined) => void
}

export default function SelectPatientDialog({onConfirm}: SelectPatientDialogProps) {

	const [selectedPatientId, setSelectedPatientId] = useState<number | undefined>(undefined)
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
				<Button size="sm" className="flex items-center text-white flex-nowrap gap-x-2 dark:bg-secondary">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
						<path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
					</svg>
					Ajouter patient
				</Button>
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
							onValueChange={(value) => {setSelectedPatientId(Number(value))}}
						>
							{filteredPatients.map((patient) => (
								<ToggleGroupItem
									variant="outline"
									className="w-full h-full"
									key={patient.id}
									value={String(patient.id)}
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
											selectedPatientId === patient.id ? "opacity-100" : "opacity-0"
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
							<Button size="sm" variant="outline" type="button">
								Close
							</Button>
							<Button size="sm" type="button" className="dark:bg-secondary dark:text-white" onClick={() => {onConfirm(selectedPatientId)}}>
								Confirmer
							</Button>
						</div>
					</DialogClose>
				</DialogFooter>

			</DialogContent>
		</Dialog>
	)
}