from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from config.database import get_db
from models.complaintsmodel import Complaints
from schema.complaintsschema import CreateComplaintSchema, UpdateComplaintSchema
from .complaintsservice import ComplaintsService

router = APIRouter(prefix="/complaints", tags=["Complaints"])

@router.get("/")
def get_all_complaints(db: Session = Depends(get_db)):
    return ComplaintsService.get_all_complaints(db=db)

@router.post("/")
def create_complaint(complaint: CreateComplaintSchema, db: Session = Depends(get_db)):
    return ComplaintsService.create_complaint(complaint, db)

@router.put("/{complaint_id}")
def update_complaint(complaint_id: int, complaint: UpdateComplaintSchema, db: Session = Depends(get_db)):
    return ComplaintsService.update_complaint(complaint_id=complaint_id, complaint=complaint, db=db)

@router.delete("/{complaint_id}")
def delete_complaint(complaint_id: int, db: Session = Depends(get_db)):
    return ComplaintsService.delete_complaint(complaint_id=complaint_id, db=db)
