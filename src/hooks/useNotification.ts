import {useEffect, useState} from "react";

import { useToast } from "@/components/ui/use-toast"
interface UseNotificationProps {
	initValue: boolean;
}

export const useNotification = ({initValue}: UseNotificationProps) => {

	const { toast } = useToast()
	const [notificationIsRead, setNotificationIsRead] = useState<boolean>(initValue);

	useEffect(() => {
		// TODO - change its value in the database
	}, [notificationIsRead]);


	const toggleNotificationRead = () => setNotificationIsRead(!notificationIsRead);
	const deleteNotification = () => {
		// TODO - delete notification from database
		// if status code == 200? then render toast() bellow

		toast({
			variant: "default",
			description: "Notification deleted",
			className: "text-destructive px-4 py-3.5",
		})


	}



	return {notificationIsRead, toggleNotificationRead, deleteNotification};

}