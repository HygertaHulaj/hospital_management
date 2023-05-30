import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/dashboard/SideBar';
import {
  TextField,
  Button,
  Grid,
  Link,
  Box
} from '@material-ui/core';

const SurgeriesTable = () => {
  const [surgeries, setSurgeries] = useState([]);
  const [editMode, setEditMode] = useState({});

  useEffect(() => {
    // Fetch surgery data from the server
    fetch('http://localhost:8000/surgeries/')
      .then((response) => response.json())
      .then((data) => {
        setSurgeries(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleEdit = (surgeryId) => {
    setEditMode((prevEditMode) => ({
      ...prevEditMode,
      [surgeryId]: true,
    }));
  };

  const handleUpdate = (surgeryId) => {
    // Get the updated values for the surgery
    const updatedData = {
      surgery_type: surgeries.find((surgery) => surgery.surgery_id === surgeryId).surgery_type,
      date: surgeries.find((surgery) => surgery.surgery_id === surgeryId).date,
      patient_id: surgeries.find((surgery) => surgery.surgery_id === surgeryId).patient_id,
      doctor_id: surgeries.find((surgery) => surgery.surgery_id === surgeryId).doctor_id,
      // Include other fields as necessary
    };

    // Perform the update API request
    fetch(`http://localhost:8000/surgeries/${surgeryId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(`Successfully updated surgery with ID: ${surgeryId}`);
        setEditMode((prevEditMode) => ({
          ...prevEditMode,
          [surgeryId]: false,
        }));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDelete = (surgeryId) => {
    // Perform the delete API request
    fetch(`http://localhost:8000/surgeries/${surgeryId}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(`Successfully deleted surgery with ID: ${surgeryId}`);
        // Remove the deleted surgery from the state
        setSurgeries((prevSurgeries) =>
          prevSurgeries.filter((surgery) => surgery.surgery_id !== surgeryId)
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleFieldChange = (surgeryId, fieldName, value) => {
    setSurgeries((prevSurgeries) =>
      prevSurgeries.map((surgery) => {
        if (surgery.surgery_id === surgeryId) {
          return {
            ...surgery,
            [fieldName]: value,
          };
        }
        return surgery;
      })
    );
  };

  return (
    <Sidebar>
      <div>
      <Grid item xs={12}>
          <Box display="flex" justifyContent="flex-end">
            <Link href="../dashboard/SurgeryAdd">
              <Button variant="contained" color="primary">
                Add a surgery
              </Button>
            </Link>
          </Box>
        </Grid>
        <h2 className="text-2xl font-bold mb-4">Surgeries Table</h2>
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 bg-gray-100 border-b">Surgery ID</th>
              <th className="px-4 py-2 bg-gray-100 border-b">Surgery Type</th>
              <th className="px-4 py-2 bg-gray-100 border-b">Date</th>
              <th className="px-4 py-2 bg-gray-100 border-b">Patient ID</th>
              <th className="px-4 py-2 bg-gray-100 border-b">Doctor ID</th>
              <th className="px-4 py-2 bg-gray-100 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {surgeries.map((surgery) => (
              <tr key={surgery.surgery_id}>
                <td className="px-4 py-2 border-b">{surgery.surgery_id}</td>
                <td className="px-4 py-2 border-b">
                  {editMode[surgery.surgery_id] ? (
                    <TextField
                      value={surgery.surgery_type}
                      onChange={(e) => handleFieldChange(surgery.surgery_id, 'surgery_type', e.target.value)}
                    />
                  ) : (
                    surgery.surgery_type
                  )}
                </td>
                <td className="px-4 py-2 border-b">
                  {editMode[surgery.surgery_id] ? (
                    <TextField
                      value={surgery.date}
                      onChange={(e) => handleFieldChange(surgery.surgery_id, 'date', e.target.value)}
                    />
                  ) : (
                    surgery.date
                  )}
                </td>
                <td className="px-4 py-2 border-b">
                  {editMode[surgery.surgery_id] ? (
                    <TextField
                      value={surgery.patient_id}
                      onChange={(e) => handleFieldChange(surgery.surgery_id, 'patient_id', e.target.value)}
                    />
                  ) : (
                    surgery.patient_id
                  )}
                </td>
                <td className="px-4 py-2 border-b">
                  {editMode[surgery.surgery_id] ? (
                    <TextField
                      value={surgery.doctor_id}
                      onChange={(e) => handleFieldChange(surgery.surgery_id, 'doctor_id', e.target.value)}
                    />
                  ) : (
                    surgery.doctor_id
                  )}
                </td>
                <td className="px-4 py-2 border-b">
                  {editMode[surgery.surgery_id] ? (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleUpdate(surgery.surgery_id)}
                    >
                      Save
                    </Button>
                  ) : (
                    <>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleEdit(surgery.surgery_id)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => handleDelete(surgery.surgery_id)}
                      >
                        Delete
                      </Button>
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

export default SurgeriesTable;