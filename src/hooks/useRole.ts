import {useEffect, useState} from "react";
import {Role, User} from "@/components/app-users-card.tsx";


interface UseRoleProps {
	user: User;
}

export const useRole = ({user}: UseRoleProps) => {

	const [selectedRoles, setSelectedRoles] =
		useState<Set<string>>(new Set(user.roles.map((role: Role) => role.type)));



	useEffect(() => {
		console.log(selectedRoles)
	}, [selectedRoles]);



	const appendRole = (role: Role) : void => {
		setSelectedRoles(new Set([...selectedRoles, role.type]))
	}

	const removeRole = (role: Role) : void => {
		setSelectedRoles(new Set([...selectedRoles].filter((type) => type !== role.type)));
	}


	const roleIsChecked = (role: Role) : boolean => selectedRoles.has(role.type);

	return {selectedRoles, roleIsChecked, appendRole, removeRole};
}