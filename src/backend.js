// backend.js
export const users = [
  { id: 1, type: "student", email: "student@example.com", password: "student123" },
  { id: 2, type: "vendor", email: "vendor@example.com", password: "vendor123" },
  { id: 3, type: "admin", email: "admin@example.com", password: "admin123" },
];

// Arrays to store reusable and disposable cups data
export const reusableCupsData = [];
export const disposableCupsData = [];

// Array to store uploaded images
export const uploadedImages = [];

// Function to authenticate user
export const authenticateUser = (email, password, userType) => {
  const user = users.find(
    (u) => u.email === email && u.password === password && u.type === userType
  );
  return user ? user : null;
};

// Function to add reusable cup data
export const addReusableCupData = (cupsUsed) => {
  reusableCupsData.push({ cupsUsed, timestamp: new Date() });
};

// Function to add disposable cup data
export const addDisposableCupData = (cupsUsed) => {
  disposableCupsData.push({ cupsUsed, timestamp: new Date() });
};

// Function to upload an image
export const uploadImage = (imageFile) => {
  const imageUrl = URL.createObjectURL(imageFile); // Create a URL for the uploaded file
  uploadedImages.unshift({ imageUrl, timestamp: new Date() }); // Add image to the beginning of the array
};