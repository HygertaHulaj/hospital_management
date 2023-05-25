# from sqlalchemy import Column, Integer, String, ForeignKey
# from sqlalchemy.orm import relationship
# from config.database import Base


# # Medical tests table
# class MedicalTest(Base):
#     __tablename__ = 'medical_tests'

#     test_id = Column(Integer, primary_key=True)
#     test_type = Column(String)
#     date = Column(String)
#     patient_id = Column(Integer, ForeignKey('patients.patient_id'))
#     doctor_id = Column(Integer, ForeignKey('doctors.doctor_id'))
#     results = Column(String)

#     patient = relationship("Patient", backref="medical_tests")
#     doctor = relationship("Doctor", backref="medical_tests")