import react from "react"
import {useformik} from "formik"
const App=()=>{
    return<>
    <form>
    <div>

<div>
        <label>
            Name:
        </label></div>
        <div>
        <input type="text" placeholder="Enter the Name"/>
        <label>
            Email:
        </label>
        
        <input type="text" placeholder="Enter the Email"/>
        </div>


        <div>


            <input type="submit" value={"Save"}/>
        </div>
    </div>
    </form>
    </>
}

export default App