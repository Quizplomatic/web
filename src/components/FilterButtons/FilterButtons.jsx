import './FilterButtons.css'

const FilterButtons = ({ filterQuestions, category, allCategories }) => {
    
    return (
        <>
            <button onClick={() => filterQuestions("All")} style={{backgroundColor: category === "All" ? '#ebd3c4' : 'white'}}>All</button>
            {allCategories && allCategories.map(e => {
                return (
                    <button key={e} onClick={() => filterQuestions(e)} style={{backgroundColor: e === category ? '#ebd3c4' : 'white'}}>{e}</button>
                )
            })}
        </>
    )
}

export default FilterButtons