const validateMaxInputNumber = (e: any, max: number) => {
  e.target.value = e.target.value.slice(0, max);
  return e;
}

export { validateMaxInputNumber }
