import React, { useState, useEffect } from 'react';
import { getRedeemedItemsForVendor, addReusableCupData, addDisposableCupData } from './backend';
import './vendorPage.css';

function VendorIP() {
  const [redeemedItems, setRedeemedItems] = useState([]);
  const [view, setView] = useState('update'); // 'update' or 'redeemed'
  const [studentEmail, setStudentEmail] = useState('');
  const [reusableCups, setReusableCups] = useState(0);
  const [nonReusableCups, setNonReusableCups] = useState(0);

  const vendorEmail = "vendor@example.com"; // Replace with the logged-in vendor's email

  useEffect(() => {
    if (view === 'redeemed') {
      const items = getRedeemedItemsForVendor(vendorEmail);
      setRedeemedItems(items);
    }
  }, [view]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addReusableCupData(studentEmail, reusableCups);
    addDisposableCupData(nonReusableCups);
    alert(`Data submitted for Student Email: ${studentEmail}`);
    setStudentEmail('');
    setReusableCups(0);
    setNonReusableCups(0);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Vendor Dashboard</h1>
      <div className="vendor-tabs">
        <button onClick={() => setView('update')} className={view === 'update' ? 'active' : ''}>
          Update Data
        </button>
        <button onClick={() => setView('redeemed')} className={view === 'redeemed' ? 'active' : ''}>
          View Redeemed Items
        </button>
      </div>

      {view === 'update' ? (
        <div>
          <h2>Update Reusable vs Non-Reusable Cups</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>
                Student Email:
                <input
                  type="email"
                  value={studentEmail}
                  onChange={(e) => setStudentEmail(e.target.value)}
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
      ) : (
        <div>
          <h2>Redeemed Items</h2>
          {redeemedItems.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>Student Email</th>
                  <th>Item</th>
                  <th>Timestamp</th>
                </tr>
              </thead>
              <tbody>
                {redeemedItems.map((item, index) => (
                  <tr key={index}>
                    <td>{item.studentEmail}</td>
                    <td>{item.itemId}</td>
                    <td>{item.timestamp.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No items redeemed yet.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default VendorIP;