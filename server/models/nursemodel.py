from sqlalchemy import Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from config.database import Base


class Nurse(Base):
    __tablename__ = 'nurses'

    nurse_id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    surname = Column(String)
    email = Column(String)
    department = Column(String)
    contact_details = Column(String)
    department_id = Column(Integer, ForeignKey('departments.department_id'))
    hospital_id = Column(Integer, ForeignKey('hospitals.hospital_id'))

    hospital = relationship("Hospital", backref="nurses")
