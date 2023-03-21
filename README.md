# Test task integrating dadata.ru/api/find-party/ API

## Project Structure
### Backend
1. Receives GET on /party/:itn (individual taxpayer number)
2. Checks if party is present in PostgreSQL via typeorm
3. If not, pulls party name from dadata API and saves to db
4. Responds with `{name: string}`

<em>TypeScript, Express.js, PostgreSQL, Typeorm</em>

### Frontend
Super simple; one input, one button, one label; Input itn, press button to send, display result

<em>JavaScript, Vue.js</em>

### Docker
Dockerized for dev and prod

<em>
backend/Dockerfile <br/>
backend/Dockerfile-dev <br/>
frontend/Dockerfile <br/>
frontend/Dockerfile-dev <br/>
docker/docker-compose.yaml <br/>
docker/docker-compose-dev.yaml <br/>
</em>
