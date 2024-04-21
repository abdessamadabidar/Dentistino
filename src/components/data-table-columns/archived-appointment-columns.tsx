import {ColumnDef} from "@tanstack/react-table";
import {
	DropdownMenu,
	DropdownMenuContent, DropdownMenuItem,
	DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.tsx";
import {Button} from "@/components/ui/button.tsx";
import {DataTableColumnHeader} from "@/components/data-table-column-header.tsx";
import {Badge} from "@/components/ui/badge.tsx";
import {cn} from "@/lib/utils.ts";



type Appointment = {
	id: number,
	patientFirstName: string,
	patientLastName: string,
	appointmentDate: string,
	appointmentHour: string,
	status: string,
	motif: string,
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
		header: 'Status',
		cell: props =>
			<Badge variant="outline" className={cn(props.getValue() === 'reporté'? "bg-muted dark:bg-gray-700 text-gray-700 dark:text-white" : props.getValue() === 'en cours'? "bg-blue-200 dark:bg-blue-400 text-blue-700 dark:text-white" : props.getValue() === 'Absente'? "bg-red-200 dark:bg-red-400 text-red-700 dark:text-white" : props.getValue() === 'Passé' ? "bg-green-200 dark:bg-green-400 text-green-700 dark:text-white":"bg-amber-200 dark:bg-amber-400 text-amber-700 dark:text-white", "whitespace-nowrap border-0")} >{`${props.getValue()}`}</Badge>
	},
	{
		accessorKey: "motif",
		header: "Motif",
		cell: props => <p className="italic">{`${props.getValue()}`}</p>
	},
	{
		accessorKey: "appointmentDate",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Date" />
		),
	},
	{
		accessorKey: "appointmentHour",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Heure" />
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
						Informations
					</DropdownMenuItem>
					<DropdownMenuItem className="flex items-center gap-x-2">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
							<path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
						</svg>
						Modifier
					</DropdownMenuItem>
					<DropdownMenuItem className="flex items-center gap-x-2">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
							<path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
						</svg>
						Désarchiver
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		)
		},
	},

]