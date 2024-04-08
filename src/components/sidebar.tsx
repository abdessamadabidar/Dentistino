import {Separator} from "@/components/ui/separator.tsx";
import UserRoleDialog from "@/components/user-role-dialog.tsx";

function Sidebar() {


	return (
		<>
			<div className="min-h-screen overflow-hidden">
				<div className="h-16 grid place-items-center border-b ">
					<div className="flex flex-row items-center gap-x-3">
						<div className="size-8">
							<img src="/LOGO.png" alt="" className="w-full h-full object-cover"/>
						</div>
						<span className="text-2xl font-semibold text-primary dark:text-secondary">Dentistino</span>
					</div>
				</div>
				<div className="flex flex-col gap-y-2 p-3">
					<a className="flex items-center flex-nowrap gap-x-2 font-medium text-sm px-3 py-2 bg-primary dark:bg-secondary/80 text-white rounded-md cursor-pointer">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
							<path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
						</svg>
						Patients
					</a>
					<a className="flex items-center flex-nowrap gap-x-2 font-medium text-sm px-3 py-2 rounded-md hover:bg-muted cursor-pointer">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
							<path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122" />
						</svg>
						<p className="hidden md:block">Tâches</p>
					</a>

					<a className="flex items-center flex-nowrap gap-x-2 font-medium text-sm px-3 py-2 rounded-md hover:bg-muted cursor-pointer">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
							<path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
						</svg>
						<p className="hidden md:block">Rendez-vous</p>
					</a>
					<a className="flex items-center flex-nowrap gap-x-2 font-medium text-sm px-3 py-2 rounded-md hover:bg-muted cursor-pointer">
						<svg className="size-5 text-foreground" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor">
							<path d="M12 12C15.866 12 19 8.86599 19 5H5C5 8.86599 8.13401 12 12 12ZM12 12C15.866 12 19 15.134 19 19H5C5 15.134 8.13401 12 12 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
							<path d="M5 2L12 2L19 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
							<path d="M5 22H12L19 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
						</svg>
						<p className="hidden md:block">Salle d'attente</p>
					</a>
					<a className="flex items-center flex-nowrap gap-x-2 font-medium text-sm px-3 py-2 rounded-md hover:bg-muted cursor-pointer">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
							<path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
						</svg>
						<p className="hidden md:block">Laboratoire</p>
					</a>
					<a className="flex items-center flex-nowrap gap-x-2 font-medium text-sm px-3 py-2 rounded-md hover:bg-muted cursor-pointer">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
							<path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
						</svg>
						<p className="hidden md:block">Notifications</p>
					</a>
					<a className="flex items-center flex-nowrap gap-x-2 font-medium text-sm px-3 py-2 rounded-md hover:bg-muted cursor-pointer">
						<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" className="size-5">
							<path fill="currentColor" d="M21 12.22C21 6.73 16.74 3 12 3c-4.69 0-9 3.65-9 9.28c-.6.34-1 .98-1 1.72v2c0 1.1.9 2 2 2h1v-6.1c0-3.87 3.13-7 7-7s7 3.13 7 7V19h-8v2h8c1.1 0 2-.9 2-2v-1.22c.59-.31 1-.92 1-1.64v-2.3c0-.7-.41-1.31-1-1.62"></path>
							<circle cx={9} cy={13} r={1} fill="currentColor"></circle>
							<circle cx={15} cy={13} r={1} fill="currentColor"></circle>
							<path fill="currentColor" d="M18 11.03A6.04 6.04 0 0 0 12.05 6c-3.03 0-6.29 2.51-6.03 6.45a8.075 8.075 0 0 0 4.86-5.89c1.31 2.63 4 4.44 7.12 4.47"></path>
						</svg>
						<p className="hidden md:block">Assistant</p>
					</a>
				</div>
				<Separator />
				<div className="flex flex-col gap-y-2 p-3">
					<div>
						<UserRoleDialog />
					</div>
					<a className="flex items-center flex-nowrap gap-x-2 font-medium text-sm px-3 py-2 rounded-md hover:bg-muted cursor-pointer">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="size-5">
							<g fill="none" stroke="currentColor" strokeWidth={3}>
								<path strokeLinejoin="round" d="M41 17H7a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h34a2 2 0 0 0 2-2V19a2 2 0 0 0-2-2ZM34 7H14v10h20z"></path>
								<path strokeLinecap="round" d="M19 29h10m-5-5v10"></path>
							</g>
						</svg>
						<p className="hidden md:block">Matériel médical</p>
					</a>
					<a className="flex items-center flex-nowrap gap-x-2 font-medium text-sm px-3 py-2 rounded-md hover:bg-muted cursor-pointer">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-5">
							<g fill="none" stroke="currentColor" strokeWidth={1.5}>
								<path d="M6 3.5c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C6.801 2 7.034 2 7.5 2h9c.466 0 .699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883s0 .699-.076.883a1 1 0 0 1-.541.54C17.199 5 16.966 5 16.5 5h-9c-.466 0-.699 0-.883-.076a1 1 0 0 1-.54-.541C6 4.199 6 3.966 6 3.5Z"></path>
								<path strokeLinecap="round" d="M4.5 18h15m-15-8h15M5.501 7.799l2.403-1.922c.543-.434.814-.652 1.136-.764C9.36 5 9.708 5 10.403 5h3.24c.7 0 1.051 0 1.375.115c.324.114.597.335 1.142.776l2.357 1.908A4 4 0 0 1 20 10.91v6.656a4 4 0 0 1-.912 2.543l-.359.435A4 4 0 0 1 15.642 22H8.957c-.571 0-.857 0-1.127-.037a4 4 0 0 1-2.153-1.008c-.201-.184-.384-.404-.75-.842A4 4 0 0 1 4 17.552v-6.63A4 4 0 0 1 5.501 7.8ZM12 12v4m-2-2h4"></path>
							</g>
						</svg>
						<p className="hidden md:block">Médicaments</p>
					</a>
					<a className="flex items-center flex-nowrap gap-x-2 font-medium text-sm px-3 py-2 rounded-md hover:bg-muted cursor-pointer">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
							<path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
						</svg>

						<p className="hidden md:block">Assurances</p>
					</a>
					<a className="flex items-center flex-nowrap gap-x-2 font-medium text-sm px-3 py-2 rounded-md hover:bg-muted cursor-pointer">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
							<path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
						</svg>
						<p className="hidden md:block">Archive</p>
					</a>
					<a className="flex items-center flex-nowrap gap-x-2 font-medium text-sm px-3 py-2 rounded-md hover:bg-muted cursor-pointer">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
							<path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
						</svg>
						<p className="hidden md:block">Corbeille</p>
					</a>

				</div>
			</div>
		</>
	)
}

export default Sidebar;
