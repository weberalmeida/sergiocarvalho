import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// API Routes
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", serverTime: new Date().toISOString() });
});

// API Route for Booking Confirmation Simulation
app.post("/api/booking", (req, res) => {
  const { name, email, phone, date, time, objective, budget, platform } = req.body;

  if (!name || !phone || !date || !time) {
    return res.status(400).json({ error: "Por favor preencha nome, telefone, data e horário." });
  }

  const meetingId = `meet-pb-${Math.floor(100000 + Math.random() * 900000)}`;
  const meetingLink = platform === "zoom" 
    ? `https://zoom.us/j/${Math.floor(1000000000 + Math.random() * 9000000000)}`
    : platform === "whatsapp"
    ? `https://wa.me/5583999998888?text=Reuniao%20Agendada%20${date}`
    : `https://meet.google.com/pb-${meetingId}`;

  const booking = {
    id: `BK-${Date.now()}`,
    name,
    email,
    phone,
    date,
    time,
    objective,
    budget,
    platform,
    meetingLink,
    status: "CONFIRMED",
    createdAt: new Date().toISOString(),
  };

  res.json({
    success: true,
    message: "Consultoria agendada com sucesso!",
    booking,
  });
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
