import { useState, useEffect } from "react";
import { projectFirestore } from "./config";

const useFiretore = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsub = projectFirestore
      .collection(collection) //collection will be 'images'
      // .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        //snapshot including all of documents in collection of
        //database when there is change in collection.
        let documents = [];
        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
          //doc.data(): all data of a document
        });
        setDocs(documents);
      });

    return () => unsub();
  }, [collection]);
  // console.log(docs);
  return docs;
};

export default useFiretore;
