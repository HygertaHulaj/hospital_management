from sqlalchemy import Column, ForeignKey, Integer, String, DateTime, Text
from sqlalchemy.orm import relationship
from config.database import Base

class Appointment(Base):
    __tablename__ = 'appointments'

    appointment_id = Column(Integer, primary_key=True)
    patient_id = Column(Integer, ForeignKey('patients.patient_id'))
    service = Column(String)
    doctor_id = Column(Integer, ForeignKey('doctors.doctor_id'))
    date = Column(DateTime)  # Change the type to DateTime
    time = Column(String(255))
    message = Column(Text)

    patient = relationship("Patient", back_populates="appointments")
    doctor = relationship("Doctor", back_populates="appointments")
