import datetime
from sqlalchemy import Column, Integer, String, ForeignKey, Date
from sqlalchemy.orm import relationship
from config.database import Base
from models.patientmodel import Patient
from models.doctorsmodel import Doctor

class BloodRequest(Base):
    __tablename__ = 'blood_requests'

    request_id = Column(Integer, primary_key=True, index=True)
    request_date = Column(Date)
    blood_type = Column(String, index=True)
    contact_information = Column(String)
    request_status = Column(String)
    requested_units = Column(Integer)
    urgency_level = Column(String)
    request_notes = Column(String)

    hospital_id = Column(Integer, ForeignKey('hospitals.hospital_id'))
    hospital = relationship("Hospital", backref="blood_requests")