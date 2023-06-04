from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from config.database import get_db
from models.medicaltestmodel import MedicalTest
from schema.medicaltestschema import CreateMedicalTestSchema, UpdateMedicalTestSchema
from .medicaltestservice import MedicalTestService

router = APIRouter(prefix="/medical_tests", tags=["Medical Tests"])

@router.get("/")
def get_all_medical_tests(db: Session = Depends(get_db)):
    return MedicalTestService.get_all_medical_tests(db=db)

@router.post("/")
def create_medical_test(medical_test: CreateMedicalTestSchema, db: Session = Depends(get_db)):
    return MedicalTestService.create_medical_test(medical_test, db)

@router.put("/{test_id}")
def update_medical_test(test_id: int, medical_test: UpdateMedicalTestSchema, db: Session = Depends(get_db)):
    return MedicalTestService.update_medical_test(test_id=test_id, medical_test=medical_test, db=db)

@router.delete("/{test_id}")
def delete_medical_test(test_id: int, db: Session = Depends(get_db)):
    return MedicalTestService.delete_medical_test(test_id=test_id, db=db)
