FROM python:3.9-slim
EXPOSE 8000
WORKDIR /app
COPY ./src/requirements.txt /app
RUN pip install -r requirements.txt
COPY ./src/main.py /app
CMD gunicorn main:app -b 0.0.0.0