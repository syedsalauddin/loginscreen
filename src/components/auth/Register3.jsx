import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// Register with redux
// Register3: name of the Functional based component
// props : data / properties coming from the parent
// return:  rendering content
// register is the action function and isAuthenticated is the store content
const Register3 = ({ register, isAuthenticated }) => {
  return (
    <div>

    </div>
  )
}

// list of props along with types
// props: type (object/function) followed by isRequired mandatory or not)
Register3.propTypes = {
  props: PropTypes
}

// list of contents which we are accessing from store
const mapStateToProps = (state) => ({

})

// actions from redux actions (list of action methods from the redux action folder)
const mapDispatchToProps = {

}

// connect : used to connect with the redux store to get the data and will accept the 2 params as per syntax)
// component will be exported with name : Register3
export default connect(mapStateToProps, mapDispatchToProps)(Register3)
