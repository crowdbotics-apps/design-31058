import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_11_1466}>
        <View style={styles.View_11_635}>
          <Text style={styles.Text_11_635}>Total Spend</Text>
        </View>
        <View style={styles.View_11_636}>
          <Text style={styles.Text_11_636}>$488</Text>
        </View>
        <View style={styles.View_11_640}>
          <View style={styles.View_11_867}>
            <View style={styles.View_11_868}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cfa3/4b68/fd3c02ca0af7c20af7af52fb3406c6ba"
                }}
                style={styles.ImageBackground_11_869}
              />
              <View style={styles.View_11_870}>
                <Text style={styles.Text_11_870}>-$12</Text>
              </View>
            </View>
            <View style={styles.View_11_871}>
              <Text style={styles.Text_11_871}>🍎 Groceries</Text>
            </View>
          </View>
          <View style={styles.View_11_862}>
            <View style={styles.View_11_863}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cfa3/4b68/fd3c02ca0af7c20af7af52fb3406c6ba"
                }}
                style={styles.ImageBackground_11_864}
              />
              <View style={styles.View_11_865}>
                <Text style={styles.Text_11_865}>+$12</Text>
              </View>
            </View>
            <View style={styles.View_11_866}>
              <Text style={styles.Text_11_866}>🎮 Gaming Console</Text>
            </View>
          </View>
          <View style={styles.View_11_857}>
            <View style={styles.View_11_858}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cfa3/4b68/fd3c02ca0af7c20af7af52fb3406c6ba"
                }}
                style={styles.ImageBackground_11_859}
              />
              <View style={styles.View_11_860}>
                <Text style={styles.Text_11_860}>+$12</Text>
              </View>
            </View>
            <View style={styles.View_11_861}>
              <Text style={styles.Text_11_861}>👨🏽‍ Sameer</Text>
            </View>
          </View>
          <View style={styles.View_11_852}>
            <View style={styles.View_11_853}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cfa3/4b68/fd3c02ca0af7c20af7af52fb3406c6ba"
                }}
                style={styles.ImageBackground_11_854}
              />
              <View style={styles.View_11_855}>
                <Text style={styles.Text_11_855}>-$12</Text>
              </View>
            </View>
            <View style={styles.View_11_856}>
              <Text style={styles.Text_11_856}>🍎 Groceries</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_11_1467}>
        <View style={styles.View_11_1439}>
          <View style={styles.View_11_1441}>
            <View style={styles.View_11_1443} />
            <View style={styles.View_11_1444}>
              <Text style={styles.Text_11_1444}>Pay</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_11_1445}>
          <View style={styles.View_11_1446}>
            <View style={styles.View_11_1447} />
            <View style={styles.View_11_1448}>
              <Text style={styles.Text_11_1448}>Cancel</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_11_1455}>
        <View style={styles.View_11_1456}>
          <Text style={styles.Text_11_1456}>Payment</Text>
        </View>
        <View style={styles.View_11_1457}>
          <Text style={styles.Text_11_1457}>
            Just before your dog walk starts
          </Text>
        </View>
      </View>
      <View style={styles.View_11_1465}>
        <View style={styles.View_11_647}>
          <View style={styles.View_11_648} />
          <View style={styles.View_11_1458}>
            <View style={styles.View_11_652}>
              <Text style={styles.Text_11_652}>09/25</Text>
            </View>
            <View style={styles.View_11_653}>
              <Text style={styles.Text_11_653}>5282 3456 7890 1289</Text>
            </View>
          </View>
          <View style={styles.View_11_1459}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d556/3289/92ceaadfad20ba3aa3615e1b79e3dd5b"
              }}
              style={styles.ImageBackground_11_649}
            />
            <View style={styles.View_11_654}>
              <Text style={styles.Text_11_654}>$3,265,23</Text>
            </View>
            <View style={styles.View_11_655}>
              <Text style={styles.Text_11_655}>Cristian Downey</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_11_1464}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/69a1/aed8/12c3d53f00442971704926a0b8561055"
            }}
            style={styles.ImageBackground_11_1461}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(252, 252, 252, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_11_1466: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("49.45355191256831%"),
    minHeight: hp("49.45355191256831%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("46.85792349726776%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_11_635: {
    flexGrow: 1,
    width: wp("35.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_11_635: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_11_636: {
    flexGrow: 1,
    width: wp("15.466666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_11_636: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_11_640: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("42.62295081967213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.830601092896174%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_11_867: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.655737704918032%"),
    minHeight: hp("10.655737704918032%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_11_868: {
    width: wp("100%"),
    height: hp("10.655737704918032%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_11_869: {
    width: wp("88.53333333333333%"),
    minWidth: wp("88.53333333333333%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.866666666666666%"),
    top: hp("0%")
  },
  View_11_870: {
    width: wp("9.866666666666667%"),
    minWidth: wp("9.866666666666667%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.8%"),
    top: hp("3.8251366120218577%"),
    justifyContent: "flex-start"
  },
  Text_11_870: {
    color: "rgba(251, 114, 76, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_11_871: {
    width: wp("27.73333333333333%"),
    top: hp("3.8251366120218577%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    justifyContent: "flex-start"
  },
  Text_11_871: {
    color: "rgba(111, 121, 133, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_11_862: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.655737704918032%"),
    minHeight: hp("10.655737704918032%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.655737704918025%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_11_863: {
    width: wp("100%"),
    height: hp("10.655737704918032%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_11_864: {
    width: wp("88.53333333333333%"),
    minWidth: wp("88.53333333333333%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.866666666666666%"),
    top: hp("0%")
  },
  View_11_865: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("3.825136612021865%"),
    justifyContent: "flex-start"
  },
  Text_11_865: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_11_866: {
    width: wp("43.733333333333334%"),
    top: hp("3.825136612021865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    justifyContent: "flex-start"
  },
  Text_11_866: {
    color: "rgba(111, 121, 133, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_11_857: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.655737704918032%"),
    minHeight: hp("10.655737704918032%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21.311475409836063%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_11_858: {
    width: wp("100%"),
    height: hp("10.655737704918032%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_11_859: {
    width: wp("88.53333333333333%"),
    minWidth: wp("88.53333333333333%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.866666666666666%"),
    top: hp("0%")
  },
  View_11_860: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("3.825136612021865%"),
    justifyContent: "flex-start"
  },
  Text_11_860: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_11_861: {
    width: wp("24%"),
    top: hp("3.825136612021865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    justifyContent: "flex-start"
  },
  Text_11_861: {
    color: "rgba(111, 121, 133, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_11_852: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.655737704918032%"),
    minHeight: hp("10.655737704918032%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("31.967213114754102%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_11_853: {
    width: wp("100%"),
    height: hp("10.655737704918032%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_11_854: {
    width: wp("88.53333333333333%"),
    minWidth: wp("88.53333333333333%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.866666666666666%"),
    top: hp("0%")
  },
  View_11_855: {
    width: wp("9.866666666666667%"),
    minWidth: wp("9.866666666666667%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.8%"),
    top: hp("3.8251366120218506%"),
    justifyContent: "flex-start"
  },
  Text_11_855: {
    color: "rgba(251, 114, 76, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_11_856: {
    width: wp("27.73333333333333%"),
    top: hp("3.8251366120218506%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    justifyContent: "flex-start"
  },
  Text_11_856: {
    color: "rgba(111, 121, 133, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_11_1467: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("99.31693989071039%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_11_1439: {
    flexGrow: 1,
    width: wp("43.46666666666666%"),
    height: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.99999999999999%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_11_1441: {
    width: wp("43.46666666666666%"),
    minWidth: wp("43.46666666666666%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_11_1443: {
    width: wp("43.46666666666666%"),
    minWidth: wp("43.46666666666666%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_11_1444: {
    width: wp("10.245719401041667%"),
    minWidth: wp("10.245719401041667%"),
    minHeight: hp("3.029570032338627%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.533349609375%"),
    top: hp("2.4590163934426243%"),
    justifyContent: "flex-start"
  },
  Text_11_1444: {
    color: "rgba(247, 247, 248, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.06969999939203263,
    textTransform: "none"
  },
  View_11_1445: {
    flexGrow: 1,
    width: wp("43.733333333333334%"),
    height: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_11_1446: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_11_1447: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(242, 242, 242, 1)"
  },
  View_11_1448: {
    width: wp("19.2%"),
    minWidth: wp("19.2%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.266666666666666%"),
    top: hp("2.4590163934426243%"),
    justifyContent: "flex-start"
  },
  Text_11_1448: {
    color: "rgba(176, 176, 176, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.06969999939203263,
    textTransform: "none"
  },
  View_11_1455: {
    width: wp("73.06666666666666%"),
    minWidth: wp("73.06666666666666%"),
    height: hp("10.51912568306011%"),
    minHeight: hp("10.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("3.415300546448088%")
  },
  View_11_1456: {
    width: wp("43.733333333333334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_11_1456: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 27,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.13939999878406525,
    textTransform: "none"
  },
  View_11_1457: {
    width: wp("73.06666666666666%"),
    top: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_11_1457: {
    color: "rgba(171, 171, 181, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.06969999939203263,
    textTransform: "none"
  },
  View_11_1465: {
    width: wp("90.66666666666666%"),
    minWidth: wp("90.66666666666666%"),
    height: hp("26.912568306010932%"),
    minHeight: hp("26.912568306010932%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("16.939890710382514%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_11_647: {
    flexGrow: 1,
    width: wp("74.93333333333332%"),
    height: hp("26.912568306010932%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_11_648: {
    width: wp("74.93333333333332%"),
    height: hp("26.912568306010932%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_11_1458: {
    width: wp("65.27040201822916%"),
    height: hp("2.73224043715847%"),
    top: hp("21.174863387978142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.7999755859375%")
  },
  View_11_652: {
    width: wp("13.925667317708335%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.344734700520824%"),
    justifyContent: "flex-start"
  },
  Text_11_652: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.5375764966011047,
    textTransform: "none"
  },
  View_11_653: {
    width: wp("45.06665852864583%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_11_653: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5375764966011047,
    textTransform: "none"
  },
  View_11_1459: {
    width: wp("63.87734375%"),
    height: hp("6.830601092896176%"),
    top: hp("3.0054644808743163%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333333%")
  },
  ImageBackground_11_649: {
    width: wp("12.943994140625001%"),
    height: hp("4.084852875256147%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.93333333333333%")
  },
  View_11_654: {
    width: wp("41.06666666666667%"),
    top: hp("3.0054644808743163%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_11_654: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.9209302067756653,
    textTransform: "none"
  },
  View_11_655: {
    width: wp("37.86666666666667%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_11_655: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.901835441589355,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 2.150305986404419,
    textTransform: "none"
  },
  View_11_1464: {
    flexGrow: 1,
    width: wp("13.066666666666665%"),
    height: hp("26.912568306010932%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.6%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_11_1461: {
    width: wp("4%"),
    height: hp("2.0491803278688523%"),
    top: hp("12.431693989071036%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333346%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
