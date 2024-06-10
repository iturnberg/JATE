const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  // Store the event so it can be triggered later
  window.deferredPrompt = event;
  // Update UI to show install button
  butInstall.disabled = false;
});

// Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
  // Show the install prompt
  window.deferredPrompt.prompt();
  // Wait for the user to respond to the prompt
  const { outcome } = await window.deferredPrompt.userChoice;
  // Reset the deferred prompt variable
  window.deferredPrompt = null;
  // Update UI to show that the app is installed
  butInstall.disabled = true;
});

// Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  // Update UI to show that the app is installed
  butInstall.disabled = true;
});