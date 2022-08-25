#!/bin/sh

op="${1}"
mac="${2}"
ip="${3}"
host="${4}"

if [ -z "$host" ]; then
    host="Generic"
fi

if [ "$op" = "del" ]; then
    exit 0
fi

pikonek -a -x $mac -x $ip -x $op -x $host -x "None"
