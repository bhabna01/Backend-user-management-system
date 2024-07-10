import app from './app';

const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
    res.send("Route is working");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});