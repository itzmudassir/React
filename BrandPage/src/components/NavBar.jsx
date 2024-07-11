import React from "react";

function NavBar() {
  return (
    <div>
      <nav>
        <div>
          <img src="/images/brand_logo.png"></img>
        </div>
        <div>
          <ul>
            <li>Home</li>
            <li>Location</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <button>Login</button>
        </div>
      </nav>
      
    </div>
  );
}

export default NavBar;
