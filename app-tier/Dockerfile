FROM alpine

LABEL maintainer "Cody De Arkland <cdearkland@vmware.com>"
LABEL description "Python API tier running flask, gunicorn, and supervisord"

# Copy python requirements file
COPY requirements.txt /tmp/requirements.txt

RUN apk add --no-cache \
    python3 \
    bash \
    postgresql-dev \
    gcc \ 
    python3-dev \ 
    musl-dev \
    git \
    linux-headers && \ 
    python3 -m ensurepip && \
    rm -r /usr/lib/python*/ensurepip && \
    pip3 install --upgrade pip setuptools && \
    pip3 install -r /tmp/requirements.txt && \
    rm -r /root/.cache

RUN pip install git+https://github.com/Supervisor/supervisor@master

COPY ./app /app
COPY app.conf /usr/supervisord.conf

CMD ["/usr/bin/supervisord","--nodaemon","-c","/usr/supervisord.conf"]