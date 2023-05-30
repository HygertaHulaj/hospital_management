import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/dashboard/SideBar';

const MedicalTestsTable = () => {
  const [medicalTests, setMedicalTests] = useState([]);
  const [editMode, setEditMode] = useState({});

  useEffect(() => {
    // Fetch medical tests data from the server
    fetch('http://localhost:8000/medical-tests/')
      .then((response) => response.json())
      .then((data) => {
        setMedicalTests(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleEdit = (medicalTestId) => {
    setEditMode((prevEditMode) => ({
      ...prevEditMode,
      [medicalTestId]: true,
    }));
  };

  const handleUpdate = (medicalTestId) => {
    // Get the updated values for the medical test
    const updatedData = {
      test_type: medicalTests.find((test) => test.medicaltest_id === medicalTestId).test_type,
      date: medicalTests.find((test) => test.medicaltest_id === medicalTestId).date,
      patient_id: medicalTests.find((test) => test.medicaltest_id === medicalTestId).patient_id,
      doctor_id: medicalTests.find((test) => test.medicaltest_id === medicalTestId).doctor_id,
      results: medicalTests.find((test) => test.medicaltest_id === medicalTestId).results,
      // Include other fields as necessary
    };

    // Perform the update API request
    fetch(`http://localhost:8000/medical-tests/${medicalTestId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(`Successfully updated medical test with ID: ${medicalTestId}`);
        setEditMode((prevEditMode) => ({
          ...prevEditMode,
          [medicalTestId]: false,
        }));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDelete = (medicalTestId) => {
    // Perform the delete API request
    fetch(`http://localhost:8000/medical-tests/${medicalTestId}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(`Successfully deleted medical test with ID: ${medicalTestId}`);
        // Remove the deleted medical test from the state
        setMedicalTests((prevMedicalTests) =>
          prevMedicalTests.filter((test) => test.medicaltest_id !== medicalTestId)
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleFieldChange = (medicalTestId, fieldName, value) => {
    setMedicalTests((prevMedicalTests) =>
      prevMedicalTests.map((test) => {
        if (test.medicaltest_id === medicalTestId) {
          return {
            ...test,
            [fieldName]: value,
          };
        }
        return test;
      })
    );
  };

  return (
    <Sidebar>
      <div>
        <h2 className="text-2xl font-bold mb-4">Medical Tests Table</h2>
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 bg-gray-100 border-b">Medical Test ID</th>
              <th className="px-4 py-2 bg-gray-100 border-b">Test Type</th>
              <th className="px-4 py-2 bg-gray-100 border-b">Date</th>
              <th className="px-4 py-2 bg-gray-100 border-b">Patient ID</th>
              <th className="px-4 py-2 bg-gray-100 border-b">Doctor ID</th>
              <th className="px-4 py-2 bg-gray-100 border-b">Results</th>
              <th className="px-4 py-2 bg-gray-100 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {medicalTests.map((test) => (
              <tr key={test.medicaltest_id}>
                <td className="px-4 py-2 border-b">{test.medicaltest_id}</td>
                <td className="px-4 py-2 border-b">
                  {editMode[test.medicaltest_id] ? (
                    <input
                      type="text"
                      value={test.test_type}
                      onChange={(e) =>
                        handleFieldChange(test.medicaltest_id, 'test_type', e.target.value)
                      }
                    />
                  ) : (
                    test.test_type
                  )}
                </td>
                <td className="px-4 py-2 border-b">
                  {editMode[test.medicaltest_id] ? (
                    <input
                      type="text"
                      value={test.date}
                      onChange={(e) =>
                        handleFieldChange(test.medicaltest_id, 'date', e.target.value)
                      }
                    />
                  ) : (
                    test.date
                  )}
                </td>
                <td className="px-4 py-2 border-b">
                  {editMode[test.medicaltest_id] ? (
                    <input
                      type="number"
                      value={test.patient_id}
                      onChange={(e) =>
                        handleFieldChange(test.medicaltest_id, 'patient_id', parseInt(e.target.value))
                      }
                    />
                  ) : (
                    test.patient_id
                  )}
                </td>
                <td className="px-4 py-2 border-b">
                  {editMode[test.medicaltest_id] ? (
                    <input
                      type="number"
                      value={test.doctor_id}
                      onChange={(e) =>
                        handleFieldChange(test.medicaltest_id, 'doctor_id', parseInt(e.target.value))
                      }
                    />
                  ) : (
                    test.doctor_id
                  )}
                </td>
                <td className="px-4 py-2 border-b">
                  {editMode[test.medicaltest_id] ? (
                    <input
                      type="text"
                      value={test.results}
                      onChange={(e) =>
                        handleFieldChange(test.medicaltest_id, 'results', e.target.value)
                      }
                    />
                  ) : (
                    test.results
                  )}
                </td>
                <td className="px-4 py-2 border-b">
                  {editMode[test.medicaltest_id] ? (
                    <button
                      className="text-green-500 underline mr-2"
                      onClick={() => handleUpdate(test.medicaltest_id)}
                    >
                      Save
                    </button>
                  ) : (
                    <>
                      <button
                        className="text-blue-500 underline mr-2"
                        onClick={() => handleEdit(test.medicaltest_id)}
                      >
                        Edit
                      </button>
                      <button
                        className="text-red-500 underline"
                        onClick={() => handleDelete(test.medicaltest_id)}
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

export default MedicalTestsTable;