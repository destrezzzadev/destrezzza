// lib/auth-config.ts

export const ADMIN_AUTH = {
  // Default login name
  username: "admin",
  
  // Hash for 'admin123' generated with Pbkdf2 (sha512, 1000 iterations)
  // Salt: 3f7a1b9e2c4d5f6a7b8c9d0e1f2a3b4c
  passwordHash: "11d5611a6e93aadc40e4381faa2b9f32c914d0547aeac201d537b95071dd746f91448535aa90765d38f42f4af1d224635c5e1424da10137801ba7fbc419040dc",
  salt: "3f7a1b9e2c4d5f6a7b8c9d0e1f2a3b4c",
  
  // Secret for signing cookies (You should change this in production!)
  sessionSecret: "destrezza-admin-secret-key-123456789",
  
  // Cookie name
  cookieName: "admin_session",
  
  // Session duration (24 hours)
  expiresIn: 24 * 60 * 60 * 1000,
};
