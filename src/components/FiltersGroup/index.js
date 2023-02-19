import './index.css'

const FiltersGroup = props => {
  const renderRatingsFiltersList = () => {
    const {ratingList} = props

    return ratingList.map(rating => {
      const {changeRating} = props
      const onClickRatingItem = () => {
        changeRating(rating.ratingId)
      }
      return (
        <li key={rating.ratingId} onClick={onClickRatingItem}>
          <img src={rating.imageUrl} alt={`rating${rating.ratingId}`} />
          <p>& up</p>
        </li>
      )
    })
  }
  const renderRatingsFilters = () => (
    <div>
      <h1>Rating</h1>
      <ul>{renderRatingsFiltersList()}</ul>
    </div>
  )

  const renderCategoriesList = () => {
    const {categoryOptions} = props
    return categoryOptions.map(category => {
      const {changeCategory} = props
      const onClickCategoryItem = () => {
        changeCategory(category.categoryId)
      }
      return (
        <li key={category.categoryId} onClick={onClickCategoryItem}>
          <p>{category.name}</p>
        </li>
      )
    })
  }
  const renderProductCategories = () => (
    <>
      <h1>Category</h1>
      <ul>{renderCategoriesList()}</ul>
    </>
  )

  const onEnterSearchInput = event => {
    const {enterSearchInput} = props
    if (event.key === 'Enter') {
      enterSearchInput()
    }
  }
  const onChangeSearchInput = event => {
    const {changeSearchInput} = props
    changeSearchInput(event.target.value)
  }
  const renderSearchInput = () => {
    const {searchInput} = props

    return (
      <div>
        <input
          type="search"
          value={searchInput}
          placeholder="Search"
          onChange={onChangeSearchInput}
          onKeyDown={onEnterSearchInput}
        />
      </div>
    )
  }
  const {clearFilters} = props
  return (
    <div>
      {renderSearchInput()}
      {renderProductCategories()}
      {renderRatingsFilters()}
      <button type="button" onClick={clearFilters}>
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
