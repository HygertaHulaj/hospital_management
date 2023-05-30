import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/dashboard/SideBar';

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
    const updatedData = {
      ward_id: beds.find((bed) => bed.bed_id === bedId).ward_id,
      patient_id: beds.find((bed) => bed.bed_id === bedId).patient_id,
      availability: beds.find((bed) => bed.bed_id === bedId).availability,
      bed_condition: beds.find((bed) => bed.bed_id === bedId).bed_condition,
      bed_assigning_datetime: beds.find((bed) => bed.bed_id === bedId).bed_assigning_datetime,
      discharge_datetime: beds.find((bed) => bed.bed_id === bedId).discharge_datetime,
      additional_notes: beds.find((bed) => bed.bed_id === bedId).additional_notes,
      // Include other fields as necessary
    };

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
                <td className="px-4 py-2 border-b">{bed.ward_id}</td>
                <td className="px-4 py-2 border-b">{bed.patient_id}</td>
                <td className="px-4 py-2 border-b">{bed.availability}</td>
                <td className="px-4 py-2 border-b">{bed.bed_condition}</td>
                <td className="px-4 py-2 border-b">{bed.bed_assigning_datetime}</td>
                <td className="px-4 py-2 border-b">{bed.discharge_datetime}</td>
                <td className="px-4 py-2 border-b">{bed.additional_notes}</td>
                <td className="px-4 py-2 border-b">
                  {editMode[bed.bed_id] ? (
                    <button
                      className="text-blue-500 underline"
                      onClick={() => handleUpdate(bed.bed_id)}
                    >
                      Save
                    </button>
                  ) : (
                    <>
                      <button
                        className="text-blue-500 underline mr-2"
                        onClick={() => handleEdit(bed.bed_id)}
                      >
                        Edit
                      </button>
                      <button
                        className="text-red-500 underline"
                        onClick={() => handleDelete(bed.bed_id)}
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

export default BedsTable;