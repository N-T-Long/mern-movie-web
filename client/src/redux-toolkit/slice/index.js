import movieReducer from "./movie";
import authReducer from "./auth";
import publicReducer from "./public";
import adminReducer from "./admin";

const rootReducer = {
  movie: movieReducer,
  auth: authReducer,
  admin: adminReducer,
  public: publicReducer,
};

export default rootReducer;
