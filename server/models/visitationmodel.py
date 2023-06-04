import datetime
from sqlalchemy import Column, Integer, String, ForeignKey, Date, Time
from sqlalchemy.orm import relationship
from config.database import Base
from models.patientmodel import Patient

class Visitation(Base):
    __tablename__ = 'visitations'

    visitation_id = Column(Integer, primary_key=True, index=True)
    patient_id = Column(Integer, ForeignKey('patients.patient_id'))
    visitor_name = Column(String)
    relation_to_patient = Column(String)
    date_of_visit = Column(Date)
    time_of_visit = Column(Time)

    patient = relationship("Patient", backref="visitations")

