# from sqlalchemy import Column, Integer, String, ForeignKey
# from sqlalchemy.orm import relationship
# from config.database import Base




# class Prescription(Base):
#     __tablename__ = 'prescriptions'

#     prescription_id = Column(Integer, primary_key=True)
#     medication_name = Column(String)
#     dosage = Column(String)
#     duration = Column(String)
#     patient_id = Column(Integer, ForeignKey('patients.patient_id'))
#     doctor_id = Column(Integer, ForeignKey('doctors.doctor_id'))

#     patient = relationship("Patient", backref="prescriptions")
#     doctor = relationship("Doctor", backref="prescriptions")