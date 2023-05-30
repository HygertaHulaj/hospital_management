import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/dashboard/SideBar';

const BloodDonationTable = () => {
  const [donations, setDonations] = useState([]);
  const [editMode, setEditMode] = useState({});

  useEffect(() => {
    // Fetch blood donation data from the server
    fetch('http://localhost:8000/donations/')
      .then((response) => response.json())
      .then((data) => {
        setDonations(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleEdit = (donationId) => {
    setEditMode((prevEditMode) => ({
      ...prevEditMode,
      [donationId]: true,
    }));
  };

  const handleUpdate = (donationId) => {
    // Get the updated values for the blood donation
    const updatedData = {
      patient_id: donations.find((donation) => donation.donation_id === donationId).patient_id,
      blood_type: donations.find((donation) => donation.donation_id === donationId).blood_type,
      contact_details: donations.find((donation) => donation.donation_id === donationId).contact_details,
      donation_date: donations.find((donation) => donation.donation_id === donationId).donation_date,
      donation_status: donations.find((donation) => donation.donation_id === donationId).donation_status,
      quantity_donated: donations.find((donation) => donation.donation_id === donationId).quantity_donated,
      comments: donations.find((donation) => donation.donation_id === donationId).comments,
      // Include other fields as necessary
    };

    // Perform the update API request
    fetch(`http://localhost:8000/donations/${donationId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(`Successfully updated blood donation with ID: ${donationId}`);
        setEditMode((prevEditMode) => ({
          ...prevEditMode,
          [donationId]: false,
        }));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDelete = (donationId) => {
    // Perform the delete API request
    fetch(`http://localhost:8000/donations/${donationId}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(`Successfully deleted blood donation with ID: ${donationId}`);
        // Remove the deleted blood donation from the state
        setDonations((prevDonations) =>
          prevDonations.filter((donation) => donation.donation_id !== donationId)
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleFieldChange = (donationId, fieldName, value) => {
    setDonations((prevDonations) =>
      prevDonations.map((donation) => {
        if (donation.donation_id === donationId) {
          return {
            ...donation,
            [fieldName]: value,
          };
        }
        return donation;
      })
    );
  };

  return (
    <Sidebar>
      <div>
        <h2 className="text-2xl font-bold mb-4">Blood Donation Appointments</h2>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="px-4 py-2 bg-gray-100 border-b">Donation ID</th>
              <th className="px-4 py-2 bg-gray-100 border-b">Patient ID</th>
              <th className="px-4 py-2 bg-gray-100 border-b">Blood Type</th>
              <th className="px-4 py-2 bg-gray-100 border-b">Contact Details</th>
              <th className="px-4 py-2 bg-gray-100 border-b">Donation Date</th>
              <th className="px-4 py-2 bg-gray-100 border-b">Donation Status</th>
              <th className="px-4 py-2 bg-gray-100 border-b">Quantity Donated</th>
              <th className="px-4 py-2 bg-gray-100 border-b">Comments</th>
              <th className="px-4 py-2 bg-gray-100 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {donations.map((donation) => (
              <tr key={donation.donation_id}>
                <td className="px-4 py-2 border-b">{donation.donation_id}</td>
                <td className="px-4 py-2 border-b">
                  {editMode[donation.donation_id] ? (
                    <input
                      type="text"
                      value={donation.patient_id}
                      onChange={(e) =>
                        handleFieldChange(donation.donation_id, 'patient_id', e.target.value)
                      }
                    />
                  ) : (
                    donation.patient_id
                  )}
                </td>
                <td className="px-4 py-2 border-b">
                  {editMode[donation.donation_id] ? (
                    <input
                      type="text"
                      value={donation.blood_type}
                      onChange={(e) =>
                        handleFieldChange(donation.donation_id, 'blood_type', e.target.value)
                      }
                    />
                  ) : (
                    donation.blood_type
                  )}
                </td>
                <td className="px-4 py-2 border-b">
                  {editMode[donation.donation_id] ? (
                    <input
                      type="text"
                      value={donation.contact_details}
                      onChange={(e) =>
                        handleFieldChange(donation.donation_id, 'contact_details', e.target.value)
                      }
                    />
                  ) : (
                    donation.contact_details
                  )}
                </td>
                <td className="px-4 py-2 border-b">
                  {editMode[donation.donation_id] ? (
                    <input
                      type="text"
                      value={donation.donation_date}
                      onChange={(e) =>
                        handleFieldChange(donation.donation_id, 'donation_date', e.target.value)
                      }
                    />
                  ) : (
                    donation.donation_date
                  )}
                </td>
                <td className="px-4 py-2 border-b">
                  {editMode[donation.donation_id] ? (
                    <input
                      type="text"
                      value={donation.donation_status}
                      onChange={(e) =>
                        handleFieldChange(donation.donation_id, 'donation_status', e.target.value)
                      }
                    />
                  ) : (
                    donation.donation_status
                  )}
                </td>
                <td className="px-4 py-2 border-b">
                  {editMode[donation.donation_id] ? (
                    <input
                      type="text"
                      value={donation.quantity_donated}
                      onChange={(e) =>
                        handleFieldChange(donation.donation_id, 'quantity_donated', e.target.value)
                      }
                    />
                  ) : (
                    donation.quantity_donated
                  )}
                </td>
                <td className="px-4 py-2 border-b">
                  {editMode[donation.donation_id] ? (
                    <input
                      type="text"
                      value={donation.comments}
                      onChange={(e) =>
                        handleFieldChange(donation.donation_id, 'comments', e.target.value)
                      }
                    />
                  ) : (
                    donation.comments
                  )}
                </td>
                <td className="px-4 py-2 border-b">
                  {editMode[donation.donation_id] ? (
                    <>
                      <button
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mr-2"
                        onClick={() => handleUpdate(donation.donation_id)}
                      >
                        Save
                      </button>
                      <button
                        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4"
                        onClick={() => setEditMode((prevEditMode) => ({ ...prevEditMode, [donation.donation_id]: false }))}
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2"
                        onClick={() => handleEdit(donation.donation_id)}
                      >
                        Edit
                      </button>
                      <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4"
                        onClick={() => handleDelete(donation.donation_id)}
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

export default BloodDonationTable;