import {ResizableHandle, ResizablePanel, ResizablePanelGroup} from "@/components/ui/resizable";
import Sidebar from "@/components/sidebar.tsx";
import {ModeToggle} from "@/components/Theme/mode-toggle";
import {UserNav} from "@/components/user-nav";
import AddNewPatientForm from "@/components/add-new-patient-form.tsx";






export default function AddPatientPage(): JSX.Element {



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
							<AddNewPatientForm />
						</div>
					</div>
				</ResizablePanel>
			</ResizablePanelGroup>
		</main>
	);
}