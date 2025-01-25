// backend.js
export const users = [
  { id: 1, type: "student", email: "student1@example.com", password: "student123", reusableCups: 0, points: 0 },
  { id: 2, type: "student", email: "student2@example.com", password: "student123", reusableCups: 0, points: 0 },
  { id: 3, type: "student", email: "student3@example.com", password: "student123", reusableCups: 0, points: 0 },
  { id: 4, type: "vendor", email: "vendor@example.com", password: "vendor123" },
  { id: 5, type: "admin", email: "admin@example.com", password: "admin123" },
];

export const reusableCupsData = []; // Stores reusable cup usage data
export const disposableCupsData = []; // Stores disposable cup usage data
export const uploadedImages = []; // Stores uploaded images
export const redeemedItems = []; // Stores redeemed items

// Redeemable items
export const redeemableItems = [
  { id: 1, name: "Coffee", pointsRequired: 1000 },
  { id: 2, name: "Tea", pointsRequired: 800 },
  { id: 3, name: "Snack", pointsRequired: 500 },
];

// Function to authenticate user
export const authenticateUser = (email, password, userType) => {
  const user = users.find(
    (u) => u.email === email && u.password === password && u.type === userType
  );
  return user ? user : null;
};

// Function to add reusable cup data for a specific student
export const addReusableCupData = (studentEmail, cupsUsed) => {
  const student = users.find((u) => u.type === "student" && u.email === studentEmail);
  if (student) {
    student.reusableCups += cupsUsed; // Update the student's reusable cup count
    student.points += cupsUsed * 2; // Add 2 points per reusable cup
  }
  reusableCupsData.push({ studentEmail, cupsUsed, timestamp: new Date() }); // Log the data
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

// Function to get top 3 students by reusable cup count
export const getTopStudents = () => {
  const students = users.filter((u) => u.type === "student");
  return students
    .sort((a, b) => b.reusableCups - a.reusableCups) // Sort by reusableCups in descending order
    .slice(0, 3); // Get top 3 students
};

// Function to redeem an item
export const redeemItem = (studentEmail, itemId, vendorEmail) => {
  const student = users.find((u) => u.type === "student" && u.email === studentEmail);
  const item = redeemableItems.find((i) => i.id === itemId);

  if (student && item && student.points >= item.pointsRequired) {
    student.points -= item.pointsRequired; // Deduct points
    redeemedItems.push({ studentEmail, itemId, vendorEmail, timestamp: new Date() }); // Log the redeemed item
    return true;
  }
  return false;
};

// Function to get redeemed items for a vendor
export const getRedeemedItemsForVendor = (vendorEmail) => {
  return redeemedItems.filter((item) => item.vendorEmail === vendorEmail);
};