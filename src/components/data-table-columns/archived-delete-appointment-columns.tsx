import {ColumnDef} from "@tanstack/react-table";
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

interface columnsProps {
	actionsCell: JSX.Element
}
export function columns({ actionsCell} : columnsProps) : ColumnDef<Appointment>[] {
	return [

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
					actionsCell
				)
			},
		},

	]
}