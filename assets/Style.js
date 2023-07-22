import { StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const styles = StyleSheet.create({
  screenCover: {
    flex: 1,
    paddingTop: useSafeAreaInsets().top,
    paddingBottom: useSafeAreaInsets().bottom,
    paddingLeft: useSafeAreaInsets().left,
    paddingRight: useSafeAreaInsets().right,
  },
});

export {styles};
