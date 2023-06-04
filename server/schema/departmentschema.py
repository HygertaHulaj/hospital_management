from pydantic import BaseModel
from typing import Optional

class CreateDepartmentSchema(BaseModel):
    name: str
    description: str
    head_doctor: str
    hospital_id: int


class UpdateDepartmentSchema(BaseModel):
    department_id:Optional[int]
    name: Optional[str]
    description: Optional[str]
    head_doctor: Optional[str]
    hospital_id:Optional[int]
