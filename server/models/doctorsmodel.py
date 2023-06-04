from sqlalchemy import ARRAY, Column, ForeignKey, Integer, String, Boolean, DateTime
from config.database import Base
from sqlalchemy.orm import relationship

class Doctor(Base):
    __tablename__ = 'doctors'

    doctor_id = Column(Integer, primary_key=True)
    name = Column(String(255))
    qualifications = Column(String(255))
    bio = Column(String(255))
    specialty = Column(ARRAY(String))
    education = Column(ARRAY(String))
    experience = Column(String(255))
    address = Column(String(255))
    phone = Column(String(255))
    email = Column(String(255))
    website = Column(String(255))
    facebook = Column(String(255))
    instagram = Column(String(255))
    linkedin = Column(String(255))
    twitter = Column(String(255))


    appointments = relationship("Appointment", back_populates="doctor")


    def __repr__(self):
        return f"<Doctor id={self.id} name='{self.name}'>"


