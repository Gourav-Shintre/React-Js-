import Greetings from "./components/Greetings";
import Examplememo from "./components/reactMemo/Examplememo";
import StateExample from "./components/State_Handling/StateExample";
import First from "./components/State_Handling/StateExample";
import StateExample2 from "./components/State_Handling/StateExample2";
import TodoForm from "./components/Todo_Using_State/TodoForm";
import ExCallBack from "./components/usecallback/ExCallBack";
import Provider from "./components/useContextProvider/Provider";
import Todo from "./components/useContextProvider/Todo";
import Ex2 from "./components/useMemo/Ex2";
import Example from "./components/useMemo/Example";
import UseMemoEx from "./components/useMemo/UseMemoEx";
import UseReducer from "./components/useReducer/UseReducer";
import UseReducerTodo from "./components/useReducer/UseReducerTodo";
import UseRef from "./components/useRef/useRef";

function App() {
  return (
    <>
      {/* props examples */}
      {/* <Greetings /> */}

      {/* state handling examples  */}
      {/* <StateExample /> */}
      {/* <StateExample2 /> */}

      {/* Todo project  */}
      {/* <TodoForm /> */}

      {/* useref example */}
      {/* <UseRef /> */}

      {/* usereducer example */}
      {/* <UseReducer />  //counter example */}

      {/* //todo example using usereducer */}
      {/* <UseReducerTodo/> */}

      {/* usecontext provider  */}
      {/* <Provider>
        <Todo />
      </Provider> */}

      {/* memo */}
      {/* <Examplememo /> */}

      {/* usememo */}
      {/* <Example /> */}
      {/* <UseMemoEx /> */}
      {/* <Ex2 /> */}

      {/* usecall back */}
      <ExCallBack />
    </>
  );
}

export default App;
