import {ColumnDef} from "@tanstack/react-table";
import {DataTableColumnHeader} from "@/components/data-table-column-header.tsx";
import {Laboratory} from "@/data/laboratories.ts";

interface columnsProps {
	actionsCell: JSX.Element
}
export function columns({actionsCell} : columnsProps) : ColumnDef<Laboratory>[] {
	return [
		{
			accessorKey: "laboratoryName",
			header: ({ column }) => (
				<DataTableColumnHeader column={column} title="Laboratoire" />
			),
		},
		{
			accessorKey: "patientFullName",
			header: ({ column }) => (
				<DataTableColumnHeader column={column} title="Patient" />
			),
		},
		{
			accessorKey: "sendDate",
			header: ({ column }) => (
				<DataTableColumnHeader column={column} title="Date d'envoi" />
			),
		},
		{
			accessorKey: "shade",
			header: ({ column }) => (
				<DataTableColumnHeader column={column} title="Teinte" />
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
