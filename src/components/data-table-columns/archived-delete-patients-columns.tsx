import {ColumnDef} from "@tanstack/react-table";
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

interface columnsProps {
	actionsCell: JSX.Element
}

export function columns({actionsCell} : columnsProps): ColumnDef<Patient>[] {
	return [
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
					actionsCell
				)
			},
		},

	]
}