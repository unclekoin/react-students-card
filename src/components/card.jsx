import React from 'react';
import { getAge } from '../utils/get-age';

const Card = ({ firstName, lastName, yearOfBirth, portfolio }) => {
  return (
    <div className="card fs-5 mb-4">
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <span className="fw-bold me-2">First Name:</span>
          {firstName}
        </li>
        <li className="list-group-item">
          <span className="fw-bold me-2">Last Name:</span>
          {lastName}
        </li>
        <li className="list-group-item">
          <span className="fw-bold me-2">Year Of Birth:</span>
          {yearOfBirth} ({getAge(yearOfBirth)} years old)
        </li>
        <li className="list-group-item">
          <span className="fw-bold me-2">Portfolio:</span>
          <a href={portfolio} target="_blank" rel="noreferrer">
            {portfolio}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Card;
