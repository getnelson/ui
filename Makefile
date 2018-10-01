
SRC_DIR=vue
NODE_ENV=development

build:
	(cd $(SRC_DIR) && npm run build)

run:
	(cd $(SRC_DIR) && npm run dev)

install:
	npm install --global vue-cli

sync:
	cp -R src/hugo/static/* src/vue/src/assets/
