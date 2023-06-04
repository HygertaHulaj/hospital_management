from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from config.database import SessionLocal, get_db
from models.patientmodel import Patient
from schema.loginschema import LoginRequest, LoginResponse
from schema.patientschema import CreatePatientSchema, UpdatePatientSchema
from .patientservice import PatientService
from fastapi.security import HTTPBasic, HTTPBasicCredentials
from config.token import generate_jwt_token

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


@router.post("/login")
def login(login_request: LoginRequest):
    email = login_request.email
    password = login_request.password

        # try:
            # Query your database to find the patient with the provided email
    session = SessionLocal()
    patient = session.query(Patient).filter(Patient.email == email).first()
    if not patient or patient.password != password:
                # If the patient is not found or the password is incorrect, return an error
        raise HTTPException(status_code=401, detail="Invalid email or password")

            # If the email and password are correct, create a JWT token and return it with the patient data
    jwt_token = generate_jwt_token(patient)  # Implement the function to generate a JWT token
    return LoginResponse(jwtToken=jwt_token)
