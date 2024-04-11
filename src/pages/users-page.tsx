import {AppUsersCard} from "@/components/app-users-card.tsx";

import {users, roles} from "@/data/users.ts";

export default function UsersPage() {
    return (
        <AppUsersCard users={users} roles={roles}/>
    )
}