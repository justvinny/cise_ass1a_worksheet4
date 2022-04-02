import data from "../dummydata/articles";
import TableStyles from "../components/TableStyle";
import Table from "../components/EvidenceTable";
import TableColumns from "../components/TableColumns";
import Dropdown from "../components/Dropdown";
import { useEffect, useState } from "react";
import { getAllArticles } from "../services/articleservice";

const SEPractice = () => {
  const [selectedPractice, setSelectedPractice] = useState("");
  const [articles, setArticles] = useState([]);

  // Grab articles from MongoDB Atlas
  useEffect(() => {
    getAllArticles()
      .then(articles => setArticles(articles))
      .catch((err) => console.err(`Failed to get articles: ${err.message}`));
  }, []);

  return (
    <div>
      <h2>Select SE Practice to get evidence for the claimed benefits</h2>
      <Dropdown setSelectedPractice={setSelectedPractice}/>
      <TableStyles>
        <Table selectedPractice={selectedPractice} data={articles} columns={TableColumns} />
      </TableStyles>
    </div>
  );
};

export default SEPractice;
