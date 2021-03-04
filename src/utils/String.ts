export function isPassword(pwd: string): boolean {
  if (!pwd) return false;
  return pwd.length >= 4 && pwd.length <= 24 && /[A-Z]/.test(pwd) && /\d/.test(pwd);
}
