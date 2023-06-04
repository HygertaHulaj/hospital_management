from datetime import date
from pydantic import BaseModel
from typing import Optional


class CreateMedicalTestSchema(BaseModel):
    test_type: str
    date: date
    patient_id: int
    doctor_id: int
    results: str


class UpdateMedicalTestSchema(BaseModel):
    test_type: Optional[str]
    date: Optional[date]
    patient_id: Optional[int]
    doctor_id: Optional[int]
    results: Optional[str]


# # class MedicalTests(BaseModel):
# #     id: int
# #     test_type: str
# #     date: date
# #     patient_id: int
# #     doctor_id: int
# #     results: str

# # #     class Config:
# #         orm_mode = True
