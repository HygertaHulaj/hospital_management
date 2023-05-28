from pydantic import BaseModel
from typing import Optional


class CreateNurseSchema(BaseModel):
    name: str
    surname: str
    email: str
    department: str
    contact_details: str


class UpdateNurseSchema(BaseModel):
    name: Optional[str]
    surname: Optional[str]
    email: Optional[str]
    department: Optional[str]
    contact_details: Optional[str]
