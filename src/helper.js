export const isChecked = (id, numbers) => {
  // const numbers = ;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i].id === id && numbers[i].status === "checked") return true;
  }
  return false;
};

export const checkPair = (newCell, currentCell) => {
  console.log(newCell);
  console.log(currentCell);
  if (newCell.id !== currentCell.id && newCell.value === currentCell.value)
    return true;
  return false;
};
