import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchVideos } from '../actions/actions'

function mapStateToProps(state) {
  return state
}

class SearchBox extends Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    const query = event.target.children[0].value
    this.props.dispatch(fetchVideos(query))
  }

  render() {
    return (
      <div className="SearchBox">
        <form onSubmit={this.handleSubmit}>
          <input type="text"/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default connect(mapStateToProps)(SearchBox)
