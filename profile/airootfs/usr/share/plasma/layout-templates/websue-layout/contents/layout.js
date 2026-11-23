// Websue OS - Elegant Minimal Desktop

// Top panel
var topPanel = new Panel
topPanel.location = "top"
topPanel.height = 34
topPanel.addWidget("org.kde.plasma.kickoff")
topPanel.addWidget("org.kde.plasma.panelspacer")
topPanel.addWidget("org.kde.plasma.systemtray")
topPanel.addWidget("org.kde.plasma.digitalclock")

// Bottom application dock
var dock = new Panel
dock.location = "bottom"
dock.height = 56
dock.alignment = "center"
dock.addWidget("org.kde.plasma.icontasks")
