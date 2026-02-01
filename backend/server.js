require('dotenv').config();
const app = require('./app');
const cors = require("cors");

app.use(cors({
  origin: "https://code-mind-peach.vercel.app",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

const connectDB = require('./config/db');

connectDB();

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
