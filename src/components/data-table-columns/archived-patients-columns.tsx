import {ColumnDef} from "@tanstack/react-table";
import {
	DropdownMenu,
	DropdownMenuContent, DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.tsx";
import {Button} from "@/components/ui/button.tsx";
import {DataTableColumnHeader} from "@/components/data-table-column-header.tsx";
import {Badge} from "@/components/ui/badge.tsx";
import {cn} from "@/lib/utils.ts";


type Patient = {
	id: number,
	firstName: string,
	lastName: string,
	phone: string,
	status: "servi" | "en cours",
	registeredDate: string,
}


export const columns: ColumnDef<Patient>[] = [

	{
		accessorKey: "firstName",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Prénom" />
		),
	},
	{
		accessorKey: "lastName",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Nom" />
		),
	},
	{
		accessorKey: "phone",
		header: 'Téléphone'
	},
	{
		accessorKey: "status",
		header: 'Status',
		cell: props => <Badge variant="outline" className={cn(props.getValue() === 'servi'? "bg-green-200 dark:bg-green-400 text-green-700 dark:text-white" : "bg-blue-200 dark:bg-blue-400 text-blue-700 dark:text-white", "whitespace-nowrap border-0")} >{`${props.getValue()}`}</Badge>
	},
	{
		accessorKey: "registeredDate",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Date d'inscription" />
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
						<DropdownMenuItem className="flex items-center gap-x-1">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
								<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
							</svg>
							Informations
						</DropdownMenuItem>
						<DropdownMenuItem className="flex items-center gap-x-1">
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
						<DropdownMenuSeparator />
						<DropdownMenuItem className="text-destructive focus:text-destructive flex items-center gap-x-1">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
								<path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
							</svg>
							Supprimer
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			)
		},
	},

]