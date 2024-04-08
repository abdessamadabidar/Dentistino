import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover.tsx";
import {Button} from "@/components/ui/button.tsx";
import {cn} from "@/lib/utils.ts";
import {ToggleGroup, ToggleGroupItem} from "@/components/ui/toggle-group.tsx";
import {CheckIcon} from "lucide-react";
import {useEffect, useState} from "react";
import {Role, User} from "@/components/app-users-card.tsx";




interface RolesSelectionProps {
	user: User,
	roles: Role[],
}

export default function RolesSelection({user, roles}: RolesSelectionProps) {

	const [selectedRoles, setSelectedRoles] = useState<string[]>(user.roles.map((role) => role.type));

	useEffect(() => {
		console.log(selectedRoles)
	}, [selectedRoles]);

	return (
		<Popover>
			<PopoverTrigger>
				<Button variant="outline" className={cn(
					selectedRoles.length == 0 && 'text-muted-foreground',
					"ml-auto w-[110px] font-medium justify-between"
				)}>
					<p className="overflow-hidden text-ellipsi flex-1">
						{selectedRoles.length === 0 ? 'Aucun' : selectedRoles.map((role) => role.concat(", "))}
					</p>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 ml-1">
						<path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
					</svg>
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-[150px] p-1">
				<ToggleGroup
					type="multiple"
					size="sm"
					onValueChange={(value) => setSelectedRoles(value)}
				>
					<div className="w-full">
						{roles.map((role: Role, index: number) => (
							<ToggleGroupItem key={index} value={role.type} className="w-full cursor-default justify-between items-center">
								<p className="w-full text-start">{role.type}</p>
								<CheckIcon
									className={cn(
										"ml-auto h-4 w-4",
										selectedRoles.includes(role.type) ? "opacity-100" : "opacity-0"
									)}
								/>
							</ToggleGroupItem>
						))}
					</div>
				</ToggleGroup>
			</PopoverContent>
		</Popover>

	);
}