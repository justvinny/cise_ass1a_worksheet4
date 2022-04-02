import articles from "../dummydata/articles";
import TableStyles from "../components/TableStyle";
import Table from "../components/EvidenceTable";
import TableColumns from "../components/TableColumns";

const SEPractice = () => {
  return (
    <div>
      <h2>Select SE Practice to get evidence for the claimed benefits</h2>
      <TableStyles>
        <Table data={articles} columns={TableColumns} />
      </TableStyles>
    </div>
  );
};

export default SEPractice;
