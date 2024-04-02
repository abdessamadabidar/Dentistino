import {ColumnDef} from "@tanstack/react-table";
import {
	DropdownMenu,
	DropdownMenuContent, DropdownMenuItem,
	DropdownMenuLabel, DropdownMenuSeparator,
	DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.tsx";
import {Button} from "@/components/ui/button.tsx";
import {DataTableColumnHeader} from "@/components/data-table-column-header.tsx";

type Patient = {
	id: number,
	recordNo: string,
	firstName: string,
	lastName: string,
	status: "served" | "pending",
	gender: "Homme" | "Femme",
	registeredDate: string,
}


export const columns: ColumnDef<Patient>[] = [
	{
		accessorKey: "recordNo",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Email" />
		),
	},
	{
		accessorKey: "firstName",
		header: "Prénom"
	},
	{
		accessorKey: "lastName",
		header: "Nom"
	},
	{
		accessorKey: "status",
		header: "Status"
	},
	{
		accessorKey: "gender",
		header: "Sexe"
	},
	{
		accessorKey: "registeredDate",
		header: "Date d'inscription"
	},
	{
		id: "actions",
		cell: ({ row }) => {
			const patient = row.original

			return (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
				<Button variant="ghost" className="h-8 w-8 p-0 focus-visible:ring-offset-0 focus-visible:ring-0">
					<span className="sr-only">Open menu</span>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
						<path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
					</svg>
				</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end">
				<DropdownMenuLabel>Actions</DropdownMenuLabel>
				<DropdownMenuItem onClick={() => navigator.clipboard.writeText(patient.recordNo)}>Copier N°Dossier</DropdownMenuItem>
			<DropdownMenuSeparator />
			<DropdownMenuItem>View customer</DropdownMenuItem>
			<DropdownMenuItem>View payment details</DropdownMenuItem>
			</DropdownMenuContent>
			</DropdownMenu>
		)
		},
	},

]