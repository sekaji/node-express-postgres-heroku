import { Router } from 'express';
const router = Router();

// /user
router.get('/', (req, res) =>{
    res.json({
        message: "Reached Users"
    });
});

export default router;