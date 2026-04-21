// Firebase Configuration
// TODO: Replace these placeholder values with your actual Firebase project credentials
// Visit: https://console.firebase.google.com/ → Project Settings → Web App

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

export default app;

/**
 * Firestore Collection Structure:
 * 
 * Collection: "enquiries"
 * Document fields:
 *   - name: string
 *   - email: string
 *   - message: string
 *   - timestamp: Timestamp
 *   - status: string ("new" | "read" | "replied")
 * 
 * This collection is read by the Flutter Admin App.
 */
