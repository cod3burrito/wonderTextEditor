import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log("Save to db");

  const db = await initdb("IndexedDB", 1);
  const tx = IndexedDB.transaction("IndexedDB", "readwrite");
  const store = tx.objectStore("IndexedDB");
  const request = store.put(content);
  const result = await request;
  console.log(result);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.error('Get from db');
  const IndexedDB = await openDB('IndexedDB', 1);
  const tx = IndexedDB.transaction('IndexedDB', 'readonly');
  const store = tx.objectStore('IndexedDB');
  const request = store.getAll();
  const result = await request;
  console.log(result);
  return result;
};

initdb();
