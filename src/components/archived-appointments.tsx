import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {DataTable} from "@/components/data-table.tsx";
import {columns} from "@/components/data-table-columns/archived-appointment-columns.tsx";
import {appointments} from "@/data/appointments-data.ts";

export default function ArchivedAppointments() {

	return (
		<Card>
			<CardHeader className="space-y-2">
				<CardTitle className="flex flex-nowrap items-center gap-x-2">
					<div className="flex items-center gap-x-2">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
							<path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"/>
						</svg>
						<span className="text-lg">Archive des rendez-vous</span>
					</div>
				</CardTitle>
				<CardDescription>Tous les archives des rendez-vous des patients</CardDescription>
			</CardHeader>
			<CardContent>
				<DataTable columns={columns} data={appointments} />
			</CardContent>
			<CardFooter className="text-sm text-foreground/60 text-center block">Ces rendez-vous sont archivés</CardFooter>
		</Card>
	)
}