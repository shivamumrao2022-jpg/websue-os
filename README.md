# Websue OS

<p align="center">
  <img src="branding/logo.png" alt="Websue OS" width="150" />
</p>

<h3 align="center">A different perspective on Linux.</h3>

<p align="center">
  An experimental Arch-based Linux distribution built around simplicity, customization, and developer productivity.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Architecture-x86__64-blue?style=flat-square" />
  <img src="https://img.shields.io/badge/Base-Arch%20Linux-1793D1?style=flat-square&logo=archlinux" />
  <img src="https://img.shields.io/badge/Desktop-KDE%20Plasma-1D99F3?style=flat-square&logo=kde" />
  <img src="https://img.shields.io/badge/Status-Experimental-orange?style=flat-square" />
  <img src="https://img.shields.io/badge/License-TBD-lightgrey?style=flat-square" />
</p>

---

## About

**Websue OS** is an independent Linux distribution project built on the Arch Linux ecosystem.

The project explores a more refined desktop experience: minimal, customizable, developer-oriented, and designed with its own visual identity.

Rather than simply applying a theme to an existing desktop, Websue aims to bring together system configuration, desktop design, and custom utilities into a cohesive operating system.

## Design Philosophy

| Principle | Direction |
|---|---|
| Simplicity | An uncluttered and intuitive interface |
| Performance | A flexible Arch Linux foundation |
| Design | Consistent visual language and thoughtful details |
| Productivity | A desktop environment for everyday development |
| Freedom | Customization without unnecessary restrictions |

## Visual Identity

Websue follows a minimal design language built around:

- Graphite dark surfaces
- Warm off-white backgrounds
- Soft grey secondary elements
- Blue accents (`#007AFF`)
- Clean typography and subtle interface details

The desktop direction includes a top panel, a bottom application dock, and coordinated light and dark appearances.

## Technology

| Component | Technology |
|---|---|
| Base | Arch Linux |
| Architecture | x86_64 |
| Package manager | Pacman |
| Init system | systemd |
| Desktop environment | KDE Plasma |
| Display manager | SDDM |
| ISO generation | Archiso |
| Build automation | GitHub Actions |
| Planned utilities | Rust |

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

## Development Status

Websue OS is under active development.

**Current progress**
- Initial repository and project structure
- Archiso profile configuration
- Initial package selection
- KDE Plasma desktop configuration
- Automated ISO build through GitHub Actions
- First development ISO generated

**Still being worked on**
- First-boot verification
- Live user and login configuration
- Desktop layout and theme validation
- Hardware compatibility testing
- Installation and release documentation

## Roadmap

- [x] Repository foundation
- [x] Initial Archiso profile
- [x] Initial ISO build pipeline
- [x] First development ISO generated
- [ ] Verify successful live boot
- [ ] Validate KDE Plasma experience
- [ ] Finalize Websue visual identity
- [ ] Improve system configuration
- [ ] Add custom utilities
- [ ] Publish first testing release

## Building

The project uses Archiso to generate its development ISO.

A successful build does not yet guarantee that every desktop component or hardware configuration works correctly.

Build workflow:

1. Push changes to the `main` branch or manually trigger the GitHub Actions workflow.
2. Wait for the ISO build job to complete.
3. Download the generated `websue-os-iso` workflow artifact.
4. Extract the ZIP archive to obtain the ISO.

Build and testing documentation will be expanded as development progresses.

## Contributing

Websue is an experimental open-source project, and contributions are welcome.

You can contribute through:

- Bug reports
- Feature suggestions
- Documentation improvements
- Desktop experience feedback
- Code contributions

Please remember that project architecture and features may change during development.

## License

The project license has not yet been finalized.

---

<p align="center">
  <strong>Websue OS</strong>
  <br/>
  Built for exploration. Designed for builders.
</p>
