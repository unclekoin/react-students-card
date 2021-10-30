export const validator = (data, config) => {
  const errors = {};
  const validate = (validateMethod, data, config) => {
    let statusValidate;
    switch (validateMethod) {
      case 'isRequired':
        statusValidate = !data.trim();
        break;
      case 'isLink': {
        const linkRegExp = /^http(s)?:\/\/\S+\.\S+/g;
        statusValidate = !linkRegExp.test(data);
        break;
      }
      case 'isCorrectYear': {
        statusValidate =
          Number(data) < config.startValue ||
          Number(data) >= new Date(Date.now()).getFullYear();
        break;
      }
      case 'min': {
        statusValidate = data.length < config.value;
        break;
      }
      default:
        break;
    }

    if (statusValidate) return config.message;
  };

  for (const fieldName in data) {
    for (const validateMethod in config[fieldName]) {
      const error = validate(
        validateMethod,
        data[fieldName],
        config[fieldName][validateMethod]
      );
      if (error && !errors[fieldName]) errors[fieldName] = error;
    }
  }
  return errors;
};
