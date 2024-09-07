import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";

const app = new Hono();

app.use("/*", cors());

app.get("/", (c) => {
  return c.text("Big Lemon backend coming soon");
});

app.get("/habits", async (c) => {
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  return c.json({
    data: habits,
  });
});

const port = 3999;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
