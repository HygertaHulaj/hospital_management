from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from config.database import get_db
from models.nursemodel import Nurse
from schema.nurseschema import CreateNurseSchema, UpdateNurseSchema
from .nurseservice import NurseService

router = APIRouter(prefix="/nurses", tags=["Nurses"])

@router.get("/")
def get_all_nurses(db: Session = Depends(get_db)):
    return NurseService.get_all_nurses(db=db)

@router.get("/{nurse_id}")
def get_nurse(nurse_id: int, db: Session = Depends(get_db)):
    nurse = NurseService.get_nurse(nurse_id=nurse_id, db=db)
    if not nurse:
        raise HTTPException(status_code=404, detail="Nurse not found")
    return nurse

@router.post("/")
def create_nurse(nurse: CreateNurseSchema, db: Session = Depends(get_db)):
    return NurseService.create_nurse(nurse=nurse, db=db)

@router.put("/{nurse_id}")
def update_nurse(nurse_id: int, nurse: UpdateNurseSchema, db: Session = Depends(get_db)):
    updated_nurse = NurseService.update_nurse(nurse_id=nurse_id, nurse=nurse, db=db)
    if not updated_nurse:
        raise HTTPException(status_code=404, detail="Nurse not found")
    return updated_nurse

@router.delete("/{nurse_id}")
def delete_nurse(nurse_id: int, db: Session = Depends(get_db)):
    deleted_nurse = NurseService.delete_nurse(nurse_id=nurse_id, db=db)
    if not deleted_nurse:
        raise HTTPException(status_code=404, detail="Nurse not found")
    return {"message": "Nurse deleted successfully"}
