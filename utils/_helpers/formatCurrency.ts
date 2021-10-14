export function formatCurrency(amount: any, currencyCode: string, quantity?: number) {
  const q = quantity ?? 1

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currencyCode,
  }).format(Number(amount) * q)
}
