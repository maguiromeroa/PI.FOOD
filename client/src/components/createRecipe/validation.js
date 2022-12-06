export const validate= (form)=> {
    let errors = {};

    switch (true) {

      case !form.name || form.name.length < 3 || !/^[a-zA-Z\s]+$/.test(form.name):
        errors.name = "Name is required (can't be a number)";
        break;

      case  form.healthScore < 0 || form.healthScore > 100:
        errors.healthScore = "Health score must be between 0 and 100.";
        break;

        case !/^\d+$/.test(form.healthScore):
          errors.healthScore = "Health score must be a number";
          break;

      case form.diets.length < 1: errors.diets = "Diet type is required";
        break;

      case !form.summary || form.summary.length < 10:
        errors.summary = "Summary is required";
        break;

      case !form.steps || form.steps.length < 10: errors.steps = "Steps are required";
        break;

      default:
        break;
    }
    return errors;
  }

  export default validate