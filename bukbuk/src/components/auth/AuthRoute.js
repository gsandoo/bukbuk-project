import React from "react";
import { Route, Redirect } from "react-router-dom";

function AuthRoute({ authenticated, component: Component }) {
  return (
    <Route
      render={(props) =>
        authenticated ? (
            <Component {...props} />
          )
        : (
          alert("해당 페이지는 로그인 후 이용 부탁드립니다 !")  ,    
          <Redirect to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
}

export default AuthRoute;