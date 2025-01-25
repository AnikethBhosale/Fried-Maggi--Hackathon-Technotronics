import React, { useState } from 'react';
import { addReusableCupData, addDisposableCupData } from './backend';
import './vendorPage.css';

function VendorIP() {
  const [customerId, setCustomerId] = useState('');
  const [reusableCups, setReusableCups] = useState(0);
  const [nonReusableCups, setNonReusableCups] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    addReusableCupData(reusableCups); // Add reusable cups data
    addDisposableCupData(nonReusableCups); // Add disposable cups data
    alert(`Data submitted for Customer ID: ${customerId}`);
    setCustomerId('');
    setReusableCups(0);
    setNonReusableCups(0);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Reusable vs Non-Reusable Cups</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Customer Id:
            <input
              type="text"
              value={customerId}
              onChange={(e) => setCustomerId(e.target.value)}
              required
            />
          </label>
        </div>

        <div>
          <label>
            Reusable Cups:
            <input
              type="number"
              value={reusableCups}
              onChange={(e) => setReusableCups(Number(e.target.value))}
              min="0"
              required
            />
          </label>
        </div>

        <div>
          <label>
            Non-Reusable Cups:
            <input
              type="number"
              value={nonReusableCups}
              onChange={(e) => setNonReusableCups(Number(e.target.value))}
              min="0"
              required
            />
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default VendorIP;