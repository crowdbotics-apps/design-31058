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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bf0e/5222/a6dd0f1324c281e3fd85114fc89ee233"
        }}
        style={styles.ImageBackground_53_921}
      />
      <View style={styles.View_53_923}>
        <View style={styles.View_I53_923_1_1071} />
        <View style={styles.View_I53_923_11_1548}>
          <View style={styles.View_I53_923_1_1074}>
            <Text style={styles.Text_I53_923_1_1074}>Time</Text>
          </View>
          <View style={styles.View_I53_923_1_1073}>
            <Text style={styles.Text_I53_923_1_1073}>00:45:33</Text>
          </View>
        </View>
        <View style={styles.View_I53_923_11_1547}>
          <View style={styles.View_I53_923_1_1077}>
            <Text style={styles.Text_I53_923_1_1077}>Distance</Text>
          </View>
          <View style={styles.View_I53_923_1_1076}>
            <Text style={styles.Text_I53_923_1_1076}>1.5 km</Text>
          </View>
        </View>
        <View style={styles.View_I53_923_11_1549}>
          <View style={styles.View_I53_923_11_1549_1_1082} />
        </View>
        <View style={styles.View_I53_923_1_1094}>
          <Text style={styles.Text_I53_923_1_1094}>END</Text>
        </View>
      </View>
      <View style={styles.View_53_924}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4689/3d72/736a1f3c5c74913ea05023d199142406"
          }}
          style={styles.ImageBackground_I53_924_1_1095}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b0cb/654f/5ef4b9d3c76356e5d6440f2c3bc02419"
          }}
          style={styles.ImageBackground_I53_924_11_1552}
        />
        <View style={styles.View_I53_924_1_1100}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8404/72b2/77f6489b583e2e9528013dacdb5c46c0"
            }}
            style={styles.ImageBackground_I53_924_1_1101}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/20a2/4217/46fb697085f3c814f9fc7913f921a78d"
            }}
            style={styles.ImageBackground_I53_924_1_1102}
          />
        </View>
        <View style={styles.View_I53_924_1_1104}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8404/72b2/77f6489b583e2e9528013dacdb5c46c0"
            }}
            style={styles.ImageBackground_I53_924_1_1105}
          />
          <View style={styles.View_I53_924_1_1107}>
            <View style={styles.View_I53_924_1_1108}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/103c/fa03/18bae106912d641292433473a737f5b3"
                }}
                style={styles.ImageBackground_I53_924_1_1109}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_53_995}>
        <View style={styles.View_53_964}>
          <View style={styles.View_I53_964_11_263} />
          <View style={styles.View_I53_964_11_264} />
        </View>
        <View style={styles.View_53_979}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4f18/f57a/456ed0405eea5d4f20d49c99b6192b38"
            }}
            style={styles.ImageBackground_53_980}
          />
        </View>
        <View style={styles.View_53_988}>
          <View style={styles.View_53_989}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0519/9ed4/f7c894a5933726f9c57f90c929e42b0b"
              }}
              style={styles.ImageBackground_I53_989_0_3972}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_53_994}>
        <Text style={styles.Text_53_994}>Map</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(22, 22, 22, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  ImageBackground_53_921: {
    width: wp("869.0666666666667%"),
    height: hp("406.28415300546453%"),
    top: hp("-138.79781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-549.8666666666667%")
  },
  View_53_923: {
    width: wp("88.26666666666667%"),
    minWidth: wp("88.26666666666667%"),
    height: hp("21.85792349726776%"),
    minHeight: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.866666666666666%"),
    top: hp("86.20218579234972%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I53_923_1_1071: {
    flexGrow: 1,
    width: wp("88.26666666666667%"),
    height: hp("15.573770491803279%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.284153005464475%"),
    backgroundColor: "rgba(56, 56, 56, 1)"
  },
  View_I53_923_11_1548: {
    flexGrow: 1,
    width: wp("20%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.866666666666666%"),
    top: hp("11.06557377049181%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I53_923_1_1074: {
    width: wp("8.799999999999999%"),
    minWidth: wp("8.799999999999999%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I53_923_1_1074: {
    color: "rgba(177, 177, 184, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.05329999953508378,
    textTransform: "none"
  },
  View_I53_923_1_1073: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.7322404371584668%"),
    justifyContent: "flex-start"
  },
  Text_I53_923_1_1073: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.06969999939203263,
    textTransform: "none"
  },
  View_I53_923_11_1547: {
    flexGrow: 1,
    width: wp("15.466666666666667%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.4%"),
    top: hp("11.06557377049181%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I53_923_1_1077: {
    width: wp("15.466666666666667%"),
    minWidth: wp("15.466666666666667%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I53_923_1_1077: {
    color: "rgba(177, 177, 184, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.05329999953508378,
    textTransform: "none"
  },
  View_I53_923_1_1076: {
    width: wp("14.666666666666666%"),
    minWidth: wp("14.666666666666666%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.7322404371584668%"),
    justifyContent: "flex-start"
  },
  Text_I53_923_1_1076: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.06969999939203263,
    textTransform: "none"
  },
  View_I53_923_11_1549: {
    flexGrow: 1,
    width: wp("23.5%"),
    height: hp("12.038934426229508%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.266666666666666%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I53_923_11_1549_1_1082: {
    flexGrow: 1,
    width: wp("7.5%"),
    height: hp("3.8422131147540983%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("4.098360655737707%"),
    backgroundColor: "rgba(252, 252, 252, 1)"
  },
  View_I53_923_1_1094: {
    flexGrow: 1,
    width: wp("13.066666666666665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.599999999999994%"),
    top: hp("14.89071038251366%"),
    justifyContent: "flex-start"
  },
  Text_I53_923_1_1094: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.09839999914169312,
    textTransform: "none"
  },
  View_53_924: {
    width: wp("104.26666666666667%"),
    minWidth: wp("104.26666666666667%"),
    height: hp("31.010928961748636%"),
    minHeight: hp("31.010928961748636%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.866666666666667%"),
    top: hp("23.770491803278688%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I53_924_1_1095: {
    flexGrow: 1,
    width: wp("90.4%"),
    height: hp("29.030054644808743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.866666666666665%"),
    top: hp("0%")
  },
  ImageBackground_I53_924_11_1552: {
    flexGrow: 1,
    width: wp("27.73333333333333%"),
    height: hp("14.207650273224044%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.00546448087432%")
  },
  View_I53_924_1_1100: {
    flexGrow: 1,
    width: wp("13.866666666666665%"),
    height: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.4%"),
    top: hp("11.20218579234973%")
  },
  ImageBackground_I53_924_1_1101: {
    width: wp("13.866666666666665%"),
    height: hp("7.103825136612022%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I53_924_1_1102: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("2.0491803278688536%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666666%")
  },
  View_I53_924_1_1104: {
    flexGrow: 1,
    width: wp("13.866666666666665%"),
    height: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.799999999999997%"),
    top: hp("23.90710382513661%")
  },
  ImageBackground_I53_924_1_1105: {
    width: wp("13.866666666666665%"),
    height: hp("7.103825136612022%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I53_924_1_1107: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("2.185792349726782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I53_924_1_1108: {
    width: wp("3.8170247395833337%"),
    height: hp("2.73224043715847%"),
    top: hp("0.00005002881659521563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7581705729166686%")
  },
  ImageBackground_I53_924_1_1109: {
    width: wp("3.8170247395833337%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_53_995: {
    width: wp("91.2%"),
    minWidth: wp("91.2%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333333%"),
    top: hp("2.185792349726776%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_53_964: {
    flexGrow: 1,
    width: wp("91.2%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I53_964_11_263: {
    flexGrow: 1,
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(56, 56, 56, 1)"
  },
  View_I53_964_11_264: {
    flexGrow: 1,
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.46666666666667%"),
    top: hp("0%"),
    backgroundColor: "rgba(56, 56, 56, 1)"
  },
  View_53_979: {
    flexGrow: 1,
    width: wp("4.44443359375%"),
    height: hp("2.276865641276042%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.2%"),
    top: hp("1.9125683060109284%")
  },
  ImageBackground_53_980: {
    width: wp("4.44443359375%"),
    height: hp("2.276865641276042%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_53_988: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2%"),
    top: hp("1.5027322404371581%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_53_989: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I53_989_0_3972: {
    flexGrow: 1,
    width: wp("3.3333821614583337%"),
    height: hp("1.371698431629952%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9444010416666666%"),
    top: hp("0.7114848152535855%")
  },
  View_53_994: {
    width: wp("10.4%"),
    top: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.06666666666666%"),
    justifyContent: "flex-start"
  },
  Text_53_994: {
    color: "rgba(239, 239, 239, 1)",
    fontSize: 14,
    fontWeight: "700",
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
