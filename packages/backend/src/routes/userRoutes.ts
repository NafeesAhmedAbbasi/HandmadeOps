import { Router, Request, Response } from 'express';
import User from '../models/User';

const router = Router();

// Create a new user
router.post('/', async (req: Request, res: Response) => {
  const { name, email, password, status } = req.body;
  
  try {
    const newUser = new User({ name, email, password, status });
    await newUser.save();
    res.status(201).json(newUser); // Send the newly created user as the response
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Read all users
router.get('/', async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.json(users); // Send the list of users as the response
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Read a user by ID
router.get('/:id', async (req: Request, res: Response) => {
  const userId = req.params.id;

  try {
    if (!/^[0-9a-fA-F]{24}$/.test(userId)) {
      return res.status(400).json({ message: 'Invalid user ID format' });
    }

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(user); // Send the user data as the response
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Update a user by ID
router.put('/:id', async (req: Request, res: Response) => {
  const userId = req.params.id;
  const { name, email, password, status } = req.body;

  try {
    if (!/^[0-9a-fA-F]{24}$/.test(userId)) {
      return res.status(400).json({ message: 'Invalid user ID format' });
    }

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { name, email, password, status },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(updatedUser); // Send the updated user data as the response
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Delete a user by ID
router.delete('/:id', async (req: Request, res: Response) => {
  const userId = req.params.id;

  try {
    if (!/^[0-9a-fA-F]{24}$/.test(userId)) {
      return res.status(400).json({ message: 'Invalid user ID format' });
    }

    const deletedUser = await User.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ message: 'User deleted successfully' }); // Send a success message
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

export default router;
