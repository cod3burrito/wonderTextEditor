const butInstall = document.getElementById('buttonInstall');
const textTitle = document.getElementById('textTitle');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    butInstall.style.visibility = 'visible';
    textTitle.textContent = 'Install this app?';

});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async (event) => {
    event.prompt();
    butInstall.setAttribute('hidden', true);
    butInstall.textContent = 'Installed!';
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    textTitle.textContent = 'Installed!';
    console.log('Installed!', event);
});
