import express from 'express';
import { Class } from '../models/index.js'

const router = express.Router()

router
    .get('/', async (req, res) => {
    //     let classes = await Class.find()
        
    //   res.send(classes)

    res.send("these are classes")
    })
    .post('/create',async (req, res) => {
        try{
            const newClass = await new Class(req.body)
            newClass.save()
    
            res.json(newClass)
        } catch (err){
            res.status(500).send("Error creating new class.")
        }
    })

export default router;