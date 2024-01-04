'use server'
import Contact from "@/models/Contact";
import db from "./db";

export const addContact = async (formData) => {
    const { firstName, lastName,email, contact} =
    Object.fromEntries(formData);
    try {
        db.connect()
        const newContact = new Contact({
            firstName, lastName,email, contact
          });
      
          await newContact.save();
    } catch (error) {
        throw new Error("Failed to create contact! " + error);

    }
    revalidatePath("/");
    redirect("/");
}