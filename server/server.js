import express from "express";
import "dotenv/config";
import cors from "cors";
import http from "http";

// Creating express app and HTTP server

const app = express();
const server = http.createServer(app)

//Middleware Setup

//2:15:12