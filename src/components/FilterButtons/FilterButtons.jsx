import './FilterButtons.css'

const FilterButtons = ({ filterQuestions, category, allCategories }) => {
    
    return (
        <div>
            <h2>Filter questions:</h2>
            <div className='FilterButtons'>
                {allCategories && allCategories.map(e => {
                    return (
                        <button key={e} onClick={() => filterQuestions(e)} style={{backgroundColor: e === category ? 'pink' : 'white'}}>{e}</button>
                    )
                })}
                <button onClick={() => filterQuestions("All")} style={{backgroundColor: category === "All" ? 'pink' : 'white'}}>All</button>
            </div>
        </div>
    )
}

export default FilterButtons