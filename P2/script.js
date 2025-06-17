const root = document.getElementById("root");

const loginForm = () => {
  const str = `
    <div class="card">
      <h3>Login</h3>
      <input type="text" placeholder="Email" class="input-box" /><br>
      <input type="password" placeholder="Password" class="input-box" /><br>
      <button onclick='showHome()'>Login</button>
      <p>Don't have an account? <a href="#" onclick='registerForm()'>Register here</a></p>
    </div>
  `;
  root.innerHTML = str;
};

const registerForm = () => {
  const str = `
    <div class="card">
      <h3>Create Account</h3>
      <input type="text" placeholder="Full Name" class="input-box" /><br>
      <input type="email" placeholder="Email" class="input-box" /><br>
      <input type="password" placeholder="Password" class="input-box" /><br>
      <input type="password" placeholder="Confirm Password" class="input-box" /><br>
      <button onclick='loginForm()'>Register</button>
      <p>Already have an account? <a href="#" onclick='loginForm()'>Login here</a></p>
    </div>
  `;
  root.innerHTML = str;
};

const showHome = () => {
  const str = `
    <div class="card">
      <h3>Welcome!</h3>
      <p>You have successfully logged in.</p>
      <button onclick='loginForm()'>Logout</button>
    </div>
  `;
  root.innerHTML = str;
};
