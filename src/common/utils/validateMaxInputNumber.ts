const validateMaxInputNumber = (e: any, max: number) => {
  e.target.value = e.target.value.slice(0, max).replaceAll('.', '');
  return e;
}

export { validateMaxInputNumber }
