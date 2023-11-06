import React, { useEffect, useState } from "react";

const User = ({ name }) => {


  return (
    <div className="user-card">
      <h2>Name: {name}</h2>
      <h2>Address: Ranchi</h2>
      <h2>Contact: 8083883555</h2>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Inc Func</button>
    </div>
  );
};

export default User;
