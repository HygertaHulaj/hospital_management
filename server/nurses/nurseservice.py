from fastapi import Depends
from sqlalchemy.orm import Session
from config.database import get_db

from models.nursemodel import Nurse
from schema.nurseschema import CreateNurseSchema, UpdateNurseSchema

class NurseService:
    @staticmethod
    def get_all_nurses(db: Session = Depends(get_db)):
        return db.query(Nurse).all()

    @staticmethod
    def get_nurse(nurse_id: int, db: Session = Depends(get_db)):
        return db.query(Nurse).filter_by(nurse_id=nurse_id).first()

    @staticmethod
    def create_nurse(nurse: CreateNurseSchema, db: Session = Depends(get_db)):
        db_nurse = Nurse(
            name=nurse.name,
            surname=nurse.surname,
            email=nurse.email,
            department=nurse.department,
            contact_details=nurse.contact_details
        )

        db.add(db_nurse)
        db.commit()
        db.refresh(db_nurse)

        return db_nurse

    @staticmethod
    def update_nurse(nurse_id: int, nurse: UpdateNurseSchema, db: Session = Depends(get_db)):
        db_nurse = db.query(Nurse).filter(Nurse.nurse_id == nurse_id).first()

        if db_nurse:
            if nurse.name is not None:
                db_nurse.name = nurse.name
            if nurse.surname is not None:
                db_nurse.surname = nurse.surname
            if nurse.email is not None:
                db_nurse.email = nurse.email
            if nurse.department is not None:
                db_nurse.department = nurse.department
            if nurse.contact_details is not None:
                db_nurse.contact_details = nurse.contact_details

            db.commit()
            db.refresh(db_nurse)

        return db_nurse

    @staticmethod
    def delete_nurse(nurse_id: int, db: Session = Depends(get_db)):
        db_nurse = db.query(Nurse).filter(Nurse.nurse_id == nurse_id).first()

        if db_nurse:
            db.delete(db_nurse)
            db.commit()

        return db_nurse
