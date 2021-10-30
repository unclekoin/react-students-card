import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-6 offset-md-3 d-flex flex-column justify-content-center p-5 shadow">
          <h1 className="text-center">Students Card</h1>
          <div className="mb-3 text-center">No data available</div>
          <Link to="/edit" className="btn btn-primary">
            Create
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
