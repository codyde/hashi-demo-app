FROM postgres:10.5

WORKDIR /

COPY create-db-data.sh /docker-entrypoint-initdb.d/init-db-data.sh

ENV POSTGRES_PASSWORD=postgres_password
