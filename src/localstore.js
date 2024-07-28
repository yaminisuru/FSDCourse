import React, { useEffect } from "react";

function LocalStore() {
  useEffect(() => {
    // Setting items in localStorage
    localStorage.setItem("name", "ReactJs");
    localStorage.setItem("branch", "CS");
    
    // Retrieving items from localStorage
    const name = localStorage.getItem("name");
    const branch = localStorage.getItem("branch");
    console.log(name, branch);
  }, []);

  return (
    <div>
      <p>Check the console for localStorage values.</p>
    </div>
  );
}

export default LocalStore;
