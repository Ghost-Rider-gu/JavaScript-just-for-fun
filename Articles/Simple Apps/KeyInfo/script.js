const keyInfo = document.getElementById('key-info');

window.addEventListener('keydown', (event) => {
	keyInfo.innerHTML = `
	<div class="key-box">
      ${event.key === ' ' ? 'Space' : event.key}
      <small>Event.key</small>
    </div>
    <div class="key-box">
      ${event.keyCode}
      <small>Event.keyCode</small>
    </div>
    <div class="key-box">
      ${event.code}
      <small>Event.code</small>
    </div>
	`;
})
