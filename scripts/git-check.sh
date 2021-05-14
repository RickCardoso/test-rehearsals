#!/bin/sh

ERROR_MESSAGE="${GREEN}No changes to be pushed${NC}"

if
  ( git status --branch --short ); then
  echo $ERROR_MESSAGE
  exit 1
fi
