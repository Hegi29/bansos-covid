import { Reason } from 'enum/reason';

const enumReasonToArray = () => {
  let id = 0;

  return Object.values(Reason)
    .filter((item) => isNaN(Number(item)))
    .map((name) => {
      id++;

      return {
        id,
        name,
      };
    });
}

export { enumReasonToArray }
