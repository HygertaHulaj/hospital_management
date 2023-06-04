from pydantic import BaseModel
from typing import Optional


class CreateAmbulanceSchema(BaseModel):
    plate_number: str
    status: str


class UpdateAmbulanceSchema(BaseModel):
    ambulance_id: Optional[str]
    plate_number: Optional[str]
    status: Optional[str]
