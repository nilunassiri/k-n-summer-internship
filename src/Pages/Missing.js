import React from "react";
import { Link } from "react-router-dom";

const Missing = () => {
  return (
    <main className="Missing">
      <h2>Order Not Found</h2>
      <p>The order you are looking for doesn't exit...</p>
      <p>
        <Link to='/'>Go Back to HomePage</Link>
      </p>
    </main>
  );
};

export default Missing;
