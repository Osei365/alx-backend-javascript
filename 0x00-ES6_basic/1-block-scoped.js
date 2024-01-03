export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  /* block scope */
  if (trueOrFalse) {
    const task = true;
    const task2 = false;
  }

  /* unblock scope */
  return [task, task2];
}
