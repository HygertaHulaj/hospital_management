import datetime
from sqlalchemy import Column, Integer, String, Date, ForeignKey
from sqlalchemy.orm import relationship
from config.database import Base
from models.patientmodel import Patient

class BloodDonation(Base):
    __tablename__ = 'blood_donations'

    donation_id = Column(Integer, primary_key=True, index=True)
    patient_id = Column(Integer, ForeignKey('patients.patient_id'))
    blood_type = Column(String)
    contact_details = Column(String)
    donation_date = Column(Date)
    donation_status = Column(String)
    quantity_donated = Column(Integer)
    comments = Column(String)

    patient = relationship("Patient", backref="blood_donations")
