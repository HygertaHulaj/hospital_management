from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from config.database import get_db
from models.appointmentmodel import Appointment
from schema.appointmentschema import CreateAppointmentSchema, UpdateAppointmentSchema
from .appointmentservice import AppointmentService

router = APIRouter(prefix="/appointments", tags=["Appointments"])

@router.get("/")
def get_all_appointments(db: Session = Depends(get_db)):
    return AppointmentService.get_all_appointments(db=db)

@router.post("/")
def create_appointment(appointment: CreateAppointmentSchema, db: Session = Depends(get_db)):
    return AppointmentService.create_appointment(appointment, db)

@router.put("/{appointment_id}")
def update_appointment(appointment_id: int, appointment: UpdateAppointmentSchema, db: Session = Depends(get_db)):
    return AppointmentService.update_appointment(appointment_id=appointment_id, appointment=appointment, db=db)

@router.delete("/{appointment_id}")
def delete_appointment(appointment_id: int, db: Session = Depends(get_db)):
    return AppointmentService.delete_appointment(appointment_id=appointment_id, db=db)
