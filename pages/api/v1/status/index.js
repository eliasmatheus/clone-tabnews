import database from "infra/database.js";

async function index(request, response) {
  const result = await database.query("SELECT 1 + 1 as sum;");
  console.log("=>(index.js:5) result", result.rows);

  response.status(200).json({ chave: "são acima da média" });
}

export default index;
