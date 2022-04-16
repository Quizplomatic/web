import './FilterButtons.css'

const FilterButtons = ({ filterQuestions, category, allCategories }) => {
    
    return (
        <>
            <button onClick={() => filterQuestions("All")} style={{backgroundColor: category === "All" ? 'pink' : 'white'}}>All</button>
            {allCategories && allCategories.map(e => {
                return (
                    <button key={e} onClick={() => filterQuestions(e)} style={{backgroundColor: e === category ? 'pink' : 'white'}}>{e}</button>
                )
            })}
        </>
    )
}

export default FilterButtons