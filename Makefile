.PHONY: install dev lint format type-check test clean build publish all

install:
	pip install -e .

dev:
	pip install -e ".[dev]"

lint:
	ruff check src tests

format:
	ruff format src tests
	ruff check --fix src tests

type-check:
	mypy src

test:
	pytest

test-cov:
	pytest --cov --cov-report=html

clean:
	rm -rf build dist *.egg-info .pytest_cache .mypy_cache .ruff_cache htmlcov .coverage

build: clean
	python -m build

publish: build
	twine upload dist/*

all: format lint type-check test
