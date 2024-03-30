import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from "@/components/ui/avatar.tsx"
import {Badge} from "@/components/ui/badge.tsx";

export function NewPatients() {
	return (
		<div className="space-y-8">
			<div className="flex items-center">
				<Avatar className="h-9 w-9">
					<AvatarImage src="/avatars/01.png" alt="Avatar" />
					<AvatarFallback>OM</AvatarFallback>
				</Avatar>
				<div className="ml-4 space-y-1">
					<p className="text-sm font-medium leading-none">Olivia Martin</p>
					<p className="text-xs text-muted-foreground">
						01/01/2022 à 00:00:00
					</p>
				</div>
				<a className="ml-auto" href="#">
					<Badge variant="outline" className="flex flex-row items-center gap-x-1 hover:bg-muted">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
							<path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
							<path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
						</svg>
						voir
					</Badge>
				</a>

			</div>
			<div className="flex items-center">
				<Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
					<AvatarImage src="/avatars/02.png" alt="Avatar" />
					<AvatarFallback>JL</AvatarFallback>
				</Avatar>
				<div className="ml-4 space-y-1">
					<p className="text-sm font-medium leading-none">Jackson Lee</p>
					<p className="text-xs text-muted-foreground">
						01/04/2024 à 10:30:00
					</p>
				</div>
				<a className="ml-auto" href="#">
					<Badge variant="outline" className="flex flex-row items-center gap-x-1 hover:bg-muted">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
							<path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
							<path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
						</svg>
						voir
					</Badge>
				</a>
			</div>
			<div className="flex items-center">
				<Avatar className="h-9 w-9">
					<AvatarImage src="/avatars/03.png" alt="Avatar" />
					<AvatarFallback>IN</AvatarFallback>
				</Avatar>
				<div className="ml-4 space-y-1">
					<p className="text-sm font-medium leading-none">Isabella Nguyen</p>
					<p className="text-xs text-muted-foreground">
						01/04/2024 à 10:45:00
					</p>
				</div>
				<a className="ml-auto" href="#">
					<Badge variant="outline" className="flex flex-row items-center gap-x-1 hover:bg-muted">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
							<path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
							<path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
						</svg>
						voir
					</Badge>
				</a>
			</div>
			<div className="flex items-center">
				<Avatar className="h-9 w-9">
					<AvatarImage src="/avatars/04.png" alt="Avatar" />
					<AvatarFallback>WK</AvatarFallback>
				</Avatar>
				<div className="ml-4 space-y-1">
					<p className="text-sm font-medium leading-none">William Kim</p>
					<p className="text-xs text-muted-foreground">
						01/04/2024 à 11:45:00
					</p>
				</div>
				<a className="ml-auto" href="#">
					<Badge variant="outline" className="flex flex-row items-center gap-x-1 hover:bg-muted">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
							<path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
							<path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
						</svg>
						voir
					</Badge>
				</a>
			</div>
			<div className="flex items-center">
				<Avatar className="h-9 w-9">
					<AvatarImage src="/avatars/05.png" alt="Avatar" />
					<AvatarFallback>SD</AvatarFallback>
				</Avatar>
				<div className="ml-4 space-y-1">
					<p className="text-sm font-medium leading-none">Sofia Davis</p>
					<p className="text-xs text-muted-foreground">
						04/04/2024 à 10:45:00
					</p>
				</div>
				<a className="ml-auto" href="#">
					<Badge variant="outline" className="flex flex-row items-center gap-x-1 hover:bg-muted">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
							<path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
							<path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
						</svg>
						voir
					</Badge>
				</a>
			</div>
		</div>
	)
}