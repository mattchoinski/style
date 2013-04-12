VERSION = $(shell git describe | grep -o '[0-9]\.[0-9]\.[0-9]')

build:
	@echo "Generating the style sheet with versioning... $(VERSION)"
	@cat "screen.css" "screen.css" >> "screen_$(VERSION).css"
	@echo "...done."