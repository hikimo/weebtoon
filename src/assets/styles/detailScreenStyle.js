import { StyleSheet } from "react-native"
import colors from "../colors"
import fonts from "../fonts"

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  bannerBox: {
    width: "100%",
    overflow: "hidden",
    backgroundColor: colors.white,
    shadowColor: "#000",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },

  listContainer: {
    paddingHorizontal: 10,
    paddingVertical: 25,
    flexDirection: "column-reverse"
  },
  listChapter: {
    flexDirection: "row",
    marginVertical: 10
  },
  coverFrame: {
    borderRadius: 10,
    width: 76,
    height: 76,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
    overflow: "hidden",
    shadowColor: "#000",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  listCover: {
    width: 75,
    height: 75,
    borderRadius: 10,
  },
  descBox: {
    marginLeft: 10,
    justifyContent: "space-evenly"
  },
  chapText: {
    fontFamily: fonts.quicksand.semiBold,
    fontSize: 18
  },
  chapDate: {
    color: colors.gray,
    fontSize: 14
  }
})

export default styles