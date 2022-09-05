#!/usr/bin/env /etc/pikonek/venv/bin/python3.7
import logging
import sys
try:
    from pikonekbin import main
    if __name__ == '__main__':
        sys.exit(main(sys.argv))
except Exception as e:
    logging.error(e)