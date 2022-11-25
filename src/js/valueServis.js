export function normalizedValue(event) {
  const value = event.target.elements[0].value;
  console.log(value);
  return value.trim().toLowerCase();
}
