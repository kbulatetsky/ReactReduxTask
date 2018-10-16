export function validate(brewery) {
  const errors = {};
  if (brewery.name.length < 5)
  {
    errors.name = "Name should be more than 5 characters."
  }
  return errors;
}
