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
      <View style={styles.View_3_296}>
        <View style={styles.View_1_442}>
          <Text style={styles.Text_1_442}>Home</Text>
        </View>
        <View style={styles.View_1_443}>
          <Text style={styles.Text_1_443}>Explore dog walkers</Text>
        </View>
      </View>
      <View style={styles.View_3_130}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/80c9/c37d/93bb49b35467300514c02ea3374c1dd0"
          }}
          style={styles.ImageBackground_1_447}
        />
        <View style={styles.View_1_446}>
          <Text style={styles.Text_1_446}>Book a walk</Text>
        </View>
      </View>
      <View style={styles.View_3_275}>
        <View style={styles.View_1_468}>
          <Text style={styles.Text_1_468}>Near you</Text>
        </View>
        <View style={styles.View_1_469}>
          <Text style={styles.Text_1_469}>View all</Text>
        </View>
      </View>
      <View style={styles.View_3_159}>
        <View style={styles.View_58_58}>
          <View style={styles.View_3_140}>
            <View style={styles.View_1_486}>
              <Text style={styles.Text_1_486}>$3/h</Text>
            </View>
          </View>
          <View style={styles.View_3_139}>
            <View style={styles.View_1_483}>
              <Text style={styles.Text_1_483}>Mason York</Text>
            </View>
            <View style={styles.View_3_137}>
              <View style={styles.View_1_489}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5376/3ee0/3cbc6d4d20bf76d6ffec749d6d54faa8"
                  }}
                  style={styles.ImageBackground_1_490}
                />
              </View>
              <View style={styles.View_1_488}>
                <Text style={styles.Text_1_488}>7 km from you</Text>
              </View>
            </View>
          </View>
          <ImageBackground style={styles.ImageBackground_3_136}>
            <View style={styles.View_3_135}>
              <View style={styles.View_3_134}>
                <View style={styles.View_1_497}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/77fc/0e7e/a56ff1fed5419f526be282cb31857f86"
                    }}
                    style={styles.ImageBackground_1_498}
                  />
                </View>
                <View style={styles.View_1_500}>
                  <Text style={styles.Text_1_500}>4.1</Text>
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>
      </View>
      <View style={styles.View_3_132}>
        <View style={styles.View_3_131}>
          <View style={styles.View_1_454}>
            <View style={styles.View_1_455}>
              <Text style={styles.Text_1_455}>Kiyv, Ukraine</Text>
            </View>
            <View style={styles.View_1_456}>
              <View style={styles.View_1_457}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aa76/2d7b/898d896da7d0f9dfa929ccb522a78ed7"
                  }}
                  style={styles.ImageBackground_1_458}
                />
              </View>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/029b/e308/bb0876f58dd002e3ce4770def59b2008"
            }}
            style={styles.ImageBackground_1_461}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/23da/cb63/d624e4b868a36bbf06a7c5541b4ad966"
          }}
          style={styles.ImageBackground_1_501}
        />
      </View>
      <View style={styles.View_3_278}>
        <View style={styles.View_3_277}>
          <View style={styles.View_I3_277_3_256}>
            <View style={styles.View_I3_277_3_257}>
              <Text style={styles.Text_I3_277_3_257}>$5/hr</Text>
            </View>
          </View>
          <View style={styles.View_I3_277_3_258}>
            <View style={styles.View_I3_277_3_259}>
              <Text style={styles.Text_I3_277_3_259}>Mark Greene</Text>
            </View>
            <View style={styles.View_I3_277_3_260}>
              <View style={styles.View_I3_277_3_261}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90ec/35a2/988ffd7d7701e5d83546d3b1d6601d85"
                  }}
                  style={styles.ImageBackground_I3_277_3_262}
                />
              </View>
              <View style={styles.View_I3_277_3_265}>
                <Text style={styles.Text_I3_277_3_265}>2 km from you</Text>
              </View>
            </View>
          </View>
          <ImageBackground style={styles.ImageBackground_I3_277_3_266}>
            <View style={styles.View_I3_277_3_267}>
              <View style={styles.View_I3_277_3_268}>
                <View style={styles.View_I3_277_3_269}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/77fc/0e7e/a56ff1fed5419f526be282cb31857f86"
                    }}
                    style={styles.ImageBackground_I3_277_3_270}
                  />
                </View>
                <View style={styles.View_I3_277_3_272}>
                  <Text style={styles.Text_I3_277_3_272}>4.2</Text>
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.View_3_221}>
          <View style={styles.View_I3_221_2_149}>
            <View style={styles.View_I3_221_1_283}>
              <Text style={styles.Text_I3_221_1_283}>Trina Kain</Text>
            </View>
            <View style={styles.View_I3_221_2_148}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d399/aed7/4a10ddf02529befb2060771b36e5c834"
                }}
                style={styles.ImageBackground_I3_221_1_287}
              />
              <View style={styles.View_I3_221_1_286}>
                <Text style={styles.Text_I3_221_1_286}>4 km from you</Text>
              </View>
            </View>
          </View>
          <ImageBackground style={styles.ImageBackground_I3_221_2_156}>
            <View style={styles.View_I3_221_2_150}>
              <View style={styles.View_I3_221_2_151}>
                <View style={styles.View_I3_221_2_152}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/77fc/0e7e/a56ff1fed5419f526be282cb31857f86"
                    }}
                    style={styles.ImageBackground_I3_221_2_153}
                  />
                </View>
                <View style={styles.View_I3_221_2_155}>
                  <Text style={styles.Text_I3_221_2_155}>4.2</Text>
                </View>
              </View>
            </View>
          </ImageBackground>
          <View style={styles.View_I3_221_2_145}>
            <View style={styles.View_I3_221_2_146}>
              <Text style={styles.Text_I3_221_2_146}>$3/hr</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_3_276}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6679/1845/5bf05766e251ac0592f8055975c4e0c2"
          }}
          style={styles.ImageBackground_1_503}
        />
        <View style={styles.View_1_504}>
          <View style={styles.View_1_505}>
            <View style={styles.View_1_506}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fd75/7702/29ada534a0dacbbb2e74d447515c226f"
                }}
                style={styles.ImageBackground_1_507}
              />
            </View>
            <View style={styles.View_1_509}>
              <Text style={styles.Text_1_509}>Home</Text>
            </View>
          </View>
          <View style={styles.View_1_510}>
            <View style={styles.View_1_511}>
              <View style={styles.View_1_512}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d3cb/5c51/8c657c6f249dcb91ba9c226b67190d9d"
                  }}
                  style={styles.ImageBackground_1_513}
                />
              </View>
            </View>
            <View style={styles.View_1_520}>
              <Text style={styles.Text_1_520}>Moments</Text>
            </View>
          </View>
          <View style={styles.View_1_521}>
            <View style={styles.View_1_522}>
              <View style={styles.View_1_523}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/566f/cebd/8b97a0a1f7d6bd150e8c4899be84b37f"
                  }}
                  style={styles.ImageBackground_1_524}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/23da/cb63/d624e4b868a36bbf06a7c5541b4ad966"
                }}
                style={styles.ImageBackground_1_526}
              />
            </View>
            <View style={styles.View_1_527}>
              <Text style={styles.Text_1_527}>Chat</Text>
            </View>
          </View>
          <View style={styles.View_1_528}>
            <View style={styles.View_1_529}>
              <View style={styles.View_1_530}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c77/0593/8f6b6baaefdcdde616b690913658a335"
                  }}
                  style={styles.ImageBackground_1_531}
                />
              </View>
            </View>
            <View style={styles.View_1_534}>
              <Text style={styles.Text_1_534}>Profile</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_3_274}>
        <View style={styles.View_1_569}>
          <Text style={styles.Text_1_569}>Suggested</Text>
        </View>
        <View style={styles.View_1_570}>
          <Text style={styles.Text_1_570}>View all</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9207/9cbc/542bc291df36239db932fa655c9cc5de"
        }}
        style={styles.ImageBackground_1_571}
      />
      <View style={styles.View_3_218}>
        <View style={styles.View_58_59}>
          <View style={styles.View_3_199}>
            <View style={styles.View_3_200}>
              <Text style={styles.Text_3_200}>$5/hr</Text>
            </View>
          </View>
          <View style={styles.View_3_201}>
            <View style={styles.View_3_202}>
              <Text style={styles.Text_3_202}>Mark Greene</Text>
            </View>
            <View style={styles.View_3_203}>
              <View style={styles.View_3_217}>
                <View style={styles.View_3_205}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5376/3ee0/3cbc6d4d20bf76d6ffec749d6d54faa8"
                    }}
                    style={styles.ImageBackground_3_206}
                  />
                </View>
                <View style={styles.View_3_204}>
                  <Text style={styles.Text_3_204}>14 km from you</Text>
                </View>
              </View>
            </View>
          </View>
          <ImageBackground style={styles.ImageBackground_3_209}>
            <View style={styles.View_3_210}>
              <View style={styles.View_3_211}>
                <View style={styles.View_3_212}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/77fc/0e7e/a56ff1fed5419f526be282cb31857f86"
                    }}
                    style={styles.ImageBackground_3_213}
                  />
                </View>
                <View style={styles.View_3_215}>
                  <Text style={styles.Text_3_215}>4.5</Text>
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(252, 252, 252, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_3_296: {
    width: wp("48%"),
    minWidth: wp("48%"),
    height: hp("10.51912568306011%"),
    minHeight: hp("10.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("5.46448087431694%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_442: {
    flexGrow: 1,
    width: wp("31.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_442: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 27,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.13939999878406525,
    textTransform: "none"
  },
  View_1_443: {
    flexGrow: 1,
    width: wp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.967213114754098%"),
    justifyContent: "flex-start"
  },
  Text_1_443: {
    color: "rgba(176, 176, 176, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.06969999939203263,
    textTransform: "none"
  },
  View_3_130: {
    width: wp("27.73333333333333%"),
    minWidth: wp("27.73333333333333%"),
    height: hp("5.601092896174864%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("7.923497267759563%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_447: {
    flexGrow: 1,
    width: wp("3.0172892252604164%"),
    height: hp("1.5457570227117488%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.891357421875%"),
    top: hp("2.0276679367315573%")
  },
  View_1_446: {
    flexGrow: 1,
    width: wp("16.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.575309244791669%"),
    top: hp("1.775956284153004%"),
    justifyContent: "flex-start"
  },
  Text_1_446: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_3_275: {
    width: wp("90.93333333333334%"),
    minWidth: wp("90.93333333333334%"),
    height: hp("6.967213114754098%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("27.937158469945356%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_468: {
    flexGrow: 1,
    width: wp("41.86666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_468: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 27,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.13939999878406525,
    textTransform: "none"
  },
  View_1_469: {
    flexGrow: 1,
    width: wp("15.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.73333333333333%"),
    top: hp("1.9125683060109324%"),
    justifyContent: "flex-start"
  },
  Text_1_469: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.061499999463558205,
    textTransform: "none"
  },
  View_3_159: {
    width: wp("48%"),
    minWidth: wp("48%"),
    height: hp("24.043715846994534%"),
    minHeight: hp("24.043715846994534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("36.20218579234973%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_58_58: {
    flexGrow: 1,
    width: wp("48%"),
    height: hp("24.043715846994534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_140: {
    width: wp("12.8%"),
    height: hp("3.415300546448088%"),
    top: hp("19.535519125683052%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.2%"),
    backgroundColor: "rgba(43, 43, 43, 1)"
  },
  View_1_486: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("0.6830601092896202%"),
    justifyContent: "flex-start"
  },
  Text_1_486: {
    color: "rgba(251, 251, 251, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_3_139: {
    width: wp("28.53333333333333%"),
    height: hp("5.601092896174864%"),
    top: hp("18.442622950819676%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_483: {
    width: wp("26.400000000000002%"),
    minWidth: wp("26.400000000000002%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_483: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.06969999939203263,
    textTransform: "none"
  },
  View_3_137: {
    width: wp("28.53333333333333%"),
    minWidth: wp("28.53333333333333%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.551912568306001%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_489: {
    width: wp("2.666666666666667%"),
    height: hp("1.366120218579235%"),
    top: hp("0.3415300546448137%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_490: {
    width: wp("1.6666666666666667%"),
    height: hp("1.0245901639344261%"),
    top: hp("0.05253025742827333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5%")
  },
  View_1_488: {
    width: wp("25.333333333333336%"),
    minWidth: wp("25.333333333333336%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000001%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_488: {
    color: "rgba(161, 161, 161, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  ImageBackground_3_136: {
    width: wp("47.733333333333334%"),
    height: hp("17.076502732240435%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_135: {
    width: wp("13.066666666666665%"),
    minWidth: wp("13.066666666666665%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(229, 229, 234, 0.20000000298023224)"
  },
  View_3_134: {
    width: wp("6.666666666666667%"),
    minWidth: wp("6.666666666666667%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("0.6830601092896202%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_497: {
    width: wp("2.666666666666667%"),
    height: hp("1.366120218579235%"),
    top: hp("0.3415300546448137%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_498: {
    width: wp("2.2225097656250004%"),
    height: hp("1.0815896623121584%"),
    top: hp("0.14231530695013106%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.22219238281250142%")
  },
  View_1_500: {
    width: wp("3.4666666666666663%"),
    minWidth: wp("3.4666666666666663%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_500: {
    color: "rgba(255, 203, 85, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_3_132: {
    width: wp("90.48888346354167%"),
    minWidth: wp("90.48888346354167%"),
    height: hp("5.942622950819672%"),
    minHeight: hp("5.942622950819672%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("18.989071038251364%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_131: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("5.942622950819672%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.034153005464478525%"),
    backgroundColor: "rgba(240, 240, 240, 1)"
  },
  View_1_454: {
    width: wp("38.93333333333333%"),
    minWidth: wp("38.93333333333333%"),
    height: hp("3.210382513661202%"),
    minHeight: hp("3.210382513661202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.155558268229167%"),
    top: hp("1.3661202185792334%")
  },
  View_1_455: {
    width: wp("32.53333333333333%"),
    minWidth: wp("32.53333333333333%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.399999999999999%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_455: {
    color: "rgba(161, 161, 161, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_1_456: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4781420765027349%")
  },
  View_1_457: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_458: {
    width: wp("3.3333333333333335%"),
    height: hp("2.0491803278688523%"),
    top: hp("0.16072591145833215%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_1_461: {
    width: wp("3.555550130208333%"),
    height: hp("1.639344262295082%"),
    top: hp("2.1516393442622963%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.75555826822917%")
  },
  ImageBackground_1_501: {
    flexGrow: 1,
    width: wp("1.866666666666667%"),
    height: hp("0.9562841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.46666666666667%"),
    top: hp("1.6393442622950865%")
  },
  View_3_278: {
    width: wp("110.93333333333332%"),
    minWidth: wp("110.93333333333332%"),
    height: hp("24.043715846994534%"),
    minHeight: hp("24.043715846994534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("73.77049180327869%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_277: {
    flexGrow: 1,
    width: wp("47.733333333333334%"),
    height: hp("24.043715846994534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3_277_3_256: {
    flexGrow: 1,
    width: wp("14.133333333333335%"),
    height: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.6%"),
    top: hp("19.535519125683052%"),
    backgroundColor: "rgba(43, 43, 43, 1)"
  },
  View_I3_277_3_257: {
    width: wp("7.733333333333333%"),
    minWidth: wp("7.733333333333333%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("0.6830601092896273%"),
    justifyContent: "flex-start"
  },
  Text_I3_277_3_257: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_I3_277_3_258: {
    flexGrow: 1,
    width: wp("29.06666666666667%"),
    height: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18.44262295081967%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3_277_3_259: {
    width: wp("29.06666666666667%"),
    minWidth: wp("29.06666666666667%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I3_277_3_259: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.06969999939203263,
    textTransform: "none"
  },
  View_I3_277_3_260: {
    width: wp("22.400000000000002%"),
    minWidth: wp("22.400000000000002%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.5519125683060224%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3_277_3_261: {
    width: wp("2.666666666666667%"),
    height: hp("1.366120218579235%"),
    top: hp("0.34153005464480657%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3_277_3_262: {
    width: wp("1.6666666666666667%"),
    height: hp("1.0245901639344261%"),
    top: hp("0.05253025742827333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5%")
  },
  View_I3_277_3_265: {
    width: wp("19.2%"),
    minWidth: wp("19.2%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000001%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I3_277_3_265: {
    color: "rgba(174, 174, 178, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  ImageBackground_I3_277_3_266: {
    flexGrow: 1,
    width: wp("47.733333333333334%"),
    height: hp("17.076502732240435%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3_277_3_267: {
    width: wp("13.600000000000001%"),
    minWidth: wp("13.600000000000001%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.46666666666667%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(229, 229, 234, 0.20000000298023224)"
  },
  View_I3_277_3_268: {
    width: wp("7.199999999999999%"),
    minWidth: wp("7.199999999999999%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999957%"),
    top: hp("0.6830601092896273%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3_277_3_269: {
    width: wp("2.666666666666667%"),
    height: hp("1.366120218579235%"),
    top: hp("0.34153005464480657%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3_277_3_270: {
    width: wp("2.2225097656250004%"),
    height: hp("1.0815896623121584%"),
    top: hp("0.14231530695013817%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.22219238281250142%")
  },
  View_I3_277_3_272: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I3_277_3_272: {
    color: "rgba(255, 203, 85, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_3_221: {
    flexGrow: 1,
    width: wp("47.733333333333334%"),
    height: hp("24.043715846994534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.46666666666667%"),
    top: hp("-0.06830601092896416%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3_221_2_149: {
    flexGrow: 1,
    width: wp("25.066666666666666%"),
    height: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18.442622950819683%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3_221_1_283: {
    width: wp("22.666666666666664%"),
    minWidth: wp("22.666666666666664%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I3_221_1_283: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.06969999939203263,
    textTransform: "none"
  },
  View_I3_221_2_148: {
    width: wp("32.266666666666666%"),
    minWidth: wp("32.266666666666666%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.551912568306008%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3_221_1_287: {
    width: wp("2.666666666666667%"),
    height: hp("1.366120218579235%"),
    top: hp("0.34153005464480657%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I3_221_1_286: {
    width: wp("29.06666666666667%"),
    minWidth: wp("29.06666666666667%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I3_221_1_286: {
    color: "rgba(174, 174, 178, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  ImageBackground_I3_221_2_156: {
    flexGrow: 1,
    width: wp("47.733333333333334%"),
    height: hp("17.076502732240435%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3_221_2_150: {
    width: wp("13.600000000000001%"),
    minWidth: wp("13.600000000000001%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.466666666666654%"),
    top: hp("1.3661202185792405%"),
    backgroundColor: "rgba(229, 229, 234, 0.20000000298023224)"
  },
  View_I3_221_2_151: {
    width: wp("7.199999999999999%"),
    minWidth: wp("7.199999999999999%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000017%"),
    top: hp("0.6830601092896131%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3_221_2_152: {
    width: wp("2.666666666666667%"),
    height: hp("1.366120218579235%"),
    top: hp("0.34153005464480657%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3_221_2_153: {
    width: wp("2.2225138346354165%"),
    height: hp("1.0815896623121584%"),
    top: hp("0.14231530695013817%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.22219645182291003%")
  },
  View_I3_221_2_155: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999886%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I3_221_2_155: {
    color: "rgba(255, 203, 85, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_I3_221_2_145: {
    flexGrow: 1,
    width: wp("13.866666666666665%"),
    height: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.86666666666666%"),
    top: hp("19.672131147540995%"),
    backgroundColor: "rgba(43, 43, 43, 1)"
  },
  View_I3_221_2_146: {
    width: wp("7.466666666666668%"),
    minWidth: wp("7.466666666666668%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("0.6830601092895989%"),
    justifyContent: "flex-start"
  },
  Text_I3_221_2_146: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_3_276: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11.748633879781421%"),
    minHeight: hp("11.748633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("99.18032786885246%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_503: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("11.748633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_504: {
    flexGrow: 1,
    width: wp("90.66666666666666%"),
    height: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333333%"),
    top: hp("3.2786885245901516%")
  },
  View_1_505: {
    width: wp("8.266666666666666%"),
    height: hp("5.327868852459016%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_506: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8000000000000007%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_507: {
    width: wp("5.066666666666666%"),
    height: hp("2.73224043715847%"),
    top: hp("0.2732240437158566%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6666666666666661%")
  },
  View_1_509: {
    width: wp("8.266666666666666%"),
    top: hp("3.278688524590166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_509: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_1_510: {
    width: wp("13.066666666666665%"),
    height: hp("5.327868852459016%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.133333333333333%")
  },
  View_1_511: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_512: {
    width: wp("5.866666666666666%"),
    minWidth: wp("5.866666666666666%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666657%"),
    top: hp("0.546448087431699%")
  },
  ImageBackground_1_513: {
    width: wp("5.866666666666666%"),
    height: hp("2.185792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_520: {
    width: wp("13.066666666666665%"),
    top: hp("3.278688524590166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_520: {
    color: "rgba(174, 174, 178, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_1_521: {
    width: wp("6.933333333333333%"),
    height: hp("5.327868852459016%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.06666666666667%")
  },
  View_1_522: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666657%")
  },
  View_1_523: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_524: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("0.2732240437158566%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333314%")
  },
  ImageBackground_1_526: {
    width: wp("1.866666666666667%"),
    height: hp("0.9562841530054645%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666643%")
  },
  View_1_527: {
    width: wp("6.933333333333333%"),
    top: hp("3.278688524590166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_527: {
    color: "rgba(174, 174, 178, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_1_528: {
    width: wp("8.799999999999999%"),
    height: hp("5.327868852459016%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.86666666666667%")
  },
  View_1_529: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666629%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_530: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666629%"),
    top: hp("0.2732240437158566%")
  },
  ImageBackground_1_531: {
    width: wp("4.266666666666667%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_534: {
    width: wp("8.799999999999999%"),
    top: hp("3.278688524590166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_534: {
    color: "rgba(174, 174, 178, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_3_274: {
    width: wp("91.73333333333333%"),
    minWidth: wp("91.73333333333333%"),
    height: hp("6.967213114754098%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("65.43715846994536%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_569: {
    flexGrow: 1,
    width: wp("49.86666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_569: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 27,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.13939999878406525,
    textTransform: "none"
  },
  View_1_570: {
    flexGrow: 1,
    width: wp("15.733333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("1.9125683060109253%"),
    justifyContent: "flex-start"
  },
  Text_1_570: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.061499999463558205,
    textTransform: "none"
  },
  ImageBackground_1_571: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("63.52459016393443%")
  },
  View_3_218: {
    width: wp("47.733333333333334%"),
    minWidth: wp("47.733333333333334%"),
    height: hp("24.043715846994534%"),
    minHeight: hp("24.043715846994534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.733333333333334%"),
    top: hp("36.20218579234973%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_58_59: {
    flexGrow: 1,
    width: wp("47.733333333333334%"),
    height: hp("24.043715846994534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_199: {
    width: wp("14.133333333333335%"),
    height: hp("3.415300546448088%"),
    top: hp("19.535519125683052%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.60000000000001%"),
    backgroundColor: "rgba(43, 43, 43, 1)"
  },
  View_3_200: {
    width: wp("7.733333333333333%"),
    minWidth: wp("7.733333333333333%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("0.6830601092896202%"),
    justifyContent: "flex-start"
  },
  Text_3_200: {
    color: "rgba(251, 251, 251, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_3_201: {
    width: wp("29.06666666666667%"),
    height: hp("5.601092896174864%"),
    top: hp("18.442622950819676%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_202: {
    width: wp("29.06666666666667%"),
    minWidth: wp("29.06666666666667%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_3_202: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.06969999939203263,
    textTransform: "none"
  },
  View_3_203: {
    width: wp("23.733333333333334%"),
    minWidth: wp("23.733333333333334%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.551912568306001%")
  },
  View_3_217: {
    width: wp("23.733333333333334%"),
    minWidth: wp("23.733333333333334%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_205: {
    width: wp("2.666666666666667%"),
    height: hp("1.366120218579235%"),
    top: hp("0.3415300546448137%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_3_206: {
    width: wp("1.6666666666666667%"),
    height: hp("1.0245901639344261%"),
    top: hp("0.05253025742827333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5%")
  },
  View_3_204: {
    width: wp("20.533333333333335%"),
    minWidth: wp("20.533333333333335%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_3_204: {
    color: "rgba(161, 161, 161, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  ImageBackground_3_209: {
    width: wp("47.733333333333334%"),
    height: hp("17.076502732240435%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_210: {
    width: wp("13.866666666666665%"),
    minWidth: wp("13.866666666666665%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.200000000000003%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(229, 229, 234, 0.20000000298023224)"
  },
  View_3_211: {
    width: wp("7.466666666666668%"),
    minWidth: wp("7.466666666666668%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999886%"),
    top: hp("0.6830601092896202%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_212: {
    width: wp("2.666666666666667%"),
    height: hp("1.366120218579235%"),
    top: hp("0.3415300546448137%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_3_213: {
    width: wp("2.2225138346354165%"),
    height: hp("1.0815896623121584%"),
    top: hp("0.14231530695013106%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.22219645182292425%")
  },
  View_3_215: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000017%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_3_215: {
    color: "rgba(255, 203, 85, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
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
