const express = require('express');
const {
    createWorkout,
    getWorkout,
    getWorkouts
} = require('../controllers/workoutController');
const router = express.Router();

// GET all workouts
router.get('/', getWorkouts);

// GET single workout
router.get('/:id', getWorkout)

// POST new workout
router.post('/', createWorkout)
// DELETE a workout
router.delete('/:id', (req, res)=>{
    res.json({mssg: "DELETE a workout"})
});

// UPDATE a workout
router.patch('/:id', (req, res)=>{
    res.json({mssg: "UPDATE new workout"})
});

module.exports = router