from sqlalchemy import Column, Integer, String, Date
from config.database import Base
from sqlalchemy.orm import relationship

class Patient(Base):
    __tablename__ = 'patients'

    patient_id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    surname = Column(String, nullable=False)
    email=Column(String, nullable=False)
    gender = Column(String, nullable=False)  
    date_of_birth = Column(String, nullable=False)
    address = Column(String, nullable=False)
    contact_details = Column(String, nullable=False)
    password = Column(String, nullable=True)
    


    def __repr__(self):
        return f"<Patient id={self.id}, name='{self.name}'>"
