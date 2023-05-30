import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/dashboard/SideBar';
import {
  TextField,
  Button,
  Grid,
  Link,
  Box
} from '@material-ui/core';

const HospitalsTable = () => {
  const [hospitals, setHospitals] = useState([]);
  const [editMode, setEditMode] = useState({});

  useEffect(() => {
    // Fetch hospitals data from the server
    fetch('http://localhost:8000/hospitals/')
      .then((response) => response.json())
      .then((data) => {
        setHospitals(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleEdit = (hospitalId) => {
    setEditMode((prevEditMode) => ({
      ...prevEditMode,
      [hospitalId]: true,
    }));
  };

  const handleUpdate = (hospitalId) => {
    // Get the updated values for the hospital
    const updatedData = {
      name: hospitals.find((hospital) => hospital.hospital_id === hospitalId).name,
      location: hospitals.find((hospital) => hospital.hospital_id === hospitalId).location,
      capacity: hospitals.find((hospital) => hospital.hospital_id === hospitalId).capacity,
      emergency_services: hospitals.find((hospital) => hospital.hospital_id === hospitalId)
        .emergency_services,
      // Include other fields as necessary
    };

    // Perform the update API request
    fetch(`http://localhost:8000/hospitals/${hospitalId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(`Successfully updated hospital with ID: ${hospitalId}`);
        setEditMode((prevEditMode) => ({
          ...prevEditMode,
          [hospitalId]: false,
        }));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDelete = (hospitalId) => {
    // Perform the delete API request
    fetch(`http://localhost:8000/hospitals/${hospitalId}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(`Successfully deleted hospital with ID: ${hospitalId}`);
        // Remove the deleted hospital from the state
        setHospitals((prevHospitals) =>
          prevHospitals.filter((hospital) => hospital.hospital_id !== hospitalId)
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleFieldChange = (hospitalId, fieldName, value) => {
    setHospitals((prevHospitals) =>
      prevHospitals.map((hospital) => {
        if (hospital.hospital_id === hospitalId) {
          return {
            ...hospital,
            [fieldName]: value,
          };
        }
        return hospital;
      })
    );
  };

  return (
    <Sidebar>
      <div>
      <Grid item xs={12}>
          <Box display="flex" justifyContent="flex-end">
            <Link href="../dashboard/HospitalAdd">
              <Button variant="contained" color="primary">
                Add a Hospital
              </Button>
            </Link>
          </Box>
        </Grid>
        <h2 className="text-2xl font-bold mb-4">Hospitals Table</h2>
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 bg-gray-100 border-b">Hospital ID</th>
              <th className="px-4 py-2 bg-gray-100 border-b">Name</th>
              <th className="px-4 py-2 bg-gray-100 border-b">Location</th>
              <th className="px-4 py-2 bg-gray-100 border-b">Capacity</th>
              <th className="px-4 py-2 bg-gray-100 border-b">Emergency Services</th>
              <th className="px-4 py-2 bg-gray-100 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {hospitals.map((hospital) => (
              <tr key={hospital.hospital_id}>
                <td className="px-4 py-2 border-b">{hospital.hospital_id}</td>
                <td className="px-4 py-2 border-b">
                  {editMode[hospital.hospital_id] ? (
                    <input
                      type="text"
                      value={hospital.name}
                      onChange={(e) =>
                        handleFieldChange(hospital.hospital_id, 'name', e.target.value)
                      }
                    />
                  ) : (
                    hospital.name
                  )}
                </td>
                <td className="px-4 py-2 border-b">
                  {editMode[hospital.hospital_id] ? (
                    <input
                      type="text"
                      value={hospital.location}
                      onChange={(e) =>
                        handleFieldChange(hospital.hospital_id, 'location', e.target.value)
                      }
                    />
                  ) : (
                    hospital.location
                  )}
                </td>
                <td className="px-4 py-2 border-b">
                  {editMode[hospital.hospital_id] ? (
                    <input
                      type="number"
                      value={hospital.capacity}
                      onChange={(e) =>
                        handleFieldChange(hospital.hospital_id, 'capacity', parseInt(e.target.value))}
                    />
                  ) : (
                    hospital.capacity
                  )}
                </td>
                <td className="px-4 py-2 border-b">
                  {editMode[hospital.hospital_id] ? (
                    <select
                      value={hospital.emergency_services}
                      onChange={(e) =>
                        handleFieldChange(hospital.hospital_id, 'emergency_services', e.target.value === 'true')}
                    >
                      <option value="true">Yes</option>
                      <option value="false">No</option>
                    </select>
                  ) : (
                    hospital.emergency_services ? 'Yes' : 'No'
                  )}
                </td>
                <td className="px-4 py-2 border-b">
                  {editMode[hospital.hospital_id] ? (
                    <button
                      className="text-green-500 underline mr-2"
                      onClick={() => handleUpdate(hospital.hospital_id)}
                    >
                      Save
                    </button>
                  ) : (
                    <>
                      <button
                        className="text-blue-500 underline mr-2"
                        onClick={() => handleEdit(hospital.hospital_id)}
                      >
                        Edit
                      </button>
                      <button
                        className="text-red-500 underline"
                        onClick={() => handleDelete(hospital.hospital_id)}
                      >
                        Delete
                      </button>
                    </>
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

export default HospitalsTable;