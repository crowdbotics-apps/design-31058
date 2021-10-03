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
      <View style={styles.View_1_1366}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff68/3643/b35d0d167d79c0899d2959aaab9fc53c"
          }}
          style={styles.ImageBackground_1_1367}
        />
        <View style={styles.View_1_1368}>
          <View style={styles.View_1_1369} />
          <View style={styles.View_1_1370} />
          <View style={styles.View_1_1371} />
          <View style={styles.View_1_1372} />
          <View style={styles.View_1_1373} />
          <View style={styles.View_1_1374} />
          <View style={styles.View_1_1375}>
            <View style={styles.View_1_1376}>
              <Text style={styles.Text_1_1376}>Begging</Text>
            </View>
          </View>
          <View style={styles.View_1_1377}>
            <View style={styles.View_1_1378}>
              <View style={styles.View_1_1379}>
                <Text style={styles.Text_1_1379}>Chewing</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_1_1380}>
            <View style={styles.View_1_1381}>
              <View style={styles.View_1_1382}>
                <Text style={styles.Text_1_1382}>Barking</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_1_1383}>
            <View style={styles.View_1_1384}>
              <View style={styles.View_1_1385}>
                <Text style={styles.Text_1_1385}>Digging</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_1_1386}>
            <View style={styles.View_1_1387}>
              <Text style={styles.Text_1_1387}>Chasing</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2dc9/944c/eb3e1b525ff856ab557a23ccf45903ad"
              }}
              style={styles.ImageBackground_1_1388}
            />
          </View>
          <View style={styles.View_1_1389}>
            <View style={styles.View_1_1390}>
              <View style={styles.View_1_1391}>
                <Text style={styles.Text_1_1391}>Barking</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5223/476e/951f07ebe100272649f3e7188d409c84"
                }}
                style={styles.ImageBackground_1_1392}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1_1355}>
        <View style={styles.View_1_1356}>
          <Text style={styles.Text_1_1356}>We’d love your pet</Text>
        </View>
        <View style={styles.View_1_1357}>
          <Text style={styles.Text_1_1357}>
            Tell us something about your dog
          </Text>
        </View>
      </View>
      <View style={styles.View_1_1358}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd4c/3f28/00cc58b9b3a5d43141ffdb4f0454e5d4"
          }}
          style={styles.ImageBackground_1_1359}
        />
        <View style={styles.View_1_1362}>
          <Text style={styles.Text_1_1362}>4/10</Text>
        </View>
      </View>
      <View style={styles.View_1_1363}>
        <Text style={styles.Text_1_1363}>Bad habits</Text>
      </View>
      <View style={styles.View_1_1364}>
        <View style={styles.View_1_1365}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/758a/9bd8/26b322c5409a77f38cd191d13f0b1f58"
            }}
            style={styles.ImageBackground_I1_1365_0_3972}
          />
        </View>
      </View>
      <View style={styles.View_1_1393}>
        <View style={styles.View_1_1394}>
          <View style={styles.View_1_1395}>
            <View style={styles.View_1_1396} />
            <View style={styles.View_1_1397} />
            <View style={styles.View_1_1398}>
              <Text style={styles.Text_1_1398}>Get started</Text>
            </View>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8cd9/3278/560cc4bd71f66abcbe76b385ce05ab32"
        }}
        style={styles.ImageBackground_1_1399}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78c8/5456/914fac8928d11cdef261ec6e917a8287"
        }}
        style={styles.ImageBackground_1_1400}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0404/418f/73a769b4571666fcb152fcc825dfe730"
        }}
        style={styles.ImageBackground_1_1401}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8d66/32b9/5e7dcb73bb16bd220ccaea9c1a11d79c"
        }}
        style={styles.ImageBackground_1_1402}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(22, 22, 22, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_1_1366: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("71.72131147540983%"),
    minHeight: hp("71.72131147540983%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("39.61748633879781%")
  },
  ImageBackground_1_1367: {
    width: wp("37.6%"),
    minWidth: wp("37.6%"),
    height: hp("7.377049180327869%"),
    minHeight: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.93333333333334%"),
    top: hp("39.61748633879781%")
  },
  View_1_1368: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("71.72131147540983%"),
    minHeight: hp("71.72131147540983%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1369: {
    width: wp("43.46666666666666%"),
    minWidth: wp("43.46666666666666%"),
    height: hp("22.26775956284153%"),
    minHeight: hp("22.26775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(65, 65, 67, 1)"
  },
  View_1_1370: {
    width: wp("43.46666666666666%"),
    minWidth: wp("43.46666666666666%"),
    height: hp("22.26775956284153%"),
    minHeight: hp("22.26775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("24.72677595628415%"),
    backgroundColor: "rgba(65, 65, 67, 1)"
  },
  View_1_1371: {
    width: wp("43.46666666666666%"),
    minWidth: wp("43.46666666666666%"),
    height: hp("22.26775956284153%"),
    minHeight: hp("22.26775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("49.45355191256831%"),
    backgroundColor: "rgba(65, 65, 67, 1)"
  },
  View_1_1372: {
    width: wp("43.46666666666666%"),
    minWidth: wp("43.46666666666666%"),
    height: hp("22.26775956284153%"),
    minHeight: hp("22.26775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.99999999999999%"),
    top: hp("0%"),
    backgroundColor: "rgba(65, 65, 67, 1)"
  },
  View_1_1373: {
    width: wp("43.46666666666666%"),
    minWidth: wp("43.46666666666666%"),
    height: hp("22.26775956284153%"),
    minHeight: hp("22.26775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.99999999999999%"),
    top: hp("24.72677595628415%"),
    backgroundColor: "rgba(65, 65, 67, 1)",
    borderColor: "rgba(251, 114, 76, 1)",
    borderWidth: 1.5
  },
  View_1_1374: {
    width: wp("43.46666666666666%"),
    minWidth: wp("43.46666666666666%"),
    height: hp("22.26775956284153%"),
    minHeight: hp("22.26775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.99999999999999%"),
    top: hp("49.45355191256831%"),
    backgroundColor: "rgba(65, 65, 67, 1)"
  },
  View_1_1375: {
    width: wp("18.933333333333334%"),
    minWidth: wp("18.933333333333334%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.266666666666666%"),
    top: hp("37.704918032786885%")
  },
  View_1_1376: {
    width: wp("18.933333333333334%"),
    minWidth: wp("18.933333333333334%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_1376: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.06969999939203263,
    textTransform: "none"
  },
  View_1_1377: {
    width: wp("20.266666666666666%"),
    minWidth: wp("20.266666666666666%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.733333333333334%"),
    top: hp("12.704918032786885%")
  },
  View_1_1378: {
    width: wp("20.266666666666666%"),
    minWidth: wp("20.266666666666666%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1379: {
    width: wp("20.266666666666666%"),
    minWidth: wp("20.266666666666666%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_1379: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.06969999939203263,
    textTransform: "none"
  },
  View_1_1380: {
    width: wp("17.333333333333336%"),
    minWidth: wp("17.333333333333336%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333332%"),
    top: hp("12.688842106386616%")
  },
  View_1_1381: {
    width: wp("17.333333333333336%"),
    minWidth: wp("17.333333333333336%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1382: {
    width: wp("17.333333333333336%"),
    minWidth: wp("17.333333333333336%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_1382: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.06969999939203263,
    textTransform: "none"
  },
  View_1_1383: {
    width: wp("17.866666666666667%"),
    minWidth: wp("17.866666666666667%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.8%"),
    top: hp("37.704918032786885%")
  },
  View_1_1384: {
    width: wp("17.866666666666667%"),
    minWidth: wp("17.866666666666667%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1385: {
    width: wp("17.866666666666667%"),
    minWidth: wp("17.866666666666667%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_1385: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.06969999939203263,
    textTransform: "none"
  },
  View_1_1386: {
    width: wp("19.2%"),
    minWidth: wp("19.2%"),
    height: hp("9.836065573770492%"),
    minHeight: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.266666666666666%"),
    top: hp("56.557377049180324%")
  },
  View_1_1387: {
    width: wp("19.2%"),
    minWidth: wp("19.2%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.284153005464475%"),
    justifyContent: "flex-start"
  },
  Text_1_1387: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.06969999939203263,
    textTransform: "none"
  },
  ImageBackground_1_1388: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666669%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_1_1389: {
    width: wp("17.333333333333336%"),
    minWidth: wp("17.333333333333336%"),
    height: hp("9.972677595628415%"),
    minHeight: hp("9.972677595628415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.06666666666666%"),
    top: hp("56.557377049180324%")
  },
  View_1_1390: {
    width: wp("17.333333333333336%"),
    minWidth: wp("17.333333333333336%"),
    height: hp("9.972677595628415%"),
    minHeight: hp("9.972677595628415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1391: {
    width: wp("17.333333333333336%"),
    minWidth: wp("17.333333333333336%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.420765027322403%"),
    justifyContent: "flex-start"
  },
  Text_1_1391: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.06969999939203263,
    textTransform: "none"
  },
  ImageBackground_1_1392: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666686%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_1_1355: {
    width: wp("87.73333333333333%"),
    minWidth: wp("87.73333333333333%"),
    height: hp("10.51912568306011%"),
    minHeight: hp("10.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("11.612021857923498%")
  },
  View_1_1356: {
    width: wp("87.73333333333333%"),
    minWidth: wp("87.73333333333333%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_1356: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 27,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.13939999878406525,
    textTransform: "none"
  },
  View_1_1357: {
    width: wp("84.26666666666667%"),
    minWidth: wp("84.26666666666667%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.967213114754099%"),
    justifyContent: "flex-start"
  },
  Text_1_1357: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.06969999939203263,
    textTransform: "none"
  },
  View_1_1358: {
    width: wp("91.47288411458334%"),
    minWidth: wp("91.47288411458334%"),
    height: hp("4.508196721311475%"),
    minHeight: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("25.136612021857925%")
  },
  ImageBackground_1_1359: {
    width: wp("91.47288411458334%"),
    minWidth: wp("91.47288411458334%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.508196721311474%")
  },
  View_1_1362: {
    width: wp("7.466666666666668%"),
    minWidth: wp("7.466666666666668%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_1362: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.05329999953508378,
    textTransform: "none"
  },
  View_1_1363: {
    width: wp("84.26666666666667%"),
    minWidth: wp("84.26666666666667%"),
    minHeight: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("32.650273224043715%"),
    justifyContent: "flex-start"
  },
  Text_1_1363: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.0901999992132187,
    textTransform: "none"
  },
  View_1_1364: {
    width: wp("7.466666666666668%"),
    minWidth: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("4.781420765027322%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1365: {
    width: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1_1365_0_3972: {
    flexGrow: 1,
    width: wp("4.666731770833334%"),
    height: hp("1.9203769704683231%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3221516927083332%"),
    top: hp("0.9960820766094605%")
  },
  View_1_1393: {
    width: wp("81.33333333333333%"),
    minWidth: wp("81.33333333333333%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.333333333333334%"),
    top: hp("99.04371584699454%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1394: {
    width: wp("81.33333333333333%"),
    minWidth: wp("81.33333333333333%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1395: {
    width: wp("81.33333333333333%"),
    minWidth: wp("81.33333333333333%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1396: {
    width: wp("71.73333333333333%"),
    minWidth: wp("71.73333333333333%"),
    height: hp("4.508196721311475%"),
    minHeight: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.800000000000001%"),
    top: hp("3.4153005464480657%")
  },
  View_1_1397: {
    width: wp("81.33333333333333%"),
    minWidth: wp("81.33333333333333%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1398: {
    width: wp("26.13333333333333%"),
    minWidth: wp("26.13333333333333%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.46666666666666%"),
    top: hp("2.1857923497267677%"),
    justifyContent: "flex-start"
  },
  Text_1_1398: {
    color: "rgba(231, 231, 233, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.06969999939203263,
    textTransform: "none"
  },
  ImageBackground_1_1399: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.8%"),
    top: hp("45.49180327868852%"),
    resizeMode: "cover"
  },
  ImageBackground_1_1400: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.8%"),
    top: hp("45.49180327868852%"),
    resizeMode: "cover"
  },
  ImageBackground_1_1401: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.533333333333335%"),
    top: hp("70.21857923497268%"),
    resizeMode: "cover"
  },
  ImageBackground_1_1402: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.53333333333333%"),
    top: hp("70.21857923497268%"),
    resizeMode: "cover"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
