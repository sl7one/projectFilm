export function normalizedValue(event) {
  const value = event.target.elements[0].value;
  return value.trim().toLowerCase();
}
