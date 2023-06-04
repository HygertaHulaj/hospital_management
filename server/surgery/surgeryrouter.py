from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from config.database import get_db
from models.surgerymodel import Surgery
from schema.surgeryschema import CreateSurgerySchema, UpdateSurgerySchema
from .surgeryservice import SurgeryService

router = APIRouter(prefix="/surgeries", tags=["Surgeries"])

@router.get("/")
def get_all_surgeries(db: Session = Depends(get_db)):
    return SurgeryService.get_all_surgeries(db=db)

@router.post("/")
def create_surgery(surgery: CreateSurgerySchema, db: Session = Depends(get_db)):
    return SurgeryService.create_surgery(surgery, db)

@router.put("/{surgery_id}")
def update_surgery(surgery_id: int, surgery: UpdateSurgerySchema, db: Session = Depends(get_db)):
    return SurgeryService.update_surgery(surgery_id=surgery_id, surgery=surgery, db=db)

@router.delete("/{surgery_id}")
def delete_surgery(surgery_id: int, db: Session = Depends(get_db)):
    return SurgeryService.delete_surgery(surgery_id=surgery_id, db=db)
