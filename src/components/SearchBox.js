import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchVideos } from '../actions/actions'

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchVideos }, dispatch)
}

function SearchBox(props) {
  function handleSubmit(event) {
    event.preventDefault()
    const query = event.target.children[0].value
    props.fetchVideos(query)
  }

  return (
    <div className="SearchBox">
      <form onSubmit={ handleSubmit.bind(this) } className="search-bar">
        <input type="text" />
        <input type="submit" value="Search"/>
      </form>
    </div>
  )
}

export default connect(null, mapDispatchToProps)(SearchBox)
