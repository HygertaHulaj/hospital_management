from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from config.database import get_db
from models.bedmodel import Bed
from schema.bedschema import CreateBedSchema, UpdateBedSchema
from .bedservise import BedService

router = APIRouter(prefix="/beds", tags=["Beds"])

@router.get("/")
def get_all_beds(db: Session = Depends(get_db)):
    return BedService.get_all_beds(db=db)

@router.get("/{bed_id}")
def get_bed(bed_id: int, db: Session = Depends(get_db)):
    bed = BedService.get_bed(bed_id=bed_id, db=db)
    if not bed:
        raise HTTPException(status_code=404, detail="Bed not found")
    return bed

@router.post("/")
def create_bed(bed: CreateBedSchema, db: Session = Depends(get_db)):
    return BedService.create_bed(bed=bed, db=db)

@router.put("/{bed_id}")
def update_bed(bed_id: int, bed: UpdateBedSchema, db: Session = Depends(get_db)):
    updated_bed = BedService.update_bed(bed_id=bed_id, bed=bed, db=db)
    if not updated_bed:
        raise HTTPException(status_code=404, detail="Bed not found")
    return updated_bed

@router.delete("/{bed_id}")
def delete_bed(bed_id: int, db: Session = Depends(get_db)):
    deleted_bed = BedService.delete_bed(bed_id=bed_id, db=db)
    if not deleted_bed:
        raise HTTPException(status_code=404, detail="Bed not found")
    return deleted_bed
