from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from config.database import get_db
from models.shiftmodel import Shift
from schema.shiftschema import CreateShiftSchema, UpdateShiftSchema
from .shiftservice import ShiftService

router = APIRouter(prefix="/shifts", tags=["Shifts"])

@router.get("/")
def get_all_shifts(db: Session = Depends(get_db)):
    return ShiftService.get_all_shifts(db=db)

@router.post("/")
def create_shift(shift: CreateShiftSchema, db: Session = Depends(get_db)):
    return ShiftService.create_shift(shift, db)

@router.put("/{shift_id}")
def update_shift(shift_id: int, shift: UpdateShiftSchema, db: Session = Depends(get_db)):
    return ShiftService.update_shift(shift_id=shift_id, shift=shift, db=db)

@router.delete("/{shift_id}")
def delete_shift(shift_id: int, db: Session = Depends(get_db)):
    return ShiftService.delete_shift(shift_id=shift_id, db=db)
