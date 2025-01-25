import React, { useState } from 'react';
import { redeemableItems, redeemItem } from './backend';
import { useNavigate } from 'react-router-dom';
import './redeemPage.css';

function RedeemPage() {
  const [vendorEmail, setVendorEmail] = useState('');
  const navigate = useNavigate();

  const handleRedeem = (itemId) => {
    const studentEmail = "student1@example.com"; // Replace with the logged-in student's email
    if (redeemItem(studentEmail, itemId, vendorEmail)) {
      alert("Item redeemed successfully!");
      navigate('/student'); // Redirect to student page
    } else {
      alert("Not enough points or invalid vendor email.");
    }
  };

  return (
    <div className="redeem-container">
      <h1>Redeem Items</h1>
      <div className="vendor-email">
        <label>
          Vendor Email:
          <input
            type="email"
            value={vendorEmail}
            onChange={(e) => setVendorEmail(e.target.value)}
            placeholder="Enter vendor's email"
            required
          />
        </label>
      </div>
      <div className="items-list">
        {redeemableItems.map((item) => (
          <div key={item.id} className="item">
            <h3>{item.name}</h3>
            <p>Points Required: {item.pointsRequired}</p>
            <button onClick={() => handleRedeem(item.id)}>Redeem</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RedeemPage;