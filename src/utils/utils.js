/**
 * 6+ characters
 * Valid email
 * @param {string} email The email id
 */
export const isValidEmail = (email) => {
  let error = '';
  let status = true;
  // eslint-disable-next-line
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.length < 6) {
    status = false;
    error = 'Email should be minimum of 6 characters';
  } else if (!re.test(email.toLowerCase())) {
    status = false;
    error = 'The email id is not valid';
  }

  return { status, error };
};

/**
 * Min 6 character
 * Should have one uppercase
 * @param {string} password The password
 */
export const isValidPassword = (password) => {
  let error = '';
  let status = true;
  if (password.length < 6) {
    status = false;
    error = 'Password should be minimum of 6 characters';
  } else if (!password.split('').filter((a) => a >= 'A' && a <= 'Z').length) {
    status = false;
    error = 'Password should have atleast one uppercase letter';
  }

  return { status, error };
};
