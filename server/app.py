import os
from io import BytesIO

import requests
from flask import Flask, Response
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route("/personal_resume")
def generate_resume():
    EXPORT_URL = os.getenv("EXPORT_RESUME_URL")
    response = requests.get(EXPORT_URL, headers={"User-Agent": os.getenv("USER_AGENT")})
    pdf_doc = BytesIO(response.content)
    pdf_doc.seek(0)  # Ensure the pointer is at the start of the document.
    return Response(
        pdf_doc,
        mimetype="application/pdf",
        headers={"Content-Disposition": "attachment;filename=cv.pdf"},
    )


app.run(debug=True, port=os.getenv("SERVER_PORT"))
