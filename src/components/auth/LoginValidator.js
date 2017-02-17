import _ from 'lodash';

const validate = values => {
  const errors = {}

  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.username)) {
    errors.username = 'Invalid email address'
  }
  
  if (_.isEmpty(values.password) || values.password < 3) {
    errors.username = 'Password must be at least 3 characters'
  }

  return errors
}

export default validate;