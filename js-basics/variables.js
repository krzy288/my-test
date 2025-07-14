// test-case-generator.js

const features = [
  "Login",
  "Search",
  "Checkout",
  "Profile Update",
  "Password Reset"
];

const actions = [
  "works with valid input",
  "fails with empty fields",
  "handles special characters",
  "redirects on success",
  "shows proper error messages"
];

// Function to generate a random item from an array
function getRandomItem(arr) {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

// Function to generate a random test case
function generateTestCase() {
  const id = `TC-${Math.floor(1000 + Math.random() * 9000)}`;
  const feature = getRandomItem(features);
  const action = getRandomItem(actions);

  return `${id}: Verify that ${feature} ${action}.`;
}

// Generate and print 5 random test cases
for (let i = 0; i < 5; i++) {
  console.log(generateTestCase());
}
