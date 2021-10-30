import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/card';

const HomePage = () => {
  const [data, setData] = useState();

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem('student')));
  }, []);

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-6 offset-md-3 d-flex flex-column justify-content-center p-5 shadow">
          <h1 className="text-center mb-4">Students Card</h1>
          {data ? (
            <Card {...data} />
          ) : (
            <div className="mb-3 text-center">No data available</div>
          )}

          <Link to="/edit" className="btn btn-primary">
            {data ? 'Edit' : 'Create'}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
