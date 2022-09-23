export const TopBarFilter = ({
  onChangeLimit,
  onChangePage,
  optionSelect,
  pages,
  page,
}) => {
  return (
    <div className="topbar-filter">
      <label>Movies per page:</label>
      <select onChange={(e) => onChangeLimit(e.target.value)}>
        {optionSelect?.map((el) => (
          <option key={el} value={el}>
            {el} Movies
          </option>
        ))}
      </select>
      <div className="pagination2">
        <span>
          Page {page} of {pages.length}:
        </span>
        {pages?.map((el) => (
          <button
            key={el}
            className={el === page ? "active" : ""}
            onClick={() => onChangePage(el)}
          >
            {el}
          </button>
        ))}
      </div>
    </div>
  );
};
