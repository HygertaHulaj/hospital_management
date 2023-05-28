from datetime import date
from pydantic import BaseModel
from typing import Optional

class CreateBloodDonationSchema(BaseModel):
    patient_id: int
    blood_type: str
    contact_details: str
    donation_date: date
    # donation_status: str
    quantity_donated: int
    comments: Optional[str]

class UpdateBloodDonationSchema(BaseModel):
    patient_id: Optional[int]
    blood_type: Optional[str]
    contact_details: Optional[str]
    donation_date: Optional[date]
    donation_status: Optional[str]
    quantity_donated: Optional[int]
    comments: Optional[str]
