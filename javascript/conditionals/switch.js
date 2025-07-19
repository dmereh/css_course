function getSchoolYearFromAge(age) {
  switch (age) {
    case 0:
    case 1:
    case 2:
    case 3:
      return "Too young for school";

    case 4:
      return "Reception (Early Years Foundation Stage)";

    case 5:
      return "Year 1";
    case 6:
      return "Year 2";
    case 7:
      return "Year 3";
    case 8:
      return "Year 4";
    case 9:
      return "Year 5";
    case 10:
      return "Year 6";
    case 11:
      return "Year 7";
    case 12:
      return "Year 8";
    case 13:
      return "Year 9";
    case 14:
      return "Year 10";
    case 15:
      return "Year 11 (GCSEs)";
    case 16:
      return "Year 12 (Sixth Form / College - AS Level)";
    case 17:
      return "Year 13 (Sixth Form / College - A2 Level)";
    case 18:
      return "University (Undergraduate Year 1)";
    case 19:
      return "University (Undergraduate Year 2)";
    case 20:
      return "University (Undergraduate Year 3)";
    default:
      if (age > 20) {
        return "Postgraduate or adult learner";
      } else {
        return "Invalid age";
      }
  }
}
