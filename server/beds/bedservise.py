from fastapi import Depends
from sqlalchemy.orm import Session
from config.database import get_db

from models.bedmodel import Bed
from schema.bedschema import CreateBedSchema, UpdateBedSchema

class BedService:
    @staticmethod
    def get_all_beds(db: Session = Depends(get_db)):
        return db.query(Bed).all()

    @staticmethod
    def get_bed(bed_id: int, db: Session = Depends(get_db)):
        return db.query(Bed).filter_by(bed_id=bed_id).first()

    @staticmethod
    def create_bed(bed: CreateBedSchema, db: Session = Depends(get_db)):
        db_bed = Bed(
            ward_id=bed.ward_id,
            patient_id=bed.patient_id,
            availability=bed.availability,
            bed_condition=bed.bed_condition,
            bed_assigning_datetime=bed.bed_assigning_datetime,
            discharge_datetime=bed.discharge_datetime,
            additional_notes=bed.additional_notes
        )

        db.add(db_bed)
        db.commit()
        db.refresh(db_bed)

        return db_bed

    @staticmethod
    def update_bed(bed_id: int, bed: UpdateBedSchema, db: Session = Depends(get_db)):
        db_bed = db.query(Bed).filter(Bed.bed_id == bed_id).first()

        if db_bed:
            if bed.ward_id is not None:
                db_bed.ward_id = bed.ward_id
            if bed.patient_id is not None:
                db_bed.patient_id = bed.patient_id
            if bed.availability is not None:
                db_bed.availability = bed.availability
            if bed.bed_condition is not None:
                db_bed.bed_condition = bed.bed_condition
            if bed.bed_assigning_datetime is not None:
                db_bed.bed_assigning_datetime = bed.bed_assigning_datetime
            if bed.discharge_datetime is not None:
                db_bed.discharge_datetime = bed.discharge_datetime
            if bed.additional_notes is not None:
                db_bed.additional_notes = bed.additional_notes

            db.commit()
            db.refresh(db_bed)

        return db_bed

    @staticmethod
    def delete_bed(bed_id: int, db: Session = Depends(get_db)):
        db_bed = db.query(Bed).filter(Bed.bed_id == bed_id).first()

        if db_bed:
            db.delete(db_bed)
            db.commit()

        return db_bed
