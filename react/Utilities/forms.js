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

  //2. controlled Form
  