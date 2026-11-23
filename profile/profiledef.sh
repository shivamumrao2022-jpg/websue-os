
#!/usr/bin/env bash

iso_name="websue"
iso_label="WEBSUE_$(date +%Y%m)"
iso_publisher="Websue OS"
iso_application="Websue OS Live Environment"
iso_version="0.1.0"

install_dir="websue"

buildmodes=('iso')
bootmodes=(
  'bios.syslinux'
  'uefi.systemd-boot'
)

arch="x86_64"
pacman_conf="pacman.conf"

airootfs_image_type="squashfs"

file_permissions=()