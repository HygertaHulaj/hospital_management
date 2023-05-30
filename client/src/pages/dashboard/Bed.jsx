import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/dashboard/SideBar';
import {
  TextField,
  Button,
  Grid,
  Link,
  Box
} from '@material-ui/core';

const BedsTable = () => {
  const [beds, setBeds] = useState([]);
  const [editMode, setEditMode] = useState({});

  useEffect(() => {
    // Fetch bed data from the server
    fetch('http://localhost:8000/beds/')
      .then((response) => response.json())
      .then((data) => {
        setBeds(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleEdit = (bedId) => {
    setEditMode((prevEditMode) => ({
      ...prevEditMode,
      [bedId]: true,
    }));
  };

  const handleUpdate = (bedId) => {
    // Get the updated values for the bed
    const updatedData = beds.find((bed) => bed.bed_id === bedId);

    // Perform the update API request
    fetch(`http://localhost:8000/beds/${bedId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(`Successfully updated bed with ID: ${bedId}`);
        setEditMode((prevEditMode) => ({
          ...prevEditMode,
          [bedId]: false,
        }));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDelete = (bedId) => {
    // Perform the delete API request
    fetch(`http://localhost:8000/beds/${bedId}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(`Successfully deleted bed with ID: ${bedId}`);
        // Remove the deleted bed from the state
        setBeds((prevBeds) =>
          prevBeds.filter((bed) => bed.bed_id !== bedId)
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleFieldChange = (bedId, fieldName, value) => {
    setBeds((prevBeds) =>
      prevBeds.map((bed) => {
        if (bed.bed_id === bedId) {
          return {
            ...bed,
            [fieldName]: value,
          };
        }
        return bed;
      })
    );
  };

  return (
    <Sidebar>
      <div>
        <Grid item xs={12}>
          <Box display="flex" justifyContent="flex-end">
            <Link href="../dashboard/BedAdd">
              <Button variant="contained" color="primary">
                Add a bed
              </Button>
            </Link>
          </Box>
        </Grid>
        <h2 className="text-2xl font-bold mb-4">Beds Table</h2>
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 bg-gray-100 border-b">Bed ID</th>
              <th className="px-4 py-2 bg-gray-100 border-b">Ward ID</th>
              <th className="px-4 py-2 bg-gray-100 border-b">Patient ID</th>
              <th className="px-4 py-2 bg-gray-100 border-b">Availability</th>
              <th className="px-4 py-2 bg-gray-100 border-b">Bed Condition</th>
              <th className="px-4 py-2 bg-gray-100 border-b">Assigning Date</th>
              <th className="px-4 py-2 bg-gray-100 border-b">Discharge Date</th>
              <th className="px-4 py-2 bg-gray-100 border-b">Notes</th>
              <th className="px-4 py-2 bg-gray-100 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {beds.map((bed) => (
              <tr key={bed.bed_id}>
                <td className="px-4 py-2 border-b">{bed.bed_id}</td>
                <td className="px-4 py-2 border-b">
                  {editMode[bed.bed_id] ? (
                    <TextField
                      value={bed.ward_id}
                      onChange={(e) =>
                        handleFieldChange(bed.bed_id, 'ward_id', e.target.value)
                      }
                    />
                  ) : (
                    bed.ward_id
                  )}
                </td>
                <td className="px-4 py-2 border-b">
                  {editMode[bed.bed_id] ? (
                    <TextField
                      value={bed.patient_id}
                      onChange={(e) =>
                        handleFieldChange(bed.bed_id, 'patient_id', e.target.value)
                      }
                    />
                  ) : (
                    bed.patient_id
                  )}
                </td>
                <td className="px-4 py-2 border-b">
                  {editMode[bed.bed_id] ? (
                    <TextField
                      value={bed.availability}
                      onChange={(e) =>
                        handleFieldChange(bed.bed_id, 'availability', e.target.value)
                      }
                    />
                  ) : (
                    bed.availability
                  )}
                </td>
                <td className="px-4 py-2 border-b">
                  {editMode[bed.bed_id] ? (
                    <TextField
                      value={bed.bed_condition}
                      onChange={(e) =>
                        handleFieldChange(bed.bed_id, 'bed_condition', e.target.value)
                      }
                    />
                  ) : (
                    bed.bed_condition
                  )}
                </td>
                <td className="px-4 py-2 border-b">
                  {editMode[bed.bed_id] ? (
                    <TextField
                      value={bed.bed_assigning_datetime}
                      onChange={(e) =>
                        handleFieldChange(bed.bed_id, 'bed_assigning_datetime', e.target.value)
                      }
                    />
                  ) : (
                    bed.bed_assigning_datetime
                  )}
                </td>
                <td className="px-4 py-2 border-b">
                  {editMode[bed.bed_id] ? (
                    <TextField
                      value={bed.discharge_datetime}
                      onChange={(e) =>
                        handleFieldChange(bed.bed_id, 'discharge_datetime', e.target.value)
                      }
                    />
                  ) : (
                    bed.discharge_datetime
                  )}
                </td>
                <td className="px-4 py-2 border-b">
                  {editMode[bed.bed_id] ? (
                    <TextField
                      value={bed.additional_notes}
                      onChange={(e) =>
                        handleFieldChange(bed.bed_id, 'additional_notes', e.target.value)
                      }
                    />
                  ) : (
                    bed.additional_notes
                  )}
                </td>
                <td className="px-4 py-2 border-b">
                  {editMode[bed.bed_id] ? (
                    <>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleUpdate(bed.bed_id)}
                      >
                        Save
                      </Button>
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={() =>
                          setEditMode((prevEditMode) => ({
                            ...prevEditMode,
                            [bed.bed_id]: false,
                          }))
                        }
                      >
                        Cancel
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleEdit(bed.bed_id)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => handleDelete(bed.bed_id)}
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

export default BedsTable