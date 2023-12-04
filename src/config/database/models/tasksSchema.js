import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema(
  {
    googleId: {
      type: String,
      required: true
    },
    descripcion: {
      type: String,
      required: true,
      unique: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

export default mongoose.model('Task', taskSchema);
