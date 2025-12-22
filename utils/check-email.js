export function isValidEmail(email) {
  // Relaxed email validation to accept any standard email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};