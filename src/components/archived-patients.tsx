import {Card, CardContent, CardFooter} from "@/components/ui/card.tsx";
import {DataTable} from "@/components/data-table.tsx";
import {columns} from "@/components/data-table-columns/archived-patients-columns.tsx";
import {patients} from "@/data/patients-data.ts";

export default function ArchivedPatients() {
	return <Card>
		<CardContent>
			<DataTable columns={columns} data={patients} />
		</CardContent>
		<CardFooter className="text-sm text-foreground/60 text-center block">Ces patients sont archivés</CardFooter>
	</Card>
}