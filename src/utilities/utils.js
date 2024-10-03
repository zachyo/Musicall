export const totalTime = (arr) => {
  let val = 0;
  arr.forEach((element) => {
    val = element.duration + val;
  });
  return val;
  //return arr.reduce(
  //     (accumulatedTotal, song) =>
  //       accumulatedTotal + song.duration,
  //     0
  //   ),
};

export const getTime = (time) => {
  let mins = Math.floor(time / 60);
  let hr = 0;
  if (mins >= 60) {
    hr = Math.floor(mins / 60);
    mins = mins - 60;
  }
  if (hr > 0) {
    return `${hr}hr : ${mins}mins : ${`0${Math.floor(time % 60)}`.slice(
      -2
    )}secs`;
  } else return `${mins}mins : ${`0${Math.floor(time % 60)}`.slice(-2)}secs`;
};

export const getRandNum = () => {
  const randomNumbers = [];
  while (randomNumbers.length < 3) {
    const randomNumber = Math.floor(Math.random() * 10);
    if (!randomNumbers.includes(randomNumber)) {
      randomNumbers.push(randomNumber);
    }
  }
  return randomNumbers;
};

export const capitalizeText = (text) => {
  if (!text) return;
  const textToBeTransformed = text.toLowerCase();
  return (
    textToBeTransformed[0].toUpperCase() +
    textToBeTransformed.slice(1, textToBeTransformed.length)
  );
};