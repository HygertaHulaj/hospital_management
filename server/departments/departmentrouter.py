from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from .departmentservice import DepartmentService
from schema.departmentschema import CreateDepartmentSchema, UpdateDepartmentSchema
from config.database import get_db

router = APIRouter(prefix="/departments", tags=["Departments"])

@router.get("/")
def get_all_departments(db: Session = Depends(get_db)):
    return DepartmentService.get_all_departments(db=db)

@router.post("/")
def create_department(department: CreateDepartmentSchema, db: Session = Depends(get_db)):
    return DepartmentService.create_department(department, db)

@router.get("/{department_id}")
def get_department(department_id: int, db: Session = Depends(get_db)):
    return DepartmentService.get_department(department_id=department_id, db=db)

@router.put("/{department_id}")
def update_department(department_id: int, department: UpdateDepartmentSchema, db: Session = Depends(get_db)):
    return DepartmentService.update_department(department_id=department_id, department=department, db=db)

@router.delete("/{department_id}")
def delete_department(department_id: int, db: Session = Depends(get_db)):
    return DepartmentService.delete_department(department_id=department_id, db=db)
