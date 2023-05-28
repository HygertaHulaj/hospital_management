from fastapi import Depends
from sqlalchemy.orm import Session
from datetime import datetime
from config.database import get_db
from models.appointmentmodel import Appointment
from models.patientmodel import Patient
from models.doctorsmodel import Doctor
from schema.appointmentschema import CreateAppointmentSchema, UpdateAppointmentSchema

class AppointmentService:
    @staticmethod
    def create_appointment(request: CreateAppointmentSchema, db: Session = Depends(get_db)):
        appointment = Appointment(
            patient_id=request.patient_id,
            service=request.service,
            doctor_id=request.doctor_id,
            date=request.date,
            time=request.time,
            message=request.message
        )
        db.add(appointment)
        db.commit()
        db.refresh(appointment)
        return {'message': 'Appointment created successfully'}

    @staticmethod
    def get_appointment(appointment_id: int, db: Session = Depends(get_db)):
        return db.query(Appointment).filter_by(appointment_id=appointment_id).first()

    @staticmethod
    def get_patient_appointments(patient_id: int, db: Session = Depends(get_db)):
        return db.query(Appointment).filter_by(patient_id=patient_id).all()

    @staticmethod
    def get_doctor_appointments(doctor_id: int, db: Session = Depends(get_db)):
        return db.query(Appointment).filter_by(doctor_id=doctor_id).all()

    @staticmethod
    def update_appointment(appointment_id: int, appointment: UpdateAppointmentSchema, db: Session = Depends(get_db)):
        db_appointment = db.query(Appointment).filter_by(appointment_id=appointment_id).first()

        if db_appointment:
            if appointment.date is not None:
                db_appointment.date = appointment.date
            if appointment.time is not None:
                db_appointment.time = appointment.time
            if appointment.message is not None:
                db_appointment.message = appointment.message

            db.commit()
            db.refresh(db_appointment)

        return db_appointment

    @staticmethod
    def delete_appointment(appointment_id: int, db: Session = Depends(get_db)):
        db_appointment = db.query(Appointment).filter_by(appointment_id=appointment_id).first()

        if db_appointment:
            db.delete(db_appointment)
            db.commit()

        return db_appointment
