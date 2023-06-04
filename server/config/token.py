import jwt
from datetime import datetime, timedelta

def generate_jwt_token(patient):
    # Set the token expiration time (e.g., 1 hour from the current time)
    expiration_time = datetime.utcnow() + timedelta(hours=1)

    # Create the payload containing the patient data
    payload = {
        'patient_id': patient.patient_id,  # Adjust the field name as per your Patient schema
        'email': patient.email,  # Adjust the field name as per your Patient schema
        'exp': expiration_time
    }

    # Generate the JWT token using a secret key
    token = jwt.encode(payload, 'your_secret_key', algorithm='HS256')

    return token