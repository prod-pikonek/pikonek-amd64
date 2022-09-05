#!/usr/bin/env /etc/pikonek/venv/bin/python3.7
# coding=utf-8
import logging
try:
    from start import start_app

    start_app()
except Exception as e:
    logging.error(e)
