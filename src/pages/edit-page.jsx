import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import InputField from '../components/input-field';

const EditPage = () => {
  const history = useHistory();
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    yearOfBirth: 2021,
    portfolio: '',
  });

  const handleChange = ({ target }) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-6 offset-md-3 p-5 shadow">
          <form onSubmit={handleSubmit}>
            <h1 className="text-center">Create Card</h1>
            <InputField
              label="First Name"
              name="firstName"
              value={data.firstName}
              onChange={handleChange}
            />
            <InputField
              label="Last Name"
              name="lastName"
              value={data.lastName}
              onChange={handleChange}
            />
            <InputField
              label="Year Of Birth"
              type="number"
              name="yearOfBirth"
              value={data.yearOfBirth}
              onChange={handleChange}
            />
            <InputField
              label="Portfolio"
              name="portfolio"
              value={data.portfolio}
              onChange={handleChange}
            />
            <button
              onClick={() => history.goBack()}
              className="btn btn-primary"
            >
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditPage;
