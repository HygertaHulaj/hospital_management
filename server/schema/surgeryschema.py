from datetime import date
from pydantic import BaseModel
from typing import Optional

class CreateSurgerySchema(BaseModel):
    surgery_type: str
    date: date
    patient_id: int
    doctor_id: int

class UpdateSurgerySchema(BaseModel):
    surgery_type: Optional[str]
    date: Optional[date]
    patient_id: Optional[int]
    doctor_id: Optional[int]
