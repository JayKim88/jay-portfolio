import { useState, useEffect } from "react";
import { projectFirestore } from "./config";
import { collection, onSnapshot } from "firebase/firestore";

export const useFiretore = (collectionName) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const colRef = collection(projectFirestore, collectionName);

    const unsub = onSnapshot(colRef, (snapshot) => {
      let documents = [];
      snapshot.forEach((doc) => {
        documents.push({ ...doc.data(), id: doc.id });
      });
      setDocs(documents);
    });

    return () => unsub();
  }, [collectionName]);

  return docs;
};
