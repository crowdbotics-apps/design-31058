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
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b52d/04eb/e45129e07b317bb44298d7bf6a2ecfdc"
        }}
        style={styles.ImageBackground_1_1769}
      />
      <View style={styles.View_1_1770} />
      <View style={styles.View_1_1784}>
        <View style={styles.View_1_1785} />
        <View style={styles.View_1_1786} />
        <View style={styles.View_1_1787}>
          <View style={styles.View_1_1788} />
          <View style={styles.View_1_1789}>
            <Text style={styles.Text_1_1789}>About</Text>
          </View>
        </View>
        <View style={styles.View_1_1790}>
          <Text style={styles.Text_1_1790}>Location</Text>
        </View>
        <View style={styles.View_1_1791}>
          <Text style={styles.Text_1_1791}>Reviews</Text>
        </View>
      </View>
      <View style={styles.View_53_13}>
        <View style={styles.View_53_12}>
          <View style={styles.View_1_1795}>
            <Text style={styles.Text_1_1795}>Verified</Text>
          </View>
          <View style={styles.View_1_1796}>
            <View style={styles.View_I1_1796_1_415}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ac04/4bd4/765c33ef09f0d4bb07ef22d768c49f1e"
                }}
                style={styles.ImageBackground_I1_1796_1_416}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1_1797}>
        <View style={styles.View_1_1798}>
          <View style={styles.View_1_1799}>
            <Text style={styles.Text_1_1799}>Age</Text>
          </View>
          <View style={styles.View_1_1800}>
            <Text style={styles.Text_1_1800}>30 years</Text>
          </View>
        </View>
        <View style={styles.View_1_1801}>
          <View style={styles.View_1_1802}>
            <Text style={styles.Text_1_1802}>Experience</Text>
          </View>
          <View style={styles.View_1_1803}>
            <Text style={styles.Text_1_1803}>11 months</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_53_1}>
        <View style={styles.View_1_1771}>
          <Text style={styles.Text_1_1771}>
            Alex has loved dogs since childhood. He is currently a veterinary
            student. Visits the dog shelter we...
          </Text>
        </View>
        <View style={styles.View_1_1804}>
          <Text style={styles.Text_1_1804}>Read more</Text>
        </View>
      </View>
      <View style={styles.View_1_1805}>
        <View style={styles.View_1_1806}>
          <Text style={styles.Text_1_1806}>Check schedule</Text>
        </View>
      </View>
      <View style={styles.View_53_9}>
        <View style={styles.View_1_1774}>
          <Text style={styles.Text_1_1774}>Alex Murray</Text>
        </View>
        <View style={styles.View_53_8}>
          <View style={styles.View_53_2}>
            <View style={styles.View_1_1777}>
              <Text style={styles.Text_1_1777}>5$/hr</Text>
            </View>
            <View style={styles.View_1_1776}>
              <Text style={styles.Text_1_1776}>10 km</Text>
            </View>
            <View style={styles.View_1_1779}>
              <View style={styles.View_1_1780}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bb1c/5cd1/4e5f17861ae8dc11f0f5263481b95e0f"
                  }}
                  style={styles.ImageBackground_1_1781}
                />
              </View>
              <View style={styles.View_1_1783}>
                <Text style={styles.Text_1_1783}>4.4</Text>
              </View>
            </View>
            <View style={styles.View_1_1778}>
              <Text style={styles.Text_1_1778}>450 walks</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f43/d47e/8dd470de9e51e8ba9be36324f27bdf2e"
            }}
            style={styles.ImageBackground_53_6}
          />
        </View>
      </View>
      <View style={styles.View_53_14}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a739/323a/b3d13655b7d2946170a225c9a5aadfd9"
          }}
          style={styles.ImageBackground_1_1813}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/91df/6043/b1b2b4a19a193d34bcfb25879885ca0e"
        }}
        style={styles.ImageBackground_1_1816}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(22, 22, 22, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  ImageBackground_1_1769: {
    width: wp("119.73333333333333%"),
    minWidth: wp("119.73333333333333%"),
    height: hp("61.065573770491795%"),
    minHeight: hp("61.065573770491795%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-9.866666666666667%"),
    top: hp("0%")
  },
  View_1_1770: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("64.07103825136612%"),
    minHeight: hp("64.07103825136612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("46.85792349726776%"),
    backgroundColor: "rgba(22, 22, 22, 1)"
  },
  View_1_1784: {
    width: wp("90.66666666666666%"),
    minWidth: wp("90.66666666666666%"),
    height: hp("6.101118410871329%"),
    minHeight: hp("6.101118410871329%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("65.98360655737704%")
  },
  View_1_1785: {
    width: wp("26.666666666666668%"),
    minWidth: wp("26.666666666666668%"),
    height: hp("6.101118410871329%"),
    minHeight: hp("6.101118410871329%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.999999999999996%"),
    top: hp("0%"),
    backgroundColor: "rgba(235, 235, 245, 1)",
    opacity: 0.029999999329447746
  },
  View_1_1786: {
    width: wp("26.666666666666668%"),
    minWidth: wp("26.666666666666668%"),
    height: hp("6.101118410871329%"),
    minHeight: hp("6.101118410871329%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%"),
    top: hp("0%"),
    backgroundColor: "rgba(235, 235, 245, 1)",
    opacity: 0.029999999329447746
  },
  View_1_1787: {
    width: wp("26.666666666666668%"),
    minWidth: wp("26.666666666666668%"),
    height: hp("6.0424554543417015%"),
    minHeight: hp("6.0424554543417015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1788: {
    width: wp("26.666666666666668%"),
    minWidth: wp("26.666666666666668%"),
    height: hp("6.0424554543417015%"),
    minHeight: hp("6.0424554543417015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 252, 1)"
  },
  View_1_1789: {
    width: wp("10.933333333333334%"),
    minWidth: wp("10.933333333333334%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.733333333333333%"),
    top: hp("1.639344262295083%"),
    justifyContent: "flex-start"
  },
  Text_1_1789: {
    color: "rgba(22, 22, 22, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.05329999953508378,
    textTransform: "none"
  },
  View_1_1790: {
    width: wp("14.933333333333335%"),
    minWidth: wp("14.933333333333335%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.866666666666674%"),
    top: hp("1.639344262295083%"),
    justifyContent: "flex-start"
  },
  Text_1_1790: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.05329999953508378,
    textTransform: "none"
  },
  View_1_1791: {
    width: wp("14.133333333333335%"),
    minWidth: wp("14.133333333333335%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.13333333333333%"),
    top: hp("1.639344262295083%"),
    justifyContent: "flex-start"
  },
  Text_1_1791: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.05329999953508378,
    textTransform: "none"
  },
  View_53_13: {
    width: wp("25.6%"),
    minWidth: wp("25.6%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.13333333333334%"),
    top: hp("2.0491803278688523%"),
    backgroundColor: "rgba(0, 0, 0, 0.4000000059604645)"
  },
  View_53_12: {
    width: wp("19.2%"),
    minWidth: wp("19.2%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999886%"),
    top: hp("1.639344262295082%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1795: {
    width: wp("13.066666666666665%"),
    minWidth: wp("13.066666666666665%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.13661202185792387%"),
    justifyContent: "flex-start"
  },
  Text_1_1795: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.04919999957084656,
    textTransform: "none"
  },
  View_1_1796: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.866666666666674%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_1796_1_415: {
    flexGrow: 1,
    width: wp("4.44444580078125%"),
    height: hp("2.2768698103440914%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.44447021484374716%"),
    top: hp("0.22767280620303953%")
  },
  ImageBackground_I1_1796_1_416: {
    width: wp("4.44444580078125%"),
    height: hp("2.2768698103440914%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1797: {
    width: wp("53.333333333333336%"),
    minWidth: wp("53.333333333333336%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("75.13661202185791%")
  },
  View_1_1798: {
    width: wp("19.466666666666665%"),
    minWidth: wp("19.466666666666665%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1799: {
    width: wp("6.933333333333333%"),
    minWidth: wp("6.933333333333333%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_1799: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.05329999953508378,
    textTransform: "none"
  },
  View_1_1800: {
    width: wp("19.466666666666665%"),
    minWidth: wp("19.466666666666665%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.1420765027322517%"),
    justifyContent: "flex-start"
  },
  Text_1_1800: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.06969999939203263,
    textTransform: "none"
  },
  View_1_1801: {
    width: wp("21.866666666666667%"),
    minWidth: wp("21.866666666666667%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.46666666666667%"),
    top: hp("0%")
  },
  View_1_1802: {
    width: wp("18.933333333333334%"),
    minWidth: wp("18.933333333333334%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_1802: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.05329999953508378,
    textTransform: "none"
  },
  View_1_1803: {
    width: wp("21.866666666666667%"),
    minWidth: wp("21.866666666666667%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.1420765027322517%"),
    justifyContent: "flex-start"
  },
  Text_1_1803: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.06969999939203263,
    textTransform: "none"
  },
  View_53_1: {
    width: wp("74.4%"),
    minWidth: wp("74.4%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("84.69945355191257%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1771: {
    width: wp("74.4%"),
    minWidth: wp("74.4%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_1771: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.05329999953508378,
    textTransform: "none"
  },
  View_1_1804: {
    width: wp("19.2%"),
    minWidth: wp("19.2%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.196721311475414%"),
    justifyContent: "flex-start"
  },
  Text_1_1804: {
    color: "rgba(251, 114, 76, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.05329999953508378,
    textTransform: "none"
  },
  View_1_1805: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("98.77049180327869%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1806: {
    width: wp("37.06666666666666%"),
    minWidth: wp("37.06666666666666%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.2%"),
    top: hp("2.1857923497267677%"),
    justifyContent: "flex-start"
  },
  Text_1_1806: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.06969999939203263,
    textTransform: "none"
  },
  View_53_9: {
    width: wp("65.06666666666666%"),
    minWidth: wp("65.06666666666666%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.333333333333336%"),
    top: hp("49.72677595628415%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1774: {
    width: wp("46.13333333333333%"),
    minWidth: wp("46.13333333333333%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.466666666666665%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_1774: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.11479999899864197,
    textTransform: "none"
  },
  View_53_8: {
    width: wp("65.06666666666666%"),
    minWidth: wp("65.06666666666666%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.5573770491803245%")
  },
  View_53_2: {
    width: wp("65.06666666666666%"),
    minWidth: wp("65.06666666666666%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1777: {
    width: wp("9.866666666666667%"),
    minWidth: wp("9.866666666666667%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_1777: {
    color: "rgba(174, 174, 178, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.05329999953508378,
    textTransform: "none"
  },
  View_1_1776: {
    width: wp("9.866666666666667%"),
    minWidth: wp("9.866666666666667%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.999999999999993%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_1776: {
    color: "rgba(174, 174, 178, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.05329999953508378,
    textTransform: "none"
  },
  View_1_1779: {
    width: wp("9.333333333333334%"),
    minWidth: wp("9.333333333333334%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("0%")
  },
  View_1_1780: {
    width: wp("3.4666666666666663%"),
    height: hp("1.7759562841530054%"),
    top: hp("0.40983606557377783%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.866666666666667%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_1781: {
    width: wp("2.8892659505208336%"),
    height: hp("1.4060598904969261%"),
    top: hp("0.185010732848788%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.28885091145832575%")
  },
  View_1_1783: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_1783: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.05329999953508378,
    textTransform: "none"
  },
  View_1_1778: {
    width: wp("17.599999999999998%"),
    minWidth: wp("17.599999999999998%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.46666666666666%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_1778: {
    color: "rgba(174, 174, 178, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.05329999953508378,
    textTransform: "none"
  },
  ImageBackground_53_6: {
    width: wp("33.6%"),
    minWidth: wp("33.6%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.466666666666661%"),
    top: hp("0.2732240437158495%")
  },
  View_53_14: {
    width: wp("11.733333333333333%"),
    minWidth: wp("11.733333333333333%"),
    height: hp("6.010695493937841%"),
    minHeight: hp("6.010695493937841%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("2.0491803278688523%"),
    backgroundColor: "rgba(0, 0, 0, 0.4000000059604645)"
  },
  ImageBackground_1_1813: {
    width: wp("2.666666666666667%"),
    height: hp("1.3658867507684425%"),
    top: hp("2.3224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333332%")
  },
  ImageBackground_1_1816: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("62.97814207650273%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
