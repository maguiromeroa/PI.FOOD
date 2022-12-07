export const validate = (form) => {
  let errors = {};

  const validURL = (str) => {
    var pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // fragment locator
    return !!pattern.test(str);
  };

  switch (true) {
    case !form.name || form.name.length < 3 || !/^[a-zA-Z\s]+$/.test(form.name):
      errors.name = "Name is required (can't be a number)";
      break;

    case form.healthScore < 0 || form.healthScore > 100:
      errors.healthScore = "Health score must be between 0 and 100.";
      break;

    case !/^\d+$/.test(form.healthScore):
      errors.healthScore = "Health score must be a number";
      break;

    case form.image && !validURL(form.image):
      errors.image = "Invalid URL.";
      break;

    case form.diets.length < 1:
      errors.diets = "Diet type is required";
      break;

    case !form.summary || form.summary.length < 10:
      errors.summary = "Summary is required";
      break;

    case !form.steps || form.steps.length < 10:
      errors.steps = "Steps are required";
      break;

    default:
      break;
  }
  return errors;
};

export default validate;
