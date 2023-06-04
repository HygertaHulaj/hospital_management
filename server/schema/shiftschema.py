from datetime import datetime, timedelta
from pydantic import BaseModel
from typing import Optional


class CreateShiftSchema(BaseModel):
    name: str
    start_time: datetime
    end_time: datetime
    shift_date: datetime
    shift_type: str
    shift_duration: datetime
    break_start_time: Optional[datetime]
    break_end_time: Optional[datetime]
    overtime_hours: Optional[datetime]
    location: Optional[str]
    department: Optional[str]


class UpdateShiftSchema(BaseModel):
    name: Optional[str]
    start_time: Optional[datetime]
    end_time: Optional[datetime]
    shift_date: Optional[datetime]
    shift_type: Optional[str]
    shift_duration: Optional[datetime]
    break_start_time: Optional[datetime]
    break_end_time: Optional[datetime]
    overtime_hours: Optional[datetime]
    location: Optional[str]
    department: Optional[str]