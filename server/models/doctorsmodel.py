from sqlalchemy import Column, ForeignKey, Integer, String, Boolean, DateTime
from config.database import Base
from sqlalchemy.orm import relationship
# from .appointmentsmodel import Appointment  # Import the Appointment class from the correct module

class Doctor(Base):
    __tablename__ = 'doctors'

    doctor_id = Column(Integer, primary_key=True)
    name = Column(String(255))
    qualifications = Column(String(255))
    bio = Column(String(255))
    experience = Column(String(255))
    
    social_media = relationship("SocialMedia", uselist=False, back_populates="doctor")


    def __repr__(self):
        return f"<Doctor id={self.id} name='{self.name}'>"


class Contact(Base):
    __tablename__ = 'contacts'

    id = Column(Integer, primary_key=True)
    address = Column(String(255))
    phone = Column(String(255))
    email = Column(String(255))
    website = Column(String(255))

    # Define the relationship with the Doctor model
    doctor_id = Column(Integer, ForeignKey('doctors.doctor_id'))
    doctor = relationship("Doctor", back_populates="contact")



    def __repr__(self):
        return f"<Doctor id={self.id} name='{self.name}'>"

   
class SocialMedia(Base):
    __tablename__ = 'social_media'

    id = Column(Integer, primary_key=True)
    doctor_id = Column(Integer, ForeignKey('doctors.doctor_id'), unique=True)
    facebook = Column(String(255))
    instagram = Column(String(255))
    linkedin = Column(String(255))
    twitter = Column(String(255))

    doctor = relationship("Doctor", back_populates="social_media")