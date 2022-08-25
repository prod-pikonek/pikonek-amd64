#!/usr/bin/env bash
# shellcheck disable=SC1090

PIKONEK_INSTALL_DIR="/etc/pikonek"

uninstall() {
    pip_uninstall_packages
    
    if [[ -f "${PIKONEK_INSTALL_DIR}/configs/iptables.default.rules" ]]; then
        iptables-restore < ${PIKONEK_INSTALL_DIR}/configs/iptables.default.rules  > /dev/null 2>&1 || echo ""
    fi
    # Stop services
    sudo /etc/init.d/S70piknkmain stop  > /dev/null 2>&1 ||  echo ""
    # Remove existing files
    rm -rf ${PIKONEK_INSTALL_DIR}
    # rm -rf /etc/logrotate.d/pikonek
    # rm -rf /etc/dnsmasq.d/01-pikonek.conf
    # rm -rf /etc/dnsmasq.d/01-pikonek.conf.old
    # rm -rf /etc/init.d/S70piknkmain
    # rm -rf /etc/sysctl.conf
    # rm -rf /etc/sudoers.d/pikonek
    # rm -rf /usr/local/bin/pikonek
    # rm -rf /etc/cron.d/pikonek
    # rm -rf /etc/systemd/network/*.link
    # rm -rf /etc/network/interfaces
}

# Uninstall python requirements using requirements.txt
pip_uninstall_packages() {
    printf "  %b Uninstalling required package for pikonek core..." "${INFO}"
    # Remove pyroute2.* file
    rm -rf /usr/local/lib/python3.6/dist-packages/pyroute2.*
    python3 -m pip uninstall -y -r "${PIKONEK_INSTALL_DIR}/requirements.txt" || \
    { printf "  %bUnable to uninstall required pikonek core dependencies, unable to continue%b\\n" "${COL_LIGHT_RED}" "${COL_NC}"; \
    exit 1; \
    }
}

uninstall