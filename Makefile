.PHONY: build-docker
build-docker:
	docker build . -t ghcr.io/valesordev/www-hugo-nginx

