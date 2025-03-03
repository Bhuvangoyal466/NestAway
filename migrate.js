const mongoose = require("mongoose");

// Connect to MongoDB
const uri =
    "mongodb+srv://bhuvangoyal6002:IgPUbY5s5NB52ZOe@cluster0.ryoq5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const oldPlaceSchema = new mongoose.Schema({
    title: String,
    description: String,
    image: { filename: String, url: String },
    price: Number,
    location: String,
    country: String,
});
const OldPlace = mongoose.model("OldPlace", oldPlaceSchema, "places");

const newPlaceSchema = new mongoose.Schema({
    owner: { type: mongoose.Schema.ObjectId, ref: "user", required: true },
    title: { type: String, required: true },
    address: { type: String, required: true },
    photos: [{ type: String }],
    description: String,
    perks: [{ type: String }],
    extraInfo: String,
    maxGuests: Number,
    price: Number,
});
const NewPlace = mongoose.model("NewPlace", newPlaceSchema, "new_places");

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    // other user fields
});
const User = mongoose.model("User", userSchema, "users");

async function migratePlaces() {
    const user = await User.findOne(); // Fetch a user from the users collection
    if (!user) {
        console.error("No user found in the database.");
        return;
    }

    const places = await OldPlace.find();
    for (let place of places) {
        const transformedPlace = new NewPlace({
            owner: user._id, // Use the fetched user ID
            title: place.title,
            address: `${place.location}, ${place.country}`,
            photos: [place.image?.url || ""],
            description: place.description,
            perks: ["wifi", "parking", "tv", "radio"], // Add perks manually if needed
            extraInfo: "",
            maxGuests: 4, // Assign default value if unknown
            price: place.price,
        });

        await transformedPlace.save();
    }

    console.log("Migration completed!");
    mongoose.connection.close();
}

migratePlaces().catch(console.error).then(async () => {
    // Delete old collection
    await mongoose.connection.db.collection("places").drop();

    // Rename new_places to places
    await mongoose.connection.db.collection("new_places").rename("places");

    console.log("Schema migration successful!");
});
