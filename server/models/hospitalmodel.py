from sqlalchemy import Column, Integer, String, Boolean
from sqlalchemy.orm import relationship
from config.database import Base


class Hospital(Base):
    __tablename__ = 'hospitals'

    hospital_id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    location = Column(String)
    capacity = Column(Integer)
    emergency_services = Column(Boolean)


    # # nurses = relationship("Nurse", backref="hospital")
    # doctors = relationship("Doctor", backref="hospital")
    # patients = relationship("Patient", backref="hospital")