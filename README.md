# websue-os
# Websue OS

<p align="center">
  <img src="branding/logo.png" alt="Websue OS Logo" width="120" />
</p>

<h3 align="center">A Linux experience built from the ground up.</h3>

<p align="center">
  An experimental, Arch Linux-based distribution focused on developer productivity, customization, and a refined desktop experience.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Platform-Linux-blue?style=for-the-badge&logo=linux&logoColor=white" />
  <img src="https://img.shields.io/badge/Architecture-x86__64-orange?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Base-Arch%20Linux-1793D1?style=for-the-badge&logo=archlinux&logoColor=white" />
  <img src="https://img.shields.io/badge/Status-Experimental-yellow?style=for-the-badge" />
</p>

---

## About

**Websue OS** is an experimental Linux distribution designed to explore what a modern, developer-oriented operating system can become.

Built on the Arch Linux ecosystem, the project aims to combine flexibility, performance, a carefully designed desktop experience, and useful native tools.

This is more than a desktop theme. The long-term vision is to develop a recognizable Linux experience with its own identity and ecosystem.

## Vision

- **Simplicity** — A clean and intuitive user experience.
- **Performance** — A lightweight and efficient foundation.
- **Customization** — A desktop experience that feels personal.
- **Developer-first** — Tools and workflows designed for builders.
- **Open source** — Transparent development and community contributions.

## Technology Stack

| Component | Technology |
|---|---|
| Base distribution | Arch Linux |
| Architecture | x86_64 |
| Package manager | Pacman |
| Init system | systemd |
| Desktop environment | KDE Plasma (planned) |
| ISO builder | Archiso |
| Build infrastructure | GitHub Actions |
| Custom utilities | Rust (planned) |

## Project Structure

```text
websue-os/
├── .github/
│   └── workflows/
├── branding/
├── docs/
├── profile/
│   ├── airootfs/
│   ├── packages.x86_64
│   ├── pacman.conf
│   └── profiledef.sh
├── scripts/
└── README.md
```

## Roadmap

- [x] Initial repository setup
- [x] Initial package manifest
- [x] ISO profile configuration
- [ ] Complete Archiso boot configuration
- [ ] Automated ISO build pipeline
- [ ] First bootable ISO
- [ ] Websue branding and visual identity
- [ ] Custom system utilities
- [ ] Public testing release

## Getting Started

Websue OS is currently under development.

The first development milestone is a reproducible x86_64 live ISO that can be tested in a virtual machine.

Build instructions and release downloads will be published here as the project progresses.

## Contributing

Contributions, ideas, bug reports, and feedback are welcome.

Please note that the project is experimental and its architecture may change.

## License

The project license will be finalized before the first public release.

---

<p align="center">
  <b>Websue OS</b>
  <br/>
  Built for exploration. Designed for builders.
</p>