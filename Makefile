build:
	@docker compose --env-file .docker.env build --no-cache

up:
	@docker compose --env-file .docker.env up -d

down:
	@docker compose --env-file .docker.env down