from fastapi import Depends
from sqlalchemy.orm import Session
from config.database import get_db

from models.ambulancemodel import Ambulance
from schema.ambulanceschema import CreateAmbulanceSchema, UpdateAmbulanceSchema

class AmbulanceService:
    @staticmethod
    def get_all_ambulances(db: Session = Depends(get_db)):
        return db.query(Ambulance).all()

    @staticmethod
    def get_ambulance(ambulance_id: int, db: Session = Depends(get_db)):
        return db.query(Ambulance).filter_by(ambulance_id=ambulance_id).first()

    @staticmethod
    def create_ambulance(ambulance: CreateAmbulanceSchema, db: Session = Depends(get_db)):
        db_ambulance = Ambulance(
            plate_number=ambulance.plate_number,
            status=ambulance.status
        )

        db.add(db_ambulance)
        db.commit()
        db.refresh(db_ambulance)

        return db_ambulance

    @staticmethod
    def update_ambulance(ambulance_id: int, ambulance: UpdateAmbulanceSchema, db: Session = Depends(get_db)):
        db_ambulance = db.query(Ambulance).filter(Ambulance.ambulance_id == ambulance_id).first()

        if db_ambulance:
            if ambulance.plate_number is not None:
                db_ambulance.plate_number = ambulance.plate_number
            if ambulance.status is not None:
                db_ambulance.status = ambulance.status

            db.commit()
            db.refresh(db_ambulance)

        return db_ambulance

    @staticmethod
    def delete_ambulance(ambulance_id: int, db: Session = Depends(get_db)):
        db_ambulance = db.query(Ambulance).filter(Ambulance.ambulance_id == ambulance_id).first()

        if db_ambulance:
            db.delete(db_ambulance)
            db.commit()

        return db_ambulance
