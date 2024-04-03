import {ResizableHandle, ResizablePanel, ResizablePanelGroup} from "@/components/ui/resizable.tsx";
import Sidebar from "@/components/sidebar.tsx";
import {ModeToggle} from "@/components/Theme/mode-toggle.tsx";
import {UserNav} from "@/components/user-nav.tsx";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {DataTable} from "@/components/data-table.tsx";
import {columns} from "@/components/data-table-columns/patients-waiting-room-columns.tsx";
import {patients} from "@/data/patients-data.ts";
import PatientsDialog from "@/components/patients-dialog.tsx";



export default function WaitingRoomPage() : JSX.Element {

	// const [patientsState, setPatientsState] = useState(patients);


	return (
		<main className="w-full">
			<ResizablePanelGroup direction="horizontal">
				<ResizablePanel defaultSize={20}>
					<Sidebar />
				</ResizablePanel>
				<ResizableHandle withHandle />
				<ResizablePanel  defaultSize={80}>
					<div className="flex-col flex">
						<div className="border-b">
							<div className="flex h-16 items-center px-4">
								<div className="ml-auto flex items-center space-x-4">
									<ModeToggle />
									<UserNav />
								</div>
							</div>
						</div>
						<div className="flex-1 space-y-4 p-8 pt-6">
							<Card>
								<CardHeader className="flex flex-row flex-nowrap justify-between items-start">
									<div>
										<CardTitle className="flex flex-nowrap items-center gap-x-2">
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
												<path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
											</svg>

											Salle d'attente
										</CardTitle>
										<CardDescription className="ml-8 mt-2">Tous les patients qui se trouvent dans la salle d'attente</CardDescription>
									</div>
									<PatientsDialog />
								</CardHeader>
								<CardContent className="px-14">
									<DataTable columns={columns} data={patients} />
								</CardContent>
							</Card>
						</div>
					</div>
				</ResizablePanel>
			</ResizablePanelGroup>
		</main>
	);
}