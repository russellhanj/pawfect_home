import mongoose from 'mongoose';
import data from './data.json' assert { type: 'json' };
import userData from './users.json' assert { type: 'json' };  // Add the 'assert { type: 'json' }' here as well
import { Pet } from './models/pets.js';
import { User } from './models/users.js';  // Import the User model
import 'dotenv/config';

const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const insertData = async () => {
  try {
    // Insert Pet data
    await Pet.deleteMany({});
    await Pet.insertMany(data);
    console.log('Pet data inserted successfully');

    // Ensure you're using the "users" array from the JSON file
    const users = userData.users || [];  // Safely access the users array

    // Insert User data
    await User.deleteMany({});  // Clear existing users if any
    
    // Optionally, check each user's data before inserting
    users.forEach(user => {
      console.log(user);  // Log each user to ensure data is correct
    });
    
    await User.insertMany(users);  // Insert users from the 'users' array
    console.log('User data inserted successfully');
    
  } catch (error) {
    console.log('Error inserting data', error);
  }
};

insertData();

export default insertData;
