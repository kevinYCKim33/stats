// new Date(2020, 0, 15) /* Wed Jan 15 2020 00:00:00 GMT-0500 (Eastern Standard Time) {}  */

export const dateStringToDate = (dateString: string): Date => {
  // Football CSV date format: 28/10/2018
  const dateParts = dateString.split("/").map((value: string): number => {
    return parseInt(value);
  });

  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
