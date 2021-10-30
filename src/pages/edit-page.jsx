import React, { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { validator } from '../utils/validator';
import InputField from '../components/input-field';

const EditPage = () => {
  const history = useHistory();
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    yearOfBirth: '',
    portfolio: '',
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const data = localStorage.getItem('student');
    if (data) {
      setData(JSON.parse(data));
    }
  }, []);

  const isDataInStorage = !!localStorage.getItem('student');

  const validatorConfig = {
    firstName: {
      isRequired: { message: 'First name is required' },
      min: {
        message: 'First name cannot be shorter than 3 characters',
        value: 3,
      },
    },
    lastName: {
      isRequired: { message: 'Last name is required' },
      min: {
        message: 'Last name cannot be shorter than 3 characters',
        value: 3,
      },
    },
    yearOfBirth: {
      isRequired: { message: 'Year of Birth is required' },
      isCorrectYear: {
        message: 'Year of birth was entered incorrectly',
        startValue: 1935,
      },
    },
    portfolio: {
      isRequired: { message: 'Portfolio is required' },
      isLink: { message: 'Portfolio must be a link' },
    },
  };

  const validate = () => {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return !Object.keys(errors).length;
  };

  const isValid = !Object.keys(errors).length;

  useEffect(() => {
    validate();
    // eslint-disable-next-line
  }, [data]);

  const handleChange = ({ target }) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;
    localStorage.setItem('student', JSON.stringify(data));
  };

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-6 offset-md-3 p-5 shadow">
          <form className="d-flex flex-column" onSubmit={handleSubmit}>
            <h1 className="text-center">
              {isDataInStorage ? 'Edit' : 'Create'} Card
            </h1>
            <InputField
              label="First Name"
              name="firstName"
              value={data.firstName}
              onChange={handleChange}
              error={errors.firstName}
            />
            <InputField
              label="Last Name"
              name="lastName"
              value={data.lastName}
              onChange={handleChange}
              error={errors.lastName}
            />
            <InputField
              label="Year Of Birth"
              type="number"
              name="yearOfBirth"
              value={data.yearOfBirth}
              onChange={handleChange}
              error={errors.yearOfBirth}
              max="2020"
              min="1935"
            />
            <InputField
              label="Portfolio"
              name="portfolio"
              value={data.portfolio}
              onChange={handleChange}
              error={errors.portfolio}
            />
            <div className="btn-group mt-3">
              <Link className="btn btn-secondary" to="/">
                Home
              </Link>
              <button
                onClick={() => history.goBack()}
                className="btn btn-primary"
                disabled={!isValid}
              >
                {isDataInStorage ? 'Edit' : 'Create'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditPage;
