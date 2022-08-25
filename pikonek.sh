#!/usr/bin/env bash
# Script taken from pihole project
#
# This file is copyright under the latest version of the EUPL.
# Please see LICENSE file for your rights under this license.

readonly PIKONEK_SCRIPT_DIR="/etc/.pikonek"
PIKONEK_BIN_DIR="/usr/local/bin"
readonly PIKONEK_CORE_ADMIN_SCRIPT_DIR="/etc/pikonek"

updatePikonekFunc() {
  shift
  "${PIKONEK_SCRIPT_DIR}"/update.sh "$@"
  exit 0
}

uninstallPikonekFunc() {
  shift
  "${PIKONEK_SCRIPT_DIR}"/uninstall.sh "$@"
  exit 0
}

versionFunc() {
  shift
  exec "${PIKONEK_SCRIPT_DIR}"/version.sh "$@"
}

adminFunc() {
  # export license
  export PYARMOR_LICENSE=/etc/pikonek/license/license.lic
  "${PIKONEK_CORE_ADMIN_SCRIPT_DIR}"/venv/bin/python3 "${PIKONEK_CORE_ADMIN_SCRIPT_DIR}"/pikonekcli.py "${@:2}"
}


updateCheckFunc() {
  "${PIKONEK_SCRIPT_DIR}"/updatecheck.sh "$@"
  exit 0
}

helpFunc() {
  echo "Usage: pikonek [options]
Example: 'pikonek -a -h'
Add '-h' after specific commands for more information on usage

Options:
  -a, admin           Pikonek interface options
                        Add '-h' for more info on Pikonek Interface usage
  -h, --help, help    Show this help dialog
  -up, updatePikonek  Update Pikonek subsystems
                        Add '--check-only' to exit script before update is performed.
  -v, version         Show installed versions of Pikonek and Pikonek install
                        Add '-h' for more info on version usage";  
    exit 0
}

if [[ $# = 0 ]]; then
  helpFunc
fi

# functions that do not require sudo power
case "${1}" in
  "-h" | "help" | "--help"      ) helpFunc;;
  "-v" | "version"              ) versionFunc "$@";;

  # we need to add all arguments that require sudo power to not trigger the * argument
  "-up" | "updatePikonek"        ) ;;
  "-a" | "admin"                ) ;;
  "updatechecker"               ) ;;
  "uninstall"                   ) ;;
  *                             ) helpFunc;;
esac

# Must be root to use this tool
if [[ ! $EUID -eq 0 ]];then
  if [[ -x "$(command -v sudo)" ]]; then
    exec sudo bash "$0" "$@"
    exit $?
  else
    echo -e "  ${CROSS} sudo is needed to run pikonek commands.  Please run this script as root or install sudo."
    exit 1
  fi
fi

# Handle redirecting to specific functions based on arguments
case "${1}" in
  "-up" | "updatePikonek"        ) updatePikonekFunc "$@";;
  "-a" | "admin"                ) adminFunc "$@";;
  "updatechecker"               ) updateCheckFunc "$@";;
  "uninstall"                   ) uninstallPikonekFunc "$@";;
esac