import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  googleId: {
    type: String,
    required: true
  }
}, {
  timestamps: true,
  versionKey: false
});

export default mongoose.model('User', userSchema);
