import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/dashboard/SideBar';

const BloodRequestsTable = () => {
  const [requests, setRequests] = useState([]);
  const [editMode, setEditMode] = useState({});

  useEffect(() => {
    // Fetch blood requests data from the server
    fetch('http://localhost:8000/blood-requests/')
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setRequests(data);
        } else {
          console.error('Received non-array data:', data);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleEdit = (requestId) => {
    setEditMode((prevEditMode) => ({
      ...prevEditMode,
      [requestId]: true,
    }));
  };

  const handleUpdate = (requestId) => {
    // Get the updated values for the blood request
    const updatedData = requests.find((request) => request.request_id === requestId);

    // Perform the update API request
    fetch(`http://localhost:8000/blood-requests/${requestId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(`Successfully updated blood request with ID: ${requestId}`);
        setEditMode((prevEditMode) => ({
          ...prevEditMode,
          [requestId]: false,
        }));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDelete = (requestId) => {
    // Perform the delete API request
    fetch(`http://localhost:8000/blood-requests/${requestId}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(`Successfully deleted blood request with ID: ${requestId}`);
        // Remove the deleted blood request from the state
        setRequests((prevRequests) =>
          prevRequests.filter((request) => request.request_id !== requestId)
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleFieldChange = (requestId, fieldName, value) => {
    setRequests((prevRequests) =>
      prevRequests.map((request) => {
        if (request.request_id === requestId) {
          return {
            ...request,
            [fieldName]: value,
          };
        }
        return request;
      })
    );
  };

  return (
    <Sidebar>
      <div>
        <h2 className="text-2xl font-bold mb-4">Blood Requests Table</h2>
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 bg-gray-100 border-b">Request ID</th>
              <th className="px-4 py-2 bg-gray-100 border-b">Request Date</th>
              <th className="px-4 py-2 bg-gray-100 border-b">Blood Type</th>
              <th className="px-4 py-2 bg-gray-100 border-b">Contact Information</th>
              <th className="px-4 py-2 bg-gray-100 border-b">Request Status</th>
              <th className="px-4 py-2 bg-gray-100 border-b">Requested Units</th>
              <th className="px-4 py-2 bg-gray-100 border-b">Urgency Level</th>
              <th className="px-4 py-2 bg-gray-100 border-b">Request Notes</th>
              <th className="px-4 py-2 bg-gray-100 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request) => (
              <tr key={request.request_id}>
                <td className="px-4 py-2 border-b">{request.request_id}</td>
                <td className="px-4 py-2 border-b">
                  {editMode[request.request_id] ? (
                    <input
                      type="text"
                      value={request.request_date}
                      onChange={(e) =>
                        handleFieldChange(request.request_id, 'request_date', e.target.value)
                      }
                    />
                  ) : (
                    request.request_date
                  )}
                </td>
                <td className="px-4 py-2 border-b">
                  {editMode[request.request_id] ? (
                    <input
                      type="text"
                      value={request.blood_type}
                      onChange={(e) =>
                        handleFieldChange(request.request_id, 'blood_type', e.target.value)
                      }
                    />
                  ) : (
                    request.blood_type
                  )}
                </td>
                <td className="px-4 py-2 border-b">
                  {editMode[request.request_id] ? (
                    <input
                      type="text"
                      value={request.contact_information}
                      onChange={(e) =>
                        handleFieldChange(request.request_id, 'contact_information', e.target.value)
                      }
                    />
                  ) : (
                    request.contact_information
                  )}
                </td>
                <td className="px-4 py-2 border-b">
                  {editMode[request.request_id] ? (
                    <input
                      type="text"
                      value={request.request_status}
                      onChange={(e) =>
                        handleFieldChange(request.request_id, 'request_status', e.target.value)
                      }
                    />
                  ) : (
                    request.request_status
                  )}
                </td>
                <td className="px-4 py-2 border-b">
                  {editMode[request.request_id] ? (
                    <input
                      type="text"
                      value={request.requested_units}
                      onChange={(e) =>
                        handleFieldChange(request.request_id, 'requested_units', e.target.value)
                      }
                    />
                  ) : (
                    request.requested_units
                  )}
                </td>
                <td className="px-4 py-2 border-b">
                  {editMode[request.request_id] ? (
                    <input
                      type="text"
                      value={request.urgency_level}
                      onChange={(e) =>
                        handleFieldChange(request.request_id, 'urgency_level', e.target.value)
                      }
                    />
                  ) : (
                    request.urgency_level
                  )}
                </td>
                <td className="px-4 py-2 border-b">
                  {editMode[request.request_id] ? (
                    <input
                      type="text"
                      value={request.request_notes}
                      onChange={(e) =>
                        handleFieldChange(request.request_id, 'request_notes', e.target.value)
                      }
                    />
                  ) : (
                    request.request_notes
                  )}
                </td>
                <td className="px-4 py-2 border-b">
                  {editMode[request.request_id] ? (
                    <div>
                      <button
                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-2"
                        onClick={() => handleUpdate(request.request_id)}
                      >
                        Save
                      </button>
                      <button
                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                        onClick={() => setEditMode((prevEditMode) => ({ ...prevEditMode, [request.request_id]: false }))}
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <div>
                      <button
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2"
                        onClick={() => handleEdit(request.request_id)}
                      >
                        Edit
                      </button>
                      <button
                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                        onClick={() => handleDelete(request.request_id)}
                      >
                        Delete
                      </button>
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

export default BloodRequestsTable;