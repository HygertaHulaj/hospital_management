from datetime import date
from pydantic import BaseModel
from typing import Optional


class CreateBloodRequestSchema(BaseModel):
    request_date: date
    blood_type: str
    contact_information: str
    request_status: str
    requested_units: int
    urgency_level: str
    request_notes: str


class UpdateBloodRequestSchema(BaseModel):
    request_date: Optional[date]
    blood_type: Optional[str]
    contact_information: Optional[str]
    request_status: Optional[str]
    requested_units: Optional[int]
    urgency_level: Optional[str]
    request_notes: Optional[str]
