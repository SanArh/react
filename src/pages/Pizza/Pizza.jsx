import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Pizza = () => {
  const [pizza, setPizza] = useState();
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`https://62e395043c89b95396cb6c94.mockapi.io/items/g${params.id}`)
      .then(({ data }) => setPizza(data))
      .catch((err) => {
        alert(err.message);
        navigate('/');
      });
  }, []);
  return <div>{params.id}</div>;
};

export default Pizza;
