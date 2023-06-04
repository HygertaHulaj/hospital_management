import datetime
from sqlalchemy import Column, Integer, String, ForeignKey, DateTime, Time, Interval
from sqlalchemy.orm import relationship
from config.database import Base


class Shift(Base):
    __tablename__ = 'shifts'

    shift_id = Column(Integer, primary_key=True, index=True)
    name =Column(String)
    start_time = Column(DateTime)
    end_time = Column(DateTime)
    shift_date = Column(DateTime)
    shift_type = Column(String)
    shift_duration = Column(DateTime)
    break_start_time = Column(Time)
    break_end_time = Column(Time)
    overtime_hours = Column(DateTime)
    location = Column(String)
    department = Column(String)

