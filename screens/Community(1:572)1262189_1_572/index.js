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
      <View style={styles.View_1_573}>
        <Text style={styles.Text_1_573}>Recently added</Text>
      </View>
      <View style={styles.View_1_574}>
        <View style={styles.View_1_575}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b1dc/4e81/7592201203415604e4044ef8c706a4c1"
            }}
            style={styles.ImageBackground_1_576}
          />
          <View style={styles.View_1_577}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b5a7/59b5/a206db776eaf9f88e63ba9a26b256ca2"
              }}
              style={styles.ImageBackground_1_578}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2e40/dc33/04fab6ea7fe234ed80d82bd183bbe199"
              }}
              style={styles.ImageBackground_1_579}
            />
          </View>
        </View>
        <View style={styles.View_1_580}>
          <Text style={styles.Text_1_580}>Sydney D.</Text>
        </View>
      </View>
      <View style={styles.View_11_15}>
        <View style={styles.View_11_10}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5510/632d/4b8f1b1a5122049a8469155dc2c3f7a4"
            }}
            style={styles.ImageBackground_I11_10_1_584}
          />
          <View style={styles.View_I11_10_1_585}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6582/f366/5bba5e50f05085f1bb6167a44454be54"
              }}
              style={styles.ImageBackground_I11_10_1_586}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/76db/9926/fce48d052b6ddbe739cf52ecaf116d5b"
              }}
              style={styles.ImageBackground_I11_10_1_587}
            />
          </View>
          <View style={styles.View_I11_10_1_588}>
            <Text style={styles.Text_I11_10_1_588}>Charles G.</Text>
          </View>
        </View>
        <View style={styles.View_11_11}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ee9e/573e/451e4d9a6213c609fedecd927d9be6ce"
            }}
            style={styles.ImageBackground_I11_11_1_591}
          />
          <View style={styles.View_I11_11_1_592}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c93a/162d/5fa699bbce57f005e8a747982abafa1b"
              }}
              style={styles.ImageBackground_I11_11_1_593}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eba4/cfe6/7d8ca289fbae194c0e65621a3cfe611f"
              }}
              style={styles.ImageBackground_I11_11_1_594}
            />
          </View>
          <View style={styles.View_I11_11_1_595}>
            <Text style={styles.Text_I11_11_1_595}>Chloe H.</Text>
          </View>
        </View>
        <View style={styles.View_11_12}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ee9e/573e/451e4d9a6213c609fedecd927d9be6ce"
            }}
            style={styles.ImageBackground_I11_12_1_599}
          />
          <View style={styles.View_I11_12_1_600}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6582/f366/5bba5e50f05085f1bb6167a44454be54"
              }}
              style={styles.ImageBackground_I11_12_1_601}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c19/c8a2/16232d9fd52427c6211a6e93047c257f"
              }}
              style={styles.ImageBackground_I11_12_1_602}
            />
          </View>
          <View style={styles.View_I11_12_1_603}>
            <Text style={styles.Text_I11_12_1_603}>Kerry H.</Text>
          </View>
        </View>
        <View style={styles.View_11_13}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ee9e/573e/451e4d9a6213c609fedecd927d9be6ce"
            }}
            style={styles.ImageBackground_I11_13_1_606}
          />
          <View style={styles.View_I11_13_1_607}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6582/f366/5bba5e50f05085f1bb6167a44454be54"
              }}
              style={styles.ImageBackground_I11_13_1_608}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/76d2/c1e9/2bc1d3f5f3c2c2c1b7eca2ec77e4674b"
              }}
              style={styles.ImageBackground_I11_13_1_609}
            />
          </View>
          <View style={styles.View_I11_13_1_610}>
            <Text style={styles.Text_I11_13_1_610}>Diane S.</Text>
          </View>
        </View>
        <View style={styles.View_11_14}>
          <View style={styles.View_I11_14_1_596}>
            <Text style={styles.Text_I11_14_1_596}>New</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e947/1cb2/ddbaf6177e42cf91cb4a911486d74c18"
            }}
            style={styles.ImageBackground_I11_14_1_612}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f00/1b31/62721431b36b7d48579804063c319639"
            }}
            style={styles.ImageBackground_I11_14_1_613}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ef7/65bc/878a3a3032e1a69ce4deb3600f79e921"
            }}
            style={styles.ImageBackground_I11_14_1_614}
          />
        </View>
      </View>
      <View style={styles.View_11_220}>
        <View style={styles.View_1_618}>
          <View style={styles.View_1_619}>
            <View style={styles.View_1_620}>
              <View style={styles.View_1_621} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/11f1/042d/efa4d198881152c7bf680bf1110c550e"
                }}
                style={styles.ImageBackground_1_622}
              />
            </View>
            <View style={styles.View_1_623}>
              <View style={styles.View_1_624} />
              <View style={styles.View_1_625} />
              <View style={styles.View_1_626}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49c4/d211/e8ab68bcc7f363f671e4df28e6cf88d7"
                  }}
                  style={styles.ImageBackground_1_627}
                />
                <View style={styles.View_1_629}>
                  <Text style={styles.Text_1_629}>83</Text>
                </View>
              </View>
              <View style={styles.View_1_630}>
                <View style={styles.View_1_631}>
                  <Text style={styles.Text_1_631}>5.2k</Text>
                </View>
                <View style={styles.View_1_632}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/465f/50bd/745633726af0d1867df4dafd8112c8be"
                    }}
                    style={styles.ImageBackground_I1_632_1_815}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_1_633} />
        </View>
        <View style={styles.View_1_634}>
          <View style={styles.View_1_635}>
            <View style={styles.View_1_636}>
              <View style={styles.View_1_637}>
                <View style={styles.View_1_638}>
                  <View style={styles.View_1_639} />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c1b0/1830/5a8e0268f722e6762fd9ea9f711f036f"
                    }}
                    style={styles.ImageBackground_1_640}
                  />
                </View>
              </View>
            </View>
            <View style={styles.View_1_641}>
              <View style={styles.View_1_642} />
              <View style={styles.View_1_643} />
              <View style={styles.View_1_644}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49c4/d211/e8ab68bcc7f363f671e4df28e6cf88d7"
                  }}
                  style={styles.ImageBackground_1_645}
                />
                <View style={styles.View_1_647}>
                  <Text style={styles.Text_1_647}>70</Text>
                </View>
              </View>
              <View style={styles.View_1_648}>
                <View style={styles.View_1_649}>
                  <Text style={styles.Text_1_649}>3.4k</Text>
                </View>
                <View style={styles.View_1_650}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/465f/50bd/745633726af0d1867df4dafd8112c8be"
                    }}
                    style={styles.ImageBackground_I1_650_1_815}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_1_651} />
        </View>
      </View>
      <View style={styles.View_1_772} />
      <View style={styles.View_11_256}>
        <View style={styles.View_11_254}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7874/bf27/abc54d12306334101d40a75c6a2e9b2e"
            }}
            style={styles.ImageBackground_I11_254_1_667}
          />
          <View style={styles.View_I11_254_1_666}>
            <Text style={styles.Text_I11_254_1_666}>woo dog</Text>
          </View>
        </View>
        <View style={styles.View_11_255}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/88f5/22e6/03bc4fa60a0e6dcfa9427410a7d258f0"
            }}
            style={styles.ImageBackground_I11_255_1_778}
          />
          <View style={styles.View_I11_255_1_777}>
            <Text style={styles.Text_I11_255_1_777}>Add a post</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_11_143}>
        <View style={styles.View_1_802}>
          <View style={styles.View_1_803} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c5f/6651/00e00765bdcc1db97b19e928627017f6"
            }}
            style={styles.ImageBackground_1_804}
          />
        </View>
        <View style={styles.View_11_141}>
          <View style={styles.View_I11_141_11_136}>
            <View style={styles.View_I11_141_1_808}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49c4/d211/e8ab68bcc7f363f671e4df28e6cf88d7"
                }}
                style={styles.ImageBackground_I11_141_1_809}
              />
              <View style={styles.View_I11_141_1_811}>
                <Text style={styles.Text_I11_141_1_811}>70</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I11_141_11_131}>
            <View style={styles.View_I11_141_1_812}>
              <View style={styles.View_I11_141_1_813}>
                <Text style={styles.Text_I11_141_1_813}>3.4k</Text>
              </View>
              <View style={styles.View_I11_141_11_137}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/465f/50bd/745633726af0d1867df4dafd8112c8be"
                  }}
                  style={styles.ImageBackground_I11_141_11_137_1_815}
                />
              </View>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6095/e7b9/9809ac13d479f68a3e322e66a2adaa65"
          }}
          style={styles.ImageBackground_11_142}
        />
      </View>
      <View style={styles.View_11_163}>
        <View style={styles.View_1_784}>
          <View style={styles.View_1_785} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c578/2702/528f418cb60033287969aeae6c456318"
            }}
            style={styles.ImageBackground_1_786}
          />
        </View>
        <View style={styles.View_11_161}>
          <View style={styles.View_I11_161_11_159}>
            <View style={styles.View_I11_161_1_790}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49c4/d211/e8ab68bcc7f363f671e4df28e6cf88d7"
                }}
                style={styles.ImageBackground_I11_161_1_791}
              />
              <View style={styles.View_I11_161_1_793}>
                <Text style={styles.Text_I11_161_1_793}>83</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I11_161_11_158}>
            <View style={styles.View_I11_161_1_794}>
              <View style={styles.View_I11_161_1_795}>
                <Text style={styles.Text_I11_161_1_795}>5.2k</Text>
              </View>
              <View style={styles.View_I11_161_1_796}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/465f/50bd/745633726af0d1867df4dafd8112c8be"
                  }}
                  style={styles.ImageBackground_I11_161_1_796_1_815}
                />
              </View>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6095/e7b9/9809ac13d479f68a3e322e66a2adaa65"
          }}
          style={styles.ImageBackground_11_162}
        />
      </View>
      <View style={styles.View_11_187}>
        <View style={styles.View_1_744}>
          <View style={styles.View_1_745} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0611/cdb0/b2a1578c14d1e2fe44819355e29fed83"
            }}
            style={styles.ImageBackground_1_746}
          />
        </View>
        <View style={styles.View_11_186}>
          <View style={styles.View_I11_186_11_184}>
            <View style={styles.View_I11_186_1_750}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49c4/d211/e8ab68bcc7f363f671e4df28e6cf88d7"
                }}
                style={styles.ImageBackground_I11_186_1_751}
              />
              <View style={styles.View_I11_186_1_753}>
                <Text style={styles.Text_I11_186_1_753}>38</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I11_186_11_183}>
            <View style={styles.View_I11_186_1_754}>
              <View style={styles.View_I11_186_1_755}>
                <Text style={styles.Text_I11_186_1_755}>1.2k</Text>
              </View>
              <View style={styles.View_I11_186_1_756}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/465f/50bd/745633726af0d1867df4dafd8112c8be"
                  }}
                  style={styles.ImageBackground_I11_186_1_756_1_815}
                />
              </View>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6095/e7b9/9809ac13d479f68a3e322e66a2adaa65"
          }}
          style={styles.ImageBackground_11_178}
        />
      </View>
      <View style={styles.View_11_207}>
        <View style={styles.View_1_759}>
          <View style={styles.View_1_760} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7009/afc3/c44067ce9c0733ee2fa3b3d7847cdb78"
            }}
            style={styles.ImageBackground_1_761}
          />
        </View>
        <View style={styles.View_11_206}>
          <View style={styles.View_I11_206_11_204}>
            <View style={styles.View_I11_206_1_765}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49c4/d211/e8ab68bcc7f363f671e4df28e6cf88d7"
                }}
                style={styles.ImageBackground_I11_206_1_766}
              />
              <View style={styles.View_I11_206_1_768}>
                <Text style={styles.Text_I11_206_1_768}>120</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I11_206_11_203}>
            <View style={styles.View_I11_206_1_769}>
              <View style={styles.View_I11_206_1_770}>
                <Text style={styles.Text_I11_206_1_770}>6.7k</Text>
              </View>
              <View style={styles.View_I11_206_1_771}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/465f/50bd/745633726af0d1867df4dafd8112c8be"
                  }}
                  style={styles.ImageBackground_I11_206_1_771_1_815}
                />
              </View>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6095/e7b9/9809ac13d479f68a3e322e66a2adaa65"
          }}
          style={styles.ImageBackground_11_199}
        />
      </View>
      <View style={styles.View_11_221}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6679/1845/5bf05766e251ac0592f8055975c4e0c2"
          }}
          style={styles.ImageBackground_I11_221_1_503}
        />
        <View style={styles.View_I11_221_1_504}>
          <View style={styles.View_I11_221_1_505}>
            <View style={styles.View_I11_221_1_506}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/097c/5f28/3823d3e86857232217e4f239ebe77753"
                }}
                style={styles.ImageBackground_I11_221_1_507}
              />
            </View>
            <View style={styles.View_I11_221_1_509}>
              <Text style={styles.Text_I11_221_1_509}>Home</Text>
            </View>
          </View>
          <View style={styles.View_I11_221_1_510}>
            <View style={styles.View_I11_221_1_511}>
              <View style={styles.View_I11_221_1_512}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9489/c1e9/a68572667acf8c0e4ea6ab610066fc85"
                  }}
                  style={styles.ImageBackground_I11_221_1_513}
                />
              </View>
            </View>
            <View style={styles.View_I11_221_1_520}>
              <Text style={styles.Text_I11_221_1_520}>Moments</Text>
            </View>
          </View>
          <View style={styles.View_I11_221_1_521}>
            <View style={styles.View_I11_221_1_522}>
              <View style={styles.View_I11_221_1_523}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/566f/cebd/8b97a0a1f7d6bd150e8c4899be84b37f"
                  }}
                  style={styles.ImageBackground_I11_221_1_524}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/23da/cb63/d624e4b868a36bbf06a7c5541b4ad966"
                }}
                style={styles.ImageBackground_I11_221_1_526}
              />
            </View>
            <View style={styles.View_I11_221_1_527}>
              <Text style={styles.Text_I11_221_1_527}>Chat</Text>
            </View>
          </View>
          <View style={styles.View_I11_221_1_528}>
            <View style={styles.View_I11_221_1_529}>
              <View style={styles.View_I11_221_1_530}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c77/0593/8f6b6baaefdcdde616b690913658a335"
                  }}
                  style={styles.ImageBackground_I11_221_1_531}
                />
              </View>
            </View>
            <View style={styles.View_I11_221_1_534}>
              <Text style={styles.Text_I11_221_1_534}>Profile</Text>
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
  View_1_573: {
    width: wp("36.266666666666666%"),
    minWidth: wp("36.266666666666666%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333333%"),
    top: hp("27.732240437158467%"),
    justifyContent: "flex-start"
  },
  Text_1_573: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.06969999939203263,
    textTransform: "none"
  },
  View_1_574: {
    width: wp("17.066666666666666%"),
    minWidth: wp("17.066666666666666%"),
    height: hp("11.202185792349727%"),
    minHeight: hp("11.202185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("109.06666666666666%"),
    top: hp("13.387978142076504%")
  },
  View_1_575: {
    width: wp("17.066666666666666%"),
    minWidth: wp("17.066666666666666%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_576: {
    width: wp("17.066666666666666%"),
    minWidth: wp("17.066666666666666%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_577: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333456%"),
    top: hp("0.27322404371584774%")
  },
  ImageBackground_1_578: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_579: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_580: {
    width: wp("13.066666666666665%"),
    minWidth: wp("13.066666666666665%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133333333333354%"),
    top: hp("9.426229508196721%"),
    justifyContent: "flex-start"
  },
  Text_1_580: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_11_15: {
    width: wp("101.33333333333334%"),
    minWidth: wp("101.33333333333334%"),
    height: hp("11.748633879781421%"),
    minHeight: hp("11.748633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("12.978142076502733%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_11_10: {
    flexGrow: 1,
    width: wp("18.133333333333333%"),
    height: hp("11.748633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.6%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I11_10_1_584: {
    flexGrow: 1,
    width: wp("18.133333333333333%"),
    height: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I11_10_1_585: {
    flexGrow: 1,
    width: wp("15.466666666666667%"),
    height: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3333333333333286%"),
    top: hp("0.6830601092896185%")
  },
  ImageBackground_I11_10_1_586: {
    width: wp("15.466666666666667%"),
    height: hp("7.923497267759563%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I11_10_1_587: {
    width: wp("15.466666666666667%"),
    height: hp("7.923497267759563%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I11_10_1_588: {
    flexGrow: 1,
    width: wp("13.866666666666665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133333333333333%"),
    top: hp("9.972677595628413%"),
    justifyContent: "flex-start"
  },
  Text_I11_10_1_588: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_11_11: {
    flexGrow: 1,
    width: wp("18.133333333333333%"),
    height: hp("11.748633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.8%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I11_11_1_591: {
    flexGrow: 1,
    width: wp("18.133333333333333%"),
    height: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I11_11_1_592: {
    flexGrow: 1,
    width: wp("15.466666666666667%"),
    height: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3333333333333357%"),
    top: hp("0.6830601092896185%")
  },
  ImageBackground_I11_11_1_593: {
    width: wp("15.466666666666667%"),
    height: hp("7.923497267759563%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I11_11_1_594: {
    width: wp("15.466666666666667%"),
    height: hp("7.923497267759563%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I11_11_1_595: {
    flexGrow: 1,
    width: wp("11.200000000000001%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.466666666666665%"),
    top: hp("9.972677595628413%"),
    justifyContent: "flex-start"
  },
  Text_I11_11_1_595: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_11_12: {
    flexGrow: 1,
    width: wp("18.133333333333333%"),
    height: hp("11.748633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.39999999999999%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I11_12_1_599: {
    flexGrow: 1,
    width: wp("18.133333333333333%"),
    height: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I11_12_1_600: {
    flexGrow: 1,
    width: wp("15.466666666666667%"),
    height: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3333333333333428%"),
    top: hp("0.6830601092896185%")
  },
  ImageBackground_I11_12_1_601: {
    width: wp("15.466666666666667%"),
    height: hp("7.923497267759563%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I11_12_1_602: {
    width: wp("15.466666666666667%"),
    height: hp("7.923497267759563%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I11_12_1_603: {
    flexGrow: 1,
    width: wp("10.133333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.000000000000014%"),
    top: hp("9.972677595628413%"),
    justifyContent: "flex-start"
  },
  Text_I11_12_1_603: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_11_13: {
    flexGrow: 1,
    width: wp("18.133333333333333%"),
    height: hp("11.748633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.2%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I11_13_1_606: {
    flexGrow: 1,
    width: wp("18.133333333333333%"),
    height: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I11_13_1_607: {
    flexGrow: 1,
    width: wp("15.466666666666667%"),
    height: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3333333333333286%"),
    top: hp("0.6830601092896185%")
  },
  ImageBackground_I11_13_1_608: {
    width: wp("15.466666666666667%"),
    height: hp("7.923497267759563%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I11_13_1_609: {
    width: wp("15.466666666666667%"),
    height: hp("7.923497267759563%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I11_13_1_610: {
    flexGrow: 1,
    width: wp("10.666666666666668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333343%"),
    top: hp("9.972677595628413%"),
    justifyContent: "flex-start"
  },
  Text_I11_13_1_610: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_11_14: {
    flexGrow: 1,
    width: wp("18.133333333333333%"),
    height: hp("11.748633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I11_14_1_596: {
    flexGrow: 1,
    width: wp("5.866666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333334%"),
    top: hp("9.972677595628413%"),
    justifyContent: "flex-start"
  },
  Text_I11_14_1_596: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  ImageBackground_I11_14_1_612: {
    flexGrow: 1,
    width: wp("15.466666666666667%"),
    height: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.333333333333334%"),
    top: hp("0.6830601092896185%")
  },
  ImageBackground_I11_14_1_613: {
    flexGrow: 1,
    width: wp("18.133333333333333%"),
    height: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I11_14_1_614: {
    flexGrow: 1,
    width: wp("3.2%"),
    height: hp("1.6382269520577186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.733333333333333%"),
    top: hp("3.825136612021856%")
  },
  View_11_220: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("34.97267759562842%"),
    minHeight: hp("34.97267759562842%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("97.40437158469946%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_618: {
    flexGrow: 1,
    width: wp("43.733333333333334%"),
    height: hp("34.97267759562842%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.733333333333334%"),
    top: hp("0%")
  },
  View_1_619: {
    width: wp("43.733333333333334%"),
    height: hp("34.97267759562842%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_620: {
    width: wp("43.733333333333334%"),
    height: hp("34.97267759562842%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_621: {
    width: wp("43.733333333333334%"),
    height: hp("34.97267759562842%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_1_622: {
    width: wp("43.733333333333334%"),
    height: hp("34.97267759562842%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_1_623: {
    width: wp("26.400000000000002%"),
    height: hp("2.73224043715847%"),
    top: hp("31.28415300546446%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133333333333333%")
  },
  View_1_624: {
    width: wp("13.600000000000001%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(161, 161, 162, 1)",
    opacity: 0.4000000059604645
  },
  View_1_625: {
    width: wp("10.666666666666668%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.733333333333327%"),
    backgroundColor: "rgba(161, 161, 162, 1)",
    opacity: 0.4000000059604645
  },
  View_1_626: {
    width: wp("6.755533854166666%"),
    height: hp("2.0491803278688523%"),
    top: hp("0.2732240437158566%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.866666666666667%")
  },
  ImageBackground_1_627: {
    width: wp("2.222220865885417%"),
    height: hp("1.138430736103996%"),
    top: hp("0.40983606557378494%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_629: {
    width: wp("3.4666666666666663%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.288867187500003%"),
    justifyContent: "flex-start"
  },
  Text_1_629: {
    color: "rgba(251, 251, 251, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_1_630: {
    width: wp("9.066666666666666%"),
    height: hp("2.0491803278688523%"),
    top: hp("0.40983606557378494%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4000000000000057%")
  },
  View_1_631: {
    width: wp("5.333333333333334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.733333333333327%"),
    justifyContent: "flex-start"
  },
  Text_1_631: {
    color: "rgba(251, 251, 251, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_1_632: {
    width: wp("2.666666666666667%"),
    height: hp("1.366120218579235%"),
    top: hp("0.2732240437158566%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1_632_1_815: {
    flexGrow: 1,
    width: wp("2.110791015625%"),
    height: hp("1.0244984444373293%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2777750651041657%"),
    top: hp("0.2732240437158282%")
  },
  View_1_633: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("1.0928961748633839%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133333333333333%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_634: {
    flexGrow: 1,
    width: wp("43.733333333333334%"),
    height: hp("27.049180327868854%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_635: {
    width: wp("43.733333333333334%"),
    height: hp("27.049180327868854%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_636: {
    width: wp("43.733333333333334%"),
    height: hp("27.049180327868854%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_637: {
    width: wp("43.733333333333334%"),
    height: hp("27.049180327868854%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_638: {
    width: wp("43.733333333333334%"),
    height: hp("27.049180327868854%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_639: {
    width: wp("43.733333333333334%"),
    height: hp("27.049180327868854%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_1_640: {
    width: wp("43.733333333333334%"),
    height: hp("27.049180327868854%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_1_641: {
    width: wp("26.400000000000002%"),
    height: hp("2.73224043715847%"),
    top: hp("23.087431693989046%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4000000000000004%")
  },
  View_1_642: {
    width: wp("13.600000000000001%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(161, 161, 162, 1)",
    opacity: 0.4000000059604645
  },
  View_1_643: {
    width: wp("10.666666666666668%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.733333333333334%"),
    backgroundColor: "rgba(161, 161, 162, 1)",
    opacity: 0.4000000059604645
  },
  View_1_644: {
    width: wp("6.4888671874999995%"),
    height: hp("2.0491803278688523%"),
    top: hp("0.27322404371587083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.866666666666664%")
  },
  ImageBackground_1_645: {
    width: wp("2.2222249348958334%"),
    height: hp("1.138430736103996%"),
    top: hp("0.4098360655737565%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_647: {
    width: wp("3.2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.288867187500003%"),
    justifyContent: "flex-start"
  },
  Text_1_647: {
    color: "rgba(251, 251, 251, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_1_648: {
    width: wp("9.333333333333334%"),
    height: hp("2.0491803278688523%"),
    top: hp("0.40983606557379915%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999995%")
  },
  View_1_649: {
    width: wp("5.6000000000000005%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333343%"),
    justifyContent: "flex-start"
  },
  Text_1_649: {
    color: "rgba(251, 251, 251, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_1_650: {
    width: wp("2.666666666666667%"),
    height: hp("1.366120218579235%"),
    top: hp("0.2732240437158282%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1_650_1_815: {
    flexGrow: 1,
    width: wp("2.110791015625%"),
    height: hp("1.0244984444373293%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2777750651041675%"),
    top: hp("0.2732240437158566%")
  },
  View_1_651: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("1.0928961748633839%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4000000000000004%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_772: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("70.21857923497268%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.13333333333333%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_11_256: {
    width: wp("91.55061848958333%"),
    minWidth: wp("91.55061848958333%"),
    height: hp("5.601092896174864%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("4.371584699453552%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_11_254: {
    flexGrow: 1,
    width: wp("26.93333333333333%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.13661202185792298%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I11_254_1_667: {
    flexGrow: 1,
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I11_254_1_666: {
    flexGrow: 1,
    width: wp("15.733333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.2%"),
    top: hp("0.27322404371584685%"),
    justifyContent: "flex-start"
  },
  Text_I11_254_1_666: {
    color: "rgba(231, 58, 64, 1)",
    fontSize: 18,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_11_255: {
    flexGrow: 1,
    width: wp("27.55062255859375%"),
    height: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I11_255_1_778: {
    flexGrow: 1,
    width: wp("3.0172892252604164%"),
    height: hp("1.5457403464395492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2.027684613003757%")
  },
  View_I11_255_1_777: {
    flexGrow: 1,
    width: wp("14.666666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.883955891927087%"),
    top: hp("1.775956284153005%"),
    justifyContent: "flex-start"
  },
  Text_I11_255_1_777: {
    color: "rgba(252, 252, 253, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_11_143: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("27.049180327868854%"),
    minHeight: hp("27.049180327868854%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("32.650273224043715%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_802: {
    flexGrow: 1,
    width: wp("43.733333333333334%"),
    height: hp("27.049180327868854%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_803: {
    width: wp("43.733333333333334%"),
    height: hp("27.049180327868854%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_1_804: {
    width: wp("43.733333333333334%"),
    height: hp("27.049180327868854%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_11_141: {
    flexGrow: 1,
    width: wp("25.955533854166667%"),
    height: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333337%"),
    top: hp("23.224043715846996%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I11_141_11_136: {
    flexGrow: 1,
    width: wp("10.222200520833333%"),
    height: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.733333333333333%"),
    top: hp("0%"),
    backgroundColor: "rgba(161, 161, 162, 0.4000000059604645)"
  },
  View_I11_141_1_808: {
    width: wp("6.4888671874999995%"),
    minWidth: wp("6.4888671874999995%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8666666666666671%"),
    top: hp("0.2732240437158495%")
  },
  ImageBackground_I11_141_1_809: {
    width: wp("2.2222249348958334%"),
    height: hp("1.1384390742400956%"),
    top: hp("0.4098360655737636%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I11_141_1_811: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2888671874999993%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I11_141_1_811: {
    color: "rgba(251, 251, 251, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_I11_141_11_131: {
    flexGrow: 1,
    width: wp("13.066666666666665%"),
    height: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(161, 161, 162, 0.4000000059604645)"
  },
  View_I11_141_1_812: {
    width: wp("9.333333333333334%"),
    minWidth: wp("9.333333333333334%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8666666666666654%"),
    top: hp("0.2732240437158495%")
  },
  View_I11_141_1_813: {
    width: wp("5.6000000000000005%"),
    minWidth: wp("5.6000000000000005%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333343%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I11_141_1_813: {
    color: "rgba(251, 251, 251, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_I11_141_11_137: {
    width: wp("2.666666666666667%"),
    height: hp("1.366120218579235%"),
    top: hp("0.2732240437158424%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I11_141_11_137_1_815: {
    flexGrow: 1,
    width: wp("2.110791015625%"),
    height: hp("1.0244901063012295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2777750651041675%"),
    top: hp("0.2732240437158495%")
  },
  ImageBackground_11_142: {
    flexGrow: 1,
    width: wp("6.404785156249999%"),
    height: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333337%"),
    top: hp("1.639344262295083%")
  },
  View_11_163: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("34.97267759562842%"),
    minHeight: hp("34.97267759562842%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("32.650273224043715%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_784: {
    flexGrow: 1,
    width: wp("43.733333333333334%"),
    height: hp("34.97267759562842%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_785: {
    width: wp("43.733333333333334%"),
    height: hp("34.97267759562842%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_1_786: {
    width: wp("43.733333333333334%"),
    height: hp("34.97267759562842%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_11_161: {
    flexGrow: 1,
    width: wp("25.955533854166667%"),
    height: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133333333333333%"),
    top: hp("31.28415300546449%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I11_161_11_159: {
    flexGrow: 1,
    width: wp("10.4888671875%"),
    height: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.466666666666661%"),
    top: hp("0%"),
    backgroundColor: "rgba(161, 161, 162, 0.4000000059604645)"
  },
  View_I11_161_1_790: {
    width: wp("6.755533854166666%"),
    minWidth: wp("6.755533854166666%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8666666666666742%"),
    top: hp("0.2732240437158424%")
  },
  ImageBackground_I11_161_1_791: {
    width: wp("2.222220865885417%"),
    height: hp("1.1384390742400956%"),
    top: hp("0.4098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I11_161_1_793: {
    width: wp("3.4666666666666663%"),
    minWidth: wp("3.4666666666666663%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.288867187500003%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I11_161_1_793: {
    color: "rgba(251, 251, 251, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_I11_161_11_158: {
    flexGrow: 1,
    width: wp("12.8%"),
    height: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(161, 161, 162, 0.4000000059604645)"
  },
  View_I11_161_1_794: {
    width: wp("9.066666666666666%"),
    minWidth: wp("9.066666666666666%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8666666666666742%"),
    top: hp("0.2732240437158424%")
  },
  View_I11_161_1_795: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333343%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I11_161_1_795: {
    color: "rgba(251, 251, 251, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_I11_161_1_796: {
    width: wp("2.666666666666667%"),
    height: hp("1.366120218579235%"),
    top: hp("0.2732240437158424%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I11_161_1_796_1_815: {
    flexGrow: 1,
    width: wp("2.110791015625%"),
    height: hp("1.0244901063012295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2777750651041586%"),
    top: hp("0.2732240437158566%")
  },
  ImageBackground_11_162: {
    flexGrow: 1,
    width: wp("6.404785156249999%"),
    height: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666643%"),
    top: hp("1.639344262295083%")
  },
  View_11_187: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("34.97267759562842%"),
    minHeight: hp("34.97267759562842%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("61.065573770491795%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_744: {
    flexGrow: 1,
    width: wp("43.733333333333334%"),
    height: hp("34.97267759562842%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_745: {
    width: wp("43.733333333333334%"),
    height: hp("34.97267759562842%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_1_746: {
    width: wp("43.733333333333334%"),
    height: hp("34.97267759562842%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_11_186: {
    flexGrow: 1,
    width: wp("25.422200520833332%"),
    height: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333337%"),
    top: hp("30.87431693989072%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I11_186_11_184: {
    flexGrow: 1,
    width: wp("10.4888671875%"),
    height: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333335%"),
    top: hp("0%"),
    backgroundColor: "rgba(161, 161, 162, 0.4000000059604645)"
  },
  View_I11_186_1_750: {
    width: wp("6.755533854166666%"),
    minWidth: wp("6.755533854166666%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8666666666666671%"),
    top: hp("0.2732240437158424%")
  },
  ImageBackground_I11_186_1_751: {
    width: wp("2.2222249348958334%"),
    height: hp("1.1384390742400956%"),
    top: hp("0.4098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I11_186_1_753: {
    width: wp("3.4666666666666663%"),
    minWidth: wp("3.4666666666666663%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2888671874999957%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I11_186_1_753: {
    color: "rgba(251, 251, 251, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_I11_186_11_183: {
    flexGrow: 1,
    width: wp("12.266666666666666%"),
    height: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(161, 161, 162, 0.4000000059604645)"
  },
  View_I11_186_1_754: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8666666666666654%"),
    top: hp("0.2732240437158424%")
  },
  View_I11_186_1_755: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333343%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I11_186_1_755: {
    color: "rgba(251, 251, 251, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_I11_186_1_756: {
    width: wp("2.666666666666667%"),
    height: hp("1.366120218579235%"),
    top: hp("0.2732240437158424%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I11_186_1_756_1_815: {
    flexGrow: 1,
    width: wp("2.110791015625%"),
    height: hp("1.0244901063012295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2777750651041675%"),
    top: hp("0.2732240437158566%")
  },
  ImageBackground_11_178: {
    flexGrow: 1,
    width: wp("6.404785156249999%"),
    height: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333337%"),
    top: hp("1.5027322404371688%")
  },
  View_11_207: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("27.049180327868854%"),
    minHeight: hp("27.049180327868854%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("68.98907103825137%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_759: {
    flexGrow: 1,
    width: wp("43.733333333333334%"),
    height: hp("27.049180327868854%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_760: {
    width: wp("43.733333333333334%"),
    height: hp("27.049180327868854%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_1_761: {
    width: wp("43.733333333333334%"),
    height: hp("27.049180327868854%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_11_206: {
    flexGrow: 1,
    width: wp("27.022200520833334%"),
    height: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133333333333333%"),
    top: hp("22.950819672131146%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I11_206_11_204: {
    flexGrow: 1,
    width: wp("11.2888671875%"),
    height: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.733333333333327%"),
    top: hp("0%"),
    backgroundColor: "rgba(161, 161, 162, 0.4000000059604645)"
  },
  View_I11_206_1_765: {
    width: wp("7.555533854166667%"),
    minWidth: wp("7.555533854166667%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8666666666666742%"),
    top: hp("0.2732240437158424%")
  },
  ImageBackground_I11_206_1_766: {
    width: wp("2.222220865885417%"),
    height: hp("1.1384390742400956%"),
    top: hp("0.4098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I11_206_1_768: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.288867187500003%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I11_206_1_768: {
    color: "rgba(251, 251, 251, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_I11_206_11_203: {
    flexGrow: 1,
    width: wp("12.8%"),
    height: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(161, 161, 162, 0.4000000059604645)"
  },
  View_I11_206_1_769: {
    width: wp("9.066666666666666%"),
    minWidth: wp("9.066666666666666%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8666666666666742%"),
    top: hp("0.2732240437158424%")
  },
  View_I11_206_1_770: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333343%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I11_206_1_770: {
    color: "rgba(251, 251, 251, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_I11_206_1_771: {
    width: wp("2.666666666666667%"),
    height: hp("1.366120218579235%"),
    top: hp("0.2732240437158424%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I11_206_1_771_1_815: {
    flexGrow: 1,
    width: wp("2.110791015625%"),
    height: hp("1.0244901063012295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2777750651041586%"),
    top: hp("0.2732240437158566%")
  },
  ImageBackground_11_199: {
    flexGrow: 1,
    width: wp("6.404785156249999%"),
    height: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666643%"),
    top: hp("1.5027322404371546%")
  },
  View_11_221: {
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
  ImageBackground_I11_221_1_503: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("11.748633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I11_221_1_504: {
    flexGrow: 1,
    width: wp("90.66666666666666%"),
    height: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333333%"),
    top: hp("3.2786885245901516%")
  },
  View_I11_221_1_505: {
    width: wp("8.266666666666666%"),
    height: hp("5.327868852459016%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I11_221_1_506: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8000000000000007%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I11_221_1_507: {
    width: wp("5.066666666666666%"),
    height: hp("2.73224043715847%"),
    top: hp("0.2732240437158566%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6666666666666661%")
  },
  View_I11_221_1_509: {
    width: wp("8.266666666666666%"),
    top: hp("3.278688524590166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I11_221_1_509: {
    color: "rgba(174, 174, 178, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_I11_221_1_510: {
    width: wp("13.066666666666665%"),
    height: hp("5.327868852459016%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.133333333333333%")
  },
  View_I11_221_1_511: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I11_221_1_512: {
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
  ImageBackground_I11_221_1_513: {
    width: wp("5.866666666666666%"),
    height: hp("2.185792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I11_221_1_520: {
    width: wp("13.066666666666665%"),
    top: hp("3.278688524590166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I11_221_1_520: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_I11_221_1_521: {
    width: wp("6.933333333333333%"),
    height: hp("5.327868852459016%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.06666666666667%")
  },
  View_I11_221_1_522: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666657%")
  },
  View_I11_221_1_523: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I11_221_1_524: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("0.2732240437158566%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333314%")
  },
  ImageBackground_I11_221_1_526: {
    width: wp("1.866666666666667%"),
    height: hp("0.9562841530054645%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666643%")
  },
  View_I11_221_1_527: {
    width: wp("6.933333333333333%"),
    top: hp("3.278688524590166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I11_221_1_527: {
    color: "rgba(174, 174, 178, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_I11_221_1_528: {
    width: wp("8.799999999999999%"),
    height: hp("5.327868852459016%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.86666666666667%")
  },
  View_I11_221_1_529: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666629%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I11_221_1_530: {
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
  ImageBackground_I11_221_1_531: {
    width: wp("4.266666666666667%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I11_221_1_534: {
    width: wp("8.799999999999999%"),
    top: hp("3.278688524590166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I11_221_1_534: {
    color: "rgba(174, 174, 178, 1)",
    fontSize: 8,
    fontWeight: "700",
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
