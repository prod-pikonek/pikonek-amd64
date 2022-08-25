#!/bin/sh

NICS=$(ip --oneline link show | grep -v lo | awk '{print $2}' | cut -d':' -f1 | cut -d'@' -f1)

tcshow $NICS > /etc/pikonek/tcconfig.json