from fastapi import Depends
from sqlalchemy.orm import Session
from config.database import get_db
from models.bloodrequestmodel import BloodRequest
from schema.bloodrequestschema import CreateBloodRequestSchema, UpdateBloodRequestSchema

class BloodRequestService:
    @staticmethod
    def get_all_blood_requests(db: Session = Depends(get_db)):
        return db.query(BloodRequest).all()

    @staticmethod
    def get_blood_request(request_id: int, db: Session = Depends(get_db)):
        return db.query(BloodRequest).filter_by(request_id=request_id).first()

    @staticmethod
    def create_blood_request(blood_request: CreateBloodRequestSchema, db: Session = Depends(get_db)):
        db_blood_request = BloodRequest(
            request_date=blood_request.request_date,
            blood_type=blood_request.blood_type,
            contact_information=blood_request.contact_information,
            request_status=blood_request.request_status,
            requested_units=blood_request.requested_units,
            urgency_level=blood_request.urgency_level,
            request_notes=blood_request.request_notes
        )

        db.add(db_blood_request)
        db.commit()
        db.refresh(db_blood_request)

        return db_blood_request

    @staticmethod
    def update_blood_request(request_id: int, blood_request: UpdateBloodRequestSchema, db: Session = Depends(get_db)):
        db_blood_request = db.query(BloodRequest).filter(BloodRequest.request_id == request_id).first()

        if db_blood_request:
            if blood_request.request_date is not None:
                db_blood_request.request_date = blood_request.request_date
            if blood_request.blood_type is not None:
                db_blood_request.blood_type = blood_request.blood_type
            if blood_request.contact_information is not None:
                db_blood_request.contact_information = blood_request.contact_information
            if blood_request.request_status is not None:
                db_blood_request.request_status = blood_request.request_status
            if blood_request.requested_units is not None:
                db_blood_request.requested_units = blood_request.requested_units
            if blood_request.urgency_level is not None:
                db_blood_request.urgency_level = blood_request.urgency_level
            if blood_request.request_notes is not None:
                db_blood_request.request_notes = blood_request.request_notes

            db.commit()
            db.refresh(db_blood_request)

        return db_blood_request

    @staticmethod
    def delete_blood_request(request_id: int, db: Session = Depends(get_db)):
        db_blood_request = db.query(BloodRequest).filter(BloodRequest.request_id == request_id).first()

        if db_blood_request:
            db.delete(db_blood_request)
            db.commit()

        return db_blood_request
