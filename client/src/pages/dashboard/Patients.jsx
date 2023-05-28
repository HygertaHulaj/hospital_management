import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/dashboard/SideBar';

const PatientsTable = () => {
  const [patients, setPatients] = useState([]);
  const [editMode, setEditMode] = useState({});

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

  const handleEdit = (patientId) => {
    setEditMode((prevEditMode) => ({
      ...prevEditMode,
      [patientId]: true,
    }));
  };

  const handleUpdate = (patientId) => {
    // Get the updated values for the patient
    const updatedData = {
      name: patients.find((patient) => patient.patient_id === patientId).name,
      surname: patients.find((patient) => patient.patient_id === patientId).surname,
      email: patients.find((patient) => patient.patient_id === patientId).email,
      gender: patients.find((patient) => patient.patient_id === patientId).gender,
      date_of_birth: patients.find((patient) => patient.patient_id === patientId).date_of_birth,
      address: patients.find((patient) => patient.patient_id === patientId).address,
      contact_details: patients.find((patient) => patient.patient_id === patientId).contact_details,
      // Include other fields as necessary
    };

    // Perform the update API request
    fetch(`http://localhost:8000/patients/${patientId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(`Successfully updated patient with ID: ${patientId}`);
        setEditMode((prevEditMode) => ({
          ...prevEditMode,
          [patientId]: false,
        }));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDelete = (patientId) => {
    // Perform the delete API request
    fetch(`http://localhost:8000/patients/${patientId}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(`Successfully deleted patient with ID: ${patientId}`);
        // Remove the deleted patient from the state
        setPatients((prevPatients) =>
          prevPatients.filter((patient) => patient.patient_id !== patientId)
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleFieldChange = (patientId, fieldName, value) => {
    setPatients((prevPatients) =>
      prevPatients.map((patient) => {
        if (patient.patient_id === patientId) {
          return {
            ...patient,
            [fieldName]: value,
          };
        }
        return patient;
      })
    );
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
                <td className="px-4 py-2 border-b">
                  {editMode[patient.patient_id] ? (
                    <input
                      type="text"
                      value={patient.name}
                      onChange={(e) =>
                        handleFieldChange(patient.patient_id, 'name', e.target.value)
                      }
                    />
                  ) : (
                    patient.name
                  )}
                </td>
                <td className="px-4 py-2 border-b">
                  {editMode[patient.patient_id] ? (
                    <input
                      type="text"
                      value={patient.surname}
                      onChange={(e) =>
                        handleFieldChange(patient.patient_id, 'surname', e.target.value)
                      }
                    />
                  ) : (
                    patient.surname
                  )}
                </td>
                <td className="px-4 py-2 border-b">
                  {editMode[patient.patient_id] ? (
                    <input
                      type="text"
                      value={patient.email}
                      onChange={(e) =>
                        handleFieldChange(patient.patient_id, 'email', e.target.value)
                      }
                    />
                  ) : (
                    patient.email
                  )}
                </td>
                <td className="px-4 py-2 border-b">
                  {editMode[patient.patient_id] ? (
                    <input
                      type="text"
                      value={patient.gender}
                      onChange={(e) =>
                        handleFieldChange(patient.patient_id, 'gender', e.target.value)
                      }
                    />
                  ) : (
                    patient.gender
                  )}
                </td>
                <td className="px-4 py-2 border-b">
                  {editMode[patient.patient_id] ? (
                    <input
                      type="text"
                      value={patient.date_of_birth}
                      onChange={(e) =>
                        handleFieldChange(patient.patient_id, 'date_of_birth', e.target.value)
                      }
                    />
                  ) : (
                    patient.date_of_birth
                  )}
                </td>
                <td className="px-4 py-2 border-b">
                  {editMode[patient.patient_id] ? (
                    <input
                      type="text"
                      value={patient.address}
                      onChange={(e) =>
                        handleFieldChange(patient.patient_id, 'address', e.target.value)
                      }
                    />
                  ) : (
                    patient.address
                  )}
                </td>
                <td className="px-4 py-2 border-b">
                  {editMode[patient.patient_id] ? (
                    <input
                      type="text"
                      value={patient.contact_details}
                      onChange={(e) =>
                        handleFieldChange(patient.patient_id, 'contact_details', e.target.value)
                      }
                    />
                  ) : (
                    patient.contact_details
                  )}
                </td>
                <td className="px-4 py-2 border-b">
                  {editMode[patient.patient_id] ? (
                    <div>
                      <button onClick={() => handleUpdate(patient.patient_id)}>Update</button>
                      <button onClick={() => setEditMode((prevEditMode) => ({...prevEditMode, [patient.patient_id]: false}))}>Cancel</button>
                    </div>
                  ) : (
                    <div>
                      <button onClick={() => handleEdit(patient.patient_id)}>Edit</button>
                      <button onClick={() => handleDelete(patient.patient_id)}>Delete</button>
                    </div>
                  )}
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