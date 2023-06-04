from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from config.database import get_db
from models.bloodrequestmodel import BloodRequest
from schema.bloodrequestschema import CreateBloodRequestSchema, UpdateBloodRequestSchema
from .bloodrequestservice import BloodRequestService

router = APIRouter(prefix="/blood_requests", tags=["Blood Requests"])

@router.get("/")
def get_all_blood_requests(db: Session = Depends(get_db)):
    return BloodRequestService.get_all_blood_requests(db=db)

@router.post("/")
def create_blood_request(blood_request: CreateBloodRequestSchema, db: Session = Depends(get_db)):
    return BloodRequestService.create_blood_request(blood_request, db)

@router.put("/{request_id}")
def update_blood_request(request_id: int, blood_request: UpdateBloodRequestSchema, db: Session = Depends(get_db)):
    return BloodRequestService.update_blood_request(request_id=request_id, blood_request=blood_request, db=db)

@router.delete("/{request_id}")
def delete_blood_request(request_id: int, db: Session = Depends(get_db)):
    return BloodRequestService.delete_blood_request(request_id=request_id, db=db)
