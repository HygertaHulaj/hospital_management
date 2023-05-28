import React, { useEffect, useState } from 'react';

const PatientsTable = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    // Fetch patients data from the server
    fetch('http://localhost:8000/patients/')
      .then((response) => response.json())
      .then((data) => {
        setPatients(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h2>Patients Table</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Date of Birth</th>
            <th>Address</th>
            <th>Contact Details</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr key={patient.patient_id}>
              <td>{patient.patient_id}</td>
              <td>{patient.name}</td>
              <td>{patient.surname}</td>
              <td>{patient.email}</td>
              <td>{patient.gender}</td>
              <td>{patient.date_of_birth}</td>
              <td>{patient.address}</td>
              <td>{patient.contact_details}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientsTable;
