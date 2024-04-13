
export type Notification = {
	title: string;
	subject: string;
	body: string;
	isRead: boolean;
	creation_date: string;
}
export const notifications: Notification[] = [
	{
		title: "New Message",
		subject: "You have a new message",
		body: "Hello, you have received a new message.",
		isRead: true,
		creation_date: "6 months ago",
	},
	{
		title: "Reminder",
		subject: "Reminder: Appointment Tomorrow",
		body: "Just a friendly reminder that you have an appointment tomorrow at 3:00 PM.",
		isRead: false,
		creation_date: "6 months ago",
	},
	{
		title: "Alert",
		subject: "Urgent: Payment Due",
		body: "This is an urgent notification to inform you that your payment is due tomorrow.",
		isRead: false,
		creation_date: "6 months ago",
	},
	{
		title: "Update",
		subject: "System Update Completed",
		body: "The scheduled system update has been successfully completed.",
		isRead: false,
		creation_date: "6 months ago",
	},
	{
		title: "Feedback",
		subject: "Feedback Request",
		body: "We would appreciate your feedback on your recent experience. Click here to complete a short survey.",
		isRead: true,
		creation_date: "6 months ago",
	},
]