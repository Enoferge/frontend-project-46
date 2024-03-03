install:
	npm ci

lint:
	npx eslint .

gendiff:
	npm link

test:
	npm test

test-coverage:
	npm test -- --coverage --coverageProvider=v8

.PHONY: test