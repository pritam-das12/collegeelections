import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCaElq0FxaCaKls4E-6l2Djzm6SGcAfN1s",
  authDomain: "college-election-81782.firebaseapp.com",
  projectId: "college-election-81782",
  storageBucket: "college-election-81782.firebasestorage.app",
  messagingSenderId: "870273578692",
  appId: "1:870273578692:web:2ada70ee92d4a46f6f3b91",
  measurementId: "G-FNQXS541Q7"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const submitContactForm = async (formData: { name: string; email: string; message: string }) => {
  try {
    const docRef = await addDoc(collection(db, "contact-submissions"), {
      name: formData.name.trim(),
      email: formData.email.trim(), // added email
      message: formData.message.trim(),
      timestamp: serverTimestamp(),
      createdAt: new Date().toISOString(),
      status: "new",
    });

    return { success: true, id: docRef.id, method: "firebase" };
  } catch (error) {
    console.error("Firebase error:", error);

    // fallback to localStorage
    try {
      const submissions = JSON.parse(localStorage.getItem("contact-submissions") || "[]");
      const newSubmission = {
        id: Date.now().toString(),
        name: formData.name.trim(),
        email: formData.email.trim(),
        message: formData.message.trim(),
        timestamp: new Date().toISOString(),
        status: "new",
      };
      submissions.push(newSubmission);
      localStorage.setItem("contact-submissions", JSON.stringify(submissions));

      return {
        success: true,
        id: newSubmission.id,
        method: "localStorage",
        warning: "Saved locally. Please configure Firebase security rules for cloud storage.",
      };
    } catch (localError) {
      return {
        success: false,
        error: "Failed to save submission. Please try again.",
        details: error instanceof Error ? error.message : "Unknown error",
      };
    }
  }
};
