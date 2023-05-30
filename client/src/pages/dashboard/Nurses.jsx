import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/dashboard/SideBar';
import {
  TextField,
  Button,
  Grid,
  Link,
  Box
} from '@material-ui/core';

const NursesTable = () => {
  const [nurses, setNurses] = useState([]);
  const [editMode, setEditMode] = useState({});

  useEffect(() => {
    // Fetch nurse data from the server
    fetch('http://localhost:8000/nurses/')
      .then((response) => response.json())
      .then((data) => {
        setNurses(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleEdit = (nurseId) => {
    setEditMode((prevEditMode) => ({
      ...prevEditMode,
      [nurseId]: true,
    }));
  };

  const handleUpdate = (nurseId) => {
    // Get the updated values for the nurse
    const updatedData = {
      name: nurses.find((nurse) => nurse.nurse_id === nurseId).name,
      surname: nurses.find((nurse) => nurse.nurse_id === nurseId).surname,
      email: nurses.find((nurse) => nurse.nurse_id === nurseId).email,
      department: nurses.find((nurse) => nurse.nurse_id === nurseId).department,
      contact_details: nurses.find((nurse) => nurse.nurse_id === nurseId).contact_details,
      department_id: nurses.find((nurse) => nurse.nurse_id === nurseId).department_id,
      hospital_id: nurses.find((nurse) => nurse.nurse_id === nurseId).hospital_id,
      // Include other fields as necessary
    };

    // Perform the update API request
    fetch(`http://localhost:8000/nurses/${nurseId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(`Successfully updated nurse with ID: ${nurseId}`);
        setEditMode((prevEditMode) => ({
          ...prevEditMode,
          [nurseId]: false,
        }));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDelete = (nurseId) => {
    // Perform the delete API request
    fetch(`http://localhost:8000/nurses/${nurseId}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(`Successfully deleted nurse with ID: ${nurseId}`);
        // Remove the deleted nurse from the state
        setNurses((prevNurses) =>
          prevNurses.filter((nurse) => nurse.nurse_id !== nurseId)
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleFieldChange = (nurseId, fieldName, value) => {
    setNurses((prevNurses) =>
      prevNurses.map((nurse) => {
        if (nurse.nurse_id === nurseId) {
          return {
            ...nurse,
            [fieldName]: value,
          };
        }
        return nurse;
      })
    );
  };

  return (
    <Sidebar>
      <div>
      <Grid item xs={12}>
          <Box display="flex" justifyContent="flex-end">
            <Link href="../dashboard/NurseAdd">
              <Button variant="contained" color="primary">
                Add a Nurse
              </Button>
            </Link>
          </Box>
        </Grid>
        <h2 className="text-2xl font-bold mb-4">Nurses Table</h2>
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 bg-gray-100 border-b">Nurse ID</th>
              <th className="px-4 py-2 bg-gray-100 border-b">Name</th>
              <th className="px-4 py-2 bg-gray-100 border-b">Surname</th>
              <th className="px-4 py-2 bg-gray-100 border-b">Email</th>
              <th className="px-4 py-2 bg-gray-100 border-b">Department</th>
              <th className="px-4 py-2 bg-gray-100 border-b">Contact Details</th>
              <th className="px-4 py-2 bg-gray-100 border-b">Department ID</th>
              <th className="px-4 py-2 bg-gray-100 border-b">Hospital ID</th>
              <th className="px-4 py-2 bg-gray-100 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {nurses.map((nurse) => (
              <tr key={nurse.nurse_id}>
                <td className="px-4 py-2 border-b">{nurse.nurse_id}</td>
                <td className="px-4 py-2 border-b">
                  {editMode[nurse.nurse_id] ? (
                    <input
                      type="text"
                      value={nurse.name}
                      onChange={(e) =>
                        handleFieldChange(nurse.nurse_id, 'name', e.target.value)
                      }
                    />
                  ) : (
                    nurse.name
                  )}
                </td>
                <td className="px-4 py-2 border-b">
                  {editMode[nurse.nurse_id] ? (
                    <input
                      type="text"
                      value={nurse.surname}
                      onChange={(e) =>
                        handleFieldChange(nurse.nurse_id, 'surname', e.target.value)
                      }
                    />
                  ) : (
                    nurse.surname
                  )}
                </td>
                <td className="px-4 py-2 border-b">
                  {editMode[nurse.nurse_id] ? (
                    <input
                      type="text"
                      value={nurse.email}
                      onChange={(e) =>
                        handleFieldChange(nurse.nurse_id, 'email', e.target.value)
                      }
                    />
                  ) : (
                    nurse.email
                  )}
                </td>
                <td className="px-4 py-2 border-b">
                  {editMode[nurse.nurse_id] ? (
                    <input
                      type="text"
                      value={nurse.department}
                      onChange={(e) =>
                        handleFieldChange(nurse.nurse_id, 'department', e.target.value)
                      }
                    />
                  ) : (
                    nurse.department
                  )}
                </td>
                <td className="px-4 py-2 border-b">
                  {editMode[nurse.nurse_id] ? (
                    <input
                      type="text"
                      value={nurse.contact_details}
                      onChange={(e) =>
                        handleFieldChange(
                          nurse.nurse_id,
                          'contact_details',
                          e.target.value
                        )
                      }
                    />
                  ) : (
                    nurse.contact_details
                  )}
                </td>
                <td className="px-4 py-2 border-b">{nurse.department_id}</td>
                <td className="px-4 py-2 border-b">{nurse.hospital_id}</td>
                <td className="px-4 py-2 border-b">
                  {editMode[nurse.nurse_id] ? (
                    <button
                      className="text-blue-500 underline"
                      onClick={() => handleUpdate(nurse.nurse_id)}
                    >
                      Save
                    </button>
                  ) : (
                    <>
                      <button
                        className="text-blue-500 underline mr-2"
                        onClick={() => handleEdit(nurse.nurse_id)}
                      >
                        Edit
                      </button>
                      <button
                        className="text-red-500 underline"
                        onClick={() => handleDelete(nurse.nurse_id)}
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

export default NursesTable;