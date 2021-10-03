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
      <View style={styles.View_1_1294} />
      <View style={styles.View_1_1295}>
        <View style={styles.View_1_1296}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/758a/9bd8/26b322c5409a77f38cd191d13f0b1f58"
            }}
            style={styles.ImageBackground_I1_1296_0_3972}
          />
        </View>
      </View>
      <View style={styles.View_1_1297}>
        <View style={styles.View_1_1298}>
          <Text style={styles.Text_1_1298}>Let’s start here</Text>
        </View>
        <View style={styles.View_1_1299}>
          <Text style={styles.Text_1_1299}>Fill in your details to begin</Text>
        </View>
      </View>
      <View style={styles.View_1_1300}>
        <View style={styles.View_1_1301}>
          <View style={styles.View_1_1302}>
            <View style={styles.View_1_1303}>
              <Text style={styles.Text_1_1303}>E-mail</Text>
            </View>
            <View style={styles.View_1_1304}>
              <Text style={styles.Text_1_1304}>Cristiandeb13@gmail.com</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_1_1305}>
          <View style={styles.View_1_1306}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc94/25c6/6c34447748d1c5312ac795f1b4f9dc27"
              }}
              style={styles.ImageBackground_1_1307}
            />
            <View style={styles.View_1_1317}>
              <View style={styles.View_1_1318}>
                <Text style={styles.Text_1_1318}>Password</Text>
              </View>
            </View>
            <View style={styles.View_1_1319}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abcb/33e8/17fccd510eeae036feb0a02dd08adc13"
                }}
                style={styles.ImageBackground_1_1320}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_1_1326}>
          <View style={styles.View_1_1327}>
            <View style={styles.View_1_1328}>
              <Text style={styles.Text_1_1328}>Fullname</Text>
            </View>
            <View style={styles.View_1_1329}>
              <Text style={styles.Text_1_1329}>Cristian</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1_1330}>
        <View style={styles.View_1_1331}>
          <View style={styles.View_1_1332}>
            <View style={styles.View_1_1333}>
              <View style={styles.View_1_1334} />
              <View style={styles.View_1_1335}>
                <Text style={styles.Text_1_1335}>Sign up</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_1_1336}>
          <View style={styles.View_1_1337}>
            <View style={styles.View_1_1338}>
              <View style={styles.View_1_1339} />
              <View style={styles.View_1_1340}>
                <View style={styles.View_1_1341}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3338/58b0/d28032558a7a060c3cf2aff6c91ed839"
                    }}
                    style={styles.ImageBackground_1_1342}
                  />
                </View>
              </View>
              <View style={styles.View_1_1343}>
                <Text style={styles.Text_1_1343}> Connect with Google</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_1_1344}>
          <View style={styles.View_1_1345} />
          <View style={styles.View_1_1346}>
            <Text style={styles.Text_1_1346}> Connect with Facebook</Text>
          </View>
          <View style={styles.View_1_1347}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ebc6/19c1/cdc8d3848987f3a500a9e9316101858b"
              }}
              style={styles.ImageBackground_1_1348}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_1_1351}>
        <Text style={styles.Text_1_1351}>
          By signing in, I agree with Terms of Use and Privacy Policy
        </Text>
      </View>
      <View style={styles.View_1_1352}>
        <Text style={styles.Text_1_1352}>or</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(22, 22, 22, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_1_1294: {
    width: wp("35.733333333333334%"),
    height: hp("0.4098360655737705%"),
    minHeight: hp("0.4098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.266666666666666%"),
    top: hp("109.28961748633881%"),
    backgroundColor: "rgba(32, 32, 32, 1)"
  },
  View_1_1295: {
    width: wp("7.466666666666668%"),
    minWidth: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("6.147540983606557%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1296: {
    width: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1_1296_0_3972: {
    flexGrow: 1,
    width: wp("4.666731770833334%"),
    height: hp("1.920381139536373%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3221516927083332%"),
    top: hp("0.9960820766094596%")
  },
  View_1_1297: {
    width: wp("70.39999999999999%"),
    minWidth: wp("70.39999999999999%"),
    height: hp("10.51912568306011%"),
    minHeight: hp("10.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("12.978142076502733%")
  },
  View_1_1298: {
    width: wp("70.39999999999999%"),
    minWidth: wp("70.39999999999999%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_1298: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 27,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.13939999878406525,
    textTransform: "none"
  },
  View_1_1299: {
    width: wp("66.4%"),
    minWidth: wp("66.4%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.967213114754097%"),
    justifyContent: "flex-start"
  },
  Text_1_1299: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.06969999939203263,
    textTransform: "none"
  },
  View_1_1300: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("30.327868852459016%"),
    minHeight: hp("30.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("26.50273224043716%")
  },
  View_1_1301: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11.202185792349724%"),
    backgroundColor: "rgba(65, 65, 67, 1)"
  },
  View_1_1302: {
    width: wp("60%"),
    minWidth: wp("60%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("1.0928961748633839%")
  },
  View_1_1303: {
    width: wp("9.066666666666666%"),
    minWidth: wp("9.066666666666666%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_1303: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_1_1304: {
    width: wp("60%"),
    minWidth: wp("60%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.4590163934426315%"),
    justifyContent: "flex-start"
  },
  Text_1_1304: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.06969999939203263,
    textTransform: "none"
  },
  View_1_1305: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22.404371584699447%"),
    backgroundColor: "rgba(65, 65, 67, 1)"
  },
  View_1_1306: {
    width: wp("81.06666666666666%"),
    minWidth: wp("81.06666666666666%"),
    height: hp("4.2349726775956285%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("1.5027322404371546%")
  },
  ImageBackground_1_1307: {
    width: wp("25.066666666666666%"),
    minWidth: wp("25.066666666666666%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.415300546448101%")
  },
  View_1_1317: {
    width: wp("13.066666666666665%"),
    minWidth: wp("13.066666666666665%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1318: {
    width: wp("13.066666666666665%"),
    minWidth: wp("13.066666666666665%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_1318: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_1_1319: {
    width: wp("5.333333333333334%"),
    height: hp("2.2009719264963286%"),
    top: hp("1.4025495351989505%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.73333333333333%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_1320: {
    width: wp("4.111116536458334%"),
    height: hp("1.4465874010096482%"),
    top: hp("0.38971614316513126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6110188802083343%")
  },
  View_1_1326: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(65, 65, 67, 1)"
  },
  View_1_1327: {
    width: wp("17.866666666666667%"),
    minWidth: wp("17.866666666666667%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("1.0928961748633839%")
  },
  View_1_1328: {
    width: wp("12.533333333333333%"),
    minWidth: wp("12.533333333333333%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666657%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_1328: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_1_1329: {
    width: wp("17.866666666666667%"),
    minWidth: wp("17.866666666666667%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.4590163934426243%"),
    justifyContent: "flex-start"
  },
  Text_1_1329: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.06969999939203263,
    textTransform: "none"
  },
  View_1_1330: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("31.693989071038253%"),
    minHeight: hp("31.693989071038253%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("59.83606557377049%")
  },
  View_1_1331: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1332: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1333: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1334: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1335: {
    width: wp("17.333333333333336%"),
    minWidth: wp("17.333333333333336%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.06666666666667%"),
    top: hp("2.185792349726782%"),
    justifyContent: "flex-start"
  },
  Text_1_1335: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.06969999939203263,
    textTransform: "none"
  },
  View_1_1336: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("23.770491803278695%")
  },
  View_1_1337: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1338: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1339: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(235, 235, 245, 1)",
    borderWidth: 1
  },
  View_1_1340: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    top: hp("2.322404371584696%")
  },
  View_1_1341: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_1342: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_1_1343: {
    width: wp("48.8%"),
    minWidth: wp("48.8%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.333333333333336%"),
    top: hp("2.1857923497267677%"),
    justifyContent: "flex-start"
  },
  Text_1_1343: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.06969999939203263,
    textTransform: "none"
  },
  View_1_1344: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14.207650273224054%")
  },
  View_1_1345: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(59, 89, 152, 1)"
  },
  View_1_1346: {
    width: wp("54.666666666666664%"),
    minWidth: wp("54.666666666666664%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.4%"),
    top: hp("2.322404371584696%"),
    justifyContent: "flex-start"
  },
  Text_1_1346: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.06969999939203263,
    textTransform: "none"
  },
  View_1_1347: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    top: hp("2.45901639344261%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_1_1348: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1351: {
    width: wp("87.73333333333333%"),
    minWidth: wp("87.73333333333333%"),
    minHeight: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333333%"),
    top: hp("94.53551912568307%"),
    justifyContent: "flex-start"
  },
  Text_1_1351: {
    color: "rgba(142, 142, 147, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.05329999953508378,
    textTransform: "none"
  },
  View_1_1352: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.733333333333334%"),
    top: hp("69.12568306010928%"),
    justifyContent: "flex-start"
  },
  Text_1_1352: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.06969999939203263,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
