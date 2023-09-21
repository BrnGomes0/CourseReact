import { useContext } from "react";
import {AppContext} from '../App';
export const Home = () => {
    const {username} = useContext(AppContext);
    return <h1><strong>THIS IS THE HOME PAGE and USER IS: {props.username}</strong></h1>
 }