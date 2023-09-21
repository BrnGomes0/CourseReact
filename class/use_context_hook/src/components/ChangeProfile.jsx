import { useState } from "react";
import { useContext } from "react";
import {AppContext} from '../App';

export const ChangeProfile = () => {   
    const [newUserName, setnewUserName] = useState("");
    const {setUserName} = useContext(AppContext);

    return (
        <div>
            <input placeholder="Insert the name" onChange={(event) => {setnewUserName(event.target.value)}}/>
            <button onClick={() => setUserName(newUserName)}>Change Username</button>
        </div>
    );
};