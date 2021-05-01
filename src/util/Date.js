export const alterInMs = (datum) => {
    const today = new Date();
    const todayInMS = Date.parse(today);
    const dateInMS = Date.parse(datum);
    const difference = dateInMS - todayInMS;
    return difference;
}


