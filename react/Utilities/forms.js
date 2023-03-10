//1. Uncontrolled Form
function App() {
    //Uncontrolled, when th value comes directly from the DOM. Use Default value
    function submitHandler(e) {
      e.preventDefault()
      let formData = new FormData(e.target)
      let data = Object.fromEntries(formData)
      let fullUsername = data.firstname + ' ' + data.lastname
      console.log(fullUsername);
    }
    return (
      <form onSubmit={submitHandler}>
        <label htmlFor="firstName">Your first name</label>
        <input type="text" name="firstname" id="firstname" defaultValue="Pesho" />
        <label htmlFor="lastName">Your Last name</label>
        <input type="text" name="lastname" id="lastname" defaultValue="Todorov" />
        <input type="submit" value="Send" />
      </form>
  
    );
  } 
  export default App;

  //2. Controlled Form
  
  function App() {
    //Controlled, value comes from the useState. Using Value and onChange
    let [input, setInput] = useState({
      firstName: '',
      lastName: ''
    })
    //let [errors, setErrors] = useState({})
  
    function submitHandler(e) {
      e.preventDefault()
  
      console.log(`${input.firstName} ${input.lastName}`);
  
    }
    function onChangeHandler(e) {
  // type validation. can use a state for errors and contitionally rendering 
     if ((e.target.name === 'firstName') && (input.firstName.length < 3)) {
        console.log('valide')
      }
      // We spread to take all values , otherwise will overwrite all the state object
      setInput(state => ({ ...input, [e.target.name]: e.target.value }))
    }
    return (
      <form onSubmit={submitHandler}>
        <label htmlFor="firstName">Your first name</label>
        <input type="text" name="firstName" id="firstName" value={input.firstName} onChange={onChangeHandler} />
        <label htmlFor="lastName">Your Last name</label>
        <input type="text" name="lastName" id="lastName" value={input.lastName} onChange={onChangeHandler} />
        <input type="submit" value="Send" />
      </form>
  
    );
  }