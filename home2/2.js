function daysUntilFriday() {
    const today = new Date();
    const currentDay = today.getDay(); 
    const daysUntilFriday = (5 - currentDay + 7) % 7;
    return daysUntilFriday;
  }
  const daysRemaining = daysUntilFriday();
  console.log(`Number of days until Friday: ${daysRemaining}`);