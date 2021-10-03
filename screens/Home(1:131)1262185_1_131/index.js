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
      <View style={styles.View_2_197}>
        <View style={styles.View_2_6}>
          <View style={styles.View_1_235}>
            <Text style={styles.Text_1_235}>Surprise For You</Text>
          </View>
          <View style={styles.View_1_234}>
            <Text style={styles.Text_1_234}>The first walk is free!</Text>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/922d/ebbe/a9fc36065330468824671ecb1d94dce9"
        }}
        style={styles.ImageBackground_1_139}
      />
      <View style={styles.View_2_198}>
        <View style={styles.View_1_132}>
          <View style={styles.View_1_133}>
            <Text style={styles.Text_1_133}>Home</Text>
          </View>
          <View style={styles.View_1_134}>
            <Text style={styles.Text_1_134}>Explore dog walkers</Text>
          </View>
        </View>
        <View style={styles.View_1_236}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/88f5/22e6/03bc4fa60a0e6dcfa9427410a7d258f0"
            }}
            style={styles.ImageBackground_1_239}
          />
          <View style={styles.View_1_238}>
            <Text style={styles.Text_1_238}>Book a walk</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2_160}>
        <View style={styles.View_2_158}>
          <View style={styles.View_I2_158_2_143}>
            <View style={styles.View_I2_158_1_297}>
              <Text style={styles.Text_I2_158_1_297}>$5/hr</Text>
            </View>
          </View>
          <View style={styles.View_I2_158_2_142}>
            <View style={styles.View_I2_158_1_293}>
              <Text style={styles.Text_I2_158_1_293}>Mark Greene</Text>
            </View>
            <View style={styles.View_I2_158_2_140}>
              <View style={styles.View_I2_158_1_301}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90ec/35a2/988ffd7d7701e5d83546d3b1d6601d85"
                  }}
                  style={styles.ImageBackground_I2_158_1_302}
                />
              </View>
              <View style={styles.View_I2_158_1_300}>
                <Text style={styles.Text_I2_158_1_300}>India, Guntur</Text>
              </View>
            </View>
          </View>
          <ImageBackground style={styles.ImageBackground_I2_158_2_139}>
            <View style={styles.View_I2_158_2_138}>
              <View style={styles.View_I2_158_2_137}>
                <View style={styles.View_I2_158_1_308}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/77fc/0e7e/a56ff1fed5419f526be282cb31857f86"
                    }}
                    style={styles.ImageBackground_I2_158_1_309}
                  />
                </View>
                <View style={styles.View_I2_158_1_311}>
                  <Text style={styles.Text_I2_158_1_311}>4.2</Text>
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.View_2_159}>
          <View style={styles.View_I2_159_2_149}>
            <View style={styles.View_I2_159_1_283}>
              <Text style={styles.Text_I2_159_1_283}>Trina Kain</Text>
            </View>
            <View style={styles.View_I2_159_2_148}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d399/aed7/4a10ddf02529befb2060771b36e5c834"
                }}
                style={styles.ImageBackground_I2_159_1_287}
              />
              <View style={styles.View_I2_159_1_286}>
                <Text style={styles.Text_I2_159_1_286}>England, London</Text>
              </View>
            </View>
          </View>
          <ImageBackground style={styles.ImageBackground_I2_159_2_156}>
            <View style={styles.View_I2_159_2_150}>
              <View style={styles.View_I2_159_2_151}>
                <View style={styles.View_I2_159_2_152}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/77fc/0e7e/a56ff1fed5419f526be282cb31857f86"
                    }}
                    style={styles.ImageBackground_I2_159_2_153}
                  />
                </View>
                <View style={styles.View_I2_159_2_155}>
                  <Text style={styles.Text_I2_159_2_155}>4.2</Text>
                </View>
              </View>
            </View>
          </ImageBackground>
          <View style={styles.View_I2_159_2_145}>
            <View style={styles.View_I2_159_2_146}>
              <Text style={styles.Text_I2_159_2_146}>$3/hr</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_2_195}>
        <View style={styles.View_1_312}>
          <Text style={styles.Text_1_312}>Suggested</Text>
        </View>
        <View style={styles.View_1_313}>
          <Text style={styles.Text_1_313}>View all</Text>
        </View>
      </View>
      <View style={styles.View_1_314}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6679/1845/5bf05766e251ac0592f8055975c4e0c2"
          }}
          style={styles.ImageBackground_1_315}
        />
        <View style={styles.View_1_316}>
          <View style={styles.View_1_317}>
            <View style={styles.View_1_318}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fd75/7702/29ada534a0dacbbb2e74d447515c226f"
                }}
                style={styles.ImageBackground_1_319}
              />
            </View>
            <View style={styles.View_1_321}>
              <Text style={styles.Text_1_321}>Home</Text>
            </View>
          </View>
          <View style={styles.View_1_322}>
            <View style={styles.View_1_323}>
              <View style={styles.View_1_324}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d3cb/5c51/8c657c6f249dcb91ba9c226b67190d9d"
                  }}
                  style={styles.ImageBackground_1_325}
                />
              </View>
            </View>
            <View style={styles.View_1_332}>
              <Text style={styles.Text_1_332}>Moments</Text>
            </View>
          </View>
          <View style={styles.View_1_333}>
            <View style={styles.View_1_334}>
              <View style={styles.View_1_335}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/566f/cebd/8b97a0a1f7d6bd150e8c4899be84b37f"
                  }}
                  style={styles.ImageBackground_1_336}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/23da/cb63/d624e4b868a36bbf06a7c5541b4ad966"
                }}
                style={styles.ImageBackground_1_338}
              />
            </View>
            <View style={styles.View_1_339}>
              <Text style={styles.Text_1_339}>Chat</Text>
            </View>
          </View>
          <View style={styles.View_1_340}>
            <View style={styles.View_1_341}>
              <View style={styles.View_1_342}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c77/0593/8f6b6baaefdcdde616b690913658a335"
                  }}
                  style={styles.ImageBackground_1_343}
                />
              </View>
            </View>
            <View style={styles.View_1_346}>
              <Text style={styles.Text_1_346}>Profile</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_2_29}>
        <View style={styles.View_1_351}>
          <View style={styles.View_1_352}>
            <Text style={styles.Text_1_352}>Your location...</Text>
          </View>
          <View style={styles.View_1_353}>
            <View style={styles.View_1_354}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aa76/2d7b/898d896da7d0f9dfa929ccb522a78ed7"
                }}
                style={styles.ImageBackground_1_355}
              />
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/029b/e308/bb0876f58dd002e3ce4770def59b2008"
          }}
          style={styles.ImageBackground_1_358}
        />
      </View>
      <View style={styles.View_2_17}>
        <View style={styles.View_58_20}>
          <View style={styles.View_2_13}>
            <View style={styles.View_1_263}>
              <Text style={styles.Text_1_263}>$5/hr</Text>
            </View>
          </View>
          <View style={styles.View_2_12}>
            <View style={styles.View_1_260}>
              <Text style={styles.Text_1_260}>Mark Greene</Text>
            </View>
            <View style={styles.View_1_264}>
              <View style={styles.View_1_265}>
                <Text style={styles.Text_1_265}>India, Guntur</Text>
              </View>
              <View style={styles.View_1_266}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5376/3ee0/3cbc6d4d20bf76d6ffec749d6d54faa8"
                  }}
                  style={styles.ImageBackground_1_267}
                />
              </View>
            </View>
          </View>
          <ImageBackground style={styles.ImageBackground_2_11}>
            <View style={styles.View_2_10}>
              <View style={styles.View_2_9}>
                <View style={styles.View_1_274}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/77fc/0e7e/a56ff1fed5419f526be282cb31857f86"
                    }}
                    style={styles.ImageBackground_1_275}
                  />
                </View>
                <View style={styles.View_1_277}>
                  <Text style={styles.Text_1_277}>4.5</Text>
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>
      </View>
      <View style={styles.View_2_28}>
        <View style={styles.View_58_21}>
          <View style={styles.View_2_14}>
            <View style={styles.View_1_251}>
              <Text style={styles.Text_1_251}>Trina Kain</Text>
            </View>
            <View style={styles.View_1_252}>
              <View style={styles.View_1_253}>
                <Text style={styles.Text_1_253}>England, London</Text>
              </View>
              <View style={styles.View_1_254}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5376/3ee0/3cbc6d4d20bf76d6ffec749d6d54faa8"
                  }}
                  style={styles.ImageBackground_1_255}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_2_19}>
            <View style={styles.View_2_20}>
              <Text style={styles.Text_2_20}>$7/HR</Text>
            </View>
          </View>
          <ImageBackground style={styles.ImageBackground_2_27}>
            <View style={styles.View_2_21}>
              <View style={styles.View_2_22}>
                <View style={styles.View_2_23}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/77fc/0e7e/a56ff1fed5419f526be282cb31857f86"
                    }}
                    style={styles.ImageBackground_2_24}
                  />
                </View>
                <View style={styles.View_2_26}>
                  <Text style={styles.Text_2_26}>4.5</Text>
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>
      </View>
      <View style={styles.View_2_203}>
        <View style={styles.View_1_245}>
          <Text style={styles.Text_1_245}>Top walkers</Text>
        </View>
        <View style={styles.View_1_246}>
          <Text style={styles.Text_1_246}>View all</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9207/9cbc/542bc291df36239db932fa655c9cc5de"
        }}
        style={styles.ImageBackground_2_204}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(252, 252, 252, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_2_197: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("18.0327868852459%"),
    minHeight: hp("18.0327868852459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("27.66393442622951%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_6: {
    flexGrow: 1,
    width: wp("47.733333333333334%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333333%"),
    top: hp("5.874316939890711%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_235: {
    width: wp("36.266666666666666%"),
    minWidth: wp("36.266666666666666%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_235: {
    color: "rgba(255, 248, 245, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.05329999953508378,
    textTransform: "none"
  },
  View_1_234: {
    width: wp("47.733333333333334%"),
    minWidth: wp("47.733333333333334%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.7322404371584668%"),
    justifyContent: "flex-start"
  },
  Text_1_234: {
    color: "rgba(251, 251, 251, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.06969999939203263,
    textTransform: "none"
  },
  ImageBackground_1_139: {
    width: wp("36.038151041666666%"),
    height: hp("14.511541981514686%"),
    top: hp("29.508196721311474%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.46666666666667%")
  },
  View_2_198: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("10.51912568306011%"),
    minHeight: hp("10.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("5.46448087431694%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_132: {
    flexGrow: 1,
    width: wp("48%"),
    height: hp("10.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_133: {
    width: wp("31.733333333333334%"),
    minWidth: wp("31.733333333333334%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_133: {
    color: "rgba(32, 32, 32, 1)",
    fontSize: 27,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.13939999878406525,
    textTransform: "none"
  },
  View_1_134: {
    width: wp("48%"),
    minWidth: wp("48%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.967213114754098%"),
    justifyContent: "flex-start"
  },
  Text_1_134: {
    color: "rgba(161, 161, 161, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.06969999939203263,
    textTransform: "none"
  },
  View_1_236: {
    flexGrow: 1,
    width: wp("27.73333333333333%"),
    height: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.733333333333334%"),
    top: hp("2.4590163934426235%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_239: {
    width: wp("3.01728515625%"),
    height: hp("1.5457403464395492%"),
    top: hp("2.027684613003757%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.891341145833337%")
  },
  View_1_238: {
    width: wp("16.266666666666666%"),
    minWidth: wp("16.266666666666666%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.575325520833331%"),
    top: hp("1.775956284153004%"),
    justifyContent: "flex-start"
  },
  Text_1_238: {
    color: "rgba(252, 252, 253, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_2_160: {
    width: wp("110.93333333333332%"),
    minWidth: wp("110.93333333333332%"),
    height: hp("24.043715846994534%"),
    minHeight: hp("24.043715846994534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("95.42349726775956%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_158: {
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
  View_I2_158_2_143: {
    flexGrow: 1,
    width: wp("14.133333333333335%"),
    height: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.6%"),
    top: hp("19.535519125683052%"),
    backgroundColor: "rgba(32, 32, 32, 1)"
  },
  View_I2_158_1_297: {
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
  Text_I2_158_1_297: {
    color: "rgba(247, 247, 248, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_I2_158_2_142: {
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
  View_I2_158_1_293: {
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
  Text_I2_158_1_293: {
    color: "rgba(32, 32, 32, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.06969999939203263,
    textTransform: "none"
  },
  View_I2_158_2_140: {
    width: wp("20.533333333333335%"),
    minWidth: wp("20.533333333333335%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.5519125683060224%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_158_1_301: {
    width: wp("2.666666666666667%"),
    height: hp("1.366120218579235%"),
    top: hp("0.3415300546448208%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2_158_1_302: {
    width: wp("1.6666666666666667%"),
    height: hp("1.0245901639344261%"),
    top: hp("0.05254693370046937%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5%")
  },
  View_I2_158_1_300: {
    width: wp("17.333333333333336%"),
    minWidth: wp("17.333333333333336%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000001%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I2_158_1_300: {
    color: "rgba(174, 174, 178, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  ImageBackground_I2_158_2_139: {
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
  View_I2_158_2_138: {
    width: wp("13.600000000000001%"),
    minWidth: wp("13.600000000000001%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.46666666666667%"),
    top: hp("1.3661202185792405%"),
    backgroundColor: "rgba(229, 229, 234, 0.20000000298023224)"
  },
  View_I2_158_2_137: {
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
  View_I2_158_1_308: {
    width: wp("2.666666666666667%"),
    height: hp("1.366120218579235%"),
    top: hp("0.34153005464479236%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2_158_1_309: {
    width: wp("2.222526041666667%"),
    height: hp("1.0815896623121584%"),
    top: hp("0.14231530695013817%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.22220052083333997%")
  },
  View_I2_158_1_311: {
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
  Text_I2_158_1_311: {
    color: "rgba(255, 203, 85, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_2_159: {
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
  View_I2_159_2_149: {
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
  View_I2_159_1_283: {
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
  Text_I2_159_1_283: {
    color: "rgba(32, 32, 32, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.06969999939203263,
    textTransform: "none"
  },
  View_I2_159_2_148: {
    width: wp("32.266666666666666%"),
    minWidth: wp("32.266666666666666%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.551912568305994%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2_159_1_287: {
    width: wp("2.666666666666667%"),
    height: hp("1.366120218579235%"),
    top: hp("0.3415300546448208%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I2_159_1_286: {
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
  Text_I2_159_1_286: {
    color: "rgba(174, 174, 178, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  ImageBackground_I2_159_2_156: {
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
  View_I2_159_2_150: {
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
  View_I2_159_2_151: {
    width: wp("7.199999999999999%"),
    minWidth: wp("7.199999999999999%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000017%"),
    top: hp("0.6830601092896273%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_159_2_152: {
    width: wp("2.666666666666667%"),
    height: hp("1.366120218579235%"),
    top: hp("0.34153005464479236%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2_159_2_153: {
    width: wp("2.222526041666667%"),
    height: hp("1.0815896623121584%"),
    top: hp("0.14231530695015238%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.22220052083332575%")
  },
  View_I2_159_2_155: {
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
  Text_I2_159_2_155: {
    color: "rgba(255, 203, 85, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_I2_159_2_145: {
    flexGrow: 1,
    width: wp("13.866666666666665%"),
    height: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.86666666666666%"),
    top: hp("19.672131147540995%"),
    backgroundColor: "rgba(32, 32, 32, 1)"
  },
  View_I2_159_2_146: {
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
  Text_I2_159_2_146: {
    color: "rgba(247, 247, 248, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_2_195: {
    width: wp("91.2%"),
    minWidth: wp("91.2%"),
    height: hp("6.967213114754098%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("87.09016393442623%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_312: {
    flexGrow: 1,
    width: wp("49.86666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_312: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 27,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.13939999878406525,
    textTransform: "none"
  },
  View_1_313: {
    flexGrow: 1,
    width: wp("15.466666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.73333333333333%"),
    top: hp("1.9125683060109253%"),
    justifyContent: "flex-start"
  },
  Text_1_313: {
    color: "rgba(32, 32, 32, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.061499999463558205,
    textTransform: "none"
  },
  View_1_314: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11.748633879781421%"),
    minHeight: hp("11.748633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("99.18032786885246%")
  },
  ImageBackground_1_315: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11.748633879781421%"),
    minHeight: hp("11.748633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_316: {
    width: wp("89.06666666666668%"),
    minWidth: wp("89.06666666666668%"),
    height: hp("5.327868852459016%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("3.1420765027322517%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_317: {
    width: wp("8.266666666666666%"),
    minWidth: wp("8.266666666666666%"),
    height: hp("5.327868852459016%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_318: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999999999999989%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_319: {
    width: wp("5.066666666666666%"),
    height: hp("2.73224043715847%"),
    top: hp("0.2732240437158282%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6666666666666679%")
  },
  View_1_321: {
    width: wp("8.266666666666666%"),
    minWidth: wp("8.266666666666666%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.2786885245901374%"),
    justifyContent: "flex-start"
  },
  Text_1_321: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_1_322: {
    width: wp("13.066666666666665%"),
    minWidth: wp("13.066666666666665%"),
    height: hp("5.327868852459016%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.6%"),
    top: hp("0%")
  },
  View_1_323: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999993%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_324: {
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
  ImageBackground_1_325: {
    width: wp("5.866666666666666%"),
    height: hp("2.185792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_332: {
    width: wp("13.066666666666665%"),
    minWidth: wp("13.066666666666665%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.2786885245901374%"),
    justifyContent: "flex-start"
  },
  Text_1_332: {
    color: "rgba(174, 174, 178, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_1_333: {
    width: wp("6.933333333333333%"),
    minWidth: wp("6.933333333333333%"),
    height: hp("5.327868852459016%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.99999999999999%"),
    top: hp("0%")
  },
  View_1_334: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666728%"),
    top: hp("0%")
  },
  View_1_335: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_336: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("0.2732240437158282%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333243%")
  },
  ImageBackground_1_338: {
    width: wp("1.866666666666667%"),
    minWidth: wp("1.866666666666667%"),
    height: hp("0.9562841530054645%"),
    minHeight: hp("0.9562841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666643%"),
    top: hp("0.1366120218578999%")
  },
  View_1_339: {
    width: wp("6.933333333333333%"),
    minWidth: wp("6.933333333333333%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.2786885245901374%"),
    justifyContent: "flex-start"
  },
  Text_1_339: {
    color: "rgba(174, 174, 178, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_1_340: {
    width: wp("8.799999999999999%"),
    minWidth: wp("8.799999999999999%"),
    height: hp("5.327868852459016%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.26666666666667%"),
    top: hp("0%")
  },
  View_1_341: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.066666666666677%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_342: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666629%"),
    top: hp("0.2732240437158282%")
  },
  ImageBackground_1_343: {
    width: wp("4.266666666666667%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_346: {
    width: wp("8.799999999999999%"),
    minWidth: wp("8.799999999999999%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.2786885245901374%"),
    justifyContent: "flex-start"
  },
  Text_1_346: {
    color: "rgba(174, 174, 178, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_2_29: {
    width: wp("91.2%"),
    minWidth: wp("91.2%"),
    height: hp("5.669398907103825%"),
    minHeight: hp("5.669398907103825%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("18.989071038251364%"),
    backgroundColor: "rgba(240, 240, 240, 1)"
  },
  View_1_351: {
    flexGrow: 1,
    width: wp("38.93333333333333%"),
    height: hp("3.210382513661202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0222330729166673%"),
    top: hp("1.2295081967213157%")
  },
  View_1_352: {
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
  Text_1_352: {
    color: "rgba(161, 161, 161, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_1_353: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.47814207650273133%")
  },
  View_1_354: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_355: {
    width: wp("3.3333333333333335%"),
    height: hp("2.0491803278688523%"),
    top: hp("0.16072591145833215%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9999999999999982%")
  },
  ImageBackground_1_358: {
    flexGrow: 1,
    width: wp("3.55556640625%"),
    height: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.62223307291667%"),
    top: hp("2.015027322404375%")
  },
  View_2_17: {
    width: wp("47.733333333333334%"),
    minWidth: wp("47.733333333333334%"),
    height: hp("24.043715846994534%"),
    minHeight: hp("24.043715846994534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("57.03551912568307%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_58_20: {
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
  View_2_13: {
    width: wp("14.133333333333335%"),
    height: hp("3.415300546448088%"),
    top: hp("19.535519125683052%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.6%"),
    backgroundColor: "rgba(32, 32, 32, 1)"
  },
  View_1_263: {
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
  Text_1_263: {
    color: "rgba(251, 251, 251, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_2_12: {
    width: wp("29.06666666666667%"),
    height: hp("5.601092896174864%"),
    top: hp("18.44262295081967%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_260: {
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
  Text_1_260: {
    color: "rgba(32, 32, 32, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.06969999939203263,
    textTransform: "none"
  },
  View_1_264: {
    width: wp("20.533333333333335%"),
    minWidth: wp("20.533333333333335%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.551912568306008%")
  },
  View_1_265: {
    width: wp("17.333333333333336%"),
    minWidth: wp("17.333333333333336%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000001%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_265: {
    color: "rgba(161, 161, 161, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_1_266: {
    width: wp("2.666666666666667%"),
    height: hp("1.366120218579235%"),
    top: hp("0.3415300546448208%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_267: {
    width: wp("1.6666666666666667%"),
    height: hp("1.0245901639344261%"),
    top: hp("0.05254693370046937%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5%")
  },
  ImageBackground_2_11: {
    width: wp("47.733333333333334%"),
    height: hp("17.076502732240435%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_10: {
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
  View_2_9: {
    width: wp("7.466666666666668%"),
    minWidth: wp("7.466666666666668%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999957%"),
    top: hp("0.6830601092896202%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_274: {
    width: wp("2.666666666666667%"),
    height: hp("1.366120218579235%"),
    top: hp("0.3415300546448137%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_275: {
    width: wp("2.222526041666667%"),
    height: hp("1.0815896623121584%"),
    top: hp("0.14231530695013817%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.22220052083333286%")
  },
  View_1_277: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_277: {
    color: "rgba(255, 203, 85, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_2_28: {
    width: wp("47.733333333333334%"),
    minWidth: wp("47.733333333333334%"),
    height: hp("24.043715846994534%"),
    minHeight: hp("24.043715846994534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.733333333333334%"),
    top: hp("57.03551912568307%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_58_21: {
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
  View_2_14: {
    width: wp("25.066666666666666%"),
    height: hp("5.601092896174864%"),
    top: hp("18.44262295081967%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_251: {
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
  Text_1_251: {
    color: "rgba(32, 32, 32, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.06969999939203263,
    textTransform: "none"
  },
  View_1_252: {
    width: wp("32.266666666666666%"),
    minWidth: wp("32.266666666666666%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.551912568306008%")
  },
  View_1_253: {
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
  Text_1_253: {
    color: "rgba(161, 161, 161, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_1_254: {
    width: wp("2.666666666666667%"),
    height: hp("1.366120218579235%"),
    top: hp("0.3415300546448208%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_255: {
    width: wp("1.6666666666666667%"),
    height: hp("1.0245901639344261%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5%")
  },
  View_2_19: {
    width: wp("14.666666666666666%"),
    height: hp("3.415300546448088%"),
    top: hp("19.535519125683052%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.799999999999997%"),
    backgroundColor: "rgba(32, 32, 32, 1)"
  },
  View_2_20: {
    width: wp("8.266666666666666%"),
    minWidth: wp("8.266666666666666%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("0.6830601092896273%"),
    justifyContent: "flex-start"
  },
  Text_2_20: {
    color: "rgba(251, 251, 251, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  ImageBackground_2_27: {
    width: wp("47.733333333333334%"),
    height: hp("17.076502732240435%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_21: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("3.1420765027322406%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("1.229508196721305%"),
    backgroundColor: "rgba(229, 229, 234, 0.20000000298023224)"
  },
  View_2_22: {
    width: wp("7.466666666666668%"),
    minWidth: wp("7.466666666666668%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.933333333333337%"),
    top: hp("0.5464480874316919%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_23: {
    width: wp("2.666666666666667%"),
    height: hp("1.366120218579235%"),
    top: hp("0.3415300546448137%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_2_24: {
    width: wp("2.222526041666667%"),
    height: hp("1.0815896623121584%"),
    top: hp("0.14231530695013817%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.22220052083332575%")
  },
  View_2_26: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999886%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_26: {
    color: "rgba(255, 203, 85, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_2_203: {
    width: wp("91.2%"),
    minWidth: wp("91.2%"),
    height: hp("6.967213114754098%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("48.70218579234973%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_245: {
    flexGrow: 1,
    width: wp("55.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_245: {
    color: "rgba(32, 32, 32, 1)",
    fontSize: 27,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.13939999878406525,
    textTransform: "none"
  },
  View_1_246: {
    flexGrow: 1,
    width: wp("15.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("1.9125683060109253%"),
    justifyContent: "flex-start"
  },
  Text_1_246: {
    color: "rgba(32, 32, 32, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.061499999463558205,
    textTransform: "none"
  },
  ImageBackground_2_204: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("84.90437158469946%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
