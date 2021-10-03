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
      <View style={styles.View_11_1540}>
        <View style={styles.View_11_1523}>
          <View style={styles.View_1_976}>
            <Text style={styles.Text_1_976}>Walk planning</Text>
          </View>
          <View style={styles.View_1_977}>
            <Text style={styles.Text_1_977}>Fill in some details</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_11_1524}>
        <View style={styles.View_1_980}>
          <View style={styles.View_1_981}>
            <View style={styles.View_1_982}>
              <Text style={styles.Text_1_982}>March 2021</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_1_983}>
          <View style={styles.View_1_984} />
          <View style={styles.View_1_985} />
          <View style={styles.View_1_986} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/73af/f7fb/666e8ed16b677de644de7ed01720ce34"
          }}
          style={styles.ImageBackground_1_987}
        />
        <View style={styles.View_1_989}>
          <Text style={styles.Text_1_989}>Select dates</Text>
        </View>
        <View style={styles.View_1_990}>
          <View style={styles.View_1_991}>
            <View style={styles.View_1_992}>
              <Text style={styles.Text_1_992}>S</Text>
            </View>
            <View style={styles.View_1_993}>
              <Text style={styles.Text_1_993}>M</Text>
            </View>
            <View style={styles.View_1_994}>
              <Text style={styles.Text_1_994}>T</Text>
            </View>
            <View style={styles.View_1_995}>
              <Text style={styles.Text_1_995}>W</Text>
            </View>
            <View style={styles.View_1_996}>
              <Text style={styles.Text_1_996}>T</Text>
            </View>
            <View style={styles.View_1_997}>
              <Text style={styles.Text_1_997}>F</Text>
            </View>
            <View style={styles.View_1_998}>
              <Text style={styles.Text_1_998}>S</Text>
            </View>
            <View style={styles.View_1_999}>
              <Text style={styles.Text_1_999}>1</Text>
            </View>
            <View style={styles.View_1_1000}>
              <Text style={styles.Text_1_1000}>2</Text>
            </View>
            <View style={styles.View_1_1001}>
              <Text style={styles.Text_1_1001}>3</Text>
            </View>
            <View style={styles.View_1_1002}>
              <Text style={styles.Text_1_1002}>4</Text>
            </View>
            <View style={styles.View_1_1003}>
              <Text style={styles.Text_1_1003}>5</Text>
            </View>
            <View style={styles.View_1_1004}>
              <Text style={styles.Text_1_1004}>6</Text>
            </View>
            <View style={styles.View_1_1005}>
              <Text style={styles.Text_1_1005}>7</Text>
            </View>
            <View style={styles.View_1_1006}>
              <Text style={styles.Text_1_1006}>8</Text>
            </View>
            <View style={styles.View_1_1007}>
              <Text style={styles.Text_1_1007}>9</Text>
            </View>
            <View style={styles.View_1_1008}>
              <Text style={styles.Text_1_1008}>10</Text>
            </View>
            <View style={styles.View_1_1009}>
              <Text style={styles.Text_1_1009}>11</Text>
            </View>
            <View style={styles.View_1_1010}>
              <Text style={styles.Text_1_1010}>12</Text>
            </View>
            <View style={styles.View_1_1011}>
              <Text style={styles.Text_1_1011}>13</Text>
            </View>
            <View style={styles.View_1_1012}>
              <Text style={styles.Text_1_1012}>14</Text>
            </View>
            <View style={styles.View_1_1013}>
              <Text style={styles.Text_1_1013}>15</Text>
            </View>
            <View style={styles.View_1_1014}>
              <Text style={styles.Text_1_1014}>16</Text>
            </View>
            <View style={styles.View_1_1015}>
              <Text style={styles.Text_1_1015}>17</Text>
            </View>
            <View style={styles.View_1_1016}>
              <Text style={styles.Text_1_1016}>18</Text>
            </View>
            <View style={styles.View_1_1017}>
              <Text style={styles.Text_1_1017}>19</Text>
            </View>
            <View style={styles.View_1_1018}>
              <Text style={styles.Text_1_1018}>20</Text>
            </View>
            <View style={styles.View_1_1019}>
              <Text style={styles.Text_1_1019}>21</Text>
            </View>
            <View style={styles.View_1_1020}>
              <Text style={styles.Text_1_1020}>22</Text>
            </View>
            <View style={styles.View_1_1021}>
              <Text style={styles.Text_1_1021}>23</Text>
            </View>
            <View style={styles.View_1_1022}>
              <Text style={styles.Text_1_1022}>24</Text>
            </View>
            <View style={styles.View_1_1023}>
              <Text style={styles.Text_1_1023}>25</Text>
            </View>
            <View style={styles.View_1_1024}>
              <Text style={styles.Text_1_1024}>26</Text>
            </View>
            <View style={styles.View_1_1025}>
              <Text style={styles.Text_1_1025}>27</Text>
            </View>
            <View style={styles.View_1_1026}>
              <Text style={styles.Text_1_1026}>28</Text>
            </View>
            <View style={styles.View_1_1027}>
              <Text style={styles.Text_1_1027}>29</Text>
            </View>
            <View style={styles.View_1_1028}>
              <Text style={styles.Text_1_1028}>30</Text>
            </View>
            <View style={styles.View_1_1029}>
              <Text style={styles.Text_1_1029}>27</Text>
            </View>
            <View style={styles.View_1_1030}>
              <Text style={styles.Text_1_1030}>28</Text>
            </View>
            <View style={styles.View_1_1031}>
              <Text style={styles.Text_1_1031}>29</Text>
            </View>
            <View style={styles.View_1_1032}>
              <Text style={styles.Text_1_1032}>30</Text>
            </View>
            <View style={styles.View_1_1033}>
              <Text style={styles.Text_1_1033}>31</Text>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d707/9595/33ebb08b8748309849774ebda66d3a30"
          }}
          style={styles.ImageBackground_1_1034}
        />
      </View>
      <View style={styles.View_1_1036}>
        <View style={styles.View_1_1037}>
          <View style={styles.View_1_1038}>
            <View style={styles.View_1_1039} />
            <View style={styles.View_1_1040} />
            <View style={styles.View_1_1041}>
              <Text style={styles.Text_1_1041}>Pay</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_11_1538}>
        <View style={styles.View_1_1045}>
          <Text style={styles.Text_1_1045}>Walking time</Text>
        </View>
        <View style={styles.View_1_1046}>
          <Text style={styles.Text_1_1046}>7:30</Text>
        </View>
      </View>
      <View style={styles.View_11_1529}>
        <View style={styles.View_1_1042}>
          <Text style={styles.Text_1_1042}>Number of walks</Text>
        </View>
        <View style={styles.View_11_1528}>
          <View style={styles.View_I11_1528_1_1043}>
            <Text style={styles.Text_I11_1528_1_1043}>4</Text>
          </View>
          <View style={styles.View_I11_1528_11_1526}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2df8/b17b/a9395f04e6b7f06cd3e132a56c5d580e"
              }}
              style={styles.ImageBackground_I11_1528_1_1049}
            />
          </View>
          <View style={styles.View_I11_1528_11_1525}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8720/6cfa/9399ebcd0b7f13579b27081207500b2e"
              }}
              style={styles.ImageBackground_I11_1528_1_1052}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_11_1539}>
        <View style={styles.View_1_1055}>
          <Text style={styles.Text_1_1055}>Walk duration</Text>
        </View>
        <View style={styles.View_1_1056}>
          <View style={styles.View_1_1057}>
            <Text style={styles.Text_1_1057}>45 min</Text>
          </View>
          <View style={styles.View_1_1058} />
          <View style={styles.View_1_1059} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2df8/b17b/a9395f04e6b7f06cd3e132a56c5d580e"
            }}
            style={styles.ImageBackground_1_1060}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8720/6cfa/9399ebcd0b7f13579b27081207500b2e"
            }}
            style={styles.ImageBackground_1_1063}
          />
        </View>
      </View>
      <View style={styles.View_1_1065}>
        <View style={styles.View_1_1066}>
          <View style={styles.View_1_1067} />
          <View style={styles.View_1_1068}>
            <Text style={styles.Text_1_1068}>Cancel</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(252, 252, 252, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_11_1540: {
    width: wp("77.06666666666668%"),
    minWidth: wp("77.06666666666668%"),
    height: hp("10.51912568306011%"),
    minHeight: hp("10.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("6.147540983606557%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_11_1523: {
    flexGrow: 1,
    width: wp("77.06666666666668%"),
    height: hp("10.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_976: {
    width: wp("77.06666666666668%"),
    minWidth: wp("77.06666666666668%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_976: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 27,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.13939999878406525,
    textTransform: "none"
  },
  View_1_977: {
    width: wp("45.33333333333333%"),
    minWidth: wp("45.33333333333333%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.967213114754099%"),
    justifyContent: "flex-start"
  },
  Text_1_977: {
    color: "rgba(171, 171, 181, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.06969999939203263,
    textTransform: "none"
  },
  View_11_1524: {
    width: wp("93.87630208333333%"),
    minWidth: wp("93.87630208333333%"),
    height: hp("34.46571892076503%"),
    minHeight: hp("34.46571892076503%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("23.770491803278688%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_980: {
    flexGrow: 1,
    width: wp("25.6%"),
    height: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.06666666666666%"),
    top: hp("0%")
  },
  View_1_981: {
    width: wp("25.6%"),
    height: hp("3.551912568306011%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_982: {
    width: wp("25.6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_982: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_983: {
    flexGrow: 1,
    width: wp("51.46666666666667%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.06666666666667%"),
    top: hp("21.174863387978142%")
  },
  View_1_984: {
    width: wp("43.733333333333334%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.93333333333333%"),
    backgroundColor: "rgba(251, 114, 76, 1)"
  },
  View_1_985: {
    width: wp("8%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(251, 114, 76, 1)"
  },
  View_1_986: {
    width: wp("8%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.46666666666666%"),
    backgroundColor: "rgba(251, 114, 76, 1)"
  },
  ImageBackground_1_987: {
    flexGrow: 1,
    width: wp("3.4666666666666663%"),
    height: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.8%"),
    top: hp("0.8196721311475414%")
  },
  View_1_989: {
    flexGrow: 1,
    width: wp("28.000000000000004%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_989: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.06969999939203263,
    textTransform: "none"
  },
  View_1_990: {
    flexGrow: 1,
    width: wp("93.87630208333333%"),
    height: hp("26.815445696721312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.650273224043719%")
  },
  View_1_991: {
    width: wp("93.87630208333333%"),
    height: hp("26.815445696721312%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_992: {
    width: wp("3.2331380208333336%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.333333333333334%"),
    justifyContent: "flex-start"
  },
  Text_1_992: {
    color: "rgba(251, 114, 76, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_993: {
    width: wp("4.526399739583333%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.466666666666669%"),
    justifyContent: "flex-start"
  },
  Text_1_993: {
    color: "rgba(251, 114, 76, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_994: {
    width: wp("2.9098307291666665%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.93333333333333%"),
    justifyContent: "flex-start"
  },
  Text_1_994: {
    color: "rgba(251, 114, 76, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_995: {
    width: wp("4.84970703125%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.266666666666666%"),
    justifyContent: "flex-start"
  },
  Text_1_995: {
    color: "rgba(251, 114, 76, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_996: {
    width: wp("2.9098307291666665%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    justifyContent: "flex-start"
  },
  Text_1_996: {
    color: "rgba(251, 114, 76, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_997: {
    width: wp("2.5865234375%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.93333333333334%"),
    justifyContent: "flex-start"
  },
  Text_1_997: {
    color: "rgba(251, 114, 76, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_998: {
    width: wp("3.2331380208333336%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.06666666666666%"),
    justifyContent: "flex-start"
  },
  Text_1_998: {
    color: "rgba(251, 114, 76, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_999: {
    width: wp("1.9398763020833334%"),
    top: hp("4.442558913934423%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.2%"),
    justifyContent: "flex-start"
  },
  Text_1_999: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1000: {
    width: wp("2.9098307291666665%"),
    top: hp("4.442558913934423%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.33333333333334%"),
    justifyContent: "flex-start"
  },
  Text_1_1000: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1001: {
    width: wp("2.9098307291666665%"),
    top: hp("9.352853910519126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5999999999999996%"),
    justifyContent: "flex-start"
  },
  Text_1_1001: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1002: {
    width: wp("3.2331380208333336%"),
    top: hp("9.352587090163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    justifyContent: "flex-start"
  },
  Text_1_1002: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1003: {
    width: wp("3.2331380208333336%"),
    top: hp("9.352587090163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.666666666666664%"),
    justifyContent: "flex-start"
  },
  Text_1_1003: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1004: {
    width: wp("3.2331380208333336%"),
    top: hp("9.352587090163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.06666666666667%"),
    justifyContent: "flex-start"
  },
  Text_1_1004: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1005: {
    width: wp("2.9098307291666665%"),
    top: hp("9.352587090163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    justifyContent: "flex-start"
  },
  Text_1_1005: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1006: {
    width: wp("3.2331380208333336%"),
    top: hp("9.352587090163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.39999999999999%"),
    justifyContent: "flex-start"
  },
  Text_1_1006: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1007: {
    width: wp("3.2331380208333336%"),
    top: hp("9.352587090163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.06666666666666%"),
    justifyContent: "flex-start"
  },
  Text_1_1007: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1008: {
    width: wp("4.849723307291667%"),
    top: hp("14.26284873420423%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333332%"),
    justifyContent: "flex-start"
  },
  Text_1_1008: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1009: {
    width: wp("3.5564453124999997%"),
    top: hp("14.262882086748636%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    justifyContent: "flex-start"
  },
  Text_1_1009: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1010: {
    width: wp("4.526399739583333%"),
    top: hp("14.262882086748636%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.133333333333333%"),
    justifyContent: "flex-start"
  },
  Text_1_1010: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1011: {
    width: wp("4.84970703125%"),
    top: hp("14.262882086748636%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.266666666666666%"),
    justifyContent: "flex-start"
  },
  Text_1_1011: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1012: {
    width: wp("4.84970703125%"),
    top: hp("14.262882086748636%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.93333333333334%"),
    justifyContent: "flex-start"
  },
  Text_1_1012: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1013: {
    width: wp("4.84970703125%"),
    top: hp("14.262882086748636%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.6%"),
    justifyContent: "flex-start"
  },
  Text_1_1013: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1014: {
    width: wp("4.84970703125%"),
    top: hp("14.262882086748636%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.26666666666667%"),
    justifyContent: "flex-start"
  },
  Text_1_1014: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1015: {
    width: wp("4.526399739583333%"),
    top: hp("19.172943615522538%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999999999999998%"),
    justifyContent: "flex-start"
  },
  Text_1_1015: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1016: {
    width: wp("4.84970703125%"),
    top: hp("19.17291026297814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.2%"),
    justifyContent: "flex-start"
  },
  Text_1_1016: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1017: {
    width: wp("4.84970703125%"),
    top: hp("19.17291026297814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.866666666666667%"),
    justifyContent: "flex-start"
  },
  Text_1_1017: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1018: {
    width: wp("6.1429687500000005%"),
    top: hp("19.17291026297814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.733333333333334%"),
    justifyContent: "flex-start"
  },
  Text_1_1018: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1019: {
    width: wp("4.526399739583333%"),
    top: hp("19.17291026297814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.2%"),
    justifyContent: "flex-start"
  },
  Text_1_1019: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1020: {
    width: wp("5.819661458333333%"),
    top: hp("19.17291026297814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.33333333333334%"),
    justifyContent: "flex-start"
  },
  Text_1_1020: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1021: {
    width: wp("5.819661458333333%"),
    top: hp("19.17291026297814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    justifyContent: "flex-start"
  },
  Text_1_1021: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1022: {
    width: wp("6.1429687500000005%"),
    top: hp("24.083055173113042%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_1022: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1023: {
    width: wp("6.1429687500000005%"),
    top: hp("24.083205259562842%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.666666666666668%"),
    justifyContent: "flex-start"
  },
  Text_1_1023: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1024: {
    width: wp("6.1429687500000005%"),
    top: hp("24.083205259562842%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.333333333333336%"),
    justifyContent: "flex-start"
  },
  Text_1_1024: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1025: {
    width: wp("5.819661458333333%"),
    top: hp("24.083205259562842%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    justifyContent: "flex-start"
  },
  Text_1_1025: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1026: {
    width: wp("6.1429687500000005%"),
    top: hp("24.083205259562842%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.400000000000006%"),
    justifyContent: "flex-start"
  },
  Text_1_1026: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1027: {
    width: wp("6.1429687500000005%"),
    top: hp("24.083205259562842%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.06666666666666%"),
    justifyContent: "flex-start"
  },
  Text_1_1027: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1028: {
    width: wp("6.1429687500000005%"),
    top: hp("24.083205259562842%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.73333333333333%"),
    justifyContent: "flex-start"
  },
  Text_1_1028: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1029: {
    width: wp("5.819661458333333%"),
    top: hp("4.442492208845625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666666%"),
    justifyContent: "flex-start"
  },
  Text_1_1029: {
    color: "rgba(176, 176, 176, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1030: {
    width: wp("6.1429687500000005%"),
    top: hp("4.442558913934423%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.666666666666668%"),
    justifyContent: "flex-start"
  },
  Text_1_1030: {
    color: "rgba(176, 176, 176, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1031: {
    width: wp("6.1429687500000005%"),
    top: hp("4.442558913934423%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.333333333333336%"),
    justifyContent: "flex-start"
  },
  Text_1_1031: {
    color: "rgba(176, 176, 176, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1032: {
    width: wp("6.1429687500000005%"),
    top: hp("4.442558913934423%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.733333333333334%"),
    justifyContent: "flex-start"
  },
  Text_1_1032: {
    color: "rgba(176, 176, 176, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1033: {
    width: wp("4.84970703125%"),
    top: hp("4.442558913934423%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.93333333333334%"),
    justifyContent: "flex-start"
  },
  Text_1_1033: {
    color: "rgba(176, 176, 176, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_1034: {
    flexGrow: 1,
    width: wp("3.4666666666666663%"),
    height: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.93333333333333%"),
    top: hp("0.8196721311475414%")
  },
  View_1_1036: {
    width: wp("43.46666666666666%"),
    minWidth: wp("43.46666666666666%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.26666666666666%"),
    top: hp("98.90710382513662%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1037: {
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
  View_1_1038: {
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
  View_1_1039: {
    width: wp("38.13333333333333%"),
    minWidth: wp("38.13333333333333%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666785%"),
    top: hp("5.054644808743177%")
  },
  View_1_1040: {
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
  View_1_1041: {
    width: wp("10.245703125%"),
    minWidth: wp("10.245703125%"),
    minHeight: hp("3.029570032338627%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.53333333333334%"),
    top: hp("2.45901639344261%"),
    justifyContent: "flex-start"
  },
  Text_1_1041: {
    color: "rgba(247, 247, 248, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.06969999939203263,
    textTransform: "none"
  },
  View_11_1538: {
    width: wp("90.93333333333334%"),
    minWidth: wp("90.93333333333334%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("76.775956284153%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1045: {
    flexGrow: 1,
    width: wp("31.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_1045: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.06969999939203263,
    textTransform: "none"
  },
  View_1_1046: {
    flexGrow: 1,
    width: wp("9.333333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.60000000000001%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_1046: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.06969999939203263,
    textTransform: "none"
  },
  View_11_1529: {
    width: wp("92.26666666666667%"),
    minWidth: wp("92.26666666666667%"),
    height: hp("4.097426784494536%"),
    minHeight: hp("4.097426784494536%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("65.30054644808743%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1042: {
    flexGrow: 1,
    width: wp("38.93333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2732240437158424%"),
    justifyContent: "flex-start"
  },
  Text_1_1042: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.06969999939203263,
    textTransform: "none"
  },
  View_11_1528: {
    flexGrow: 1,
    width: wp("27.200000000000003%"),
    height: hp("4.097426784494536%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.06666666666668%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I11_1528_1_1043: {
    flexGrow: 1,
    width: wp("3.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.999999999999986%"),
    top: hp("0.2732240437158424%"),
    justifyContent: "flex-start"
  },
  Text_I11_1528_1_1043: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.06969999939203263,
    textTransform: "none"
  },
  View_I11_1528_11_1526: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("4.097426784494536%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.19999999999999%"),
    top: hp("0%"),
    backgroundColor: "rgba(251, 114, 76, 1)"
  },
  ImageBackground_I11_1528_1_1049: {
    width: wp("2.666666666666667%"),
    height: hp("1.3651863473360657%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666714%")
  },
  View_I11_1528_11_1525: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("4.0571202345884565%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(251, 224, 216, 1)"
  },
  ImageBackground_I11_1528_1_1052: {
    width: wp("2.666666666666667%"),
    height: hp("0.23198362256659838%"),
    top: hp("1.9125683060109253%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666657%")
  },
  View_11_1539: {
    width: wp("92.26666666666667%"),
    minWidth: wp("92.26666666666667%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("87.70491803278688%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1055: {
    flexGrow: 1,
    width: wp("33.06666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2732240437158566%"),
    justifyContent: "flex-start"
  },
  Text_1_1055: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.06969999939203263,
    textTransform: "none"
  },
  View_1_1056: {
    flexGrow: 1,
    width: wp("33.06666666666666%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.2%"),
    top: hp("0%")
  },
  View_1_1057: {
    width: wp("12.266666666666666%"),
    top: hp("0.6830601092896273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.400000000000006%"),
    justifyContent: "flex-start"
  },
  Text_1_1057: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.05329999953508378,
    textTransform: "none"
  },
  View_1_1058: {
    width: wp("8%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.066666666666663%"),
    backgroundColor: "rgba(251, 114, 76, 1)"
  },
  View_1_1059: {
    width: wp("8%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(251, 224, 216, 1)"
  },
  ImageBackground_1_1060: {
    width: wp("2.666666666666667%"),
    height: hp("1.3651863473360657%"),
    top: hp("1.3661202185792405%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.733333333333334%")
  },
  ImageBackground_1_1063: {
    width: wp("2.666666666666667%"),
    height: hp("0.23198362256659838%"),
    top: hp("1.9125683060109395%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666657%")
  },
  View_1_1065: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("98.90710382513662%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1066: {
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
  View_1_1067: {
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
  View_1_1068: {
    width: wp("19.2%"),
    minWidth: wp("19.2%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.266666666666666%"),
    top: hp("2.45901639344261%"),
    justifyContent: "flex-start"
  },
  Text_1_1068: {
    color: "rgba(176, 176, 176, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
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
