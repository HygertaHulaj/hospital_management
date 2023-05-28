from fastapi import Depends
from sqlalchemy.orm import Session
from config.database import get_db

from models.medicaltestmodel import MedicalTest
from schema.medicaltestschema import CreateMedicalTestSchema, UpdateMedicalTestSchema

class MedicalTestService:
    @staticmethod
    def get_all_medical_tests(db: Session = Depends(get_db)):
        return db.query(MedicalTest).all()

    @staticmethod
    def get_medical_test(test_id: int, db: Session = Depends(get_db)):
        return db.query(MedicalTest).filter_by(medicaltest_id=test_id).first()

    @staticmethod
    def create_medical_test(medical_test: CreateMedicalTestSchema, db: Session = Depends(get_db)):
        
        
        db_medical_test = MedicalTest(
            test_type=medical_test.test_type,
            date=medical_test.date,
            patient_id=medical_test.patient_id,
            doctor_id=medical_test.doctor_id,
            results=medical_test.results

        )

        db.add(db_medical_test)
        db.commit()
        db.refresh(db_medical_test)

        return db_medical_test

    @staticmethod
    def update_medical_test(test_id: int, medical_test: UpdateMedicalTestSchema, db: Session = Depends(get_db)):
        db_medical_test = db.query(MedicalTest).filter(MedicalTest.medicaltest_id == test_id).first()

        if db_medical_test:
            if medical_test.test_type is not None:
                db_medical_test.test_type = medical_test.test_type
            if medical_test.date is not None:
                db_medical_test.date = medical_test.date
            if medical_test.date is not None:
                db_medical_test.date = medical_test.date

            db.commit()
            db.refresh(db_medical_test)

        return db_medical_test

    @staticmethod
    def delete_medical_test(test_id: int, db: Session = Depends(get_db)):
        db_medical_test = db.query(MedicalTest).filter(MedicalTest.medicaltest_id == test_id).first()

        if db_medical_test:
            db.delete(db_medical_test)
            db.commit()

        return db_medical_test
