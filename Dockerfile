FROM python:3.10.0

# set a directory for the app
WORKDIR .

# copy all the files to the container
COPY . .

# install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# define the port number the container should expose
EXPOSE 3000

# run the command
CMD ["python", "./main.py"]