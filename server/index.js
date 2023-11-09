// express
import app from "./setup/express.js";
import logger from "./setup/logger.js";
import openRoutes from "./routes/index.js";
import protectedRoutes from "./routes/index.js";
import db from "./setup/db.js";

app.use('/api/open',openRoutes);
app.use('/api/protected/',protectedRoutes);

app.listen(5000, () => {
  logger.log('Server is running on port 5000');
});
