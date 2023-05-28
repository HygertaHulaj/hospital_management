from fastapi import Depends
from sqlalchemy.orm import Session
from config.database import get_db
from models.surgerymodel import Surgery
from schema.surgeryschema import CreateSurgerySchema, UpdateSurgerySchema

class SurgeryService:
    @staticmethod
    def get_all_surgeries(db: Session = Depends(get_db)):
        return db.query(Surgery).all()

    @staticmethod
    def get_surgery(surgery_id: int, db: Session = Depends(get_db)):
        return db.query(Surgery).filter_by(surgery_id=surgery_id).first()

    @staticmethod
    def create_surgery(surgery: CreateSurgerySchema, db: Session = Depends(get_db)):
        db_surgery = Surgery(
            surgery_type=surgery.surgery_type,
            date=surgery.date,
            patient_id=surgery.patient_id,
            doctor_id=surgery.doctor_id
        )

        db.add(db_surgery)
        db.commit()
        db.refresh(db_surgery)

        return db_surgery

    @staticmethod
    def update_surgery(surgery_id: int, surgery: UpdateSurgerySchema, db: Session = Depends(get_db)):
        db_surgery = db.query(Surgery).filter(Surgery.surgery_id == surgery_id).first()

        if db_surgery:
            if surgery.surgery_type is not None:
                db_surgery.surgery_type = surgery.surgery_type
            if surgery.date is not None:
                db_surgery.date = surgery.date
            if surgery.patient_id is not None:
                db_surgery.patient_id = surgery.patient_id
            if surgery.doctor_id is not None:
                db_surgery.doctor_id = surgery.doctor_id

            db.commit()
            db.refresh(db_surgery)

        return db_surgery

    @staticmethod
    def delete_surgery(surgery_id: int, db: Session = Depends(get_db)):
        db_surgery = db.query(Surgery).filter(Surgery.surgery_id == surgery_id).first()

        if db_surgery:
            db.delete(db_surgery)
            db.commit()

        return db_surgery
