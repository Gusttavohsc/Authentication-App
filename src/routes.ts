import { Router } from "express";

const router: Router = Router();

router.post('/user', (req, res) => {
    return response.status(201).send();
});

export { router }