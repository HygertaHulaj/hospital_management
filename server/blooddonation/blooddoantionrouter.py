from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from config.database import get_db
from models.blooddonationmodel import BloodDonation
from schema.blooddonationschema import CreateBloodDonationSchema, UpdateBloodDonationSchema
from .blooddonationservice import BloodDonationService

router = APIRouter(prefix="/blood-donations", tags=["Blood Donations"])

@router.get("/")
def get_all_blood_donations(db: Session = Depends(get_db)):
    return BloodDonationService.get_all_blood_donations(db=db)

@router.post("/")
def create_blood_donation(blood_donation: CreateBloodDonationSchema, db: Session = Depends(get_db)):
    return BloodDonationService.create_blood_donation(blood_donation, db)

@router.put("/{donation_id}")
def update_blood_donation(donation_id: int, blood_donation: UpdateBloodDonationSchema, db: Session = Depends(get_db)):
    return BloodDonationService.update_blood_donation(donation_id=donation_id, blood_donation=blood_donation, db=db)

@router.delete("/{donation_id}")
def delete_blood_donation(donation_id: int, db: Session = Depends(get_db)):
    return BloodDonationService.delete_blood_donation(donation_id=donation_id, db=db)
