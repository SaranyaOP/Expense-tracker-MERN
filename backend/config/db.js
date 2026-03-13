import mongoose from 'mongoose';

export const connectDB = async () => {  
    await mongoose.connect('mongodb+srv://saranyaop98_db_user:bcGWyaNzsgw1qAhH@cluster0.tuggnvy.mongodb.net/Expense')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    
}