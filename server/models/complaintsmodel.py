from sqlalchemy import Column, Integer, String, Date, ForeignKey
from sqlalchemy.orm import relationship
from datetime import date
from config.database import Base
from models.patientmodel import Patient

class Complaints(Base):
    __tablename__ = 'complaints'

    complaint_id = Column(Integer, primary_key=True, index=True)
    complaint_type = Column(String, index=True)
    date = Column(Date, default=date.today())
    patient_id = Column(Integer, ForeignKey('patients.patient_id'))
    details = Column(String)

    patient = relationship("Patient", backref="complaints")

