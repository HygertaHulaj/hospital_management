import datetime
from sqlalchemy import Column, Integer, String, ForeignKey, Date
from sqlalchemy.orm import relationship
from config.database import Base
from models.patientmodel import Patient
from models.doctorsmodel import Doctor


class MedicalTest(Base):
    __tablename__ = 'medical_tests'

    medicaltest_id = Column(Integer, primary_key=True, index=True)
    test_type = Column(String, index=True)
    date = Column(Date)
    patient_id = Column(Integer, ForeignKey('patients.patient_id'))
    doctor_id = Column(Integer, ForeignKey('doctors.doctor_id'))
    results = Column(String)

    patient = relationship("Patient", backref="medical_tests_list")
    doctor = relationship("Doctor", backref="medical_tests")