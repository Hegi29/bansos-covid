const enumToArray = (data: any) => {
  let id = 0;

  return Object.values(data)
    .filter((item) => isNaN(Number(item)))
    .map((name) => {
      id++;

      return {
        id,
        name,
      };
    });
}

export { enumToArray }
