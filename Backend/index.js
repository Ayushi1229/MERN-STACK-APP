//index.js
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import Choco from "./model/choco.model.js";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000;
const uri = "mongodb://localhost:27017/choco";

// Connect to MongoDB
try {
    mongoose.connect(uri);
    console.log("Connected to mongoDB");
} catch (error) {
    console.log("Error: ", error);
}

// Defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

// Get all chocolates
app.get("/choco", async (req, res) => {
    try {
        const ans = await Choco.find();
        res.send(ans);
    } catch (error) {
        res.status(500).send("Error fetching chocolates");
    }
});
//add chocolate 
app.post('/choco', async (req, res) => {
    const { id, name, price, category,origin,title, image } = req.body;  // Adjust these fields according to your schema

    // Basic validation (ensure required fields are present)
    if (!id || !name || !price || !category ||!origin ||!title ||!image) {
        return res.status(400).send("Please provide all required fields: name, flavor, price, and stock");
    }

    try {
        // Create a new Choco object using the Choco model
        const newChoco = new Choco({
            id,
            name,
            price,
            category,
            origin,
            title,
            image
        });

        // Save the new chocolate to the database
        await newChoco.save();

        // Respond with the saved chocolate object
        res.status(201).send(newChoco);
    } catch (error) {
        console.error("Error adding new chocolate:", error);
        res.status(500).send("Internal server error");
    }
});


// Delete chocolate by ID
app.delete('/choco/:id', async (req, res) => {
    const { id } = req.params;

    // Check if the ID is valid MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send("Invalid ID format");
    }

    try {
        const deletedChoco = await Choco.findByIdAndDelete(id);

        // If no document found with that ID
        if (!deletedChoco) {
            return res.status(404).send("Chocolate not found");
        }

        res.send("Chocolate deleted successfully");
    } catch (error) {
        console.error("Error deleting chocolate:", error);
        res.status(500).send("Internal server error");
    }
});


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
