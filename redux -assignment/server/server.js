require("dotenv").config();
const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const port = process.env.PORT || 5000;

const cors = require("cors");

app.use(cors());
app.use(express.json());

const uri = process.env.DATABASE_LOCAL;

// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.q66zrl2.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

const run = async () => {
  try {
    const db = client.db("personalBlog");
    const productCollection = db.collection("blogPost");

    app.get("/blog-posts", async (req, res) => {
      const cursor = productCollection.find({});
      const blogPost = await cursor.toArray();

      res.send({ status: true, data: blogPost });
    });

    app.get("/blog-post/:id", async (req, res) => {
      const id = req.params.id;
      const result = productCollection.findOne({ _id: ObjectId(id) });
      // const blogPost = await cursor.toArray();

      res.send({ success: true, data: result });
    });

    app.post("/blog-post", async (req, res) => {
      const blogPost = req.body;

      const result = await productCollection.insertOne(blogPost);

      res.send(result);
    });

    app.delete("/blog-post/:id", async (req, res) => {
      const id = req.params.id;

      const result = await productCollection.deleteOne({ _id: ObjectId(id) });
      res.send(result);
    });
  } finally {
  }
};

run().catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
