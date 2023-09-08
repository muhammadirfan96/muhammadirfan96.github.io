import { utils, writeFileXLSX } from "xlsx";

export default function ExportToXls(props) {
  const exportFile = () => {
    const ws = utils.json_to_sheet(props.persons);
    const wb = utils.book_new();
    utils.book_append_sheet(wb, ws, "sheet1");
    writeFileXLSX(wb, "comments.xlsx");
  };

  return (
    <>
      <button
        onClick={exportFile}
        className="text-white hover:text-greenLight text-xs hover:shadow-greenLight m-2 border hover:border-greenLight p-1 rounded-md"
        type="button"
      >
        <i className="bi-table"></i> xls
      </button>
    </>
  );
}
