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

export const deleteContact = async (formData) => {
    const { id } = Object.fromEntries(formData);
    try {
        db.connect()
        await Contact.findByIdAndDelete(id)
    } catch (error) {
        throw new Error("Failed to delete contact! " + error);

    }
    revalidatePath("/");
}

export const updateContactt = async (formData) => {
    const { firstName, lastName,email, phone} =
    Object.fromEntries(formData);
    try {
        db.connect()
        const updateFields = {
            firstName, lastName,email, phone
          };
      
          Object.keys(updateFields).forEach(
            (key) =>
              (updateFields[key] === "" || undefined) && delete updateFields[key]
          );
      
          await Contact.findByIdAndUpdate(id, updateFields);
    } catch (error) {
        throw new Error("Failed to update Contact " + error);

    }
    revalidatePath("/");
    redirect("/");
}