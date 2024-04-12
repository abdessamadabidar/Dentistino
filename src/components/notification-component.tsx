import {cn} from "@/lib/utils.ts";
import {Notification} from "@/data/notifications.ts";
import {useNotification} from "@/hooks/useNotification.ts";


interface NotificationsProps {
	notification: Notification;
}

export default function NotificationComponent({notification}: NotificationsProps) {

	const {notificationIsRead, toggleNotificationRead, deleteNotification} = useNotification({initValue: notification.isRead})

	return (
		<div className={cn("border px-4 py-3 rounded-lg", notificationIsRead || "bg-muted")}>
			<div className="flex w-full flex-col gap-1 ">
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-2">
						<div className="font-semibold">{notification.title}</div>
						{notificationIsRead || <span className="flex h-2 w-2 rounded-full bg-blue-600" />}
					</div>
					<div className="flex items-center space-x-2">
						{notificationIsRead ? <button  className="size-5 hover:scale-95 transition-all duration-500" onClick={toggleNotificationRead}>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-blue-600">
								<path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z" />
							</svg>
						</button> : <button className="size-5 hover:scale-95 transition-all duration-500" onClick={toggleNotificationRead}>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 text-blue-600">
								<path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
								<path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
							</svg>
						</button>
						}
						<button className="size-5 hover:scale-95 transition-all duration-500" onClick={deleteNotification}>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-destructive">
								<path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
							</svg>
						</button>
					</div>

				</div>
				<div className="text-xs font-medium">{notification.subject}</div>
			</div>
			<div className="line-clamp-2 text-xs text-muted-foreground mt-2">{notification.body}</div>
		</div>
	)
}