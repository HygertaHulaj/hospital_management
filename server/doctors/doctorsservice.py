from fastapi import Depends
from sqlalchemy.orm import Session
from config.database import get_db
from models.doctorsmodel import Doctor
from schema.doctorsschema import UpdateDoctorSchema, CreateDoctorSchema

class DoctorService:
    @staticmethod
    def get_all_doctors(db: Session = Depends(get_db)):
        return db.query(Doctor).all()

    @staticmethod
    def get_doctor(doctor_id: int, db: Session = Depends(get_db)):
        return db.query(Doctor).filter_by(doctor_id=doctor_id).first()

    @staticmethod
    def create_doctor(doctor: CreateDoctorSchema, db: Session = Depends(get_db)):
        db_doctor = Doctor(
            name=doctor.name,
            qualifications=doctor.qualifications,
            bio=doctor.bio,
            experience=doctor.experience,
            address=doctor.address,
            phone=doctor.phone,
            email=doctor.email,
            website=doctor.website,
            facebook=doctor.facebook,
            instagram=doctor.instagram,
            linkedin=doctor.linkedin,
            twitter=doctor.twitter
        )

        db.add(db_doctor)
        db.commit()
        db.refresh(db_doctor)

        return db_doctor

    @staticmethod
    def update_doctor(doctor_id: int, doctor: UpdateDoctorSchema, db: Session = Depends(get_db)):
        db_doctor = db.query(Doctor).filter(Doctor.doctor_id == doctor_id).first()

        if db_doctor:
            if doctor.doctor_id is not None:
                db_doctor.doctor_id = doctor.doctor_id
            if doctor.name is not None:
                db_doctor.name = doctor.name
            if doctor.qualifications is not None:
                db_doctor.qualifications = doctor.qualifications
            if doctor.bio is not None:
                db_doctor.bio = doctor.bio
            if doctor.experience is not None:
                db_doctor.experience = doctor.experience
            if doctor.address is not None:
                db_doctor.address = doctor.address
            if doctor.phone is not None:
                db_doctor.phone = doctor.phone
            if doctor.email is not None:
                db_doctor.email = doctor.email
            if doctor.website is not None:
                db_doctor.website = doctor.website
            if doctor.facebook is not None:
                db_doctor.facebook = doctor.facebook
            if doctor.instagram is not None:
                db_doctor.instagram = doctor.instagram
            if doctor.linkedin is not None:
                db_doctor.linkedin = doctor.linkedin
            if doctor.twitter is not None:
                db_doctor.twitter = doctor.twitter

            db.commit()
            db.refresh(db_doctor)

        return db_doctor

    @staticmethod
    def delete_doctor(doctor_id: int, db: Session = Depends(get_db)):
        db_doctor = db.query(Doctor).filter(Doctor.doctor_id == doctor_id).first()

        if db_doctor:
            db.delete(db_doctor)
            db.commit()

        return db_doctor
