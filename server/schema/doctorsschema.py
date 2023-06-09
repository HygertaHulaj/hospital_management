from typing import List
from fastapi import FastAPI,UploadFile
from pydantic import BaseModel
from typing import Optional



# class Contact(BaseModel):
    # address: str
    # phone: str
    # email: str
    # website: str

# class Social(BaseModel):
    # facebook: str
    # instagram: str
    # linkedin: str
    # twitter: str

class CreateDoctorSchema(BaseModel):
    name: str
    qualifications: str
    bio: str
    specialty: list[str]
    education: list[str]
    experience: str
    address: str
    phone: str
    email: str
    website: str
    facebook: str
    instagram: str
    linkedin: str
    twitter: str



class UpdateDoctorSchema(BaseModel):
    doctor_id: Optional[int]
    name: Optional[str]
    qualifications: Optional[str]
    bio: Optional[str]
    specialty: Optional[List[str]]
    education: Optional[List[str]]
    experience: Optional[str]
    address: Optional[str]
    phone: Optional[int]
    email: Optional[str]
    website: Optional[str]
    facebook: Optional[str]
    instagram: Optional[str]
    linkedin: Optional[str]
    twitter: Optional[str]


