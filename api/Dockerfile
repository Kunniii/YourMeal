FROM python:3.9-slim
EXPOSE 8000
WORKDIR /app
COPY ./src/ /app
RUN pip install -r requirements.txt
CMD gunicorn -w 2 main:app -b 0.0.0.0