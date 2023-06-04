from datetime import date
from pydantic import BaseModel
from typing import Optional


class CreateComplaintSchema(BaseModel):
    complaint_type: str
    date: date
    patient_id: int
    details: str


class UpdateComplaintSchema(BaseModel):
    complaint_type: Optional[str]
    date: Optional[date]
    patient_id: Optional[int]
    details: Optional[str]
