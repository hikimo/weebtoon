import { StyleSheet } from "react-native"
import colors from "../colors"
import fonts from "../fonts"

export default styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    minHeight: 50,
    backgroundColor: colors.prime,
    paddingVertical: 15,
    paddingHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,
  },
  searchBox: {
    backgroundColor: colors.white,
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 20,
  },
  searchInput: {
    flex: 1,
    fontFamily: fonts.quicksand.normal,
    fontSize: 16,
    paddingHorizontal: 20
  },

  noLogin: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  noLoginImg: {
    height: 200
  },
  noLoginText: {
    fontSize: 22,
    textAlign: "center",
    fontFamily: fonts.raleway.normal
  },
  listContainer: {
    paddingHorizontal: 10,
    paddingVertical: 25,
    flexDirection: "column-reverse"
  },
  listChapter: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10
  },
  coverFrame: {
    borderWidth: 3,
    borderColor: colors.silver,
    borderRadius: 10,
    overflow: "hidden",
    shadowColor: "#000",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 2,
  },
  listCover: {
    width: 100,
    height: 125
  },
  descBox: {
    marginLeft: 10,
    paddingHorizontal: 10,
    justifyContent: "space-around"
  },
  favTitle: {
    flex: 1,
    fontFamily: fonts.quicksand.semiBold,
    fontSize: 18,
    width: 200,
    maxWidth: 200
  },
  favCount: {
    flex: 1,
    color: colors.silver,
    fontSize: 14
  },
  btnUnfav: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: colors.primeDarken,
    paddingHorizontal: 5,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    height: 25,
    maxHeight: 35,
  },
  btnUnfavText: {
    fontFamily: fonts.quicksand.normal,
    fontSize: 18,
    marginLeft: 10,
    color: colors.white
  }
})