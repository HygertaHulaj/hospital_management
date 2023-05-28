import datetime
from sqlalchemy import Column, Integer, String, ForeignKey, Date
from sqlalchemy.orm import relationship
from config.database import Base
from models.patientmodel import Patient
from models.doctorsmodel import Doctor


class Bed(Base):
    __tablename__ = 'beds'

    bed_id = Column(Integer, primary_key=True, index=True)
    ward_id = Column(String, index=True)
    patient_id = Column(Integer, ForeignKey('patients.patient_id'))
    availability = Column(String)
    bed_condition= Column(String)
    bed_assigning_datetime = Column(Date)
    discharge_datetime = Column(Date)
    additional_notes=Column(String)


    patient = relationship("Patient", backref="bed_list")