const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");

// middleware

app.use(cors());
app.use(express.json());

app.use(express.static("dist"))

app.get("/", (req, res) => {
  res.send("Hello how are you");
});

//  mongodb configration

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri =
  "mongodb+srv://book-store:EkxtozPZNhy5Jm3D@cluster0.qks1zgk.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    // create a collection of documents

    const bookCollection = client.db("BookInventory").collection("books");

    // insert a book to database: post method

    app.post("/upload-books", async (req, res) => {
      const data = req.body;
      const result = await bookCollection.insertOne(data);
      res.send(result);
    });

    // get all book from database

    app.get("/all-books", async (req, res) => {
      const books = bookCollection.find();
      const result = await books.toArray();
      res.send(result);
    });

    // To get single book data

    app.get("/books/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await bookCollection.findOne(filter);
      res.send(result);
    });

    // update a book data : patch or update method

    app.patch("/books/:id", async (req, res) => {
      const id = req.params.id;
      const updateBookData = req.body;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };

      const updateDoc = {
        $set: {
          ...updateBookData,
        },
      };
      // update

      const result = await bookCollection.updateOne(filter, updateDoc, options);
      res.send(result);
    });

    // delete a book data

    app.delete("/books/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await bookCollection.deleteOne(filter);
      res.send(result);
    });

    // find by category

    app.get("/all-books", async (req, res) => {
      let query = {};
      if (req.query?.category) {
        query = { category: req.query.category };
        const result = await bookCollection.find(query).toArray();
        res.send(result);
      }
    });

    //  get price information

    app.get("/price", async (req, res) => {
      const price = bookCollection.find();
      const result = await price.toArray();
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
