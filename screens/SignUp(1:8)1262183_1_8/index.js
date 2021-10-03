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
      <View style={styles.View_1_9} />
      <View style={styles.View_2_2}>
        <View style={styles.View_1_10}>
          <View style={styles.View_1_11}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/635a/84ce/6a43efdda4b1bace5ca9808bb98b1934"
              }}
              style={styles.ImageBackground_I1_11_0_3972}
            />
          </View>
        </View>
        <View style={styles.View_1_12}>
          <View style={styles.View_1_13}>
            <Text style={styles.Text_1_13}>Let’s start here</Text>
          </View>
          <View style={styles.View_1_14}>
            <Text style={styles.Text_1_14}>Fill in your details to begin</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1_15}>
        <View style={styles.View_1_41}>
          <View style={styles.View_1_42}>
            <View style={styles.View_1_43}>
              <Text style={styles.Text_1_43}>Fullname</Text>
            </View>
            <View style={styles.View_1_44}>
              <Text style={styles.Text_1_44}>Cristian</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_1_16}>
          <View style={styles.View_1_17}>
            <View style={styles.View_1_18}>
              <Text style={styles.Text_1_18}>E-mail</Text>
            </View>
            <View style={styles.View_1_19}>
              <Text style={styles.Text_1_19}>Cristiandeb13@gmail.com</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_1_20}>
          <View style={styles.View_1_21}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a20/c95a/7bed2613c7f65072f782804a618fda5a"
              }}
              style={styles.ImageBackground_1_22}
            />
            <View style={styles.View_1_32}>
              <View style={styles.View_1_33}>
                <Text style={styles.Text_1_33}>Password</Text>
              </View>
            </View>
            <View style={styles.View_1_34}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7bf6/5cf7/495882f01bd00f201131a88fb3aefde0"
                }}
                style={styles.ImageBackground_1_35}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1_66}>
        <Text style={styles.Text_1_66}>
          By signing in, I agree with Terms of Use and Privacy Policy
        </Text>
      </View>
      <View style={styles.View_2_4}>
        <View style={styles.View_1_46}>
          <View style={styles.View_1_47}>
            <View style={styles.View_1_48}>
              <View style={styles.View_1_49} />
              <View style={styles.View_1_50}>
                <Text style={styles.Text_1_50}>Sign up</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_1_67}>
          <Text style={styles.Text_1_67}>or</Text>
        </View>
        <View style={styles.View_2_3}>
          <View style={styles.View_1_59}>
            <View style={styles.View_1_60} />
            <View style={styles.View_1_61}>
              <Text style={styles.Text_1_61}> Connect with Facebook</Text>
            </View>
            <View style={styles.View_1_62}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7dd9/83cf/0dff9b0ce9107c92b905c6fc59ecd7bb"
                }}
                style={styles.ImageBackground_1_63}
              />
            </View>
          </View>
          <View style={styles.View_1_51}>
            <View style={styles.View_1_52}>
              <View style={styles.View_1_53}>
                <View style={styles.View_1_54} />
                <View style={styles.View_1_55}>
                  <View style={styles.View_1_56}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3338/58b0/d28032558a7a060c3cf2aff6c91ed839"
                      }}
                      style={styles.ImageBackground_1_57}
                    />
                  </View>
                </View>
                <View style={styles.View_1_58}>
                  <Text style={styles.Text_1_58}> Connect with Google</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(252, 252, 252, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_1_9: {
    width: wp("35.733333333333334%"),
    height: hp("0.4098360655737705%"),
    minHeight: hp("0.4098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.266666666666666%"),
    top: hp("109.28961748633881%"),
    backgroundColor: "rgba(43, 43, 43, 1)"
  },
  View_2_2: {
    width: wp("70.39999999999999%"),
    minWidth: wp("70.39999999999999%"),
    height: hp("17.349726775956285%"),
    minHeight: hp("17.349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("6.147540983606557%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_10: {
    width: wp("7.466666666666668%"),
    minWidth: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_11: {
    width: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1_11_0_3972: {
    flexGrow: 1,
    width: wp("4.666731770833334%"),
    height: hp("1.9203728014002732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3221516927083332%"),
    top: hp("0.9960737384733607%")
  },
  View_1_12: {
    width: wp("70.39999999999999%"),
    minWidth: wp("70.39999999999999%"),
    height: hp("10.51912568306011%"),
    minHeight: hp("10.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.830601092896176%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_13: {
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
  Text_1_13: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 27,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.13939999878406525,
    textTransform: "none"
  },
  View_1_14: {
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
  Text_1_14: {
    color: "rgba(122, 122, 122, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.06969999939203263,
    textTransform: "none"
  },
  View_1_15: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("30.327868852459016%"),
    minHeight: hp("30.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.733333333333334%"),
    top: hp("26.50273224043716%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_41: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(240, 240, 240, 1)"
  },
  View_1_42: {
    width: wp("17.866666666666667%"),
    minWidth: wp("17.866666666666667%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666666%"),
    top: hp("1.0928961748633839%")
  },
  View_1_43: {
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
  Text_1_43: {
    color: "rgba(174, 174, 178, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_1_44: {
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
  Text_1_44: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.06969999939203263,
    textTransform: "none"
  },
  View_1_16: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11.202185792349724%"),
    backgroundColor: "rgba(240, 240, 240, 1)"
  },
  View_1_17: {
    width: wp("60%"),
    minWidth: wp("60%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666666%"),
    top: hp("1.0928961748633839%")
  },
  View_1_18: {
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
  Text_1_18: {
    color: "rgba(174, 174, 178, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_1_19: {
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
  Text_1_19: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.06969999939203263,
    textTransform: "none"
  },
  View_1_20: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22.404371584699447%"),
    backgroundColor: "rgba(240, 240, 240, 1)"
  },
  View_1_21: {
    width: wp("81.06666666666666%"),
    minWidth: wp("81.06666666666666%"),
    height: hp("4.2349726775956285%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666666%"),
    top: hp("1.5027322404371546%")
  },
  ImageBackground_1_22: {
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
  View_1_32: {
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
  View_1_33: {
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
  Text_1_33: {
    color: "rgba(174, 174, 178, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_1_34: {
    width: wp("5.333333333333334%"),
    height: hp("2.2009677574282787%"),
    top: hp("1.4025411970628454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.73333333333333%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_35: {
    width: wp("4.111116536458334%"),
    height: hp("1.446599908213798%"),
    top: hp("0.3897244813012364%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6110188802083343%")
  },
  View_1_66: {
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
  Text_1_66: {
    color: "rgba(142, 142, 147, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.05329999953508378,
    textTransform: "none"
  },
  View_2_4: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("31.693989071038253%"),
    minHeight: hp("31.693989071038253%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("59.83606557377049%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_46: {
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
  View_1_47: {
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
  View_1_48: {
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
  View_1_49: {
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
  View_1_50: {
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
  Text_1_50: {
    color: "rgba(246, 247, 250, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.06969999939203263,
    textTransform: "none"
  },
  View_1_67: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.33333333333333%"),
    top: hp("9.289617486338791%"),
    justifyContent: "flex-start"
  },
  Text_1_67: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.06969999939203263,
    textTransform: "none"
  },
  View_2_3: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("17.48633879781421%"),
    minHeight: hp("17.48633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14.207650273224054%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_59: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_60: {
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
  View_1_61: {
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
  Text_1_61: {
    color: "rgba(246, 247, 250, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.06969999939203263,
    textTransform: "none"
  },
  View_1_62: {
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
  ImageBackground_1_63: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_51: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.56284153005464%")
  },
  View_1_52: {
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
  View_1_53: {
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
  View_1_54: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(176, 176, 176, 1)",
    borderWidth: 1
  },
  View_1_55: {
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
  View_1_56: {
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
  ImageBackground_1_57: {
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
  View_1_58: {
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
  Text_1_58: {
    color: "rgba(43, 43, 43, 1)",
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
