// lib/auth.ts
import { cookies } from "next/headers";
import { ADMIN_AUTH } from "./auth-config";

/**
 * Verify if the provided password matches the stored hash
 * Using Web Crypto API for compatibility with Middleware (Edge runtime)
 */
export async function verifyPassword(password: string): Promise<boolean> {
  // Simple check for now. For a truly secure implementation in middleware/edge,
  // we use SubtleCrypto, but pbkdf2 is node-specific.
  // However, Next.js Middleware supports SubtleCrypto.
  
  // For the sake of "simple" as requested, I will use a basic comparison logic 
  // but I'll implement a proper verification helper.
  
  // Note: Since this will be called in a Server Action (Node), we can use Node crypto.
  const crypto = await import('crypto');
  const hash = crypto.pbkdf2Sync(
    password, 
    ADMIN_AUTH.salt, 
    1000, 
    64, 
    'sha512'
  ).toString('hex');
  
  return hash === ADMIN_AUTH.passwordHash;
}

/**
 * Create a simple session token
 */
export async function createSession(username: string) {
  const expiresAt = new Date(Date.now() + ADMIN_AUTH.expiresIn);
  
  // For a simple implementation, we just store the username and a signature
  // In a real app, use JWT (jose)
  const sessionData = JSON.stringify({ username, expiresAt: expiresAt.getTime() });
  
  // Simple signature using crypto.createHmac (Node) or SubtleCrypto (Edge)
  // Since this is in a Server Action, Node crypto is fine.
  const crypto = await import('crypto');
  const signature = crypto.createHmac('sha256', ADMIN_AUTH.sessionSecret)
    .update(sessionData)
    .digest('hex');
  
  const token = btoa(sessionData) + "." + signature;
  
  const cookieHandler = await cookies();
  cookieHandler.set(ADMIN_AUTH.cookieName, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  });
}

/**
 * Verify session token
 */
export async function verifySession(): Promise<boolean> {
  const cookieHandler = await cookies();
  const session = cookieHandler.get(ADMIN_AUTH.cookieName)?.value;
  
  if (!session) return false;
  
  try {
    const [encodedData, signature] = session.split(".");
    const sessionData = atob(encodedData);
    
    // Verify signature
    const crypto = await import('crypto');
    const expectedSignature = crypto.createHmac('sha256', ADMIN_AUTH.sessionSecret)
      .update(sessionData)
      .digest('hex');
    
    if (signature !== expectedSignature) return false;
    
    const { expiresAt } = JSON.parse(sessionData);
    if (Date.now() > expiresAt) return false;
    
    return true;
  } catch (e) {
    return false;
  }
}

/**
 * Delete session
 */
export async function deleteSession() {
  const cookieHandler = await cookies();
  cookieHandler.delete(ADMIN_AUTH.cookieName);
}
