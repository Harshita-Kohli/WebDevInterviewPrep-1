/*A large part of React is this idea of having components control and manage their own state. What happens when we throw native HTML 
form elements (input, select, textarea, etc) into the mix? Should we have
React be the “single source of truth” like we’re used to doing with React or should we allow that form data to live in the DOM like we’re 
used to typically doing with HTML form elements? These two questions are at the heart of controlled vs. uncontrolled components.

A controlled component is a component where React is in control and is the single source of truth for the form data. As you can see below, '
username doesn’t live in the DOM but instead lives in our component state. Whenever we want to update username, we call setState as we’re used to.*/

class ControlledForm extends Component {
  state = {
    username: ''
  }
  updateUsername = (e) => {
    this.setState({
      username: e.target.value,
    })
  }
  handleSubmit = () => {}
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          value={this.state.username}
          onChange={this.updateUsername} />
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

/*An uncontrolled component is where your form data is handled by the DOM, instead of inside your React component.

You use refs to accomplish this.*/
class UnControlledForm extends Component {
  input = React.createRef()
  handleSubmit = () => {
    console.log("Input Value: ", this.input.current.value)
  }
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          ref={} />
        <button type='submit'>Submit</button>
      </form>
    )
  }
}
/*Though uncontrolled components are typically easier to implement since you just grab the value from the DOM using refs, 
it’s typically recommended that you favor controlled components over uncontrolled components. The main reasons for this are that 
controlled components support instant field validation, allow you to conditionally disable/enable buttons, 
enforce input formats, and are more “the React way”.*/
