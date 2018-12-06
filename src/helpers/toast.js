import { notify } from 'react-notify-toast';

export const successMessage = message => notify.show(message, 'success', 2000);
export const errorMessage = message => notify.show(message, 'error', 2000);
