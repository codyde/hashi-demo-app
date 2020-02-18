FROM postgres:10.5

WORKDIR /

COPY create-cmbu-data.sh /docker-entrypoint-initdb.d/init-cmbu-data.sh

ENV POSTGRES_PASSWORD=postgres_password