import PagerView from "react-native-pager-view";
import { StatusBar } from "react-native";
import { Camara, Home, Messages } from "../pages";

export function Main() {

  return (
    <PagerView style={{ flex: 1 }} initialPage={1} >
      <Camara key={0} />
      <Home key={1} />
      <Messages key={2} />
      <StatusBar />
    </PagerView>
  );
}
