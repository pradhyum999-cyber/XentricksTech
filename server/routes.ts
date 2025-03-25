import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoint to handle contact form submissions
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body using the zod schema
      const contactData = insertContactMessageSchema.parse(req.body);
      
      // Add timestamp
      const messageWithTimestamp = {
        ...contactData,
        createdAt: new Date().toISOString(),
      };
      
      // In a real application, we would store this in the database
      // and possibly send an email notification
      console.log("Contact form submission:", messageWithTimestamp);
      
      return res.status(200).json({ 
        success: true, 
        message: "Thank you for your message! We will contact you soon." 
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ 
          success: false, 
          message: validationError.message 
        });
      }
      
      return res.status(500).json({ 
        success: false, 
        message: "An error occurred while processing your request." 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
