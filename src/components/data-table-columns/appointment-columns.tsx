import {ColumnDef} from "@tanstack/react-table";
import {
	DropdownMenu,
	DropdownMenuContent, DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.tsx";
import {Button} from "@/components/ui/button.tsx";
import {DataTableColumnHeader} from "@/components/data-table-column-header.tsx";



type Appointment = {
	id: number,
	patientFirstName: string,
	patientLastName: string,
	allocationDate: string,
	appointmentDate: string,
	status: string,
}

export const columns: ColumnDef<Appointment>[] = [

	{
		accessorKey: "patientFirstName",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Prénom" />
		),
	},
	{
		accessorKey: "patientLastName",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Nom" />
		),
	},
	{
		accessorKey: "status",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Status" />
		),
	},
	{
		accessorKey: "allocationDate",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Date d'attribution" />
		),
	},
	{
		accessorKey: "appointmentDate",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Date de rendez-vous" />
		),
	},
	{
		id: "actions",
		cell: () => {

			return (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
				<Button variant="ghost" className="h-8 w-8 p-0 focus-visible:ring-offset-0 focus-visible:ring-0">
					<span className="sr-only">Ouvrir le menu</span>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
						<path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
					</svg>
				</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end">
					<DropdownMenuItem className="flex items-center gap-x-2">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
							<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
						</svg>
						Patient
					</DropdownMenuItem>
					<DropdownMenuItem className="flex items-center gap-x-2">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-4">
							<path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 1 0-9 9m0-14v3.764a2 2 0 0 0 1.106 1.789L16 14m3 2v3m0 3v-3m0 0h-3m3 0h3"></path>
						</svg>
						Ajouter à la salle d'attente
					</DropdownMenuItem>

					<DropdownMenuItem className="flex items-center gap-x-2">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
							<path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
						</svg>
						Modifier
					</DropdownMenuItem>
					<DropdownMenuSeparator />
					<DropdownMenuItem className="text-destructive focus:text-destructive flex items-center gap-x-2">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
							<path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
						</svg>
						Annuler
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		)
		},
	},

]