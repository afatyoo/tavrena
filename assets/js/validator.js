// Validasi input form
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function isValidPassword(pw) {
  return typeof pw === 'string' && pw.length >= 8;
}
