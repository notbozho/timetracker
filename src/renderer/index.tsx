import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(<App />);

window.electron.ipcRenderer.on('window-blur', (arg) => {
  // eslint-disable-next-line no-console
  console.log('blur ', arg);
});

window.electron.ipcRenderer.on('window-focus', (arg) => {
  // eslint-disable-next-line no-console
  console.log('focus ', arg);
});

// calling IPC exposed from preload script
window.electron.ipcRenderer.once('ipc-example', (arg) => {
  // eslint-disable-next-line no-console
  console.log(arg);
});
window.electron.ipcRenderer.sendMessage('ipc-example', ['ping']);
