// Simple function declaration
function _calculateArea(width, height) {
  return width * height;
}

// Arrow function with template literals
const _greet = (name) => {
  console.log(`Hello, ${name}!`);
  return true;
};

// Class definition
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.createdAt = new Date();
  }

  getInfo() {
    return {
      name: this.name,
      email: this.email,
      age: this.age || "Not specified",
    };
  }

  static createGuest() {
    return new User("Guest", "guest@example.com");
  }
}

// Async/await example
async function _fetchUserData(userId) {
  try {
    const response = await fetch(`https://api.example.com/users/${userId}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
}

// Array methods and destructuring
const numbers = [1, 2, 3, 4, 5];
const [_first, _second, ..._rest] = numbers;
const _doubled = numbers.map((n) => n * 2);
const _sum = numbers.reduce((total, current) => total + current, 0);

// Object with different value types
const config = {
  apiKey: "abc123xyz789",
  isProduction: false,
  maxRetries: 3,
  timeout: 5000,
  callbacks: {
    onSuccess: () => console.log("Success!"),
    onError: (err) => console.error(`Error: ${err.message}`),
  },
  validStatus: [200, 201, 204],
};

// Conditional (ternary) operator
const _userRole = config.isProduction ? "admin" : "developer";

// Regular expressions
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const _isValidEmail = emailRegex.test("sam@example.com");

// Switch statement
function getStatusMessage(code) {
  switch (code) {
    case 200:
      return "OK";
    case 404:
      return "Not Found";
    case 500:
      return "Server Error";
    default:
      return "Unknown Status";
  }
}
