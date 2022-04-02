import { useEffect, useState } from "react";
import { getAllPractices } from "../services/practiceservice";

const Dropdown = ({ setSelectedPractice }) => {
  const [practices, setPractices] = useState([]);

  useEffect(() => {
    getAllPractices().then((practices) => setPractices(practices));
  }, []);

  const renderPracticeItems = (SEPractices) =>
    SEPractices.map((SEPractice) => (
      <option key={SEPractice._id}>{SEPractice.practice}</option>
    ));

  const handleDropdownChange = (e) => {
    setSelectedPractice(e.target.value);
  };

  return (
    <div>
      <select onChange={handleDropdownChange}>
        <option value="">Select an SE Practice</option>
        {renderPracticeItems(practices)}
      </select>
    </div>
  );
};
export default Dropdown;
