# from fastapi import Depends
# from sqlalchemy.orm import Session
# from config.database import get_db
# from models.doctorsmodel import Doctor
# from schema.doctorsschema import Doctor

# class DoctorService:
#     @staticmethod
#     def get_all_doctors(db: Session = Depends(get_db)):
#         return db.query(Doctor).all()

#     @staticmethod
#     def get_doctor(doctor_id: int, db: Session = Depends(get_db)):
#         return db.query(Doctor).filter_by(id=doctor_id).first()



#     @staticmethod
#     def create_doctor(doctor: Doctor, db: Session = Depends(get_db)):
#         db_doctor = Doctor(
#             name=doctor.name,
#             qualifications=doctor.qualifications,
#             bio=doctor.bio,
#             experience=doctor.experience,
#             contact=doctor.contact,
#             social=doctor.social

#         )

#         db.add(db_doctor)
#         db.commit()
#         db.refresh(db_doctor)

#         return db_doctor

#     @staticmethod
#     def update_doctor(doctor_id: int, doctor: Doctor, db: Session = Depends(get_db)):
#         db_doctor = db.query(Doctor).filter(Doctor.id == doctor_id).first()

#         if db_doctor:
#             if doctor.name:
#                 db_doctor.name = doctor.name
#             if doctor.specialization:
#                 db_doctor.specialization = doctor.specialization

#             if doctor.contact_details:
#                 db_doctor.contact_details = doctor.contact_details
#             if doctor.address:
#                 db_doctor.address = doctor.address
#             if doctor.date_of_birth:
#                 db_doctor.date_of_birth = doctor.date_of_birth
#             if doctor.is_active is not None:
#                 db_doctor.is_active = doctor.is_active

#             db.commit()
#             db.refresh(db_doctor)

#         return db_doctor

#     @staticmethod
#     def delete_doctor(doctor_id: int, db: Session = Depends(get_db)):
#         db_doctor = db.query(Doctor).filter(Doctor.id == doctor_id).first()

#         if db_doctor:
#             db.delete(db_doctor)
#             db.commit()

#         return db_doctor
