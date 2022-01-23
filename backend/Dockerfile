FROM python:3.9
WORKDIR /app
ENV FLASK_APP=main.py
ENV FLASK_RUN_HOST=0.0.0.0
ENV FLASK_RUN_PORT=5000
COPY ./src/ /app
EXPOSE 5000
RUN pip install -r requirements.txt
CMD ["python3", "main.py"]