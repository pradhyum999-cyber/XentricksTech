import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Your email address
    pass: process.env.EMAIL_PASS  // Your email app password
  }
});

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
      
      // Prepare email content
      const emailText = `
        New Contact Form Submission:
        
        Name: ${contactData.name}
        Email: ${contactData.email}
        Phone: ${contactData.phone || 'Not provided'}
        Service: ${contactData.service}
        
        Message:
        ${contactData.message}
        
        Submitted at: ${messageWithTimestamp.createdAt}
      `;

      // Send email
      await transporter.sendMail({
        from: process.env.EMAIL_USER, // Sender address
        to: 'xentrickss@gmail.com', // Recipient address from your contact section
        subject: 'New Contact Form Submission from ' + contactData.name,
        text: emailText,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${contactData.name}</p>
          <p><strong>Email:</strong> ${contactData.email}</p>
          <p><strong>Phone:</strong> ${contactData.phone || 'Not provided'}</p>
          <p><strong>Service:</strong> ${contactData.service}</p>
          <h3>Message:</h3>
          <p>${contactData.message}</p>
          <p><em>Submitted at: ${messageWithTimestamp.createdAt}</em></p>
        `
      });
      
      // Log the submission
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
      
      console.error('Email sending error:', error);
      return res.status(500).json({ 
        success: false, 
        message: "An error occurred while processing your request." 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}