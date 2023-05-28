from fastapi import Depends
from sqlalchemy.orm import Session
from config.database import get_db

from models.hospitalmodel import Hospital
from schema.hospitalschema import CreateHospitalSchema, UpdateHospitalSchema

class HospitalService:
    @staticmethod
    def get_all_hospitals(db: Session = Depends(get_db)):
        return db.query(Hospital).all()

    @staticmethod
    def get_hospital(hospital_id: int, db: Session = Depends(get_db)):
        return db.query(Hospital).filter_by(hospital_id=hospital_id).first()

    @staticmethod
    def create_hospital(hospital: CreateHospitalSchema, db: Session = Depends(get_db)):
        db_hospital = Hospital(
            name=hospital.name,
            location=hospital.location,
            capacity=hospital.capacity,
            emergency_services=hospital.emergency_services
        )

        db.add(db_hospital)
        db.commit()
        db.refresh(db_hospital)

        return db_hospital

    @staticmethod
    def update_hospital(hospital_id: int, hospital: UpdateHospitalSchema, db: Session = Depends(get_db)):
        db_hospital = db.query(Hospital).filter(Hospital.hospital_id == hospital_id).first()

        if db_hospital:
            if hospital.name is not None:
                db_hospital.name = hospital.name
            if hospital.location is not None:
                db_hospital.location = hospital.location
            if hospital.capacity is not None:
                db_hospital.capacity = hospital.capacity
            if hospital.emergency_services is not None:
                db_hospital.emergency_services = hospital.emergency_services

            db.commit()
            db.refresh(db_hospital)

        return db_hospital

    @staticmethod
    def delete_hospital(hospital_id: int, db: Session = Depends(get_db)):
        db_hospital = db.query(Hospital).filter(Hospital.hospital_id == hospital_id).first()

        if db_hospital:
            db.delete(db_hospital)
            db.commit()

        return db_hospital
