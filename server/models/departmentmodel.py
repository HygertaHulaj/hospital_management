from sqlalchemy import Column, ForeignKey, Integer, String, Date
from config.database import Base
from sqlalchemy.orm import relationship

class Department(Base):
    __tablename__ = "departments"

    department_id = Column(Integer, primary_key=True, index=True)
    name = Column(String, unique=True, index=True)
    description = Column(String)
    head_doctor = Column(String)

    hospital_id = Column(Integer, ForeignKey('hospitals.hospital_id'))
    hospital = relationship("Hospital", backref="departments")
