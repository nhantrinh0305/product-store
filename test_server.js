import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();
const PORT = process.env.PORT || 3001; // Sử dụng cổng khác để tránh xung đột

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Không có middleware nào khác, chỉ có route wildcard
app.get("*", (req, res) => {
  res.send("If you see this, the test server works!");
});

app.listen(PORT, () => {
  console.log(`Test server running on http://localhost:${PORT}`);
});