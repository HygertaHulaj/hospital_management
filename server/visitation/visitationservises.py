from fastapi import Depends
from sqlalchemy.orm import Session
from config.database import get_db

from models.visitationmodel import Visitation
from schema.visitationsschema import CreateVisitationSchema, UpdateVisitationSchema

class VisitationService:
    @staticmethod
    def get_all_visitations(db: Session = Depends(get_db)):
        return db.query(Visitation).all()

    @staticmethod
    def get_visitation(visitation_id: int, db: Session = Depends(get_db)):
        return db.query(Visitation).filter_by(visitation_id=visitation_id).first()

    @staticmethod
    def create_visitation(visitation: CreateVisitationSchema, db: Session = Depends(get_db)):
        db_visitation = Visitation(
            patient_id=visitation.patient_id,
            visitor_name=visitation.visitor_name,
            relation_to_patient=visitation.relation_to_patient,
            date_of_visit=visitation.date_of_visit,
            time_of_visit=visitation.time_of_visit
        )

        db.add(db_visitation)
        db.commit()
        db.refresh(db_visitation)

        return db_visitation

    @staticmethod
    def update_visitation(visitation_id: int, visitation: UpdateVisitationSchema, db: Session = Depends(get_db)):
        db_visitation = db.query(Visitation).filter(Visitation.visitation_id == visitation_id).first()

        if db_visitation:
            if visitation.patient_id is not None:
                db_visitation.patient_id = visitation.patient_id
            if visitation.visitor_name is not None:
                db_visitation.visitor_name = visitation.visitor_name
            if visitation.relation_to_patient is not None:
                db_visitation.relation_to_patient = visitation.relation_to_patient
            if visitation.date_of_visit is not None:
                db_visitation.date_of_visit = visitation.date_of_visit
            if visitation.time_of_visit is not None:
                db_visitation.time_of_visit = visitation.time_of_visit

            db.commit()
            db.refresh(db_visitation)

        return db_visitation

    @staticmethod
    def delete_visitation(visitation_id: int, db: Session = Depends(get_db)):
        db_visitation = db.query(Visitation).filter(Visitation.visitation_id == visitation_id).first()

        if db_visitation:
            db.delete(db_visitation)
            db.commit()

        return db_visitation
