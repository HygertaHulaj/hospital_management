from fastapi import Depends
from sqlalchemy.orm import Session
from config.database import get_db
from models.blooddonationmodel import BloodDonation
from schema.blooddonationschema import CreateBloodDonationSchema, UpdateBloodDonationSchema

class BloodDonationService:
    @staticmethod
    def get_all_blood_donations(db: Session = Depends(get_db)):
        return db.query(BloodDonation).all()

    @staticmethod
    def get_blood_donation(donation_id: int, db: Session = Depends(get_db)):
        return db.query(BloodDonation).filter_by(donation_id=donation_id).first()

    @staticmethod
    def create_blood_donation(blood_donation: CreateBloodDonationSchema, db: Session = Depends(get_db)):
        db_blood_donation = BloodDonation(
            patient_id=blood_donation.patient_id,
            blood_type=blood_donation.blood_type,
            contact_details=blood_donation.contact_details,
            donation_date=blood_donation.donation_date,
            # donation_status=blood_donation.donation_status,
            quantity_donated=blood_donation.quantity_donated,
            comments=blood_donation.comments
        )

        db.add(db_blood_donation)
        db.commit()
        db.refresh(db_blood_donation)

        return db_blood_donation

    @staticmethod
    def update_blood_donation(donation_id: int, blood_donation: UpdateBloodDonationSchema, db: Session = Depends(get_db)):
        db_blood_donation = db.query(BloodDonation).filter(BloodDonation.donation_id == donation_id).first()

        if db_blood_donation:
            if blood_donation.patient_id is not None:
                db_blood_donation.patient_id = blood_donation.patient_id
            if blood_donation.blood_type is not None:
                db_blood_donation.blood_type = blood_donation.blood_type
            if blood_donation.contact_details is not None:
                db_blood_donation.contact_details = blood_donation.contact_details
            if blood_donation.donation_date is not None:
                db_blood_donation.donation_date = blood_donation.donation_date
            if blood_donation.donation_status is not None:
                db_blood_donation.donation_status = blood_donation.donation_status
            if blood_donation.quantity_donated is not None:
                db_blood_donation.quantity_donated = blood_donation.quantity_donated
            if blood_donation.comments is not None:
                db_blood_donation.comments = blood_donation.comments

            db.commit()
            db.refresh(db_blood_donation)

        return db_blood_donation

    @staticmethod
    def delete_blood_donation(donation_id: int, db: Session = Depends(get_db)):
        db_blood_donation = db.query(BloodDonation).filter(BloodDonation.donation_id == donation_id).first()

        if db_blood_donation:
            db.delete(db_blood_donation)
            db.commit()

        return db_blood_donation
