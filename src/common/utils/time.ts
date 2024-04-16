export const timetoSec = (time: string) => {
  const [hours = "0", minutes = "0", seconds = "0"] = time.split(":");

  const hoursToSec = Number(hours) * 3600;
  const minutesToSec = Number(minutes) * 60;

  return hoursToSec + minutesToSec + Number(seconds);
};
