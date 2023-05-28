import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/dashboard/SideBar';

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

  // Function to handle the edit button click
  const handleEdit = (patientId) => {
    // Implement the edit functionality
    console.log(`Edit patient with ID: ${patientId}`);
  };

  // Function to handle the delete button click
  const handleDelete = (patientId) => {
    // Implement the delete functionality
    console.log(`Delete patient with ID: ${patientId}`);
  };

  return (
   <Sidebar>
    <div>
      <h2 className="text-2xl font-bold mb-4">Patients Table</h2>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="px-4 py-2 bg-gray-100 border-b">ID</th>
            <th className="px-4 py-2 bg-gray-100 border-b">Name</th>
            <th className="px-4 py-2 bg-gray-100 border-b">Surname</th>
            <th className="px-4 py-2 bg-gray-100 border-b">Email</th>
            <th className="px-4 py-2 bg-gray-100 border-b">Gender</th>
            <th className="px-4 py-2 bg-gray-100 border-b">Date of Birth</th>
            <th className="px-4 py-2 bg-gray-100 border-b">Address</th>
            <th className="px-4 py-2 bg-gray-100 border-b">Contact Details</th>
            <th className="px-4 py-2 bg-gray-100 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr key={patient.patient_id}>
              <td className="px-4 py-2 border-b">{patient.patient_id}</td>
              <td className="px-4 py-2 border-b">{patient.name}</td>
              <td className="px-4 py-2 border-b">{patient.surname}</td>
              <td className="px-4 py-2 border-b">{patient.email}</td>
              <td className="px-4 py-2 border-b">{patient.gender}</td>
              <td className="px-4 py-2 border-b">{patient.date_of_birth}</td>
              <td className="px-4 py-2 border-b">{patient.address}</td>
              <td className="px-4 py-2 border-b">{patient.contact_details}</td>
              <td className="px-4 py-2 border-b">
                <button
                  className="mr-2"
                  onClick={() => handleEdit(patient.patient_id)}
                >
                  <i className="fas fa-edit"></i> Edit
                </button>
                <button
                  onClick={() => handleDelete(patient.patient_id)}
                >
                  <i className="fas fa-trash"></i> Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </Sidebar>
  );

};

export default PatientsTable;
