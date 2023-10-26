import {userActions} from "./slices/user.slice";
import { moviesActions } from "./slices/movies.slice";

const actions = {
    ...userActions,
    ...moviesActions
}

export default actions;