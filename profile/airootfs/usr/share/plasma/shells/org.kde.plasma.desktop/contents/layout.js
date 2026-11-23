// Websue OS - Elegant Minimal Desktop
// Plasma 6

// Top system panel
const topPanel = new Panel;
topPanel.location = "top";
topPanel.height = 34;
topPanel.lengthMode = "fill";

topPanel.addWidget("org.kde.plasma.kickoff");
topPanel.addWidget("org.kde.plasma.panelspacer");
topPanel.addWidget("org.kde.plasma.systemtray");
topPanel.addWidget("org.kde.plasma.digitalclock");

// Compact bottom dock
const dock = new Panel;
dock.location = "bottom";
dock.alignment = "center";
dock.height = 56;
dock.lengthMode = "fit";
dock.hiding = "dodgewindows";

dock.addWidget("org.kde.plasma.icontasks");
