from fastapi import Depends
from sqlalchemy.orm import Session
from config.database import get_db

from models.shiftmodel import Shift
from schema.shiftschema import CreateShiftSchema, UpdateShiftSchema

class ShiftService:
    @staticmethod
    def get_all_shifts(db: Session = Depends(get_db)):
        return db.query(Shift).all()

    @staticmethod
    def get_shift(shift_id: int, db: Session = Depends(get_db)):
        return db.query(Shift).filter_by(shift_id=shift_id).first()

    @staticmethod
    def create_shift(shift: CreateShiftSchema, db: Session = Depends(get_db)):
        db_shift = Shift(
            name=shift.name,
            start_time=shift.start_time,
            end_time=shift.end_time,
            shift_date=shift.shift_date,
            shift_type=shift.shift_type,
            shift_duration=shift.shift_duration,
            break_start_time=shift.break_start_time,
            break_end_time=shift.break_end_time,
            overtime_hours=shift.overtime_hours,
            location=shift.location,
            department=shift.department
        )

        db.add(db_shift)
        db.commit()
        db.refresh(db_shift)

        return db_shift

    @staticmethod
    def update_shift(shift_id: int, shift: UpdateShiftSchema, db: Session = Depends(get_db)):
        db_shift = db.query(Shift).filter(Shift.shift_id == shift_id).first()

        if db_shift:
            if shift.name is not None:
                db_shift.name = shift.name
            if shift.start_time is not None:
                db_shift.start_time = shift.start_time
            if shift.end_time is not None:
                db_shift.end_time = shift.end_time
            if shift.shift_date is not None:
                db_shift.shift_date = shift.shift_date
            if shift.shift_type is not None:
                db_shift.shift_type = shift.shift_type
            if shift.shift_duration is not None:
                db_shift.shift_duration = shift.shift_duration
            if shift.break_start_time is not None:
                db_shift.break_start_time = shift.break_start_time
            if shift.break_end_time is not None:
                db_shift.break_end_time = shift.break_end_time
            if shift.overtime_hours is not None:
                db_shift.overtime_hours = shift.overtime_hours
            if shift.location is not None:
                db_shift.location = shift.location
            if shift.department is not None:
                db_shift.department = shift.department


            db.commit()
            db.refresh(db_shift)

        return db_shift

    @staticmethod
    def delete_shift(shift_id: int, db: Session = Depends(get_db)):
        db_shift = db.query(Shift).filter(Shift.shift_id == shift_id).first()

        if db_shift:
            db.delete(db_shift)
            db.commit()

        return db_shift
