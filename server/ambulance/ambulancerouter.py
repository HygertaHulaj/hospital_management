from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from config.database import get_db

from models.ambulancemodel import Ambulance
from schema.ambulanceschema import CreateAmbulanceSchema, UpdateAmbulanceSchema
from .ambulanceservice import AmbulanceService

router = APIRouter(prefix="/ambulances", tags=["Ambulances"])

@router.get("/")
def get_all_ambulances(db: Session = Depends(get_db)):
    return AmbulanceService.get_all_ambulances(db=db)

@router.get("/{ambulance_id}")
def get_ambulance(ambulance_id: int, db: Session = Depends(get_db)):
    ambulance = AmbulanceService.get_ambulance(ambulance_id=ambulance_id, db=db)
    if not ambulance:
        raise HTTPException(status_code=404, detail="Ambulance not found")
    return ambulance

@router.post("/")
def create_ambulance(ambulance: CreateAmbulanceSchema, db: Session = Depends(get_db)):
    return AmbulanceService.create_ambulance(ambulance=ambulance, db=db)

@router.put("/{ambulance_id}")
def update_ambulance(ambulance_id: int, ambulance: UpdateAmbulanceSchema, db: Session = Depends(get_db)):
    updated_ambulance = AmbulanceService.update_ambulance(ambulance_id=ambulance_id, ambulance=ambulance, db=db)
    if not updated_ambulance:
        raise HTTPException(status_code=404, detail="Ambulance not found")
    return updated_ambulance

@router.delete("/{ambulance_id}")
def delete_ambulance(ambulance_id: int, db: Session = Depends(get_db)):
    deleted_ambulance = AmbulanceService.delete_ambulance(ambulance_id=ambulance_id, db=db)
    if not deleted_ambulance:
        raise HTTPException(status_code=404, detail="Ambulance not found")
    return deleted_ambulance
