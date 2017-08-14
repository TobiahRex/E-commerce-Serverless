export default function checkForNotifications({
  error,
  warning,
  success,
  message,
}) {
  if (error || warning || success) return message;
  return '';
}
