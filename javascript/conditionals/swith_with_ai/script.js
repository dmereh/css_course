function getSchoolYearFromAge(age) {
  switch (age) {
    case 0:
    case 1:
    case 2:
    case 3:
      return "Too young for school";
      break;

    case 4:
      return "Reception (Early Years Foundation Stage)";
      break;

    case 5:
      return "Year 1";
      break;
    case 6:
      return "Year 2";
      break;
    case 7:
      return "Year 3";
      break;
    case 8:
      return "Year 4";
      break;
    case 9:
      return "Year 5";
      break;
    case 10:
      return "Year 6";
      break;
    case 11:
      return "Year 7";
      break;
    case 12:
      return "Year 8";
      break;
    case 13:
      return "Year 9";
      break;
    case 14:
      return "Year 10";
      break;
    case 15:
      return "Year 11 (GCSEs)";
      break;
    case 16:
      return "Year 12 (Sixth Form / College - AS Level)";
      break;
    case 17:
      return "Year 13 (Sixth Form / College - A2 Level)";
      break;
    case 18:
      return "University (Undergraduate Year 1)";
      break;
    case 19:
      return "University (Undergraduate Year 2)";
      break;
    case 20:
      return "University (Undergraduate Year 3)";
      break;
    default:
      if (age > 20) {
        return "Postgraduate or adult learner";
      } else {
        return "Invalid age";
      }
      break;
  }
}

function findSchoolYear() {
  const ageInput = document.getElementById("ageInput").value;
  const age = parseInt(ageInput);
  const result = document.getElementById("result");

  if (isNaN(age)) {
    result.textContent = "Please enter a valid number.";
  } else {
    result.textContent = getSchoolYearFromAge(age);
  }
}
