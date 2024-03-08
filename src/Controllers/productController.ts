import { json, Request, Response } from "express";
import { db } from "../firebase/firebasConfig";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";

export const getProducts = async (req: Request, res: Response) => {
  const querySnapshot = await getDocs(collection(db, "productos"));

  const products = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  res.json(products);
  console.log(products);
};

export const getProduct = async (req: Request, res: Response) => {
  const { id } = req.params;

  const docRef = doc(db, "productos", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    res.json(docSnap.data());
  } else {
    res.status(404).send("No such document!");
  }
};

export const postProduct = async (req: Request, res: Response) => {
  const { description, name, price, url } = req.body;

  // If you want to use a custom ID, ensure it's provided, or generate a new document without specifying an ID.
  const { id } = req.body;
  const docRef = doc(db, "productos", id);

  try {
    await setDoc(docRef, {
      description,
      name,
      price,
      url, // Ensure this matches your schema and previous mention of 'url' vs 'imageurl'
    });

    res.json({ message: "Nuevo producto creado", id: docRef.id });
  } catch (error) {
    console.error("Error creating new product: ", error);
    res.status(500).send("Error creating new product");
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  const { id } = req.params;

  // Explicitly define the fields to update based on `req.body`
  const productUpdate = {
    description: req.body.description,
    name: req.body.name,
    price: req.body.price,
    url: req.body.url,
  };

  const docRef = doc(db, "productos", id);

  // Since we're not casting directly and only using known fields,
  // this approach should avoid the TypeScript error.
  await updateDoc(docRef, productUpdate);

  res.send("Se actualizó el producto correctamente!");
};

export const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params;

  const docRef = doc(db, "productos", id);
  await deleteDoc(docRef);

  res.send("Producto eliminado");
};
