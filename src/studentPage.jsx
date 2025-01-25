import React, { useState, useEffect } from 'react';
import { uploadedImages, reusableCupsData, disposableCupsData, getTopStudents, users } from './backend';
import './studentPage.css';
import Header from "./studentHeader";

function StudentPage() {
  const facts = [
    "Reusable cups can last for years, reducing waste significantly.",
    "A single reusable cup can replace hundreds of disposable cups.",
    "Many coffee shops offer discounts for bringing your own cup.",
    "Disposable cups often can't be recycled due to their plastic lining.",
    "The energy used to produce a reusable cup is offset after just 15 uses.",
    "Globally, we use over 16 billion disposable coffee cups each year.",
    "Reusable cups often keep your drink hot (or cold) for longer.",
    "Some disposable cups take over 20 years to decompose."
  ];

  const [currentFact, setCurrentFact] = useState(facts[0]);
  const [latestImage, setLatestImage] = useState('');
  const [reusableCups, setReusableCups] = useState(0);
  const [disposableCups, setDisposableCups] = useState(0);
  const [topStudents, setTopStudents] = useState([]);
  const [pointsRemaining, setPointsRemaining] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFact(facts[Math.floor(Math.random() * facts.length)]);
    }, 7000); // Change fact every 7 seconds

    // Fetch the latest uploaded image
    if (uploadedImages.length > 0) {
      setLatestImage(uploadedImages[0].imageUrl);
    }

    // Calculate total reusable and disposable cups
    const totalReusableCups = reusableCupsData.reduce((sum, data) => sum + data.cupsUsed, 0);
    const totalDisposableCups = disposableCupsData.reduce((sum, data) => sum + data.cupsUsed, 0);

    setReusableCups(totalReusableCups);
    setDisposableCups(totalDisposableCups);

    // Fetch top 3 students
    setTopStudents(getTopStudents());

    // Fetch points for the logged-in student (replace with actual logged-in student email)
    const loggedInStudent = users.find((u) => u.email === "student1@example.com");
    if (loggedInStudent) {
      setPointsRemaining(loggedInStudent.points);
    }

    return () => clearInterval(interval);
  }, [reusableCupsData, disposableCupsData]); // Re-run effect when data changes

  const environmentalImpact = reusableCups * 0.5 - disposableCups * 0.2; // Simple formula

  return (
    <div>
      <Header />
      <div id="home" className="Home">
        <div className='left'>
          <div className='factHeader'>Facts</div>
          <div className='randomFacts'>{currentFact}</div>
        </div>

        <div className='right'>
          <div className='Points'>
            <p>Points Remaining: {pointsRemaining}</p>
          </div>
          <div className='mathematics'>
            <p>Reusable Cups Used: {reusableCups}</p>
            <p>Disposable Cups Used: {disposableCups}</p>
            <p>Environmental Impact: {environmentalImpact.toFixed(2)}</p>
          </div>
        </div>
      </div>

      <div id="ranking" className="ranking">
        <h2>Top 3 Students</h2>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Email</th>
              <th>Reusable Cups</th>
            </tr>
          </thead>
          <tbody>
            {topStudents.map((student, index) => (
              <tr key={student.id}>
                <td>{index + 1}</td>
                <td>{student.email}</td>
                <td>{student.reusableCups}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {latestImage && (
        <div id="community" className="latest-image">
          <h2>Latest Uploaded Image</h2>
          <img src={latestImage} alt="Latest Uploaded" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
      )}
    </div>
  );
}

export default StudentPage;