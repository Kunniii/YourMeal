FROM python:3.9
WORKDIR /app
ENV FLASK_APP=main.py
ENV FLASK_RUN_HOST=0.0.0.0
ENV FLASK_RUN_PORT=8080
COPY ./src/ /app
EXPOSE 80
RUN pip install -r requirements.txt
CMD ["python3", "main.py"]