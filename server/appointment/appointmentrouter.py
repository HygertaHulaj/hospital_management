from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from config.database import get_db
from schema.appointmentschema import UpdateAppointmentSchema, CreateAppointmentSchema
from .appointmentservice import AppointmentService

router = APIRouter(prefix="/appointments", tags=["Appointments"])

@router.post("/", response_model=CreateAppointmentSchema)
def create_appointment(appointment: CreateAppointmentSchema, db: Session = Depends(get_db)):
    appointment_service = AppointmentService()
    return appointment_service.create_appointment(appointment, db)

@router.get("/{appointment_id}", response_model=CreateAppointmentSchema)
def get_appointment(appointment_id: int, db: Session = Depends(get_db)):
    appointment_service = AppointmentService()
    return appointment_service.get_appointment(appointment_id, db)

@router.get("/patient/{patient_id}", response_model=list[CreateAppointmentSchema])
def get_patient_appointments(patient_id: int, db: Session = Depends(get_db)):
    appointment_service = AppointmentService()
    return appointment_service.get_patient_appointments(patient_id, db)

@router.get("/doctor/{doctor_id}", response_model=list[CreateAppointmentSchema])
def get_doctor_appointments(doctor_id: int, db: Session = Depends(get_db)):
    appointment_service = AppointmentService()
    return appointment_service.get_doctor_appointments(doctor_id, db)

@router.put("/{appointment_id}", response_model=CreateAppointmentSchema)
def update_appointment(appointment_id: int, appointment: UpdateAppointmentSchema, db: Session = Depends(get_db)):
    appointment_service = AppointmentService()
    return appointment_service.update_appointment(appointment_id, appointment, db)

@router.delete("/{appointment_id}", response_model=CreateAppointmentSchema)
def delete_appointment(appointment_id: int, db: Session = Depends(get_db)):
    appointment_service = AppointmentService()
    return appointment_service.delete_appointment(appointment_id, db)
