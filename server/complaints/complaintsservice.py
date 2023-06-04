from fastapi import Depends
from sqlalchemy.orm import Session
from config.database import get_db

from models.complaintsmodel import Complaints
from schema.complaintsschema import CreateComplaintSchema, UpdateComplaintSchema

class ComplaintsService:
    @staticmethod
    def get_all_complaints(db: Session = Depends(get_db)):
        return db.query(Complaints).all()

    @staticmethod
    def get_complaint(complaint_id: int, db: Session = Depends(get_db)):
        return db.query(Complaints).filter_by(complaint_id=complaint_id).first()

    @staticmethod
    def create_complaint(complaint: CreateComplaintSchema, db: Session = Depends(get_db)):
        db_complaint = Complaints(
            complaint_type=complaint.complaint_type,
            date=complaint.date,
            patient_id=complaint.patient_id,
            details=complaint.details
        )

        db.add(db_complaint)
        db.commit()
        db.refresh(db_complaint)

        return db_complaint

    @staticmethod
    def update_complaint(complaint_id: int, complaint: UpdateComplaintSchema, db: Session = Depends(get_db)):
        db_complaint = db.query(Complaints).filter(Complaints.complaint_id == complaint_id).first()

        if db_complaint:
            if complaint.complaint_type is not None:
                db_complaint.complaint_type = complaint.complaint_type
            if complaint.date is not None:
                db_complaint.date = complaint.date
            if complaint.patient_id is not None:
                db_complaint.patient_id = complaint.patient_id
            if complaint.details is not None:
                db_complaint.details = complaint.details

            db.commit()
            db.refresh(db_complaint)

        return db_complaint

    @staticmethod
    def delete_complaint(complaint_id: int, db: Session = Depends(get_db)):
        db_complaint = db.query(Complaints).filter(Complaints.complaint_id == complaint_id).first()

        if db_complaint:
            db.delete(db_complaint)
            db.commit()

        return db_complaint
