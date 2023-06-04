from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from config.database import get_db
from models.hospitalmodel import Hospital
from schema.hospitalschema import CreateHospitalSchema, UpdateHospitalSchema
from .hospitalservice import HospitalService

router = APIRouter(prefix="/hospitals", tags=["Hospitals"])

@router.get("/")
def get_all_hospitals(db: Session = Depends(get_db)):
    return HospitalService.get_all_hospitals(db=db)

@router.post("/")
def create_hospital(hospital: CreateHospitalSchema, db: Session = Depends(get_db)):
    return HospitalService.create_hospital(hospital, db)

@router.put("/{hospital_id}")
def update_hospital(hospital_id: int, hospital: UpdateHospitalSchema, db: Session = Depends(get_db)):
    return HospitalService.update_hospital(hospital_id=hospital_id, hospital=hospital, db=db)

@router.delete("/{hospital_id}")
def delete_hospital(hospital_id: int, db: Session = Depends(get_db)):
    return HospitalService.delete_hospital(hospital_id=hospital_id, db=db)
