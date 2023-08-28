import { utils, writeFileXLSX } from "xlsx";

export default function ExportToXls(props) {
  const exportFile = () => {
    const ws = utils.json_to_sheet(props.persons);
    const wb = utils.book_new();
    utils.book_append_sheet(wb, ws, "sheet1");
    writeFileXLSX(wb, "persons.xlsx");
  };

  return (
    <>
      <button
        onClick={exportFile}
        className="text-white hover:text-greenLight p-2 text-sm shadow-md shadow-white hover:shadow-greenLight rounded-md m-2"
        type="button"
      >
        export to xls
      </button>
    </>
  );
}
