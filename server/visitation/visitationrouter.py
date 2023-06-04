from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from config.database import get_db
from models.visitationmodel import Visitation
from schema.visitationsschema import CreateVisitationSchema, UpdateVisitationSchema
from .visitationservises import VisitationService

router = APIRouter(prefix="/visitations", tags=["Visitations"])

@router.get("/")
def get_all_visitations(db: Session = Depends(get_db)):
    return VisitationService.get_all_visitations(db=db)

@router.post("/")
def create_visitation(visitation: CreateVisitationSchema, db: Session = Depends(get_db)):
    return VisitationService.create_visitation(visitation, db)

@router.put("/{visitation_id}")
def update_visitation(visitation_id: int, visitation: UpdateVisitationSchema, db: Session = Depends(get_db)):
    return VisitationService.update_visitation(visitation_id=visitation_id, visitation=visitation, db=db)

@router.delete("/{visitation_id}")
def delete_visitation(visitation_id: int, db: Session = Depends(get_db)):
    return VisitationService.delete_visitation(visitation_id=visitation_id, db=db)
