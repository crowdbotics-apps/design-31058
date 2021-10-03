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
        style={styles.ImageBackground_1_386}
      />
      <View style={styles.View_1_387} />
      <View style={styles.View_8_193}>
        <View style={styles.View_8_190}>
          <View style={styles.View_I8_190_1_407}>
            <Text style={styles.Text_I8_190_1_407}>About</Text>
          </View>
        </View>
        <View style={styles.View_8_191}>
          <View style={styles.View_I8_191_1_408}>
            <Text style={styles.Text_I8_191_1_408}>Location</Text>
          </View>
        </View>
        <View style={styles.View_8_192}>
          <View style={styles.View_I8_192_1_409}>
            <Text style={styles.Text_I8_192_1_409}>Reviews</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_8_203}>
        <View style={styles.View_1_412}>
          <View style={styles.View_1_413}>
            <Text style={styles.Text_1_413}>Verified</Text>
          </View>
          <View style={styles.View_8_202}>
            <View style={styles.View_I8_202_1_415}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a1bb/7f29/d301873b0ec261cca05ba2e23f4227c8"
                }}
                style={styles.ImageBackground_I8_202_1_416}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_8_197}>
        <View style={styles.View_8_165}>
          <View style={styles.View_1_421}>
            <Text style={styles.Text_1_421}>Age</Text>
          </View>
          <View style={styles.View_1_422}>
            <Text style={styles.Text_1_422}>30 years</Text>
          </View>
        </View>
        <View style={styles.View_8_166}>
          <View style={styles.View_1_424}>
            <Text style={styles.Text_1_424}>Experience</Text>
          </View>
          <View style={styles.View_1_425}>
            <Text style={styles.Text_1_425}>11 months</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_8_176}>
        <View style={styles.View_1_428}>
          <Text style={styles.Text_1_428}>Check schedule</Text>
        </View>
      </View>
      <View style={styles.View_8_198}>
        <View style={styles.View_1_388}>
          <Text style={styles.Text_1_388}>
            Alex has loved dogs since childhood. He is currently a veterinary
            student. Visits the dog shelter we...
          </Text>
        </View>
        <View style={styles.View_1_426}>
          <Text style={styles.Text_1_426}>Read more</Text>
        </View>
      </View>
      <View style={styles.View_8_178}>
        <View style={styles.View_1_392}>
          <Text style={styles.Text_1_392}>Alex Murray</Text>
        </View>
        <View style={styles.View_8_177}>
          <View style={styles.View_I8_177_1_394}>
            <Text style={styles.Text_I8_177_1_394}>10 km</Text>
          </View>
          <View style={styles.View_I8_177_1_395}>
            <Text style={styles.Text_I8_177_1_395}>5$/hr</Text>
          </View>
          <View style={styles.View_I8_177_1_396}>
            <Text style={styles.Text_I8_177_1_396}>450 walks</Text>
          </View>
          <View style={styles.View_I8_177_8_170}>
            <View style={styles.View_I8_177_1_401}>
              <Text style={styles.Text_I8_177_1_401}>4.4</Text>
            </View>
            <View style={styles.View_I8_177_1_398}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/083b/d356/252617c751ecf84c771575637b6531f5"
                }}
                style={styles.ImageBackground_I8_177_1_399}
              />
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/407b/6397/b24bf9057ea56f52f92d6f41a1409c45"
            }}
            style={styles.ImageBackground_I8_177_1_429}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/407b/6397/b24bf9057ea56f52f92d6f41a1409c45"
            }}
            style={styles.ImageBackground_I8_177_1_430}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/407b/6397/b24bf9057ea56f52f92d6f41a1409c45"
            }}
            style={styles.ImageBackground_I8_177_1_431}
          />
        </View>
      </View>
      <View style={styles.View_8_200}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bb6d/b186/ad4616a425ad7d6dd27ff615afc6ec94"
          }}
          style={styles.ImageBackground_1_435}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9207/9cbc/542bc291df36239db932fa655c9cc5de"
        }}
        style={styles.ImageBackground_1_438}
      />
      <View style={styles.View_8_208} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(252, 252, 252, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  ImageBackground_1_386: {
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
  View_1_387: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("64.07103825136612%"),
    minHeight: hp("64.07103825136612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("46.85792349726776%"),
    backgroundColor: "rgba(251, 251, 251, 1)"
  },
  View_8_193: {
    width: wp("90.4%"),
    minWidth: wp("90.4%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("65.98360655737704%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_8_190: {
    flexGrow: 1,
    width: wp("26.400000000000002%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(43, 43, 43, 1)"
  },
  View_I8_190_1_407: {
    flexGrow: 1,
    width: wp("10.933333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.733333333333333%"),
    top: hp("1.639344262295083%"),
    justifyContent: "flex-start"
  },
  Text_I8_190_1_407: {
    color: "rgba(247, 247, 248, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.05329999953508378,
    textTransform: "none"
  },
  View_8_191: {
    flexGrow: 1,
    width: wp("26.666666666666668%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("0%"),
    backgroundColor: "rgba(245, 245, 245, 1)"
  },
  View_I8_191_1_408: {
    flexGrow: 1,
    width: wp("14.933333333333335%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.866666666666667%"),
    top: hp("1.639344262295083%"),
    justifyContent: "flex-start"
  },
  Text_I8_191_1_408: {
    color: "rgba(176, 176, 176, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.05329999953508378,
    textTransform: "none"
  },
  View_8_192: {
    flexGrow: 1,
    width: wp("26.400000000000002%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%"),
    top: hp("0%"),
    backgroundColor: "rgba(245, 245, 245, 1)"
  },
  View_I8_192_1_409: {
    flexGrow: 1,
    width: wp("14.133333333333335%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.13333333333334%"),
    top: hp("1.639344262295083%"),
    justifyContent: "flex-start"
  },
  Text_I8_192_1_409: {
    color: "rgba(176, 176, 176, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.05329999953508378,
    textTransform: "none"
  },
  View_8_203: {
    width: wp("26.93333333333333%"),
    minWidth: wp("26.93333333333333%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.8%"),
    top: hp("2.0491803278688523%"),
    backgroundColor: "rgba(196, 196, 196, 0.4000000059604645)"
  },
  View_1_412: {
    flexGrow: 1,
    width: wp("20.533333333333335%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("1.639344262295082%")
  },
  View_1_413: {
    width: wp("14.133333333333335%"),
    minWidth: wp("14.133333333333335%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_413: {
    color: "rgba(247, 247, 248, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.05329999953508378,
    textTransform: "none"
  },
  View_8_202: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.200000000000003%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I8_202_1_415: {
    flexGrow: 1,
    width: wp("4.444441731770834%"),
    height: hp("2.276878148480191%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4444742838541629%"),
    top: hp("0.22766446806693974%")
  },
  ImageBackground_I8_202_1_416: {
    width: wp("4.444441731770834%"),
    height: hp("2.276878148480191%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_8_197: {
    width: wp("53.333333333333336%"),
    minWidth: wp("53.333333333333336%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("75%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_8_165: {
    flexGrow: 1,
    width: wp("19.466666666666665%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_421: {
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
  Text_1_421: {
    color: "rgba(176, 176, 176, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.05329999953508378,
    textTransform: "none"
  },
  View_1_422: {
    width: wp("19.466666666666665%"),
    minWidth: wp("19.466666666666665%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.7322404371584668%"),
    justifyContent: "flex-start"
  },
  Text_1_422: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.06969999939203263,
    textTransform: "none"
  },
  View_8_166: {
    flexGrow: 1,
    width: wp("21.866666666666667%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.46666666666667%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_424: {
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
  Text_1_424: {
    color: "rgba(176, 176, 176, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.05329999953508378,
    textTransform: "none"
  },
  View_1_425: {
    width: wp("21.866666666666667%"),
    minWidth: wp("21.866666666666667%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.7322404371584668%"),
    justifyContent: "flex-start"
  },
  Text_1_425: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.06969999939203263,
    textTransform: "none"
  },
  View_8_176: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("98.224043715847%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_428: {
    flexGrow: 1,
    width: wp("37.06666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.2%"),
    top: hp("2.0491803278688394%"),
    justifyContent: "flex-start"
  },
  Text_1_428: {
    color: "rgba(247, 247, 248, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.06969999939203263,
    textTransform: "none"
  },
  View_8_198: {
    width: wp("74.4%"),
    minWidth: wp("74.4%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("84.2896174863388%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_388: {
    flexGrow: 1,
    width: wp("74.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_388: {
    color: "rgba(176, 176, 176, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.05329999953508378,
    textTransform: "none"
  },
  View_1_426: {
    flexGrow: 1,
    width: wp("19.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.1967213114754%"),
    justifyContent: "flex-start"
  },
  Text_1_426: {
    color: "rgba(251, 114, 76, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.05329999953508378,
    textTransform: "none"
  },
  View_8_178: {
    width: wp("65.33333333333333%"),
    minWidth: wp("65.33333333333333%"),
    height: hp("9.836065573770492%"),
    minHeight: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.333333333333336%"),
    top: hp("50.13661202185792%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_392: {
    flexGrow: 1,
    width: wp("46.13333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.599999999999994%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_392: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.11479999899864197,
    textTransform: "none"
  },
  View_8_177: {
    flexGrow: 1,
    width: wp("65.33333333333333%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.1038251366120235%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I8_177_1_394: {
    flexGrow: 1,
    width: wp("9.866666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.999999999999993%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I8_177_1_394: {
    color: "rgba(161, 161, 161, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.05329999953508378,
    textTransform: "none"
  },
  View_I8_177_1_395: {
    flexGrow: 1,
    width: wp("9.866666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I8_177_1_395: {
    color: "rgba(161, 161, 161, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.05329999953508378,
    textTransform: "none"
  },
  View_I8_177_1_396: {
    flexGrow: 1,
    width: wp("17.599999999999998%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.73333333333333%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I8_177_1_396: {
    color: "rgba(161, 161, 161, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.05329999953508378,
    textTransform: "none"
  },
  View_I8_177_8_170: {
    flexGrow: 1,
    width: wp("9.333333333333334%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I8_177_1_401: {
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
  Text_I8_177_1_401: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.05329999953508378,
    textTransform: "none"
  },
  View_I8_177_1_398: {
    width: wp("3.4666666666666663%"),
    height: hp("1.7759562841530054%"),
    top: hp("0.4781420765027349%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.866666666666667%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I8_177_1_399: {
    width: wp("2.8892659505208336%"),
    height: hp("1.4060432142247268%"),
    top: hp("0.185006563780739%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2888549804687486%")
  },
  ImageBackground_I8_177_1_429: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.533333333333335%"),
    top: hp("0.2732240437158495%")
  },
  ImageBackground_I8_177_1_430: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.06666666666667%"),
    top: hp("0.2732240437158495%")
  },
  ImageBackground_I8_177_1_431: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.79999999999999%"),
    top: hp("0.2732240437158495%")
  },
  View_8_200: {
    width: wp("11.733333333333333%"),
    minWidth: wp("11.733333333333333%"),
    height: hp("6.010695493937841%"),
    minHeight: hp("6.010695493937841%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("2.0491803278688523%"),
    backgroundColor: "rgba(196, 196, 196, 0.4000000059604645)"
  },
  ImageBackground_1_435: {
    flexGrow: 1,
    width: wp("2.666666666666667%"),
    height: hp("1.3658867507684425%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333332%"),
    top: hp("2.3224043715847%")
  },
  ImageBackground_1_438: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("62.97814207650273%")
  },
  View_8_208: {
    width: wp("35.733333333333334%"),
    height: hp("0.4098360655737705%"),
    minHeight: hp("0.4098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.266666666666666%"),
    top: hp("109.28961748633881%"),
    backgroundColor: "rgba(43, 43, 43, 1)"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
