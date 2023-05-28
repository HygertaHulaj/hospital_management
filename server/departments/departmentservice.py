from fastapi import Depends
from sqlalchemy.orm import Session
from config.database import get_db

from models.departmentmodel import Department
from schema.departmentschema import CreateDepartmentSchema, UpdateDepartmentSchema

class DepartmentService:
    @staticmethod
    def get_all_departments(db: Session = Depends(get_db)):
        return db.query(Department).all()

    @staticmethod
    def get_department(department_id: int, db: Session = Depends(get_db)):
        return db.query(Department).filter_by(id=department_id).first()

    @staticmethod
    def create_department(department: CreateDepartmentSchema, db: Session = Depends(get_db)):
        db_department = Department(
            name=department.name,
            description=department.description,
            head_doctor=department.head_doctor,
            hospital_id = department.hospital_id
        )

        db.add(db_department)
        db.commit()
        db.refresh(db_department)

        return db_department

    @staticmethod
    def update_department(department_id: int, department: UpdateDepartmentSchema, db: Session = Depends(get_db)):
        db_department = db.query(Department).filter(Department.department_id == department_id).first()

        if db_department:
            if department.name is not None:
                db_department.name = department.name
            if department.description is not None:
                db_department.description = department.description
            if department.head_doctor is not None:
                db_department.head_doctor = department.head_doctor

            db.commit()
            db.refresh(db_department)

        return db_department

    @staticmethod
    def delete_department(department_id: int, db: Session = Depends(get_db)):
        db_department = db.query(Department).filter(Department.department_id == department_id).first()

        if db_department:
            db.delete(db_department)
            db.commit()

        return db_department
