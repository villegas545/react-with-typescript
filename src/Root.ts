import { Provider, ProviderProps } from "react-redux";
import { store } from "./store";
import App from "./App";

interface Props extends ProviderProps {
  children: React.ReactNode;
}

function Root({ children }: Props) {
  return <Provider store={store}>{children}</Provider>;
}

export default Root;
