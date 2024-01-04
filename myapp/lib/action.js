'use server'
import Contact from "@/models/Contact";
import db from "./db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


export const addContact = async (formData) => {
    const { firstName, lastName,email, phone} =
    Object.fromEntries(formData);
    try {
        db.connect()
        const newContact = new Contact({
            firstName, lastName,email, phone
          });
      
          await newContact.save();
    } catch (error) {
        throw new Error("Failed to create contact! " + error);

    }
    revalidatePath("/");
    redirect("/");
}