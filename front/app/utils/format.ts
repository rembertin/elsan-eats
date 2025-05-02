export function formatPrice(
  price: number,
  currency: string = "EUR",
  locale: string = "fr-FR",
) {
  return price.toLocaleString(locale, {
    style: "currency",
    currency: currency,
  });
}
