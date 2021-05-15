IMAGE_NAME=test-research

pipeline/image/base/build:
	docker build --build-arg NPM_TOKEN=$(NPM_TOKEN) --tag $(IMAGE_NAME):base --target base .

pipeline/test/type_check:
	make pipeline/image/base/build
	docker run --rm $(IMAGE_NAME):base npx tsc -p src/tsconfig.json --noemit

pipeline/lint:
	make pipeline/image/base/build
	docker run --rm $(IMAGE_NAME):base npm run lint -- --quiet

pipeline/test/unit/coverage:
	make pipeline/image/base/build
	docker run -d -t -v $(shell pwd)/coverage:/app/coverage --name unit_test
	docker cp ./jest.setup.js ./app/jest.setup.js
	docker exec -e NODE_OPTIONS=--max_old_space_size=1536 unit_test npm run test:coverage

pipeline/test/e2e:
	docker load --input $(IMAGE_NAME).docker
	npm run e2e:ci
