const verifyPassword = (password) => {
  if (!Array.isArray(password)) {
    throw new Error("Invalid password");
  }

  if (password.length < 8) {
    throw new Error("Password must be at least 8 characters long");
  }

  if (password === null) {
    throw new Error("Password cannot be null");
  }

  if (!/[A-Z]/.test(password)) {
    throw new Error("Password must contain at least one uppercase letter");
  }
  if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password)) {
    throw new Error("Password must contain at least one uppercase letter");
  }
};

module.exports = { verifyPassword };
