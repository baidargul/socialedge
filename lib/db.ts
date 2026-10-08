import mongoose from "mongoose";

type Cache = { connection: typeof mongoose | null; promise: Promise<typeof mongoose> | null };

const globalWithMongoose = global as typeof globalThis & { mongooseCache?: Cache };
const cache = globalWithMongoose.mongooseCache ?? { connection: null, promise: null };
globalWithMongoose.mongooseCache = cache;

export async function connectDB() {
  if (cache.connection) return cache.connection;
  const uri = process.env.DATABASE_URL;
  if (!uri) throw new Error("DATABASE_URL is not configured");
  cache.promise ??= mongoose.connect(uri, {
    bufferCommands: false,
    serverSelectionTimeoutMS: 8000,
    connectTimeoutMS: 8000,
    family: 4,
  });
  try {
    cache.connection = await cache.promise;
    return cache.connection;
  } catch (error) {
    cache.promise = null;
    cache.connection = null;
    throw error;
  }
}

