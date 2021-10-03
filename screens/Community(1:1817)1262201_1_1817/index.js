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
      <View style={styles.View_1_1818}>
        <Text style={styles.Text_1_1818}>Recently added</Text>
      </View>
      <View style={styles.View_1_1819}>
        <View style={styles.View_1_1820}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b1dc/4e81/7592201203415604e4044ef8c706a4c1"
            }}
            style={styles.ImageBackground_1_1821}
          />
          <View style={styles.View_1_1822}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b5a7/59b5/a206db776eaf9f88e63ba9a26b256ca2"
              }}
              style={styles.ImageBackground_1_1823}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2e40/dc33/04fab6ea7fe234ed80d82bd183bbe199"
              }}
              style={styles.ImageBackground_1_1824}
            />
          </View>
        </View>
        <View style={styles.View_1_1825}>
          <Text style={styles.Text_1_1825}>Sydney D.</Text>
        </View>
      </View>
      <View style={styles.View_1_1897}>
        <View style={styles.View_1_1898}>
          <View style={styles.View_1_1899}>
            <View style={styles.View_1_1900}>
              <Text style={styles.Text_1_1900}>Gutur, 1074 Wetzel Lane...</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c661/ebbc/45b741f740b46f635ed9a311ba364532"
              }}
              style={styles.ImageBackground_1_1901}
            />
          </View>
        </View>
        <View style={styles.View_1_1904}>
          <View style={styles.View_1_1905}>
            <View style={styles.View_1_1906}>
              <Text style={styles.Text_1_1906}>
                Tokyo, Mitaka atreet, 1 Ch...
              </Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ebf4/ae47/40b65d324136fece19664a7f9c53f438"
              }}
              style={styles.ImageBackground_1_1907}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_1_1913}>
        <View style={styles.View_1_1914}>
          <View style={styles.View_1_1915}>
            <View style={styles.View_1_1916}>
              <View style={styles.View_1_1917} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5391/afcc/9a33d6f244d3d162aca6263dce74e941"
                }}
                style={styles.ImageBackground_1_1918}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eead/f638/28a6d0d650bb2b58bd156b0da5f58927"
              }}
              style={styles.ImageBackground_1_1919}
            />
          </View>
          <View style={styles.View_1_1921}>
            <View style={styles.View_1_1922}>
              <View style={styles.View_1_1923}>
                <View style={styles.View_1_1924}>
                  <Text style={styles.Text_1_1924}>Max Volochkov</Text>
                </View>
              </View>
              <View style={styles.View_1_1925}>
                <View style={styles.View_1_1926}>
                  <Text style={styles.Text_1_1926}>Moscow, Russia</Text>
                </View>
                <View style={styles.View_1_1927}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9a74/0fca/cc9fb3f57831f0e88fc76f300e389079"
                    }}
                    style={styles.ImageBackground_1_1928}
                  />
                </View>
              </View>
            </View>
            <View style={styles.View_1_1931}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0f82/c3bd/e06c9bd7f7bbd849ef0589ab912422a0"
                }}
                style={styles.ImageBackground_1_1932}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4791/9939/429a11c23f43af1eab7c850d85dc8b9a"
                }}
                style={styles.ImageBackground_1_1933}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_1_1934}>
          <View style={styles.View_1_1935}>
            <View style={styles.View_1_1936} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f612/4039/6d433deb2303ec2d032f37f55107ea0a"
              }}
              style={styles.ImageBackground_1_1937}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/314d/2ff6/45bf217c846066f0b0e5532356f7f5b0"
            }}
            style={styles.ImageBackground_1_1938}
          />
          <View style={styles.View_1_1939}>
            <View style={styles.View_1_1940}>
              <Text style={styles.Text_1_1940}>
                Meet! This is Eddie and she’s very obedient...
              </Text>
            </View>
            <View style={styles.View_1_1941}>
              <View style={styles.View_1_1942}>
                <View style={styles.View_1_1943}>
                  <View style={styles.View_1_1944}>
                    <Text style={styles.Text_1_1944}>Kary Jim</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_1_1945}>
                <View style={styles.View_1_1946}>
                  <Text style={styles.Text_1_1946}>England, London</Text>
                </View>
                <View style={styles.View_1_1947}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9a74/0fca/cc9fb3f57831f0e88fc76f300e389079"
                    }}
                    style={styles.ImageBackground_1_1948}
                  />
                </View>
              </View>
            </View>
            <View style={styles.View_1_1951}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0f82/c3bd/e06c9bd7f7bbd849ef0589ab912422a0"
                }}
                style={styles.ImageBackground_1_1952}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1fc4/579b/8efcee9f7afd11e0f05d350d5af22419"
                }}
                style={styles.ImageBackground_1_1953}
              />
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d27d/7974/78c5bbdeb81ab1fe53153e7e2829c38d"
            }}
            style={styles.ImageBackground_1_1954}
          />
        </View>
      </View>
      <View style={styles.View_1_2017} />
      <View style={styles.View_1_2027} />
      <View style={styles.View_53_15}>
        <View style={styles.View_I53_15_1_618}>
          <View style={styles.View_I53_15_1_619}>
            <View style={styles.View_I53_15_1_620}>
              <View style={styles.View_I53_15_1_621} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/11f1/042d/efa4d198881152c7bf680bf1110c550e"
                }}
                style={styles.ImageBackground_I53_15_1_622}
              />
            </View>
            <View style={styles.View_I53_15_1_623}>
              <View style={styles.View_I53_15_1_624} />
              <View style={styles.View_I53_15_1_625} />
              <View style={styles.View_I53_15_1_626}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89e3/d4f1/7e551c161c49f60dbe66af661b4a43a3"
                  }}
                  style={styles.ImageBackground_I53_15_1_627}
                />
                <View style={styles.View_I53_15_1_629}>
                  <Text style={styles.Text_I53_15_1_629}>83</Text>
                </View>
              </View>
              <View style={styles.View_I53_15_1_630}>
                <View style={styles.View_I53_15_1_631}>
                  <Text style={styles.Text_I53_15_1_631}>5.2k</Text>
                </View>
                <View style={styles.View_I53_15_1_632}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d953/cfe5/ddf11650a094e0a75f2405598d474007"
                    }}
                    style={styles.ImageBackground_I53_15_1_632_1_815}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_I53_15_1_633} />
        </View>
        <View style={styles.View_I53_15_1_634}>
          <View style={styles.View_I53_15_1_635}>
            <View style={styles.View_I53_15_1_636}>
              <View style={styles.View_I53_15_1_637}>
                <View style={styles.View_I53_15_1_638}>
                  <View style={styles.View_I53_15_1_639} />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c1b0/1830/5a8e0268f722e6762fd9ea9f711f036f"
                    }}
                    style={styles.ImageBackground_I53_15_1_640}
                  />
                </View>
              </View>
            </View>
            <View style={styles.View_I53_15_1_641}>
              <View style={styles.View_I53_15_1_642} />
              <View style={styles.View_I53_15_1_643} />
              <View style={styles.View_I53_15_1_644}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89e3/d4f1/7e551c161c49f60dbe66af661b4a43a3"
                  }}
                  style={styles.ImageBackground_I53_15_1_645}
                />
                <View style={styles.View_I53_15_1_647}>
                  <Text style={styles.Text_I53_15_1_647}>70</Text>
                </View>
              </View>
              <View style={styles.View_I53_15_1_648}>
                <View style={styles.View_I53_15_1_649}>
                  <Text style={styles.Text_I53_15_1_649}>3.4k</Text>
                </View>
                <View style={styles.View_I53_15_1_650}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d953/cfe5/ddf11650a094e0a75f2405598d474007"
                    }}
                    style={styles.ImageBackground_I53_15_1_650_1_815}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_I53_15_1_651} />
        </View>
      </View>
      <View style={styles.View_53_16}>
        <View style={styles.View_I53_16_1_802}>
          <View style={styles.View_I53_16_1_803} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c5f/6651/00e00765bdcc1db97b19e928627017f6"
            }}
            style={styles.ImageBackground_I53_16_1_804}
          />
        </View>
        <View style={styles.View_I53_16_11_141}>
          <View style={styles.View_I53_16_11_141_11_136}>
            <View style={styles.View_I53_16_11_141_1_808}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89e3/d4f1/7e551c161c49f60dbe66af661b4a43a3"
                }}
                style={styles.ImageBackground_I53_16_11_141_1_809}
              />
              <View style={styles.View_I53_16_11_141_1_811}>
                <Text style={styles.Text_I53_16_11_141_1_811}>70</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I53_16_11_141_11_131}>
            <View style={styles.View_I53_16_11_141_1_812}>
              <View style={styles.View_I53_16_11_141_1_813}>
                <Text style={styles.Text_I53_16_11_141_1_813}>3.4k</Text>
              </View>
              <View style={styles.View_I53_16_11_141_11_137}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d953/cfe5/ddf11650a094e0a75f2405598d474007"
                  }}
                  style={styles.ImageBackground_I53_16_11_141_11_137_1_815}
                />
              </View>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aa80/13ad/f1c09d06eddfbc10b842544c58a01d0a"
          }}
          style={styles.ImageBackground_I53_16_11_142}
        />
      </View>
      <View style={styles.View_53_17}>
        <View style={styles.View_I53_17_1_784}>
          <View style={styles.View_I53_17_1_785} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c578/2702/528f418cb60033287969aeae6c456318"
            }}
            style={styles.ImageBackground_I53_17_1_786}
          />
        </View>
        <View style={styles.View_I53_17_11_161}>
          <View style={styles.View_I53_17_11_161_11_159}>
            <View style={styles.View_I53_17_11_161_1_790}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89e3/d4f1/7e551c161c49f60dbe66af661b4a43a3"
                }}
                style={styles.ImageBackground_I53_17_11_161_1_791}
              />
              <View style={styles.View_I53_17_11_161_1_793}>
                <Text style={styles.Text_I53_17_11_161_1_793}>83</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I53_17_11_161_11_158}>
            <View style={styles.View_I53_17_11_161_1_794}>
              <View style={styles.View_I53_17_11_161_1_795}>
                <Text style={styles.Text_I53_17_11_161_1_795}>5.2k</Text>
              </View>
              <View style={styles.View_I53_17_11_161_1_796}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d953/cfe5/ddf11650a094e0a75f2405598d474007"
                  }}
                  style={styles.ImageBackground_I53_17_11_161_1_796_1_815}
                />
              </View>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aa80/13ad/f1c09d06eddfbc10b842544c58a01d0a"
          }}
          style={styles.ImageBackground_I53_17_11_162}
        />
      </View>
      <View style={styles.View_53_18}>
        <View style={styles.View_I53_18_1_744}>
          <View style={styles.View_I53_18_1_745} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0611/cdb0/b2a1578c14d1e2fe44819355e29fed83"
            }}
            style={styles.ImageBackground_I53_18_1_746}
          />
        </View>
        <View style={styles.View_I53_18_11_186}>
          <View style={styles.View_I53_18_11_186_11_184}>
            <View style={styles.View_I53_18_11_186_1_750}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89e3/d4f1/7e551c161c49f60dbe66af661b4a43a3"
                }}
                style={styles.ImageBackground_I53_18_11_186_1_751}
              />
              <View style={styles.View_I53_18_11_186_1_753}>
                <Text style={styles.Text_I53_18_11_186_1_753}>38</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I53_18_11_186_11_183}>
            <View style={styles.View_I53_18_11_186_1_754}>
              <View style={styles.View_I53_18_11_186_1_755}>
                <Text style={styles.Text_I53_18_11_186_1_755}>1.2k</Text>
              </View>
              <View style={styles.View_I53_18_11_186_1_756}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d953/cfe5/ddf11650a094e0a75f2405598d474007"
                  }}
                  style={styles.ImageBackground_I53_18_11_186_1_756_1_815}
                />
              </View>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aa80/13ad/f1c09d06eddfbc10b842544c58a01d0a"
          }}
          style={styles.ImageBackground_I53_18_11_178}
        />
      </View>
      <View style={styles.View_53_19}>
        <View style={styles.View_I53_19_1_759}>
          <View style={styles.View_I53_19_1_760} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7009/afc3/c44067ce9c0733ee2fa3b3d7847cdb78"
            }}
            style={styles.ImageBackground_I53_19_1_761}
          />
        </View>
        <View style={styles.View_I53_19_11_206}>
          <View style={styles.View_I53_19_11_206_11_204}>
            <View style={styles.View_I53_19_11_206_1_765}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89e3/d4f1/7e551c161c49f60dbe66af661b4a43a3"
                }}
                style={styles.ImageBackground_I53_19_11_206_1_766}
              />
              <View style={styles.View_I53_19_11_206_1_768}>
                <Text style={styles.Text_I53_19_11_206_1_768}>120</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I53_19_11_206_11_203}>
            <View style={styles.View_I53_19_11_206_1_769}>
              <View style={styles.View_I53_19_11_206_1_770}>
                <Text style={styles.Text_I53_19_11_206_1_770}>6.7k</Text>
              </View>
              <View style={styles.View_I53_19_11_206_1_771}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d953/cfe5/ddf11650a094e0a75f2405598d474007"
                  }}
                  style={styles.ImageBackground_I53_19_11_206_1_771_1_815}
                />
              </View>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aa80/13ad/f1c09d06eddfbc10b842544c58a01d0a"
          }}
          style={styles.ImageBackground_I53_19_11_199}
        />
      </View>
      <View style={styles.View_1_1955}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d76a/1854/6b42154bc25db8d658c3df981a95bc49"
          }}
          style={styles.ImageBackground_1_1956}
        />
        <View style={styles.View_1_1957}>
          <View style={styles.View_1_1958}>
            <View style={styles.View_1_1959}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0951/de37/e283a8826a081ff0a27bc6927aff0cca"
                }}
                style={styles.ImageBackground_1_1960}
              />
            </View>
            <View style={styles.View_1_1962}>
              <Text style={styles.Text_1_1962}>Home</Text>
            </View>
          </View>
          <View style={styles.View_1_1963}>
            <View style={styles.View_1_1964}>
              <View style={styles.View_1_1965}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e857/54f1/0077a491688d99d7ff40572910ffbf77"
                  }}
                  style={styles.ImageBackground_1_1966}
                />
              </View>
            </View>
            <View style={styles.View_1_1973}>
              <Text style={styles.Text_1_1973}>Moments</Text>
            </View>
          </View>
          <View style={styles.View_1_1974}>
            <View style={styles.View_1_1975}>
              <View style={styles.View_1_1976}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/53ff/c648/d8ac316ae89bce1352048713c707afe2"
                  }}
                  style={styles.ImageBackground_1_1977}
                />
              </View>
            </View>
            <View style={styles.View_1_1979}>
              <Text style={styles.Text_1_1979}>Chat</Text>
            </View>
          </View>
          <View style={styles.View_1_1980}>
            <View style={styles.View_1_1981}>
              <View style={styles.View_1_1982}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc92/2f8b/acb85641b5ea57e52a1978d2a72d91a8"
                  }}
                  style={styles.ImageBackground_1_1983}
                />
              </View>
            </View>
            <View style={styles.View_1_1986}>
              <Text style={styles.Text_1_1986}>Profile</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_53_135}>
        <View style={styles.View_I53_135_11_10}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5510/632d/4b8f1b1a5122049a8469155dc2c3f7a4"
            }}
            style={styles.ImageBackground_I53_135_11_10_1_584}
          />
          <View style={styles.View_I53_135_11_10_1_585}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6582/f366/5bba5e50f05085f1bb6167a44454be54"
              }}
              style={styles.ImageBackground_I53_135_11_10_1_586}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/76db/9926/fce48d052b6ddbe739cf52ecaf116d5b"
              }}
              style={styles.ImageBackground_I53_135_11_10_1_587}
            />
          </View>
          <View style={styles.View_I53_135_11_10_1_588}>
            <Text style={styles.Text_I53_135_11_10_1_588}>Charles G.</Text>
          </View>
        </View>
        <View style={styles.View_I53_135_11_11}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ee9e/573e/451e4d9a6213c609fedecd927d9be6ce"
            }}
            style={styles.ImageBackground_I53_135_11_11_1_591}
          />
          <View style={styles.View_I53_135_11_11_1_592}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c93a/162d/5fa699bbce57f005e8a747982abafa1b"
              }}
              style={styles.ImageBackground_I53_135_11_11_1_593}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eba4/cfe6/7d8ca289fbae194c0e65621a3cfe611f"
              }}
              style={styles.ImageBackground_I53_135_11_11_1_594}
            />
          </View>
          <View style={styles.View_I53_135_11_11_1_595}>
            <Text style={styles.Text_I53_135_11_11_1_595}>Chloe H.</Text>
          </View>
        </View>
        <View style={styles.View_I53_135_11_12}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ee9e/573e/451e4d9a6213c609fedecd927d9be6ce"
            }}
            style={styles.ImageBackground_I53_135_11_12_1_599}
          />
          <View style={styles.View_I53_135_11_12_1_600}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6582/f366/5bba5e50f05085f1bb6167a44454be54"
              }}
              style={styles.ImageBackground_I53_135_11_12_1_601}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c19/c8a2/16232d9fd52427c6211a6e93047c257f"
              }}
              style={styles.ImageBackground_I53_135_11_12_1_602}
            />
          </View>
          <View style={styles.View_I53_135_11_12_1_603}>
            <Text style={styles.Text_I53_135_11_12_1_603}>Kerry H.</Text>
          </View>
        </View>
        <View style={styles.View_I53_135_11_13}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ee9e/573e/451e4d9a6213c609fedecd927d9be6ce"
            }}
            style={styles.ImageBackground_I53_135_11_13_1_606}
          />
          <View style={styles.View_I53_135_11_13_1_607}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6582/f366/5bba5e50f05085f1bb6167a44454be54"
              }}
              style={styles.ImageBackground_I53_135_11_13_1_608}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/76d2/c1e9/2bc1d3f5f3c2c2c1b7eca2ec77e4674b"
              }}
              style={styles.ImageBackground_I53_135_11_13_1_609}
            />
          </View>
          <View style={styles.View_I53_135_11_13_1_610}>
            <Text style={styles.Text_I53_135_11_13_1_610}>Diane S.</Text>
          </View>
        </View>
        <View style={styles.View_I53_135_11_14}>
          <View style={styles.View_I53_135_11_14_1_596}>
            <Text style={styles.Text_I53_135_11_14_1_596}>New</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e947/1cb2/ddbaf6177e42cf91cb4a911486d74c18"
            }}
            style={styles.ImageBackground_I53_135_11_14_1_612}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f00/1b31/62721431b36b7d48579804063c319639"
            }}
            style={styles.ImageBackground_I53_135_11_14_1_613}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/93e5/ae48/0b2125d31814142a27f47e7fac00b426"
            }}
            style={styles.ImageBackground_I53_135_11_14_1_614}
          />
        </View>
      </View>
      <View style={styles.View_53_136}>
        <View style={styles.View_I53_136_11_254}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7874/bf27/abc54d12306334101d40a75c6a2e9b2e"
            }}
            style={styles.ImageBackground_I53_136_11_254_1_667}
          />
          <View style={styles.View_I53_136_11_254_1_666}>
            <Text style={styles.Text_I53_136_11_254_1_666}>woo dog</Text>
          </View>
        </View>
        <View style={styles.View_I53_136_11_255}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/80c9/c37d/93bb49b35467300514c02ea3374c1dd0"
            }}
            style={styles.ImageBackground_I53_136_11_255_1_778}
          />
          <View style={styles.View_I53_136_11_255_1_777}>
            <Text style={styles.Text_I53_136_11_255_1_777}>Add a post</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(22, 22, 22, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_1_1818: {
    width: wp("36.266666666666666%"),
    minWidth: wp("36.266666666666666%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333333%"),
    top: hp("27.86885245901639%"),
    justifyContent: "flex-start"
  },
  Text_1_1818: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.06969999939203263,
    textTransform: "none"
  },
  View_1_1819: {
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
  View_1_1820: {
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
  ImageBackground_1_1821: {
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
  View_1_1822: {
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
  ImageBackground_1_1823: {
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
  ImageBackground_1_1824: {
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
  View_1_1825: {
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
  Text_1_1825: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_1_1897: {
    width: wp("91.73333333333333%"),
    minWidth: wp("91.73333333333333%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("100.27322404371584%")
  },
  View_1_1898: {
    width: wp("40.8%"),
    minWidth: wp("40.8%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1899: {
    width: wp("40.8%"),
    minWidth: wp("40.8%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1900: {
    width: wp("36.8%"),
    minWidth: wp("36.8%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.999999999999999%"),
    top: hp("0.1366120218579283%"),
    justifyContent: "flex-start"
  },
  Text_1_1900: {
    color: "rgba(32, 32, 32, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  ImageBackground_1_1901: {
    width: wp("2.666666666666667%"),
    height: hp("1.6588638389045425%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1904: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.99999999999999%"),
    top: hp("0%")
  },
  View_1_1905: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1906: {
    width: wp("39.733333333333334%"),
    minWidth: wp("39.733333333333334%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.000000000000007%"),
    top: hp("0.1366120218579283%"),
    justifyContent: "flex-start"
  },
  Text_1_1906: {
    color: "rgba(32, 32, 32, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  ImageBackground_1_1907: {
    width: wp("2.666666666666667%"),
    height: hp("1.6588638389045425%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1913: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("34.97267759562842%"),
    minHeight: hp("34.97267759562842%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("100.27322404371584%")
  },
  View_1_1914: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("27.049180327868854%"),
    minHeight: hp("27.049180327868854%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1915: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("27.049180327868854%"),
    minHeight: hp("27.049180327868854%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1916: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("27.049180327868854%"),
    minHeight: hp("27.049180327868854%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1917: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("27.049180327868854%"),
    minHeight: hp("27.049180327868854%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_1_1918: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("27.049180327868854%"),
    minHeight: hp("27.049180327868854%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_1_1919: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("8.060109289617486%"),
    minHeight: hp("8.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18.98907103825138%")
  },
  View_1_1921: {
    width: wp("37.6%"),
    minWidth: wp("37.6%"),
    height: hp("4.781420765027322%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000001%"),
    top: hp("20.628415300546465%")
  },
  View_1_1922: {
    width: wp("25.333333333333336%"),
    minWidth: wp("25.333333333333336%"),
    height: hp("4.166666666666666%"),
    minHeight: hp("4.166666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2732240437158282%")
  },
  View_1_1923: {
    width: wp("25.333333333333336%"),
    minWidth: wp("25.333333333333336%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1924: {
    width: wp("25.333333333333336%"),
    minWidth: wp("25.333333333333336%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_1924: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04919999957084656,
    textTransform: "none"
  },
  View_1_1925: {
    width: wp("25.333333333333336%"),
    minWidth: wp("25.333333333333336%"),
    height: hp("1.7759562841530054%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.39071038251366%")
  },
  View_1_1926: {
    width: wp("22.133333333333333%"),
    minWidth: wp("22.133333333333333%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_1926: {
    color: "rgba(161, 161, 162, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_1_1927: {
    width: wp("2.666666666666667%"),
    height: hp("1.366120218579235%"),
    top: hp("0.20491803278689247%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_1928: {
    width: wp("1.6666666666666667%"),
    height: hp("1.0245901639344261%"),
    top: hp("0.17076502732240328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4999999999999991%")
  },
  View_1_1931: {
    width: wp("9.333333333333334%"),
    minWidth: wp("9.333333333333334%"),
    height: hp("4.781420765027322%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.266666666666666%"),
    top: hp("0%")
  },
  ImageBackground_1_1932: {
    width: wp("9.333333333333334%"),
    minWidth: wp("9.333333333333334%"),
    height: hp("4.781420765027322%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_1933: {
    width: wp("9.333333333333334%"),
    minWidth: wp("9.333333333333334%"),
    height: hp("4.781420765027322%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1934: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("34.97267759562842%"),
    minHeight: hp("34.97267759562842%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.733333333333334%"),
    top: hp("0%")
  },
  View_1_1935: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("34.97267759562842%"),
    minHeight: hp("34.97267759562842%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1936: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("34.97267759562842%"),
    minHeight: hp("34.97267759562842%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_1_1937: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("34.97267759562842%"),
    minHeight: hp("34.97267759562842%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_1_1938: {
    width: wp("43.46666666666666%"),
    minWidth: wp("43.46666666666666%"),
    height: hp("15.983606557377051%"),
    minHeight: hp("15.983606557377051%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666586%"),
    top: hp("18.98907103825138%")
  },
  View_1_1939: {
    width: wp("37.6%"),
    minWidth: wp("37.6%"),
    height: hp("11.885245901639344%"),
    minHeight: hp("11.885245901639344%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("21.72131147540985%")
  },
  View_1_1940: {
    width: wp("37.6%"),
    minWidth: wp("37.6%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_1940: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04919999957084656,
    textTransform: "none"
  },
  View_1_1941: {
    width: wp("25.6%"),
    minWidth: wp("25.6%"),
    height: hp("4.166666666666666%"),
    minHeight: hp("4.166666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.377049180327873%")
  },
  View_1_1942: {
    width: wp("14.666666666666666%"),
    minWidth: wp("14.666666666666666%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1943: {
    width: wp("14.666666666666666%"),
    minWidth: wp("14.666666666666666%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1944: {
    width: wp("14.666666666666666%"),
    minWidth: wp("14.666666666666666%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_1944: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04919999957084656,
    textTransform: "none"
  },
  View_1_1945: {
    width: wp("25.6%"),
    minWidth: wp("25.6%"),
    height: hp("1.7759562841530054%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.390710382513646%")
  },
  View_1_1946: {
    width: wp("22.133333333333333%"),
    minWidth: wp("22.133333333333333%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666615%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_1946: {
    color: "rgba(161, 161, 162, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_1_1947: {
    width: wp("2.666666666666667%"),
    height: hp("1.366120218579235%"),
    top: hp("0.20491803278687826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_1948: {
    width: wp("1.6666666666666667%"),
    height: hp("1.0245901639344261%"),
    top: hp("0.1707650273224317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5%")
  },
  View_1_1951: {
    width: wp("9.333333333333334%"),
    minWidth: wp("9.333333333333334%"),
    height: hp("4.781420765027322%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.266666666666666%"),
    top: hp("7.103825136612016%")
  },
  ImageBackground_1_1952: {
    width: wp("9.333333333333334%"),
    minWidth: wp("9.333333333333334%"),
    height: hp("4.781420765027322%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_1953: {
    width: wp("9.333333333333334%"),
    minWidth: wp("9.333333333333334%"),
    height: hp("4.781420765027322%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_1954: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("20.081967213114766%")
  },
  View_1_2017: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("70.21857923497268%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.13333333333333%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2027: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("62.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_53_15: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("34.97267759562842%"),
    minHeight: hp("34.97267759562842%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("97.54098360655738%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I53_15_1_618: {
    flexGrow: 1,
    width: wp("43.733333333333334%"),
    height: hp("34.97267759562842%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.733333333333334%"),
    top: hp("0%")
  },
  View_I53_15_1_619: {
    width: wp("43.733333333333334%"),
    height: hp("34.97267759562842%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I53_15_1_620: {
    width: wp("43.733333333333334%"),
    height: hp("34.97267759562842%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I53_15_1_621: {
    width: wp("43.733333333333334%"),
    height: hp("34.97267759562842%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_I53_15_1_622: {
    width: wp("43.733333333333334%"),
    height: hp("34.97267759562842%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I53_15_1_623: {
    width: wp("26.400000000000002%"),
    height: hp("2.73224043715847%"),
    top: hp("31.284153005464475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133333333333333%")
  },
  View_I53_15_1_624: {
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
  View_I53_15_1_625: {
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
  View_I53_15_1_626: {
    width: wp("6.755533854166666%"),
    height: hp("2.0491803278688523%"),
    top: hp("0.2732240437158566%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.866666666666667%")
  },
  ImageBackground_I53_15_1_627: {
    width: wp("2.222220865885417%"),
    height: hp("1.1384390742400956%"),
    top: hp("0.40983606557378494%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I53_15_1_629: {
    width: wp("3.4666666666666663%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.288867187500003%"),
    justifyContent: "flex-start"
  },
  Text_I53_15_1_629: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_I53_15_1_630: {
    width: wp("9.066666666666666%"),
    height: hp("2.0491803278688523%"),
    top: hp("0.40983606557378494%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4000000000000057%")
  },
  View_I53_15_1_631: {
    width: wp("5.333333333333334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.733333333333327%"),
    justifyContent: "flex-start"
  },
  Text_I53_15_1_631: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_I53_15_1_632: {
    width: wp("2.666666666666667%"),
    height: hp("1.366120218579235%"),
    top: hp("0.2732240437158566%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I53_15_1_632_1_815: {
    flexGrow: 1,
    width: wp("2.110791015625%"),
    height: hp("1.0244901063012295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2777750651041657%"),
    top: hp("0.2732240437158282%")
  },
  View_I53_15_1_633: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("1.0928961748633839%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133333333333333%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I53_15_1_634: {
    flexGrow: 1,
    width: wp("43.733333333333334%"),
    height: hp("27.049180327868854%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I53_15_1_635: {
    width: wp("43.733333333333334%"),
    height: hp("27.049180327868854%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I53_15_1_636: {
    width: wp("43.733333333333334%"),
    height: hp("27.049180327868854%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I53_15_1_637: {
    width: wp("43.733333333333334%"),
    height: hp("27.049180327868854%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I53_15_1_638: {
    width: wp("43.733333333333334%"),
    height: hp("27.049180327868854%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I53_15_1_639: {
    width: wp("43.733333333333334%"),
    height: hp("27.049180327868854%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_I53_15_1_640: {
    width: wp("43.733333333333334%"),
    height: hp("27.049180327868854%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I53_15_1_641: {
    width: wp("26.400000000000002%"),
    height: hp("2.73224043715847%"),
    top: hp("23.08743169398906%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4000000000000004%")
  },
  View_I53_15_1_642: {
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
  View_I53_15_1_643: {
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
  View_I53_15_1_644: {
    width: wp("6.4888671874999995%"),
    height: hp("2.0491803278688523%"),
    top: hp("0.27322404371587083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.866666666666664%")
  },
  ImageBackground_I53_15_1_645: {
    width: wp("2.2222249348958334%"),
    height: hp("1.1384390742400956%"),
    top: hp("0.4098360655737565%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I53_15_1_647: {
    width: wp("3.2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.288867187500003%"),
    justifyContent: "flex-start"
  },
  Text_I53_15_1_647: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_I53_15_1_648: {
    width: wp("9.333333333333334%"),
    height: hp("2.0491803278688523%"),
    top: hp("0.4098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999995%")
  },
  View_I53_15_1_649: {
    width: wp("5.6000000000000005%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333343%"),
    justifyContent: "flex-start"
  },
  Text_I53_15_1_649: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_I53_15_1_650: {
    width: wp("2.666666666666667%"),
    height: hp("1.366120218579235%"),
    top: hp("0.2732240437158566%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I53_15_1_650_1_815: {
    flexGrow: 1,
    width: wp("2.110791015625%"),
    height: hp("1.0244901063012295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2777750651041675%"),
    top: hp("0.2732240437158424%")
  },
  View_I53_15_1_651: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("1.0928961748633839%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4000000000000004%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_53_16: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("27.049180327868854%"),
    minHeight: hp("27.049180327868854%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("32.78688524590164%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I53_16_1_802: {
    flexGrow: 1,
    width: wp("43.733333333333334%"),
    height: hp("27.049180327868854%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I53_16_1_803: {
    width: wp("43.733333333333334%"),
    height: hp("27.049180327868854%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_I53_16_1_804: {
    width: wp("43.733333333333334%"),
    height: hp("27.049180327868854%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I53_16_11_141: {
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
  View_I53_16_11_141_11_136: {
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
  View_I53_16_11_141_1_808: {
    width: wp("6.4888671874999995%"),
    minWidth: wp("6.4888671874999995%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8666666666666671%"),
    top: hp("0.2732240437158424%")
  },
  ImageBackground_I53_16_11_141_1_809: {
    width: wp("2.2222249348958334%"),
    height: hp("1.138430736103996%"),
    top: hp("0.40983606557377783%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I53_16_11_141_1_811: {
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
  Text_I53_16_11_141_1_811: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_I53_16_11_141_11_131: {
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
  View_I53_16_11_141_1_812: {
    width: wp("9.333333333333334%"),
    minWidth: wp("9.333333333333334%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8666666666666654%"),
    top: hp("0.2732240437158424%")
  },
  View_I53_16_11_141_1_813: {
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
  Text_I53_16_11_141_1_813: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_I53_16_11_141_11_137: {
    width: wp("2.666666666666667%"),
    height: hp("1.366120218579235%"),
    top: hp("0.2732240437158495%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I53_16_11_141_11_137_1_815: {
    flexGrow: 1,
    width: wp("2.110791015625%"),
    height: hp("1.0244984444373293%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2777750651041675%"),
    top: hp("0.2732240437158495%")
  },
  ImageBackground_I53_16_11_142: {
    flexGrow: 1,
    width: wp("6.404785156249999%"),
    height: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333337%"),
    top: hp("1.639344262295083%")
  },
  View_53_17: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("34.97267759562842%"),
    minHeight: hp("34.97267759562842%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("32.78688524590164%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I53_17_1_784: {
    flexGrow: 1,
    width: wp("43.733333333333334%"),
    height: hp("34.97267759562842%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I53_17_1_785: {
    width: wp("43.733333333333334%"),
    height: hp("34.97267759562842%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_I53_17_1_786: {
    width: wp("43.733333333333334%"),
    height: hp("34.97267759562842%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I53_17_11_161: {
    flexGrow: 1,
    width: wp("25.955533854166667%"),
    height: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133333333333333%"),
    top: hp("31.284153005464482%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I53_17_11_161_11_159: {
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
  View_I53_17_11_161_1_790: {
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
  ImageBackground_I53_17_11_161_1_791: {
    width: wp("2.222220865885417%"),
    height: hp("1.138430736103996%"),
    top: hp("0.40983606557378494%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I53_17_11_161_1_793: {
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
  Text_I53_17_11_161_1_793: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_I53_17_11_161_11_158: {
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
  View_I53_17_11_161_1_794: {
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
  View_I53_17_11_161_1_795: {
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
  Text_I53_17_11_161_1_795: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_I53_17_11_161_1_796: {
    width: wp("2.666666666666667%"),
    height: hp("1.366120218579235%"),
    top: hp("0.2732240437158566%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I53_17_11_161_1_796_1_815: {
    flexGrow: 1,
    width: wp("2.110791015625%"),
    height: hp("1.0244984444373293%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2777750651041586%"),
    top: hp("0.2732240437158424%")
  },
  ImageBackground_I53_17_11_162: {
    flexGrow: 1,
    width: wp("6.404785156249999%"),
    height: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666643%"),
    top: hp("1.639344262295083%")
  },
  View_53_18: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("34.97267759562842%"),
    minHeight: hp("34.97267759562842%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("61.20218579234973%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I53_18_1_744: {
    flexGrow: 1,
    width: wp("43.733333333333334%"),
    height: hp("34.97267759562842%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I53_18_1_745: {
    width: wp("43.733333333333334%"),
    height: hp("34.97267759562842%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_I53_18_1_746: {
    width: wp("43.733333333333334%"),
    height: hp("34.97267759562842%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I53_18_11_186: {
    flexGrow: 1,
    width: wp("25.422200520833332%"),
    height: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333337%"),
    top: hp("30.87431693989071%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I53_18_11_186_11_184: {
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
  View_I53_18_11_186_1_750: {
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
  ImageBackground_I53_18_11_186_1_751: {
    width: wp("2.2222249348958334%"),
    height: hp("1.138430736103996%"),
    top: hp("0.4098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I53_18_11_186_1_753: {
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
  Text_I53_18_11_186_1_753: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_I53_18_11_186_11_183: {
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
  View_I53_18_11_186_1_754: {
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
  View_I53_18_11_186_1_755: {
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
  Text_I53_18_11_186_1_755: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_I53_18_11_186_1_756: {
    width: wp("2.666666666666667%"),
    height: hp("1.366120218579235%"),
    top: hp("0.2732240437158424%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I53_18_11_186_1_756_1_815: {
    flexGrow: 1,
    width: wp("2.110791015625%"),
    height: hp("1.0244984444373293%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2777750651041675%"),
    top: hp("0.2732240437158566%")
  },
  ImageBackground_I53_18_11_178: {
    flexGrow: 1,
    width: wp("6.404785156249999%"),
    height: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333337%"),
    top: hp("1.5027322404371546%")
  },
  View_53_19: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("27.049180327868854%"),
    minHeight: hp("27.049180327868854%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("69.12568306010928%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I53_19_1_759: {
    flexGrow: 1,
    width: wp("43.733333333333334%"),
    height: hp("27.049180327868854%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I53_19_1_760: {
    width: wp("43.733333333333334%"),
    height: hp("27.049180327868854%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_I53_19_1_761: {
    width: wp("43.733333333333334%"),
    height: hp("27.049180327868854%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I53_19_11_206: {
    flexGrow: 1,
    width: wp("27.022200520833334%"),
    height: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133333333333333%"),
    top: hp("22.95081967213116%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I53_19_11_206_11_204: {
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
  View_I53_19_11_206_1_765: {
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
  ImageBackground_I53_19_11_206_1_766: {
    width: wp("2.222220865885417%"),
    height: hp("1.138430736103996%"),
    top: hp("0.4098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I53_19_11_206_1_768: {
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
  Text_I53_19_11_206_1_768: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_I53_19_11_206_11_203: {
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
  View_I53_19_11_206_1_769: {
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
  View_I53_19_11_206_1_770: {
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
  Text_I53_19_11_206_1_770: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_I53_19_11_206_1_771: {
    width: wp("2.666666666666667%"),
    height: hp("1.366120218579235%"),
    top: hp("0.2732240437158424%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I53_19_11_206_1_771_1_815: {
    flexGrow: 1,
    width: wp("2.110791015625%"),
    height: hp("1.0244984444373293%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2777750651041586%"),
    top: hp("0.2732240437158566%")
  },
  ImageBackground_I53_19_11_199: {
    flexGrow: 1,
    width: wp("6.404785156249999%"),
    height: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666643%"),
    top: hp("1.5027322404371546%")
  },
  View_1_1955: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.655737704918032%"),
    minHeight: hp("10.655737704918032%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("100.27322404371584%")
  },
  ImageBackground_1_1956: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.655737704918032%"),
    minHeight: hp("10.655737704918032%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1957: {
    width: wp("90.66666666666666%"),
    minWidth: wp("90.66666666666666%"),
    height: hp("5.327868852459016%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("2.595628415300567%")
  },
  View_1_1958: {
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
  View_1_1959: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8000000000000007%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_1960: {
    width: wp("5.066666666666666%"),
    height: hp("2.73224043715847%"),
    top: hp("0.2732240437158282%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6666666666666661%")
  },
  View_1_1962: {
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
  Text_1_1962: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_1_1963: {
    width: wp("13.066666666666665%"),
    minWidth: wp("13.066666666666665%"),
    height: hp("5.327868852459016%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.133333333333333%"),
    top: hp("0%")
  },
  View_1_1964: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999993%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1965: {
    width: wp("5.866666666666666%"),
    minWidth: wp("5.866666666666666%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666657%"),
    top: hp("0.5464480874316848%")
  },
  ImageBackground_1_1966: {
    width: wp("5.866666666666666%"),
    height: hp("2.185792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1973: {
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
  Text_1_1973: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_1_1974: {
    width: wp("6.933333333333333%"),
    minWidth: wp("6.933333333333333%"),
    height: hp("5.327868852459016%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.06666666666667%"),
    top: hp("0%")
  },
  View_1_1975: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666586%"),
    top: hp("0%")
  },
  View_1_1976: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_1977: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("0.2732240437158282%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333456%")
  },
  View_1_1979: {
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
  Text_1_1979: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_1_1980: {
    width: wp("8.799999999999999%"),
    minWidth: wp("8.799999999999999%"),
    height: hp("5.327868852459016%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.86666666666667%"),
    top: hp("0%")
  },
  View_1_1981: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666629%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1982: {
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
  ImageBackground_1_1983: {
    width: wp("4.266666666666667%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1986: {
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
  Text_1_1986: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_53_135: {
    width: wp("101.33333333333334%"),
    minWidth: wp("101.33333333333334%"),
    height: hp("11.748633879781421%"),
    minHeight: hp("11.748633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("13.114754098360656%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I53_135_11_10: {
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
  ImageBackground_I53_135_11_10_1_584: {
    flexGrow: 1,
    width: wp("18.133333333333333%"),
    height: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I53_135_11_10_1_585: {
    flexGrow: 1,
    width: wp("15.466666666666667%"),
    height: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3333333333333286%"),
    top: hp("0.6830601092896167%")
  },
  ImageBackground_I53_135_11_10_1_586: {
    width: wp("15.466666666666667%"),
    height: hp("7.923497267759563%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I53_135_11_10_1_587: {
    width: wp("15.466666666666667%"),
    height: hp("7.923497267759563%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I53_135_11_10_1_588: {
    flexGrow: 1,
    width: wp("13.866666666666665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133333333333333%"),
    top: hp("9.972677595628415%"),
    justifyContent: "flex-start"
  },
  Text_I53_135_11_10_1_588: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_I53_135_11_11: {
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
  ImageBackground_I53_135_11_11_1_591: {
    flexGrow: 1,
    width: wp("18.133333333333333%"),
    height: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I53_135_11_11_1_592: {
    flexGrow: 1,
    width: wp("15.466666666666667%"),
    height: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3333333333333357%"),
    top: hp("0.6830601092896167%")
  },
  ImageBackground_I53_135_11_11_1_593: {
    width: wp("15.466666666666667%"),
    height: hp("7.923497267759563%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I53_135_11_11_1_594: {
    width: wp("15.466666666666667%"),
    height: hp("7.923497267759563%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I53_135_11_11_1_595: {
    flexGrow: 1,
    width: wp("11.200000000000001%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.466666666666665%"),
    top: hp("9.972677595628415%"),
    justifyContent: "flex-start"
  },
  Text_I53_135_11_11_1_595: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_I53_135_11_12: {
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
  ImageBackground_I53_135_11_12_1_599: {
    flexGrow: 1,
    width: wp("18.133333333333333%"),
    height: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I53_135_11_12_1_600: {
    flexGrow: 1,
    width: wp("15.466666666666667%"),
    height: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3333333333333428%"),
    top: hp("0.6830601092896167%")
  },
  ImageBackground_I53_135_11_12_1_601: {
    width: wp("15.466666666666667%"),
    height: hp("7.923497267759563%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I53_135_11_12_1_602: {
    width: wp("15.466666666666667%"),
    height: hp("7.923497267759563%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I53_135_11_12_1_603: {
    flexGrow: 1,
    width: wp("10.133333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.000000000000014%"),
    top: hp("9.972677595628415%"),
    justifyContent: "flex-start"
  },
  Text_I53_135_11_12_1_603: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_I53_135_11_13: {
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
  ImageBackground_I53_135_11_13_1_606: {
    flexGrow: 1,
    width: wp("18.133333333333333%"),
    height: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I53_135_11_13_1_607: {
    flexGrow: 1,
    width: wp("15.466666666666667%"),
    height: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3333333333333286%"),
    top: hp("0.6830601092896167%")
  },
  ImageBackground_I53_135_11_13_1_608: {
    width: wp("15.466666666666667%"),
    height: hp("7.923497267759563%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I53_135_11_13_1_609: {
    width: wp("15.466666666666667%"),
    height: hp("7.923497267759563%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I53_135_11_13_1_610: {
    flexGrow: 1,
    width: wp("10.666666666666668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333343%"),
    top: hp("9.972677595628415%"),
    justifyContent: "flex-start"
  },
  Text_I53_135_11_13_1_610: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_I53_135_11_14: {
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
  View_I53_135_11_14_1_596: {
    flexGrow: 1,
    width: wp("5.866666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333334%"),
    top: hp("9.972677595628415%"),
    justifyContent: "flex-start"
  },
  Text_I53_135_11_14_1_596: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  ImageBackground_I53_135_11_14_1_612: {
    flexGrow: 1,
    width: wp("15.466666666666667%"),
    height: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.333333333333334%"),
    top: hp("0.6830601092896167%")
  },
  ImageBackground_I53_135_11_14_1_613: {
    flexGrow: 1,
    width: wp("18.133333333333333%"),
    height: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I53_135_11_14_1_614: {
    flexGrow: 1,
    width: wp("3.2%"),
    height: hp("1.6382311211257685%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.733333333333333%"),
    top: hp("3.8251366120218577%")
  },
  View_53_136: {
    width: wp("91.55061848958333%"),
    minWidth: wp("91.55061848958333%"),
    height: hp("5.601092896174864%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("4.508196721311475%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I53_136_11_254: {
    flexGrow: 1,
    width: wp("26.93333333333333%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.13661202185792387%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I53_136_11_254_1_667: {
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
  View_I53_136_11_254_1_666: {
    flexGrow: 1,
    width: wp("15.733333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.2%"),
    top: hp("0.27322404371584685%"),
    justifyContent: "flex-start"
  },
  Text_I53_136_11_254_1_666: {
    color: "rgba(231, 58, 64, 1)",
    fontSize: 18,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_I53_136_11_255: {
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
  ImageBackground_I53_136_11_255_1_778: {
    flexGrow: 1,
    width: wp("3.0172892252604164%"),
    height: hp("1.5457403464395492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2.027676274867658%")
  },
  View_I53_136_11_255_1_777: {
    flexGrow: 1,
    width: wp("14.666666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.883955891927087%"),
    top: hp("1.7759562841530059%"),
    justifyContent: "flex-start"
  },
  Text_I53_136_11_255_1_777: {
    color: "rgba(252, 252, 252, 1)",
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
