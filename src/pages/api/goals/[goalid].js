import goalsData from '@/data/goalsData.json';

export default function handler(req, res) {
    // Get the goal id from the request
    const goalid = req.query.goalid;

    // find the goal in the data
    const goal = goalsData.find(
        (goalObj) => goal.goalid == goalid
    );

    // if the goal is not found, return 404
    if (!goal) {
        res.status(404).json({
            error: 'Goal not found',
        });
        return;
    }
    res.status(200).json(goal || {});
}
