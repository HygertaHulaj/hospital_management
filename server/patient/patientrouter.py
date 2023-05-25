from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from config.database import get_db
from models.patientmodel import Patient
from schema.patientschema import CreatePatientSchema, UpdatePatientSchema
from .patientservice import PatientService

router = APIRouter(prefix="/patients", tags=["Patients"])

@router.get("/")
def get_all_patients(db: Session = Depends(get_db)):
    return PatientService.get_all_patients(db=db)

@router.post("/")
def create_patient(patient: CreatePatientSchema, db: Session = Depends(get_db)):
    return PatientService.create_patient(patient, db)

@router.put("/{patient_id}")
def update_patient(patient_id: int, patient: UpdatePatientSchema, db: Session = Depends(get_db)):
    return PatientService.update_patient(patient_id=patient_id, patient=patient, db=db)

@router.delete("/{patient_id}")
def delete_patient(patient_id: int, db: Session = Depends(get_db)):
    return PatientService.delete_patient(patient_id=patient_id, db=db)