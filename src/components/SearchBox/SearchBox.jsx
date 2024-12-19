import s from "./SearchBox.module.css"


const SearchBox = ({ searchValue, onSearchChange }) => {
    
    return (
        <>
        <label className={s.label}>
          <span className={s.span}>Find contacts by name:</span>
                <input className={s.input} type='text' value={searchValue} onChange={(e) => onSearchChange(e.target.value)} className={s.input} />
        </label>
        </>
    )
};

export default SearchBox;
