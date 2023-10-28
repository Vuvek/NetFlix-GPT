import {userActions} from "./slices/user.slice";
import { moviesActions } from "./slices/movies.slice";
import { chatGPTActions } from "./slices/chatGPT.slice";
import { configActions } from "./slices/config.slice";

const actions = {
    ...userActions,
    ...moviesActions,
    ...chatGPTActions,
    ...configActions,
}

export default actions;