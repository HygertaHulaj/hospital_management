from fastapi import Depends, HTTPException
from sqlalchemy.orm import Session
from config.database import SessionLocal, get_db

from models.patientmodel import Patient
from schema.patientschema import CreatePatientSchema, UpdatePatientSchema
from schema.loginschema import LoginRequest,LoginResponse
from config.token import generate_jwt_token


class PatientService:
    @staticmethod
    def get_all_patients(db: Session = Depends(get_db)):
        return db.query(Patient).all()

    @staticmethod
    def get_patient(patient_id: int, db: Session = Depends(get_db)):
        return db.query(Patient).filter(Patient.patient_id == patient_id).first()

    @staticmethod
    def create_patient(patient: CreatePatientSchema, db: Session):
        # Check if the email already exists in the database
        db_patient = db.query(Patient).filter(Patient.email == patient.email).first()

        # If it does, raise an exception
        if db_patient:
            raise HTTPException(status_code=400, detail="Email already exists")
        
        # If it doesn't, create a new patient
        db_patient = Patient(
            name=patient.name,
            surname=patient.surname,
            email=patient.email,
            gender=patient.gender,
            date_of_birth=patient.date_of_birth,
            address=patient.address,
            contact_details=patient.contact_details,
            password=patient.password
        )
        
        db.add(db_patient)
        db.commit()
        db.refresh(db_patient)
        
        return db_patient

    @staticmethod
    def update_patient(patient_id: int, patient: UpdatePatientSchema, db: Session = Depends(get_db)):
        db_patient = db.query(Patient).filter(Patient.patient_id == patient_id).first()

        if db_patient:
            patient_id=patient.patient_id,
            db_patient.name = patient.name
            db_patient.surname = patient.surname
            db_patient.email = patient.email
            db_patient.gender = patient.gender
            db_patient.date_of_birth = patient.date_of_birth
            db_patient.address = patient.address
            db_patient.contact_details = patient.contact_details
            db_patient.password = patient.password


            db.commit()
            db.refresh(db_patient)

        return db_patient

    @staticmethod
    def delete_patient(patient_id: int, db: Session = Depends(get_db)):
        db_patient = db.query(Patient).filter(Patient.patient_id == patient_id).first()

        if db_patient:
            db.delete(db_patient)
            db.commit()

        return db_patient
    

    # @app.post("/api/login")
    @staticmethod
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
        return LoginResponse(jwtToken=jwt_token, user=patient)
        # except SQLAlchemyError as e:
        #     raise HTTPException(status_code=500, detail="Database error")
