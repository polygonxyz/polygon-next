export function valStr(str?: string) {
  if (!str) return false
  if (str && typeof str === 'string' && str.length > 0) return true
  return false
}
