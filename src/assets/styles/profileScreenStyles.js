import { StyleSheet } from "react-native"
import colors from "../colors"
import fonts from "../fonts"

export default styles = StyleSheet.create({
  container: {
    backgroundColor: colors.prime,
    flex: 1,
  },
  containerEdit: {
    flex: 1,
    backgroundColor: colors.prime
  },
  profileTop: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: colors.prime,
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  profileTopEdit: {
    marginTop: 10,
    paddingVertical: 25,
    alignItems: "center"
  },
  imgFrame: {
    height: 150,
    width: 150,
    borderRadius: 150/2,
    backgroundColor: colors.silver,
    borderColor: colors.primeDarken,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  imgProfile: {
    height: 150,
    width: 150,
    borderRadius: 150 / 2
  },
  editBtn: {
    zIndex: 999,
    position: "absolute",
    bottom: 0,
    right: 10,
    backgroundColor: colors.silver,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    height: 40,
    width: 40,
    elevation: 5
  },
  nameTitle: {
    color: colors.white,
    fontSize: 26,
    textAlign: "center",
    marginVertical: 10,
    textTransform: "capitalize",
    fontFamily: fonts.quicksand.semiBold,
  },
  actionBtn: {
    width: "100%",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: colors.white
  },
  actionBtnText: {
    fontSize: 16,
    color: colors.white,
    textTransform: "uppercase",
  },

  actionBars: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: colors.white,
    justifyContent: "flex-start",
    borderTopRightRadius: 100
  },
  actionTitle: {
    fontSize: 22,
    fontFamily: fonts.raleway.normal
  },
  actionList: {
    marginVertical: 10,
  },
  list: {
    alignItems: "center",
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: "transparent",
    borderRadius: 10,
    width: "30%",
    maxWidth: "30%",
    padding: 10,
    marginHorizontal: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,
  },
  listText: {
    fontFamily: fonts.quicksand.normal,
    fontSize: 12,
    marginTop: 5,
    textAlign: "center"
  },

  bottomCountainer: {
    position: "relative", 
    justifyContent: "center", 
    alignItems: "center"
  },
  formGroup: {
    width: 314,
    maxWidth: 314,
    marginBottom: 10,
  },
  formLable: {
    color: colors.white,
    fontSize: 18,
    fontFamily: fonts.quicksand.semiBold,
    marginBottom: 10
  },
  fieldBox: {
    backgroundColor: colors.white,
    borderRadius: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  fieldInput: {
    fontFamily: fonts.quicksand.normal,
    fontSize: 16,
    paddingHorizontal: 10
  },
  btnSave: {
    paddingVertical: 13,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.white,
    width: 314,
    maxWidth: 314,
    borderRadius: 4,
    marginTop: 10
  },
  btnSaveText: {
    color: colors.white,
    fontFamily: fonts.quicksand.normal,
    fontSize: 16,
    textTransform: "uppercase"
  },

  btnDelete: {
    paddingVertical: 13,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.red,
    width: 314,
    maxWidth: 314,
    borderRadius: 4,
    marginTop: 10
  },
  btnDeleteText: {
    color: colors.white,
    fontFamily: fonts.quicksand.normal,
    fontSize: 16,
    textTransform: "uppercase"
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },

  bulletPattern: {
    position: "absolute", 
    width: 204, 
    height: 182, 
    borderRadius: 120, 
    backgroundColor: colors.primeDarken, 
    left: "-25%", 
    top: "-20%"
  },
  bottomBulletPattern: {
    position: "absolute", 
    width: 306, 
    height: 289, 
    borderRadius: 295, 
    backgroundColor: colors.primeDarken, 
    right: "-35%", 
    bottom: "-120%"
  }
})
