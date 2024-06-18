import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeLastContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const myArray = JSON.parse(data);

    if (myArray.length > 0) {
      myArray.pop();
    }

    const update = JSON.stringify(myArray, null, 2);

    await fs.writeFile(PATH_DB, update + '\n');

    console.log('Updated contacts:', myArray);
  } catch (error) {
    console.error('Error removing last contact:', error);
  }
};

await removeLastContact();
