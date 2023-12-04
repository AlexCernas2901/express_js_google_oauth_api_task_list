import Task from '../config/database/models/tasksSchema.js';
const taskControllers = {};

taskControllers.getTasks = async (req, res) => {
  // Obtener todas las tareas relacionadas con un usuario
  try {
    const tasks = await Task.find({ googleId: req.user.id });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

taskControllers.getTask = async (req, res) => {
  // Obtener una tarea específica relacionada con un usuario por descripción
  try {
    const task = await Task.findOne({
      descripcion: req.params.description,
      googleId: req.user.id
    });

    if (task) {
      res.status(200).json(task);
    } else {
      res.status(404);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

taskControllers.postTask = async (req, res) => {
  try {
    // Crear una tarea específica relacionada con un usuario
    const newTask = new Task({
      descripcion: req.body.descripcion,
      googleId: req.user.id
    });
    console.log(newTask);
    await newTask.save();
    res.status(201);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

taskControllers.patchTask = async (req, res) => {
  try {
    // Actualizar una tarea específica relacionada con un usuario
    const updatedTask = await Task.findOneAndUpdate(
      {
        _id: req.params.id,
        googleId: req.user.id
      },
      { $set: req.body },
      { new: true }
    );
    if (updatedTask) {
      res.status(200);
    } else {
      res.status(404);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

taskControllers.deleteTask = async (req, res) => {
  try {
    // Eliminar una tarea específica relacionada con un usuario
    const deletedTask = await Task.findOneAndDelete({
      _id: req.params.id,
      googleId: req.user.id
    });
    if (deletedTask) {
      res.status(200);
    } else {
      res.status(404);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { taskControllers };
