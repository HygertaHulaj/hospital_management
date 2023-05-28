import datetime
from sqlalchemy import Column, Integer, String, ForeignKey, Date
from sqlalchemy.orm import relationship
from config.database import Base
from models.patientmodel import Patient
from models.doctorsmodel import Doctor


class Surgery(Base):
    __tablename__ = 'surgeries'

    surgery_id = Column(Integer, primary_key=True, index=True)
    surgery_type = Column(String, index=True)
    date = Column(Date)
    patient_id = Column(Integer, ForeignKey('patients.patient_id'))
    doctor_id = Column(Integer, ForeignKey('doctors.doctor_id'))

    patient = relationship("Patient", backref="surgeries")
    doctor = relationship("Doctor", backref="surgeries")