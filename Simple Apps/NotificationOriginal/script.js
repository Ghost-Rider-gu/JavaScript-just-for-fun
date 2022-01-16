const notificationButton = document.getElementById('notification-btn');

notificationButton.addEventListener('click', () => showBrowserNotification());

function showBrowserNotification() {
	if (window.Notification && Notification.permission !== "denied") {
		Notification.requestPermission((permission) => {
			if (permission === "granted") {
				var notification = new Notification('Greeting!!!', {
					body: 'This is an original notification for the browser',
					icon: 'icon.png'
				})
			}
		})
	}
}
