# from fastapi import FastAPI, HTTPException
# from fastapi.security import HTTPBasic, HTTPBasicCredentials

# # app = FastAPI()
# security = HTTPBasic()



# @app.post("/login")
# def login(credentials: HTTPBasicCredentials, db: Session = Depends(get_db)):
#     username = credentials.username
#     password = credentials.password

#     # Query the patient table for the provided username
#     patient = db.query(Patient).filter(Patient.username == username).first()

#     if patient and patient.password == password:
#         # Credentials are valid
#         return {"message": "Login successful"}

#     # If no matching user is found or password is incorrect,
#     # raise an HTTPException with a 401 status code (Unauthorized)
#     raise HTTPException(status_code=401, detail="Invalid credentials")
