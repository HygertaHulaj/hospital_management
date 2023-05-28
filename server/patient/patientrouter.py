from fastapi import APIRouter, Depends,HTTPException
from sqlalchemy.orm import Session
from config.database import get_db
from models.patientmodel import Patient
from schema.patientschema import CreatePatientSchema, UpdatePatientSchema
from .patientservice import PatientService
from fastapi.security import HTTPBasic, HTTPBasicCredentials
security = HTTPBasic()

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


def login(credentials: HTTPBasicCredentials, db: Session = Depends(get_db)):
    email = credentials.email
    password = credentials.password

    # Query the patient table for the provided name
    patient = db.query(Patient).filter(Patient.email == email).first()

    if patient and patient.password == password:
        # Credentials are valid
        return {"message": "Login successful"}

    # If no matching user is found or password is incorrect,
    # raise an HTTPException with a 401 status code (Unauthorized)
    raise HTTPException(status_code=401, detail="Invalid credentials")