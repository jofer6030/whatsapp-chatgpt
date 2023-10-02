import { Router } from "express";

import whatsappRoutes from "./whatsapp.routes.js";

class RoutesApp {
  router = Router();

  constructor() {
    this.#routers();
  }

  #routers() {
    this.router.use("/whatsapp", whatsappRoutes);
  }
}

export default RoutesApp;
