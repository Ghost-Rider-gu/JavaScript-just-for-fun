const notificationButton = document.getElementById('notification-btn');
const notifications = document.getElementById('notifications');

const listOfNotifications = [
	'Your message has been sent',
	'Hello, how are you doing?',
	'Monday is the best day ever',
	'This thing about Monday, are you kidding me?',
	'Greeting people, this is Sheldon'
];

notificationButton.addEventListener('click', () => {
	const notification = document.createElement('div');
	notification.classList.add('notification');
	notification.innerText = getMessage();

	notifications.appendChild(notification);

	setTimeout(() => {
		notification.remove()
	}, 4000);
})

function getMessage() {
	const number = Math.floor(Math.random() * listOfNotifications.length);
	return listOfNotifications[number];
}
