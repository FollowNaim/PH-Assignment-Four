function calculateTax(income, expenses) {
  if (expenses > income || income < 0 || expenses < 0) {
    return "Invalid Input";
  }

  const diff = income - expenses;

  const tax = diff * 0.2;

  return tax;
}

function sendNotification(email) {
  let count = 0;

  for (const sign of email) {
    if (sign.includes("@")) {
      count++;
    }
  }

  if (!email.includes("@") || count > 1) {
    return "Invalid Email";
  }

  const middle = email.indexOf("@");

  const userName = email.slice(0, middle);

  const domain = email.slice(middle + 1);

  return `${userName} sent you an email from ${domain}`;
}

function checkDigitsInName(name) {
  if (typeof name !== "string") {
    return "Invalid Input";
  }

  for (const value of name) {
    if (!isNaN(value)) {
      return true;
    }
  }

  return false;
}

function calculateFinalScore(obj) {
  const testScore = obj.testScore;

  const schoolGrade = obj.schoolGrade;

  const isFFamily = obj.isFFamily;

  if (testScore > 50 || schoolGrade > 30) {
    return "Invalid Input";
  }

  if (typeof obj !== "object" || Array.isArray(obj)) {
    return "Invalid Input";
  }

  const isFF = isFFamily ? 20 : 0;

  const totalScore = testScore + schoolGrade + isFF;

  return totalScore >= 80 ? true : false;
}

function waitingTime(waitingTimes, serialNumber) {
  if (!Array.isArray(waitingTimes) || typeof serialNumber !== "number") {
    return "Invalid Input";
  }

  let totalTime = 0;

  for (const time of waitingTimes) {
    totalTime += time;
  }

  const average = Math.round(totalTime / waitingTimes.length);

  const peopleLeft = serialNumber - waitingTimes.length - 1;

  const totalTimeLeft = peopleLeft * average;

  return totalTimeLeft;
}
