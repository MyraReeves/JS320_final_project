import PropTypes from "prop-types";

function LearningDropdownMenu(props) {
    const {selection, setSelection} = props;

    const handleSubmit = (event) => {
        event.preventDefault();
     };

    const handleSelection = (event) => {
        setSelection(event.target.value);
    }

  return (
    <div className="learning-dropdown">
        <form onSubmit={handleSubmit}>
            <label htmlFor="learning-choices">Choose an option to read: </label><br/>
            <select name="learningLibrary" id="learning-choices" onChange={handleSelection} value={selection}>
                <option disabled> </option>
                <option value="bahamas">🌎 Learn more about the Bahamas</option>
                <option value="notoriousPirates">📕1725 book - &#34;The History and Lives of All the Most Notorious Pirates and Their Crews&#34;</option>
                <option value="pirateLives">📗1839 book - &#34;Lives and voyages of Drake, Cavendish, and Dampier&#34;</option>
                <option value="piratesOwn">📙1856 book - &#34;The Pirates Own Book&#34;</option>
                <option value="ravagedSeas">📘1874 book - &#34;Pirates or Buccaneers Who Ravaged the Seas [...] Two Hundred Years Ago&#34;</option>
                <option value="buccaneersThesis">📓1910 thesis, Oxford University - &#34;The Buccaneers in the West Indies in the XVII Century&#34;</option>
        </select>
        {/* <input type="submit" value="Submit"/> */}
        </form>
    </div>
  )
}

LearningDropdownMenu.propTypes = {
    selection: PropTypes.string.isRequired,
    setSelection: PropTypes.func.isRequired,
}

export default LearningDropdownMenu
