import useSound from 'use-sound';

const notificationSound = 'https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3';

export const playNotificationSound = () => {
  const audio = new Audio(notificationSound);
  audio.play().catch(error => console.error('Error playing sound:', error));
};

export const useNotificationSound = () => {
  const [play] = useSound(notificationSound, { volume: 0.5 });
  return play;
};