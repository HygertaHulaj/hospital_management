from datetime import date
from pydantic import BaseModel
from typing import Optional


# class Hospital(BaseModel):
#     hospital_id: int
#     name: str
#     location: str
#     capacity: int
#     emergency_services: bool


class CreateHospitalSchema(BaseModel):
    name: str
    location: str
    capacity: int
    emergency_services: bool


class UpdateHospitalSchema(BaseModel):
    name: Optional[str]
    location: Optional[str]
    capacity: Optional[int]
    emergency_services: Optional[bool]
