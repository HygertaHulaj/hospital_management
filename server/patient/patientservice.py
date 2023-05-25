from fastapi import Depends
from sqlalchemy.orm import Session
from config.database import get_db

from models.patientmodel import Patient
from schema.patientschema import CreatePatientSchema, UpdatePatientSchema


class PatientService:
    @staticmethod
    def get_all_patients(db: Session = Depends(get_db)):
        return db.query(Patient).all()

    @staticmethod
    def get_patient(patient_id: int, db: Session = Depends(get_db)):
        return db.query(Patient).filter(Patient.patient_id == patient_id).first()

    @staticmethod
    def create_patient(patient: CreatePatientSchema, db: Session = Depends(get_db)):
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
