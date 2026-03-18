// =============================================================================
// DEPLOY NOW WORKSHOP — server.js
// =============================================================================
//
// This is the entire web server for this workshop app.
// It does one thing: serve the files in the /public directory.
//
// Students DON'T need to edit this file for Parts 1 or 2.
// Edit public/index.html instead — that's the page you see in the browser.
//
// EXTENSION (Part 3+): Add new routes below to build a real API.
// =============================================================================

const express = require("express");
const path = require("path");

const app = express();

// Read the port from the environment variable PORT, or fall back to 8080.
// Render (and most platforms) set PORT automatically when deploying.
const PORT = process.env.PORT || 8080;

// Serve everything in the /public folder as static files.
// When someone visits /, Express sends public/index.html automatically.
app.use(express.static(path.join(__dirname, "public")));

// ========== CHALLENGE 3: API ROUTES ==========
// Add API endpoints that return JSON.

// Health check endpoint — returns server status
app.get("/api/status", (req, res) => {
    res.json({
        status: "ok",
        message: "Server is running",
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
    });
});

// Example API route — returns a greeting
app.get("/api/greeting", (req, res) => {
    const name = req.query.name || "Friend";
    res.json({
        message: `Hello, ${name}!`,
        challenge: "Challenge 3 Complete",
    });
});

// ============================================

// Start listening for incoming HTTP requests.
app.listen(PORT, () => {
    console.log(`Workshop app running → http://localhost:${PORT}`);
    console.log(`Serving files from: ${path.join(__dirname, "public")}`);
});
