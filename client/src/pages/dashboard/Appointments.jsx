import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/dashboard/SideBar';

const AppointmentsTable = () => {
  const [appointments, setAppointments] = useState([]);
  const [editMode, setEditMode] = useState({});

  useEffect(() => {
    // Fetch appointments data from the server
    fetch('http://localhost:8000/appointments/')
      .then((response) => response.json())
      .then((data) => {
        setAppointments(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleEdit = (appointmentId) => {
    setEditMode((prevEditMode) => ({
      ...prevEditMode,
      [appointmentId]: true,
    }));
  };

  const handleUpdate = (appointmentId) => {
    // Get the updated values for the appointment
    const updatedData = {
      service: appointments.find((appointment) => appointment.appointment_id === appointmentId).service,
      doctor_id: appointments.find((appointment) => appointment.appointment_id === appointmentId).doctor_id,
      date: appointments.find((appointment) => appointment.appointment_id === appointmentId).date,
      time: appointments.find((appointment) => appointment.appointment_id === appointmentId).time,
      message: appointments.find((appointment) => appointment.appointment_id === appointmentId).message,
      // Include other fields as necessary
    };

    // Perform the update API request
    fetch(`http://localhost:8000/appointments/${appointmentId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(`Successfully updated appointment with ID: ${appointmentId}`);
        setEditMode((prevEditMode) => ({
          ...prevEditMode,
          [appointmentId]: false,
        }));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDelete = (appointmentId) => {
    // Perform the delete API request
    fetch(`http://localhost:8000/appointments/${appointmentId}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(`Successfully deleted appointment with ID: ${appointmentId}`);
        // Remove the deleted appointment from the state
        setAppointments((prevAppointments) =>
          prevAppointments.filter((appointment) => appointment.appointment_id !== appointmentId)
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleFieldChange = (appointmentId, fieldName, value) => {
    setAppointments((prevAppointments) =>
      prevAppointments.map((appointment) => {
        if (appointment.appointment_id === appointmentId) {
          return {
            ...appointment,
            [fieldName]: value,
          };
        }
        return appointment;
      })
    );
  };

  return (
    <Sidebar>
      <div>
        <h2 className="text-2xl font-bold mb-4">Appointments Table</h2>
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 bg-gray-100 border-b">ID</th>
              <th className="px-4 py-2 bg-gray-100 border-b">Service</th>
              <th className="px-4 py-2 bg-gray-100 border-b">Doctor ID</th>
              <th className="px-4 py-2 bg-gray-100 border-b">Date</th>
              <th className="px-4 py-2 bg-gray-100 border-b">Time</th>
              <th className="px-4 py-2 bg-gray-100 border-b">Message</th>
              <th className="px-4 py-2 bg-gray-100 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment.appointment_id}>
                <td className="px-4 py-2 border-b">{appointment.appointment_id}</td>
                <td className="px-4 py-2 border-b">
                  {editMode[appointment.appointment_id] ? (
                    <input
                      type="text"
                      value={appointment.service}
                      onChange={(e) =>
                        handleFieldChange(appointment.appointment_id, 'service', e.target.value)
                      }
                    />
                  ) : (
                    appointment.service
                  )}
                </td>
                <td className="px-4 py-2 border-b">
                  {editMode[appointment.appointment_id] ? (
                    <input
                      type="text"
                      value={appointment.doctor_id}
                      onChange={(e) =>
                        handleFieldChange(appointment.appointment_id, 'doctor_id', e.target.value)
                      }
                    />
                  ) : (
                    appointment.doctor_id
                  )}
                </td>
                <td className="px-4 py-2 border-b">
                  {editMode[appointment.appointment_id] ? (
                    <input
                      type="text"
                      value={appointment.date}
                      onChange={(e) =>
                        handleFieldChange(appointment.appointment_id, 'date', e.target.value)
                      }
                    />
                  ) : (
                    appointment.date
                  )}
                </td>
                <td className="px-4 py-2 border-b">
                  {editMode[appointment.appointment_id] ? (
                    <input
                      type="text"
                      value={appointment.time}
                      onChange={(e) =>
                        handleFieldChange(appointment.appointment_id, 'time', e.target.value)
                      }
                    />
                  ) : (
                    appointment.time
                  )}
                </td>
                <td className="px-4 py-2 border-b">
                  {editMode[appointment.appointment_id] ? (
                    <input
                      type="text"
                      value={appointment.message}
                      onChange={(e) =>
                        handleFieldChange(appointment.appointment_id, 'message', e.target.value)
                      }
                    />
                  ) : (
                    appointment.message
                  )}
                </td>
                <td className="px-4 py-2 border-b">
                  {editMode[appointment.appointment_id] ? (
                    <div>
                      <button onClick={() => handleUpdate(appointment.appointment_id)}>Update</button>
                      <button onClick={() => setEditMode((prevEditMode) => ({...prevEditMode, [appointment.appointment_id]: false}))}>Cancel</button>
                    </div>
                  ) : (
                    <div>
                      <button onClick={() => handleEdit(appointment.appointment_id)}>Edit</button>
                      <button onClick={() => handleDelete(appointment.appointment_id)}>Delete</button>
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

export default AppointmentsTable;