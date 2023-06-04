from datetime import date
from pydantic import BaseModel
from typing import Optional


class CreateBedSchema(BaseModel):
    # bed_id: int
    ward_id: str
    patient_id: int
    availability: str
    bed_condition: str
    bed_assigning_datetime: date
    discharge_datetime: date
    additional_notes: str


class UpdateBedSchema(BaseModel):
    bed_id: Optional[int]
    ward_id: Optional[str]
    patient_id: Optional[int]
    availability: Optional[str]
    bed_condition: Optional[str]
    bed_assigning_datetime: Optional[date]
    discharge_datetime: Optional[date]
    additional_notes: Optional[str]
