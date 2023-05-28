from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from config.database import get_db
from models.doctorsmodel import Doctor
from schema.doctorsschema import CreateDoctorSchema, UpdateDoctorSchema
from .doctorsservice import DoctorService

router = APIRouter(prefix="/doctors", tags=["Doctors"])

@router.get("/")
def get_all_doctors(db: Session = Depends(get_db)):
    return DoctorService.get_all_doctors(db=db)

@router.post("/")
def create_doctor(doctor: CreateDoctorSchema, db: Session = Depends(get_db)):
    return DoctorService.create_doctor(doctor, db)

@router.get("/{doctor_id}")
def get_doctor(doctor_id: int, db: Session = Depends(get_db)):
    return DoctorService.get_doctor(doctor_id=doctor_id, db=db)

@router.put("/{doctor_id}")
def update_doctor(doctor_id: int, doctor: UpdateDoctorSchema, db: Session = Depends(get_db)):
    return DoctorService.update_doctor(doctor_id=doctor_id, doctor=doctor, db=db)

@router.delete("/{doctor_id}")
def delete_doctor(doctor_id: int, db: Session = Depends(get_db)):
    return DoctorService.delete_doctor(doctor_id=doctor_id, db=db)
