import authReducer from "./auth";
import movieReducer from "./movie";

const rootReducer = {
  auth: authReducer,
  movie: movieReducer,
};

export default rootReducer;
