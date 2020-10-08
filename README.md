### Running project

Docker is required to be installed.

Before running make sure you add the following to your hosts file:

```bash
127.0.0.1       minio
```

To run the project:

```bash
docker network create apollo-minio-example
docker-compose up
```

Note: If containers need to be rebuilt, before running compose run:

```bash
docker-compose build
```

The applications run on the following URLs:

- GraphQL: localhost:81/graphql
- Minio: localhost:9000 (Credentials: foobar / foobarfoobarfoobar )
- Storage Service: localhost:82