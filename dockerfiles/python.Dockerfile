FROM python:3
WORKDIR /code
# COPY requirements.txt ./
# RUN pip install --no-cache-dir -r requirements.txt
RUN pip install ipython
CMD [ "python", "./index.py" ]


