import express from "express";

const app = express();

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
  const meetingLink =
    platform === "zoom"
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

export default app;
