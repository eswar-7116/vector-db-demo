import { ChromaClient } from "chromadb";

const client = new ChromaClient();

async function main(client, query) {
    let collection;
    try {
        collection = await client.createCollection({
            name: "my_collection",
        });
    } catch (err) {
        console.log("my_collection seems to exist.");
        collection = await client.getCollection({ name: "my_collection" });
    }
    
    try {
        await collection.add({
            documents: [
                "The Earth revolves around the Sun once every 365.25 days.",
                "Eswar learns and builds cool stuff.",
                "Delhi is the capital of India.",
                "Python is a high-level, interpreted programming language.",
                "Pi is an irrational number approximately equal to 3.14.",
                "India is the world's fourth largest economy as of 2025.",
                "The River Ganga is one of the most sacred rivers in India.",
            ],
            ids: ["id1", "id2", "id3", "id4", "id5", "id6", "id7"]
        });
    } catch (err) {
        console.log("documents seem to exist.");
    }

    return await collection.query({
        queryTexts: [query],
        nResults: 4,
    });
}

(async () => {
    let results =  await main(client, "What is India?");
    console.log(results);
})();

