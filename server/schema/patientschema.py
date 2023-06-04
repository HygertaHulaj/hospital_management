from datetime import date
from pydantic import BaseModel
from typing import Optional


class CreatePatientSchema(BaseModel):
    name: str
    surname: str
    email: str
    gender: str
    date_of_birth: str
    address: str
    contact_details: str
    password:Optional[str]


class UpdatePatientSchema(BaseModel):
    patient_id: Optional[int]
    name: Optional[str]
    surname: Optional[str]
    email: Optional[str]
    gender: Optional[str]
    date_of_birth: Optional[str]
    address: Optional[str]
    contact_details: Optional[str]
    password: Optional[str]
